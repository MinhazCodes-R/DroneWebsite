'use client';

import { useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMapEvents
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { parseCoords, removeLine } from '@/app/path-locator/mapFunctions';

interface Props {
  mode: string;
  points: Set<string>;
  setPoints: (p: Set<string>) => void;
  lines: Set<string>;
  setLines: (l: Set<string>) => void;
  selectedForLine: string[];
  setSelectedForLine: (list: string[]) => void;
  onMapClick: (latlng: { lat: number; lng: number }) => void;
  onPointClick: (pointId: string) => void;
  className?: string;
}

function ClickHandler({ onMapClick }: { onMapClick: (latlng: { lat: number; lng: number }) => void }) {
  useMapEvents({
    click: (e) => {
      onMapClick(e.latlng);
    }
  });
  return null;
}

export default function LeafletMap(props: Props) {
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);

  return (
    <div className={`w-full h-full relative ${props.className || ''}`}>
      <MapContainer center={[40.7128, -74.006]} zoom={13} scrollWheelZoom className="h-full w-full">
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <ClickHandler onMapClick={props.onMapClick} />

        {Array.from(props.points).map((pointId) => {
          const [lat, lng] = parseCoords(pointId);
          const isSelected = props.selectedForLine.includes(pointId);
          return (
            <Marker
              key={pointId}
              position={[lat, lng]}
              eventHandlers={{ click: () => props.onPointClick(pointId) }}
              opacity={isSelected ? 0.5 : 1.0}
            />
          );
        })}

        {Array.from(props.lines).map((lineId) => {
          const [start, end] = lineId.split('|');
          const startCoords = parseCoords(start);
          const endCoords = parseCoords(end);
          return (
            <Polyline
              key={lineId}
              positions={[startCoords, endCoords]}
              color="blue"
              weight={3}
              eventHandlers={{
                click: () => {
                  if (props.mode === 'remove') {
                    removeLine(props.lines, props.setLines, lineId);
                  }
                }
              }}
            />
          );
        })}
      </MapContainer>

      <div className="absolute top-3 left-3 bg-white px-3 py-2 shadow-md rounded text-sm font-semibold text-gray-800">
        Mode: {props.mode.toUpperCase()}
        {props.mode === 'line' && props.selectedForLine.length > 0 && (
          <div className="text-xs font-normal">
            Selected: {props.selectedForLine.length}/2
          </div>
        )}
      </div>
    </div>
  );
}