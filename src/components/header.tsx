'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, HomeIcon } from 'lucide-react';

interface HeaderProps {
  title: string;
  backHref?: string;
  showHome?: boolean;
}

export default function Header({ title, backHref, showHome = true }: HeaderProps) {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#1e3a5f] to-[#7c3aed] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-14 sm:h-16 gap-3">
          {backHref && (
            <button
              onClick={() => router.push(backHref)}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
          )}
          <h1 className="text-base sm:text-lg font-semibold text-white truncate flex-1">
            {title}
          </h1>
          {showHome && (
            <Link
              href="/select-machine"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Home"
            >
              <HomeIcon className="w-5 h-5 text-white" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
