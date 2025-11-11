import './globals.css';
import Header from './_components/Header';
import Footer from './_components/Footer';

export const metadata = {
  title: 'MusicHub',
  description: 'Demo incremental de una app de música con Next.js y React',
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
