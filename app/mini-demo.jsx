'use client';
import { useState } from 'react';

export default function MiniDemo() {
  const [clicked, setClicked] = useState(false);

  return (
    <main>
      <div>
        <p>{clicked ? '¡Texto cambiado!' : 'Este es el texto original'}</p>
        <p>
          {clicked
            ? 'Gracias por hacer clic.'
            : 'Pulsa el botón para cambiarlo.'}
        </p>
      </div>
      <button onClick={() => setClicked(!clicked)}>Cambiar texto</button>
    </main>
  );
}
