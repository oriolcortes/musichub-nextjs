import { NextResponse } from 'next/server';
import songs from '@/data/songs.json';

export async function GET() {
  return NextResponse.json(songs);
}
