'use client';

import { useState, useEffect } from 'react';
import SongCard from '@/app/songs/_components/SongCard';

export default function AddSongClient({ initialSongs }) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [youtubeId, setYoutubeId] = useState('');

  const [songs, setSongs] = useState(initialSongs || []);
  const [message, setMessage] = useState('');

  // Limpia el mensaje después de 3 segundos
  useEffect(() => {
    if (!message) return;

    const t = setTimeout(() => setMessage(''), 3000);
    return () => clearTimeout(t);
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !artist.trim() || !youtubeId.trim()) {
      setMessage('Todos los campos son obligatorios.');
      return;
    }

    const newSong = {
      id: `local-${Date.now()}`,
      title,
      artist,
      youtubeId,
    };

    // Aquí es donde deberías realizar la petición a tu API para persistir la nueva canción en el backend.
    // Por ahora hacemos un update local ya que no hay backend configurado ni BBDD.
    setSongs([newSong, ...songs]);
    setMessage(`Canción "${title}" añadida con useState.`);

    // Limpiar campos
    setTitle('');
    setArtist('');
    setYoutubeId('');
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">
        🟦 Formulario controlado (useState)
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-xl border border-zinc-800 bg-zinc-900 p-4"
      >
        {message && <p className="text-sm text-emerald-400">{message}</p>}

        <input
          className="w-full rounded border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="w-full rounded border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm"
          placeholder="Artista"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />

        <input
          className="w-full rounded border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm"
          placeholder="ID de YouTube"
          value={youtubeId}
          onChange={(e) => setYoutubeId(e.target.value)}
        />

        <button
          type="submit"
          className="cursor-pointer rounded bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-400"
        >
          Guardar con useState
        </button>
      </form>

      <div>
        <h3 className="mb-2 font-semibold">Vista previa</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {songs.map((song) => (
            <SongCard key={song.id} {...song} />
          ))}
        </div>
      </div>
    </div>
  );
}
