import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const result = await pool.query(
      'SELECT line_id, start_point_id, end_point_id FROM lines WHERE status IS NULL OR status != $1',
      ['removed']
    );

    const lines = result.rows.map(row => ({
      lineId: row.line_id,
      startPointId: row.start_point_id,
      endPointId: row.end_point_id
    }));

    return NextResponse.json({ lines });
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
