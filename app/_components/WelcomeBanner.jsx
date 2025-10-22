'use client';
import { useState } from 'react';

export default function WelcomeBanner({ title, subtitle }) {
  const [dark, setDark] = useState(false);
  const [hola, setHola] = useState(true);

  const bgColor = dark ? 'bg-[#F50057]' : 'bg-white';
  const textColor = dark ? 'text-white' : 'text-gray-900';
  const borderColor = dark ? 'border-[#F50057]' : 'border-gray-200';
  const btnColor = `rounded-lg border px-3 py-2 text-sm font-medium transition-all active:scale-95 ${
    dark
      ? 'bg-white text-[#F50057] border-white hover:bg-gray-50'
      : 'bg-[#F50057] text-white border-[#F50057] hover:opacity-90'
  }`;

  return (
    <section
      className={`rounded-2xl border p-6 transition-all duration-300 shadow-md ${bgColor} ${textColor} ${borderColor}`}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          {subtitle && (
            <p className="mt-1 text-sm opacity-80 font-medium">{subtitle}</p>
          )}
          <p className="mt-4 text-lg font-semibold">
            {hola ? 'Hola 👋' : 'Adiós 👋'}
          </p>
        </div>

        <div className="flex gap-2">
          <button onClick={() => setDark(!dark)} className={btnColor}>
            Tema
          </button>
          <button onClick={() => setHola(!hola)} className={btnColor}>
            Saludo
          </button>
        </div>
      </div>
    </section>
  );
}
