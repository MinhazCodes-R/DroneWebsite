import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(req: NextRequest) {
  const { pointId } = await req.json();

  try {
    await pool.query(
      'UPDATE points SET status = $1 WHERE point_id = $2',
      ['removed', pointId]
    );
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('❌ Error removing point:', err);
    return NextResponse.json({ success: false, error: 'Failed to remove point' }, { status: 500 });
  }
}