import './globals.css';
import Header from './_components/Header';

export const metadata = {
  title: 'MusicHub • Sesión 1',
  description: 'Demo incremental — Estructura + Props + micro-interacción',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-dvh bg-white text-gray-900 antialiased">
        <Header title="MusicHub" />
        <main className="mx-auto max-w-4xl px-4 py-6">{children}</main>
        <footer className="text-center text-xs text-gray-500 py-4 border-t">
          <p>
            <a
              target="_blank"
              href="https://icons8.com/icon/81TSi6Gqk0tm/music"
              className="text-[#F50057] hover:underline"
              rel="noopener noreferrer"
            >
              Music
            </a>{' '}
            icon by{' '}
            <a
              target="_blank"
              href="https://icons8.com"
              className="text-[#F50057] hover:underline"
              rel="noopener noreferrer"
            >
              Icons8
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
