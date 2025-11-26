'use client';

import { useState, useEffect } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState(() => {
    try {
      return localStorage.getItem('cities:lastSearch') || '';
    } catch (e) {
      return '';
    }
  });

  useEffect(() => {
    // DEBOUNCE: esperamos 400ms antes de ejecutar la búsqueda
    const timeoutId = setTimeout(() => {
      onSearch(query);

      try {
        localStorage.setItem('cities:lastSearch', query);
      } catch (e) {
        // ignore
      }
    }, 400);

    // CLEANUP: si el usuario vuelve a escribir antes de 400ms,
    // cancelamos este timeout y creamos uno nuevo
    return () => clearTimeout(timeoutId);
  }, [query, onSearch]);

  return (
    <div className="mb-6">
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Busca una ciudad..."
        className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
