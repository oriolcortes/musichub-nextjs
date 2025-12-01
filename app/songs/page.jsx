import { getSongs } from '@/lib/songs';
import SongsClient from './_components/SongsClient';

export default async function SongsPage() {
  const songs = await getSongs();

  return (
    <section className="mx-auto max-w-6xl px-4 py-6 space-y-4">
      <SongsClient songs={songs} />
    </section>
  );
}
