import InfoCard from './InfoCard';
import LikeCounter from './LikeCounter';

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      {/* 🔹 Sección 1 — Contador de Me gusta */}
      <section className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 mb-10 border border-gray-100">
        <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">
          🧩 Ejercicio 1 — Contador de “Me gusta”
        </h2>
        <LikeCounter />
      </section>

      {/* 🔹 Sección 2 — Tarjeta de información dinámica */}
      <section className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 border border-gray-100">
        <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">
          🧩 Ejercicio 2 — Tarjeta de información dinámica
        </h2>
        <InfoCard
          titulo="¿Sabías que…?"
          texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sunt molestiae distinctio ab corrupti ex nulla? Animi, ea dolor exercitationem praesentium quia saepe quasi impedit iste, repellendus veritatis reprehenderit ad!"
        />
      </section>
    </main>
  );
}
