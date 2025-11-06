import { useState } from 'react';
import { X } from 'lucide-react';

export default function AuthModal({ mode = 'login', open, onClose }) {
  const [active, setActive] = useState(mode);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center p-4">
      <div className="absolute inset-0 bg-emerald-900/30" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl border border-emerald-100">
        <button onClick={onClose} className="absolute right-3 top-3 text-emerald-800 hover:text-emerald-900">
          <X className="h-5 w-5" />
        </button>
        <div className="flex gap-2 mb-6">
          <button onClick={() => setActive('login')} className={`flex-1 py-2 rounded-xl border ${active === 'login' ? 'bg-emerald-600 text-white border-emerald-600' : 'border-emerald-200 text-emerald-900 hover:bg-emerald-50'}`}>Masuk</button>
          <button onClick={() => setActive('register')} className={`flex-1 py-2 rounded-xl border ${active === 'register' ? 'bg-emerald-600 text-white border-emerald-600' : 'border-emerald-200 text-emerald-900 hover:bg-emerald-50'}`}>Daftar</button>
        </div>

        <form className="space-y-3">
          {active === 'register' && (
            <div>
              <label className="block text-sm font-medium text-emerald-900">Nama</label>
              <input type="text" className="mt-1 w-full rounded-xl border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Nama lengkap" />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-emerald-900">Email</label>
            <input type="email" className="mt-1 w-full rounded-xl border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="nama@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-emerald-900">Kata Sandi</label>
            <input type="password" className="mt-1 w-full rounded-xl border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="••••••••" />
          </div>
          <button type="button" onClick={onClose} className="w-full py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-md shadow-emerald-600/30">
            {active === 'login' ? 'Masuk' : 'Daftar'}
          </button>
        </form>
      </div>
    </div>
  );
}
