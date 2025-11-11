import Link from 'next/link';

export default function SongsNotFound() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-bold">Canción no encontrada</h1>
      <p className="mt-2 text-gray-600">
        La canción solicitada no existe o fue eliminada.
      </p>
      <Link
        href="/songs"
        className="mt-6 inline-block underline hover:no-underline"
      >
        Volver al listado
      </Link>
    </main>
  );
}
