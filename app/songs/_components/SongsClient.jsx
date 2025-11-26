'use client';
import { useState, useCallback, useMemo } from 'react';
import SongCard from './SongCard';
import SearchBar from './SearchBar';

export default function SongsClient({ songs }) {
  const [filteredSongs, setFilteredSongs] = useState(songs);

  // 🧠 useCallback: memorizamos la función
  // Solo se vuelve a crear si cambia "songs"
  const handleSearch = useCallback(
    (query) => {
      const q = query.toLowerCase();

      const resultados = songs.filter((song) => {
        const title = song.title?.toLowerCase() ?? '';
        const artist = song.artist?.toLowerCase() ?? '';

        return title.includes(q) || artist.includes(q);
      });

      setFilteredSongs(resultados);
    },
    [songs]
  );

  // 🧠 useMemo: memorizamos un valor derivado
  // Solo se recalcula cuando cambia "filteredSongs"
  const countFiltered = useMemo(() => {
    console.log('📊 Recalculando cantidad filtrada…');
    return filteredSongs.length;
  }, [filteredSongs]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div>
        <p className="text-xs text-gray-400">Canciones: {songs.length}</p>
      </div>

      {filteredSongs.length === 0 ? (
        <p className="text-zinc-400">
          No se han encontrado resultados para la búsqueda. 🥲
        </p>
      ) : (
        <>
          <div className="mb-4 text-sm text-zinc-400">
            Canciones encontradas:{' '}
            <span className="font-semibold text-zinc-200">{countFiltered}</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {filteredSongs.map((s) => (
              <SongCard
                key={s.id}
                id={s.id}
                title={s.title}
                artist={s.artist}
                youtubeId={s.youtubeId}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
