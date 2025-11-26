'use client';

import { useState, useCallback, useMemo } from 'react';
import SearchBar from './SearchBar';

export default function CitiesClient({ cities }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [order, setOrder] = useState('asc'); // "asc" | "desc"

  // 1️⃣ useCallback: memorizamos la función que recibe el término de búsqueda
  const handleSearch = useCallback((term) => {
    console.log('✅ handleSearch ejecutado con:', term);
    setSearchTerm(term);
  }, []);

  // 2️⃣ useMemo: calculamos la lista filtrada + ordenada
  const filteredAndSortedCities = useMemo(() => {
    console.log('📊 Recalculando lista filtrada y ordenada…');

    const q = searchTerm.toLowerCase().trim();

    // Filtrado por término de búsqueda
    const filtered = cities.filter((city) => city.toLowerCase().includes(q));

    // Copia para no mutar el array original
    const sorted = [...filtered].sort((a, b) => {
      if (order === 'asc') {
        return a.localeCompare(b);
      } else {
        return b.localeCompare(a);
      }
    });

    return sorted;
  }, [cities, searchTerm, order]);

  // Otro useMemo solo para la cantidad
  const countFiltered = useMemo(() => {
    console.log('🔢 Recalculando contador de resultados…');
    return filteredAndSortedCities.length;
  }, [filteredAndSortedCities]);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />

      {/* Selector de orden */}
      <div className="mb-4 flex items-center gap-3">
        <label className="text-sm text-zinc-300">Ordenar:</label>
        <select
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          className="bg-zinc-800 border border-zinc-700 text-sm rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>

      {/* Contador de resultados */}
      <div className="mb-4 text-sm text-zinc-400">
        Ciudades encontradas:{' '}
        <span className="font-semibold text-zinc-200">{countFiltered}</span>
      </div>

      {/* Lista de resultados */}
      {filteredAndSortedCities.length === 0 ? (
        <p className="text-zinc-400">No se han encontrado ciudades.</p>
      ) : (
        <ul className="space-y-2">
          {filteredAndSortedCities.map((city) => (
            <li
              key={city}
              className="rounded-md bg-zinc-800 border border-zinc-700 px-4 py-2"
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
