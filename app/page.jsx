import WelcomeBanner from './_components/WelcomeBanner';

export default function Page() {
  return (
    <>
      <WelcomeBanner
        title="Bienvenido/a a MusicHub"
        subtitle="Sesión 1: Estructura + Props + micro-interacción"
      />

      <section className="mt-8">
        <h3 className="text-lg font-semibold text-[#F50057]">Hoy aprenderás</h3>
        <ul className="mt-2 list-disc pl-5 text-sm text-gray-300 space-y-1">
          <li>Cómo usar props y JSX en componentes.</li>
          <li>Cómo cambiar la interfaz con un estado (useState).</li>
        </ul>
      </section>
    </>
  );
}
