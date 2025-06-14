import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const pointId = searchParams.get('pointId');

    if (!pointId) {
      return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
    }

    await pool.query(
      'UPDATE points SET status = $1 WHERE point_id = $2',
      ['removed', pointId]
    );

    return NextResponse.json({ message: 'Successfully saved' });
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}