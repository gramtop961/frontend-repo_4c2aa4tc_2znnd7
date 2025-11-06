import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Forum from './components/Forum';
import AuthModal from './components/AuthModal';

function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-emerald-900/80">© {new Date().getFullYear()} Beringin — Komunitas Waspada.</div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#features" className="text-emerald-900 hover:text-emerald-700">Fitur</a>
          <a href="#forum" className="text-emerald-900 hover:text-emerald-700">Forum</a>
          <a href="#" className="text-emerald-900 hover:text-emerald-700">Kebijakan</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState('home');
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  const openAuth = (mode) => {
    setAuthMode(mode);
    setAuthOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-emerald-900">
      <Navbar onNavigate={setPage} onOpenAuth={openAuth} />
      {page === 'home' && (
        <>
          <Hero onGetStarted={() => setPage('forum')} />
          <Features />
        </>
      )}
      {page === 'forum' && (
        <div id="forum">
          <Forum />
        </div>
      )}
      <Footer />

      <AuthModal mode={authMode} open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
}
