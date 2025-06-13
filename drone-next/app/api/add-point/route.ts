import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('🔍 Received body:', body);

    const { pointId, lat, lng } = body;

    if (!pointId || typeof lat !== 'number' || typeof lng !== 'number') {
      console.log('⚠️ Invalid input:', body);
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const query = `
      INSERT INTO points (point_id, lat, lng)
      VALUES ($1, $2, $3)
      ON CONFLICT (point_id) DO NOTHING;
    `;

    await pool.query(query, [pointId, lat, lng]);

    console.log('✅ Point added to database:', pointId);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('🔥 ERROR in /api/add-point:', err.message || err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}