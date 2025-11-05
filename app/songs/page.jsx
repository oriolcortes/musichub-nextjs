import { getSongs } from '@/lib/songs';
import SongsClient from './_components/SongsClient';

// Desactiva la caché para demostrar SSR (Server Side Rendering) en cada petición (y activar el loader).
export const revalidate = 0;

export default async function SongsPage() {
  const songs = await getSongs(); // servidor: usa await normal

  return (
    <section className="mx-auto max-w-6xl px-4 py-6 space-y-4">
      <header>
        <p className="text-xs text-gray-500">Canciones: {songs.length}</p>
      </header>
      <SongsClient songs={songs} />
    </section>
  );
}
