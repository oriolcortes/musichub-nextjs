import data from '@/data/songs.json';

// Pequeño helper para simular latencia de red (para ver el loader)
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getSongs() {
  // En una app real, podríamos omitir este retardo simulado,
  // y hacer una petición real fetch() a una API.
  await wait(800);
  return data;
}
