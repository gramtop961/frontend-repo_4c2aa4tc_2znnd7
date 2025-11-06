import { useState } from 'react';
import { Leaf, LogIn, UserPlus, Users } from 'lucide-react';

export default function Navbar({ onNavigate, onOpenAuth }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-emerald-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="h-9 w-9 rounded-xl bg-emerald-600 grid place-items-center text-white shadow-lg shadow-emerald-600/30">
              <Leaf className="h-5 w-5" />
            </div>
            <div className="font-semibold text-xl tracking-tight text-emerald-900">Beringin</div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => onNavigate('home')}
              className="px-3 py-2 rounded-lg text-emerald-900 hover:bg-emerald-50 transition"
            >
              Beranda
            </button>
            <button
              onClick={() => onNavigate('forum')}
              className="px-3 py-2 rounded-lg text-emerald-900 hover:bg-emerald-50 transition flex items-center gap-2"
            >
              <Users className="h-4 w-4" /> Komunitas
            </button>
            <div className="h-6 w-px bg-emerald-200 mx-2" />
            <button
              onClick={() => onOpenAuth('login')}
              className="px-3 py-2 rounded-lg text-emerald-900 hover:bg-emerald-50 transition flex items-center gap-2"
            >
              <LogIn className="h-4 w-4" /> Masuk
            </button>
            <button
              onClick={() => onOpenAuth('register')}
              className="px-3 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition flex items-center gap-2 shadow-md shadow-emerald-600/30"
            >
              <UserPlus className="h-4 w-4" /> Daftar
            </button>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-emerald-900 hover:bg-emerald-50 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button onClick={() => { onNavigate('home'); setMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-lg text-emerald-900 hover:bg-emerald-50">Beranda</button>
            <button onClick={() => { onNavigate('forum'); setMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-lg text-emerald-900 hover:bg-emerald-50">Komunitas</button>
            <div className="h-px bg-emerald-200" />
            <button onClick={() => { onOpenAuth('login'); setMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-lg text-emerald-900 hover:bg-emerald-50">Masuk</button>
            <button onClick={() => { onOpenAuth('register'); setMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Daftar</button>
          </div>
        )}
      </nav>
    </header>
  );
}
