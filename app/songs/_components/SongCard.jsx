'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useFavorites } from '@/app/_contexts/FavoritesContext';

export default function SongCard({ id, title, artist, youtubeId }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(id);

  const thumb = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

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
            onClick={() => toggleFavorite(id)}
            className={`cursor-pointer rounded-lg px-3 py-1.5 text-sm font-medium transition
              ${
                favorite
                  ? 'bg-[#F50057] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            {favorite ? '❤️ Quitar de favoritos' : '🤍 Añadir a favoritos'}
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
