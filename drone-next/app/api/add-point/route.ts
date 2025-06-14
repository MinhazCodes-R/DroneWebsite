import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const pointId = searchParams.get('pointId');
    const lat = parseFloat(searchParams.get('lat') || '');
    const lng = parseFloat(searchParams.get('lng') || '');

    if (!pointId || isNaN(lat) || isNaN(lng)) {
      return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
    }

    await pool.query(
      'INSERT INTO points (point_id, lat, lng) VALUES ($1, $2, $3) ON CONFLICT (point_id) DO NOTHING',
      [pointId, lat, lng]
    );

    return NextResponse.json({ message: 'Successfully saved' });
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}