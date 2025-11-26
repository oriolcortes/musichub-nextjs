'use client';

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'cities:lastSearch';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  // 1️⃣ Al montar, recuperar la última búsqueda de localStorage
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved && typeof saved === 'string') {
        setQuery(saved);
        // Lanzamos una búsqueda inicial con ese valor
        onSearch(saved);
      }
    } catch (error) {
      console.error('Error leyendo localStorage:', error);
    }
  }, [onSearch]);

  // 2️⃣ Debounce + guardar en localStorage cuando cambia query
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Llamamos al padre (CitiesClient) con el término buscado
      onSearch(query);

      // Guardamos la última búsqueda
      try {
        window.localStorage.setItem(STORAGE_KEY, query);
      } catch (error) {
        console.error('Error escribiendo en localStorage:', error);
      }
    }, 400);

    // Cleanup: si el usuario vuelve a escribir antes de 400ms,
    // cancelamos este timeout
    return () => clearTimeout(timeoutId);
  }, [query, onSearch]);

  return (
    <div className="mb-6">
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Busca una ciudad..."
        className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
    </div>
  );
}
