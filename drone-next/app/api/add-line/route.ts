import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(req: NextRequest) {
  const { lineId, start_point_id, end_point_id } = await req.json();

  try {
    await pool.query(
      'INSERT INTO lines (line_id, start_point_id, end_point_id, status) VALUES ($1, $2, $3, $4)',
      [lineId, start_point_id, end_point_id, 'visible']
    );
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('❌ Error adding line:', err);
    return NextResponse.json({ success: false, error: 'Failed to add line' }, { status: 500 });
  }
}