'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import Sidebar from './sidebar';
import {
  addPoint,
  addLine,
  removePoint,
  removeLine,
  loadFromStorage,
} from './mapFunctions';

const MapView = dynamic(() => import('./mapView'), { ssr: false });

export default function HomePage() {
  const [points, setPoints] = useState<Set<string>>(() => loadFromStorage('mapPoints'));
  const [lines, setLines] = useState<Set<string>>(() => loadFromStorage('mapLines'));
  const [mode, setMode] = useState('add');
  const [selectedForLine, setSelectedForLine] = useState<string[]>([]);

  const handleMapClick = (latlng: { lat: number; lng: number }) => {
    if (mode === 'add') {
      addPoint(points, setPoints, latlng.lat, latlng.lng);
    }
  };

  const handlePointClick = (pointId: string) => {
    if (mode === 'line') {
      const newSelected = [...selectedForLine, pointId];
      if (newSelected.length === 2) {
        addLine(lines, setLines, newSelected[0], newSelected[1]);
        setSelectedForLine([]);
      } else {
        setSelectedForLine(newSelected);
      }
    } else if (mode === 'remove') {
      removePoint(points, setPoints, lines, setLines, pointId);
    }
  };

  return (
    <div className="flex h-screen fixed inset-0 z-40">
      <MapView
        className="flex-1"
        mode={mode}
        points={points}
        setPoints={setPoints}
        lines={lines}
        setLines={setLines}
        selectedForLine={selectedForLine}
        setSelectedForLine={setSelectedForLine}
        onMapClick={handleMapClick}
        onPointClick={handlePointClick}
      />
      <Sidebar
        mode={mode}
        setMode={setMode}
        points={points}
        setPoints={setPoints}
        lines={lines}
        setLines={setLines}
      />
    </div>
  );
}