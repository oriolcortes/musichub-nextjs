const CITIES = [
  'Barcelona',
  'Madrid',
  'Valencia',
  'Sevilla',
  'Bilbao',
  'Bogotá',
  'Buenos Aires',
  'Boston',
  'Berlin',
  'Bruselas',
];

import CitiesClient from './_components/CitiesClient';

export default function CitiesPage() {
  const cities = CITIES;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">🌆 Cities Explorer</h1>
      <p className="text-sm text-zinc-400 mb-6">
        Busca ciudades con debounce, guarda la última búsqueda y optimiza con
        useCallback + useMemo.
      </p>

      <CitiesClient cities={cities} />
    </div>
  );
}
