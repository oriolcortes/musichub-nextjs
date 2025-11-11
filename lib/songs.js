import data from '@/data/songs.json';

// Pequeño helper para simular latencia de red (para ver el loader)
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getSongs() {
  // En una app real, podríamos omitir este retardo simulado,
  // y hacer una petición real fetch() a una API.
  await wait(800);
  return data;
}

export async function getSongById(id) {
  const songs = await getSongs(); // En una app real, podríamos obtenerlos del servidor, en vez de filtrar en el cliente.
  return songs.find((s) => s.id === id);
}

export async function getSongIds() {
  const songs = await getSongs();
  return songs.map((s) => s.id);
}
