import './globals.css';
import Header from './_components/Header';
import Footer from './_components/Footer';

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
        <Footer />
      </body>
    </html>
  );
}
