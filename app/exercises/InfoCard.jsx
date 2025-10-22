'use client';
import { useState } from 'react';

export default function InfoCard({ titulo, texto }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="max-w-sm rounded-xl shadow p-4 bg-gray-50 flex flex-col gap-3">
      <h2 className="text-xl font-semibold text-gray-800">{titulo}</h2>

      {abierto && <p className="text-gray-600">{texto}</p>}

      <button
        onClick={() => setAbierto(!abierto)}
        className="mt-2 self-start px-4 py-2 rounded-lg bg-pink-500 text-white hover:bg-pink-600 transition-colors"
      >
        {abierto ? 'Ocultar' : 'Mostrar más'}
      </button>
    </div>
  );
}
