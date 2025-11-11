'use client';

export default function Player({ youtubeId, title = 'YouTube Player' }) {
  return (
    <div className="mt-6 aspect-video overflow-hidden rounded-xl shadow-xl border">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
