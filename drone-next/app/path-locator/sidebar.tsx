'use client';

import { useState, useEffect } from 'react';
import {
  parseCoords,
  removePoint,
  removeLine,
  restorePoint,
  restoreLine,
  addPointFromText,
  clearAll,
  syncWithBackend,
} from './mapFunctions';

interface SidebarProps {
  mode: string;
  setMode: (mode: string) => void;
  points: Set<string>;
  setPoints: (p: Set<string>) => void;
  lines: Set<string>;
  setLines: (l: Set<string>) => void;
}

export default function Sidebar({ mode, setMode, points, setPoints, lines, setLines }: SidebarProps) {
  const [latInput, setLatInput] = useState('');
  const [lngInput, setLngInput] = useState('');
  const [inputError, setInputError] = useState('');
  const [mounted, setMounted] = useState(false); 

  useEffect(() => {
    setMounted(true);
  }, []);

  const [savedPoints, setSavedPoints] = useState<Set<string>>(new Set());
  const [savedLines, setSavedLines] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const points = sessionStorage.getItem('savedPoints');
      const lines = sessionStorage.getItem('savedLines');
      if (points) setSavedPoints(new Set(JSON.parse(points)));
      if (lines) setSavedLines(new Set(JSON.parse(lines)));
    }
  }, []);

  if (!mounted) return null; // ✅ render nothing until client-side

  const savePoint = (pointId: string) => {
    const newSaved = new Set(savedPoints);
    newSaved.add(pointId);
    setSavedPoints(newSaved);
    sessionStorage.setItem('savedPoints', JSON.stringify(Array.from(newSaved)));
  };

  const saveLine = (lineId: string) => {
    const newSaved = new Set(savedLines);
    newSaved.add(lineId);
    setSavedLines(newSaved);
    sessionStorage.setItem('savedLines', JSON.stringify(Array.from(newSaved)));
  };

  const handleAddPointFromText = async () => {
    const result = await addPointFromText(points, setPoints, setLines, latInput, lngInput);
    if (result.success) {
      setLatInput('');
      setLngInput('');
      setInputError('');
    } else {
      setInputError(result.error || 'Invalid coordinates');
    }
  };

  return (
    <div className="w-[350px] h-screen bg-gray-100 p-4 overflow-y-auto border-l border-gray-300 text-black">
      <h2 className="text-lg font-bold mb-4">Map Controls</h2>

      {/* Mode Buttons */}
      <div className="mb-4">
        <h3 className="mb-2 font-medium">Mode</h3>
        {['select', 'add', 'line', 'remove'].map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-3 py-1 rounded mr-2 mb-2 ${
              mode === m ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'
            }`}
          >
            {m.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="mb-4 p-3 bg-gray-200 rounded text-black">
        <p>🟢 Points: {points.size}</p>
        <p>🔵 Lines: {lines.size}</p>
        <p>📍 Saved Points: {savedPoints.size}</p>
        <p>➖ Saved Lines: {savedLines.size}</p>
      </div>

      {/* Add Point */}
      <div className="mb-6 border border-gray-300 rounded p-4">
        <h3 className="text-md font-semibold mb-2">Add Point by Coordinates</h3>
        <input
          type="number"
          placeholder="Latitude (-90 to 90)"
          value={latInput}
          onChange={(e) => setLatInput(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded text-black placeholder-gray-500"
        />
        <input
          type="number"
          placeholder="Longitude (-180 to 180)"
          value={lngInput}
          onChange={(e) => setLngInput(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded text-black placeholder-gray-500"
        />
        {inputError && (
          <p className="text-sm text-red-600 mb-2">{inputError}</p>
        )}
        <button
          onClick={handleAddPointFromText}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 disabled:bg-gray-400"
          disabled={!latInput || !lngInput}
        >
          Add Point
        </button>
      </div>

      <button
        onClick={() => clearAll(points, setPoints, lines, setLines)}
        className="w-full bg-red-600 text-white py-2 mb-3 rounded hover:bg-red-700"
      >
        Clear All
      </button>

      <button
        onClick={() => syncWithBackend(setPoints, setLines)}
        className="w-full bg-blue-600 text-white py-2 mb-6 rounded hover:bg-blue-700"
      >
        Sync with Backend
      </button>

      {/* Saved Points */}
      <div className="mb-6">
        <h3 className="text-md font-semibold mb-2">Saved Points</h3>
        {Array.from(savedPoints).map((pointId) => {
          const [lat, lng] = parseCoords(pointId);
          return (
            <div key={pointId} className="bg-white border border-gray-300 rounded p-3 mb-3 text-sm">
              <div><strong>Lat:</strong> {lat.toFixed(6)}</div>
              <div><strong>Lng:</strong> {lng.toFixed(6)}</div>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => restorePoint(points, setPoints, pointId)}
                  className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600"
                >
                  Open
                </button>
                <button
                  onClick={() => {
                    const newSet = new Set(savedPoints);
                    newSet.delete(pointId);
                    setSavedPoints(newSet);
                    sessionStorage.setItem('savedPoints', JSON.stringify(Array.from(newSet)));
                  }}
                  className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Current Points */}
      <div className="mb-6">
        <h3 className="text-md font-semibold mb-2">Current Points</h3>
        {Array.from(points).map((pointId) => {
          const [lat, lng] = parseCoords(pointId);
          return (
            <div key={pointId} className="bg-white border border-gray-300 rounded p-3 mb-3 text-sm">
              <div><strong>Lat:</strong> {lat.toFixed(6)}</div>
              <div><strong>Lng:</strong> {lng.toFixed(6)}</div>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => savePoint(pointId)}
                  className="bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600"
                >
                  Save
                </button>
                <button
                  onClick={() => removePoint(points, setPoints, lines, setLines, pointId)}
                  className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Current Lines */}
      <div className="mb-6">
        <h3 className="text-md font-semibold mb-2">Current Lines</h3>
        {Array.from(lines).map((lineId) => {
          const [start, end] = lineId.split('|');
          const [lat1, lng1] = parseCoords(start);
          const [lat2, lng2] = parseCoords(end);
          return (
            <div key={lineId} className="bg-white border border-gray-300 rounded p-3 mb-3 text-sm">
              <div><strong>From:</strong> {lat1.toFixed(6)}, {lng1.toFixed(6)}</div>
              <div><strong>To:</strong> {lat2.toFixed(6)}, {lng2.toFixed(6)}</div>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => saveLine(lineId)}
                  className="bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600"
                >
                  Save
                </button>
                <button
                  onClick={() => removeLine(lines, setLines, setPoints, lineId)}
                  className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Saved Lines */}
      <div className="mb-6">
        <h3 className="text-md font-semibold mb-2">Saved Lines</h3>
        {Array.from(savedLines).map((lineId) => {
          const [start, end] = lineId.split('|');
          const [lat1, lng1] = parseCoords(start);
          const [lat2, lng2] = parseCoords(end);
          return (
            <div key={lineId} className="bg-white border border-gray-300 rounded p-3 mb-3 text-sm">
              <div><strong>From:</strong> {lat1.toFixed(6)}, {lng1.toFixed(6)}</div>
              <div><strong>To:</strong> {lat2.toFixed(6)}, {lng2.toFixed(6)}</div>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => restoreLine(lines, setLines, lineId)}
                  className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600"
                >
                  Open
                </button>
                <button
                  onClick={() => {
                    const newSet = new Set(savedLines);
                    newSet.delete(lineId);
                    setSavedLines(newSet);
                    sessionStorage.setItem('savedLines', JSON.stringify(Array.from(newSet)));
                  }}
                  className="bg-red-500 text-white px-3 py-1 rounded text-xs hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}