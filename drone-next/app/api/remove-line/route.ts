import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(req: NextRequest) {
  const { lineId } = await req.json();

  try {
    await pool.query(
      'UPDATE lines SET status = $1 WHERE line_id = $2',
      ['removed', lineId]
    );
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('❌ Error removing line:', err);
    return NextResponse.json({ success: false, error: 'Failed to remove line' }, { status: 500 });
  }
}