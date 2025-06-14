import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const lineId = searchParams.get('lineId');

    if (!lineId) {
      return NextResponse.json({ error: 'Invalid parameters' }, { status: 400 });
    }

    await pool.query(
      'UPDATE lines SET status = $1 WHERE line_id = $2',
      ['removed', lineId]
    );

    return NextResponse.json({ message: 'Successfully saved' });
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}