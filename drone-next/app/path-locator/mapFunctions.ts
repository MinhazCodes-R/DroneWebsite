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

export const addPoint = async (
  points: Set<string>,
  setPoints: (p: Set<string>) => void,
  setLines: (l: Set<string>) => void,
  lat: number,
  lng: number
): Promise<string> => {
  const pointId = `${lat.toFixed(6)},${lng.toFixed(6)}`;
  
  try {
    await axios.get(`/api/add-point?pointId=${encodeURIComponent(pointId)}&lat=${lat}&lng=${lng}`);
    // Sync with backend after adding
    await syncWithBackend(setPoints, setLines);
  } catch (err) {
    console.error('Error adding point:', err);
  }
  
  return pointId;
};

export const addLine = async (
  lines: Set<string>,
  setLines: (l: Set<string>) => void,
  setPoints: (p: Set<string>) => void,
  start: string,
  end: string
): Promise<string | null> => {
  const lineId = `${start}|${end}`;
  const reverseLineId = `${end}|${start}`;
  if (!lines.has(lineId) && !lines.has(reverseLineId)) {
    try {
      await axios.get(`/api/add-line?lineId=${encodeURIComponent(lineId)}&start_point_id=${encodeURIComponent(start)}&end_point_id=${encodeURIComponent(end)}`);
      // Sync with backend after adding
      await syncWithBackend(setPoints, setLines);
      return lineId;
    } catch (err) {
      console.error('Error adding line:', err);
    }
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
  try {
    // Remove associated lines first
    const linesToRemove = Array.from(lines).filter(line => {
      const [start, end] = line.split('|');
      return start === pointId || end === pointId;
    });

    await Promise.all(
      linesToRemove.map(line =>
        axios.get(`/api/remove-line?lineId=${encodeURIComponent(line)}`)
      )
    );

    // Remove the point
    await axios.get(`/api/remove-point?pointId=${encodeURIComponent(pointId)}`);
    
    // Sync with backend after removing
    await syncWithBackend(setPoints, setLines);
  } catch (err) {
    console.error('Error removing point:', err);
  }
};

export const removeLine = async (
  lines: Set<string>,
  setLines: (l: Set<string>) => void,
  setPoints: (p: Set<string>) => void,
  lineId: string
) => {
  try {
    await axios.get(`/api/remove-line?lineId=${encodeURIComponent(lineId)}`);
    // Sync with backend after removing
    await syncWithBackend(setPoints, setLines);
  } catch (err) {
    console.error('Error removing line:', err);
  }
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
  try {
    await Promise.all(
      [...lines].map(lineId =>
        axios.get(`/api/remove-line?lineId=${encodeURIComponent(lineId)}`)
      )
    );

    await Promise.all(
      [...points].map(pointId =>
        axios.get(`/api/remove-point?pointId=${encodeURIComponent(pointId)}`)
      )
    );

    // Sync with backend after clearing
    await syncWithBackend(setPoints, setLines);
    
    sessionStorage.removeItem('savedPoints');
    sessionStorage.removeItem('savedLines');
  } catch (err) {
    console.error('Error clearing all:', err);
  }
};

export const addPointFromText = async (
  points: Set<string>,
  setPoints: (p: Set<string>) => void,
  setLines: (l: Set<string>) => void,
  latText: string,
  lngText: string
): Promise<{ success: boolean; pointId?: string; error?: string }> => {
  const lat = parseFloat(latText);
  const lng = parseFloat(lngText);

  if (isNaN(lat) || isNaN(lng)) return { success: false, error: 'Invalid coordinates' };
  if (lat < -90 || lat > 90) return { success: false, error: 'Latitude must be between -90 and 90' };
  if (lng < -180 || lng > 180) return { success: false, error: 'Longitude must be between -180 and 180' };

  const pointId = await addPoint(points, setPoints, setLines, lat, lng);
  return { success: true, pointId };
};

// Fetch data from backend
export const syncWithBackend = async (
  setPoints: (p: Set<string>) => void,
  setLines: (l: Set<string>) => void
) => {
  try {
    const [pointsResponse, linesResponse] = await Promise.all([
      axios.get('/api/get-points'),
      axios.get('/api/get-lines')
    ]);

    const pointsSet = new Set<string>(pointsResponse.data.points.map((p: any) => p.pointId));
    const linesSet = new Set<string>(linesResponse.data.lines.map((l: any) => l.lineId));

    setPoints(pointsSet);
    setLines(linesSet);
    saveToStorage('mapPoints', pointsSet);
    saveToStorage('mapLines', linesSet);
  } catch (err) {
    console.error('Error syncing with backend:', err);
  }
};