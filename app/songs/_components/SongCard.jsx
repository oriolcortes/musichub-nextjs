'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SongCard({
  id,
  title,
  artist,
  youtubeId,
  onToggleLike,
}) {
  const [liked, setLiked] = useState(false);

  const thumb = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  function handleLike() {
    const next = !liked;
    setLiked(next);

    // Avisamos al padre para que actualice el contador global
    if (typeof onToggleLike === 'function') onToggleLike(next);
  }

  return (
    <article className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden transition transform hover:scale-105 hover:shadow-md">
      <div className="relative aspect-video w-full">
        <Image
          src={thumb}
          alt={`${title} — ${artist}`}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 320px"
          className="object-cover"
          priority={false} // lo mismo que lazy loading
        />
      </div>
      <div className="p-3 space-y-2">
        <div>
          <h3 className="text-sm font-semibold leading-tight text-gray-900">
            {title}
          </h3>
          <p className="text-xs text-gray-800">{artist}</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleLike}
            className={`cursor-pointer rounded-lg px-3 py-1.5 text-sm font-medium transition
              ${
                liked
                  ? 'bg-[#F50057] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            {liked ? '❤️' : '♡'} Like
          </button>

          <Link
            href={`/songs/${id}`}
            className="ml-auto inline-flex items-center rounded-lg border border-[#F50057]/30 bg-[#F50057]/10 px-3 py-1.5 text-xs font-medium text-[#F50057] transition hover:bg-[#F50057]/15"
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </article>
  );
}
