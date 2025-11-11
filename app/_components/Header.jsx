'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header({ title }) {
  const pathname = usePathname();
  const isActive = (href) =>
    pathname === href
      ? 'underline underline-offset-4'
      : 'hover:underline underline-offset-4';

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold tracking-tight text-[#F50057]">
          {title}
        </h1>
        <nav className="text-sm flex items-center gap-6">
          <Link
            href="/"
            className={`text-gray-600 hover:text-[#F50057] transition-colors ${isActive(
              '/'
            )}`}
          >
            Home
          </Link>
          <Link
            href="/songs"
            className={`text-gray-600 hover:text-[#F50057] transition-colors ${isActive(
              '/songs'
            )}`}
          >
            Songs
          </Link>
        </nav>
      </div>
    </header>
  );
}
