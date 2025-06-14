import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const lineId = searchParams.get('lineId');
    const start_point_id = searchParams.get('start_point_id');
    const end_point_id = searchParams.get('end_point_id');

    if (!lineId || !start_point_id || !end_point_id) {
      return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
    }

    await pool.query(
      'INSERT INTO lines (line_id, start_point_id, end_point_id, status) VALUES ($1, $2, $3, $4)',
      [lineId, start_point_id, end_point_id, 'visible']
    );

    return NextResponse.json({ message: 'Successfully saved' });
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}