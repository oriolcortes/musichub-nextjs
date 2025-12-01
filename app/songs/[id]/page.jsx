import { getSongById, getSongIds } from '@/lib/songs';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Player from '../_components/Player';

export const revalidate = 60; // ISR: prerender + refresco cada 60s
export const dynamicParams = true; // si llega un id nuevo en runtime, intentará renderizar

export async function generateStaticParams() {
  const ids = await getSongIds(); // pasa por getSongs() para simular API
  return ids.map((id) => ({ id }));
}

// Generación dinámica de metadata por canción
export async function generateMetadata({ params }) {
  const { id } = await params;
  const song = await getSongById(id);
  if (!song) {
    return {
      title: 'Canción no encontrada — MusicHub',
      description: 'La canción solicitada no existe.',
    };
  }
  return {
    title: `${song.title} — ${song.artist} | MusicHub`,
    description: `Escucha ${song.title} de ${song.artist} (${song.year}).`,
  };
}

export default async function SongDetailPage({ params }) {
  const song = await getSongById(params.id);
  if (!song) notFound();

  const youtubeUrl = `https://www.youtube.com/watch?v=${song.youtubeId}`;

  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <Link
        href="/songs"
        className="inline-flex items-center gap-1.5 text-sm text-gray-400 border border-gray-300 rounded-lg px-3 py-1.5 transition hover:bg-gray-100 hover:border-gray-400 hover:text-gray-600"
      >
        <span className="text-[#F50057]">←</span> Volver
      </Link>

      <h1 className="mt-3 text-3xl font-bold text-gray-300">{song.title}</h1>
      <p className="text-gray-400">
        {song.artist} · {song.year}
        {Array.isArray(song.tags) && song.tags.length > 0 && (
          <span className="ml-2 text-xs text-gray-400">
            · {song.tags.join(' · ')}
          </span>
        )}
      </p>

      <Player youtubeId={song.youtubeId} title={song.title} />

      <div className="mt-6">
        <a
          className="inline-flex items-center rounded-xl border border-[#F50057] bg-[#F50057] px-4 py-2 text-white transition hover:opacity-90"
          href={youtubeUrl}
          target="_blank"
          rel="noreferrer"
        >
          Abrir en YouTube
        </a>
      </div>
    </main>
  );
}
