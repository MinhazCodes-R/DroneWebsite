import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const result = await pool.query(
      'SELECT point_id, lat, lng FROM points WHERE status IS NULL OR status != $1',
      ['removed']
    );

    const points = result.rows.map(row => ({
      pointId: row.point_id,
      lat: row.lat,
      lng: row.lng
    }));

    return NextResponse.json({ points });
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
