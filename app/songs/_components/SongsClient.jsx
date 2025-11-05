'use client';
import { useState } from 'react';
import SongCard from './SongCard';

export default function SongsClient({ songs }) {
  const [likesCount, setLikesCount] = useState(0);

  function handleToggleLike(next) {
    setLikesCount((prev) => prev + (next ? 1 : -1));
  }

  return (
    <>
      {likesCount > 0 && (
        <p className="text-xs text-gray-500">· Likes: {likesCount}</p>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {songs.map((s) => (
          <SongCard
            key={s.id}
            title={s.title}
            artist={s.artist}
            youtubeId={s.youtubeId}
            onToggleLike={handleToggleLike}
          />
        ))}
      </div>
    </>
  );
}
