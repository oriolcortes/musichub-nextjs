import { NextResponse } from 'next/server';
import songs from '@/data/songs.json';

export async function GET(_, { params }) {
  const { id } = await params;
  const song = songs.find((s) => s.id === id);

  if (!song) {
    return NextResponse.json({ error: 'Song not found' }, { status: 404 });
  }

  return NextResponse.json(song);
}
