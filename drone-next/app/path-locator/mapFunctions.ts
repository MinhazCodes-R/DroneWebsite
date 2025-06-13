import axios from 'axios';

// Session storage helpers
export const saveToStorage = (key: string, data: Set<string>) => {
  sessionStorage.setItem(key, JSON.stringify(Array.from(data)));
};

export const loadFromStorage = (key: string): Set<string> => {
  try {
    const stored = sessionStorage.getItem(key);
    return stored ? new Set(JSON.parse(stored)) : new Set();
  } catch {
    return new Set();
  }
};

export const addPoint = (
  points: Set<string>,
  setPoints: (p: Set<string>) => void,
  lat: number,
  lng: number
): string => {
  const pointId = `${lat.toFixed(6)},${lng.toFixed(6)}`;
  const newPoints = new Set([...points, pointId]);
  setPoints(newPoints);
  saveToStorage('mapPoints', newPoints);

  axios.post('/api/add-point', { pointId, lat, lng }).catch(console.error);
  return pointId;
};

export const addLine = (
  lines: Set<string>,
  setLines: (l: Set<string>) => void,
  start: string,
  end: string
): string | null => {
  const lineId = `${start}|${end}`;
  const reverseLineId = `${end}|${start}`;
  if (!lines.has(lineId) && !lines.has(reverseLineId)) {
    const newLines = new Set([...lines, lineId]);
    setLines(newLines);
    saveToStorage('mapLines', newLines);
    axios
      .post('/api/add-line', {
        lineId,
        start_point_id: start,
        end_point_id: end,
      })
      .catch(console.error);
    return lineId;
  }
  return null;
};

export const removePoint = async (
  points: Set<string>,
  setPoints: (p: Set<string>) => void,
  lines: Set<string>,
  setLines: (l: Set<string>) => void,
  pointId: string
) => {
  const newPoints = new Set(points);
  newPoints.delete(pointId);
  setPoints(newPoints);

  const newLines = new Set<string>();
  lines.forEach(line => {
    const [start, end] = line.split('|');
    if (start !== pointId && end !== pointId) {
      newLines.add(line);
    } else {
      axios.post('/api/remove-line', { lineId: line }).catch(console.error);
    }
  });

  setLines(newLines);
  axios.post('/api/remove-point', { pointId }).catch(console.error);

  saveToStorage('mapPoints', newPoints);
  saveToStorage('mapLines', newLines);
};

export const removeLine = async (
  lines: Set<string>,
  setLines: (l: Set<string>) => void,
  lineId: string
) => {
  const newLines = new Set(lines);
  newLines.delete(lineId);
  setLines(newLines);
  axios.post('/api/remove-line', { lineId }).catch(console.error);
  saveToStorage('mapLines', newLines);
};

export const parseCoords = (pointId: string): [number, number] => {
  const [lat, lng] = pointId.split(',').map(Number);
  return [lat, lng];
};

export const restorePoint = (
  points: Set<string>,
  setPoints: (p: Set<string>) => void,
  pointId: string
) => {
  const newPoints = new Set([...points, pointId]);
  setPoints(newPoints);
  saveToStorage('mapPoints', newPoints);
};

export const restoreLine = (
  lines: Set<string>,
  setLines: (l: Set<string>) => void,
  lineId: string
) => {
  const newLines = new Set([...lines, lineId]);
  setLines(newLines);
  saveToStorage('mapLines', newLines);
};

export const clearAll = async (
  points: Set<string>,
  setPoints: (p: Set<string>) => void,
  lines: Set<string>,
  setLines: (l: Set<string>) => void
) => {
  await Promise.all(
    [...lines].map(lineId =>
      axios.post('/api/remove-line', { lineId }).catch(console.error)
    )
  );

  await Promise.all(
    [...points].map(pointId =>
      axios.post('/api/remove-point', { pointId }).catch(console.error)
    )
  );

  const newPoints = new Set<string>();
  const newLines = new Set<string>();
  setPoints(newPoints);
  setLines(newLines);
  saveToStorage('mapPoints', newPoints);
  saveToStorage('mapLines', newLines);
  sessionStorage.removeItem('savedPoints');
  sessionStorage.removeItem('savedLines');
};

export const addPointFromText = (
  points: Set<string>,
  setPoints: (p: Set<string>) => void,
  latText: string,
  lngText: string
): { success: boolean; pointId?: string; error?: string } => {
  const lat = parseFloat(latText);
  const lng = parseFloat(lngText);

  if (isNaN(lat) || isNaN(lng)) return { success: false, error: 'Invalid coordinates' };
  if (lat < -90 || lat > 90) return { success: false, error: 'Latitude must be between -90 and 90' };
  if (lng < -180 || lng > 180) return { success: false, error: 'Longitude must be between -180 and 180' };

  const pointId = addPoint(points, setPoints, lat, lng);
  return { success: true, pointId };
};