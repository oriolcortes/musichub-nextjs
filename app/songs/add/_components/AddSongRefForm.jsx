'use client';

import { useRef, useState } from 'react';
import SongCard from '@/app/songs/_components/SongCard';

export default function AddSongRefClient() {
  const titleRef = useRef(null);
  const artistRef = useRef(null);
  const idRef = useRef(null);

  const [songs, setSongs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value.trim();
    const artist = artistRef.current.value.trim();
    const youtubeId = idRef.current.value.trim();

    if (!title || !artist || !youtubeId) return;

    const newSong = {
      id: `ref-${Date.now()}`,
      title,
      artist,
      youtubeId,
    };

    // Aquí es donde deberías realizar la petición a tu API para persistir la nueva canción en el backend.
    // Por ahora hacemos un update local ya que no hay backend configurado ni BBDD.
    setSongs((prev) => [newSong, ...prev]);

    // Limpiar los campos manualmente (al ser no controlados)
    titleRef.current.value = '';
    artistRef.current.value = '';
    idRef.current.value = '';
  };

  return (
    <div className="space-y-4 border-t border-zinc-700 pt-8">
      <h2 className="text-lg font-semibold">
        🟧 Formulario NO controlado (useRef)
      </h2>
      <p className="text-sm text-zinc-400">
        Aquí los inputs no están ligados al estado de React. Leemos los valores
        solo al enviar el formulario usando <code>useRef</code>.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-xl border border-zinc-800 bg-zinc-900 p-4"
      >
        <input
          ref={titleRef}
          className="w-full rounded border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm"
          placeholder="Título"
        />

        <input
          ref={artistRef}
          className="w-full rounded border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm"
          placeholder="Artista"
        />

        <input
          ref={idRef}
          className="w-full rounded border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm"
          placeholder="ID de YouTube"
        />

        <button
          type="submit"
          className="cursor-pointer rounded bg-amber-500 px-4 py-2 text-sm font-medium text-black hover:bg-amber-400"
        >
          Guardar con useRef
        </button>
      </form>

      <section className="space-y-2">
        <h3 className="text-sm font-semibold text-zinc-200">
          Canciones añadidas con useRef
        </h3>

        {songs.length === 0 ? (
          <p className="text-sm text-zinc-400">
            Aún no has añadido canciones con el formulario de{' '}
            <code>useRef</code>.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {songs.map((song) => (
              <SongCard key={song.id} {...song} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
