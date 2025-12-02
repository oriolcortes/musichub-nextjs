import { getSongs } from '@/lib/songs';
import AddSongClient from './_components/AddSongStateForm';
import AddSongRefClient from './_components/AddSongRefForm';

export default async function AddSongPage() {
  const songs = await getSongs();

  return (
    <section className="max-w-4xl mx-auto p-6 space-y-10">
      <h1 className="text-2xl font-bold">➕ Añadir canciones</h1>

      <p className="text-sm text-zinc-400">
        Comparamos un formulario controlado con <code>useState</code>y un
        formulario no controlado con <code>useRef</code>.
      </p>

      {/* Formulario con useState */}
      <AddSongClient initialSongs={songs} />

      {/* Formulario con useRef */}
      <AddSongRefClient />
    </section>
  );
}
