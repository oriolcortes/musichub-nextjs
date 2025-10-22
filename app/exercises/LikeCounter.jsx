'use client';
import { useState } from 'react';

export default function LikeCounter({
  inicial = 0,
  titulo = 'Canción favorita',
}) {
  const [likes, setLikes] = useState(inicial);
  const [activo, setActivo] = useState(false);

  const toggleLike = () => {
    setActivo(!activo);
    setLikes(!activo ? likes + 1 : inicial);
  };

  return (
    <div className="flex flex-col items-center gap-3 bg-gray-50 rounded-xl p-5 border border-gray-200 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800">{titulo}</h2>
      <button
        onClick={toggleLike}
        className={`w-full sm:w-auto px-6 py-2.5 rounded-xl font-medium transition-colors duration-200 ${
          activo
            ? 'bg-pink-500 text-white shadow-md hover:bg-pink-600'
            : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
        }`}
      >
        ❤️ {likes} Me gusta
      </button>
    </div>
  );
}
