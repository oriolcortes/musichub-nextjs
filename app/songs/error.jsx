'use client';

export default function SongsError({ error, reset }) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-bold">Ha ocurrido un error</h1>
      <p className="mt-2 text-gray-600">
        {error?.message || 'Inténtalo de nuevo.'}
      </p>
      <button
        onClick={() => reset()}
        className="mt-6 rounded-xl border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-700 transition cursor-pointer"
      >
        Reintentar
      </button>
    </main>
  );
}
