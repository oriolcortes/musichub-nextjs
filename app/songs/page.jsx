import { getSongs } from '@/lib/songs';
import SongsClient from './_components/SongsClient';

// Desactiva la caché para demostrar SSR (Server Side Rendering) en cada petición (y activar el loader).
// En una app real, podríamos omitir esta línea para usar ISR (Incremental Static Regeneration), y poder así cachear la página. Por ejemplo, podríamos usar `export const revalidate = 60;` para regenerar la página cada 60 segundos.
export const revalidate = 0;

export default async function SongsPage() {
  const songs = await getSongs(); // servidor: usa await normal

  return (
    <section className="mx-auto max-w-6xl px-4 py-6 space-y-4">
      <SongsClient songs={songs} />
    </section>
  );
}
