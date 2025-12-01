import data from '@/data/songs.json';

// Pequeño helper para simular latencia de red (para ver el loader)
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const API_URL = 'http://localhost:3000/api/songs';

export async function getSongs() {
  // En una app real, podríamos omitir este retardo simulado,
  // y hacer una petición real fetch() a una API.
  await wait(800);

  try {
    const res = await fetch(API_URL, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Error en API /songs');
    return await res.json();
  } catch {
    // Fallback a datos locales si la API falla
    console.warn('Usando datos locales de songs.json');
    return data;
  }
}

export async function getSongById(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Song not found');
    return await res.json();
  } catch {
    // Fallback a datos locales si la API falla
    console.warn(`Usando datos locales de songs.json para id ${id}`);
    return data.find((s) => s.id === id) ?? null;
  }
}

export async function getSongIds() {
  const songs = await getSongs();
  return songs.map((s) => s.id);
}
