import { useMemo, useState } from 'react';
import { MessageSquarePlus, MapPin, AlertTriangle, Search, Send, User } from 'lucide-react';

const sampleThreads = [
  {
    id: 1,
    title: 'Peringatan Banjir di Kelurahan Sukamaju',
    tag: 'Banjir',
    location: 'Bandung',
    author: 'Dewi',
    time: '2 menit lalu',
    content: 'Air mulai naik di RT 04, mohon warga di area sungai meningkatkan kewaspadaan.'
  },
  {
    id: 2,
    title: 'Getaran kecil terasa, ada info gempa?',
    tag: 'Gempa',
    location: 'Yogyakarta',
    author: 'Rizky',
    time: '12 menit lalu',
    content: 'Barusan terasa getaran ringan, apakah ada rilis dari BMKG?'
  },
  {
    id: 3,
    title: 'Pohon tumbang menutup jalan utama',
    tag: 'Peringatan',
    location: 'Makassar',
    author: 'Ayu',
    time: '30 menit lalu',
    content: 'Mohon hindari Jalan Melati, ada pohon tumbang. Sedang ditangani petugas.'
  }
];

export default function Forum() {
  const [query, setQuery] = useState('');
  const [threads, setThreads] = useState(sampleThreads);
  const [form, setForm] = useState({ title: '', tag: 'Peringatan', location: '', content: '' });

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return threads.filter(t =>
      t.title.toLowerCase().includes(q) ||
      t.tag.toLowerCase().includes(q) ||
      t.location.toLowerCase().includes(q) ||
      t.content.toLowerCase().includes(q)
    );
  }, [query, threads]);

  const addThread = () => {
    if (!form.title || !form.content) return;
    const newThread = {
      id: Date.now(),
      author: 'Kamu',
      time: 'baru saja',
      ...form,
    };
    setThreads([newThread, ...threads]);
    setForm({ title: '', tag: 'Peringatan', location: '', content: '' });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-emerald-50/40 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 flex items-center gap-2">
            <MessageSquarePlus className="h-6 w-6" /> Forum Komunitas
          </h2>
          <div className="hidden md:flex items-center gap-2">
            <div className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-2"><AlertTriangle className="h-4 w-4" /> Peringatan Cepat</div>
            <div className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-2"><MapPin className="h-4 w-4" /> Berbasis Lokasi</div>
          </div>
        </div>

        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari laporan, lokasi, atau tag..."
                className="w-full rounded-2xl border border-emerald-200 px-10 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white/80"
              />
              <Search className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-emerald-700" />
            </div>

            <div className="space-y-4">
              {filtered.map(t => (
                <article key={t.id} className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-emerald-100 grid place-items-center text-emerald-700">
                        <User className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-emerald-900">{t.title}</h3>
                        <div className="text-xs text-emerald-800/70">oleh {t.author} • {t.time} • {t.location}</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs bg-emerald-600 text-white">{t.tag}</span>
                  </div>
                  <p className="mt-3 text-emerald-900/80">{t.content}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="p-5 rounded-2xl bg-white border border-emerald-100 shadow-sm sticky top-28">
              <h3 className="font-semibold text-emerald-900">Buat Laporan</h3>
              <div className="mt-4 space-y-3">
                <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="w-full rounded-xl border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Judul" />
                <select value={form.tag} onChange={e => setForm({ ...form, tag: e.target.value })} className="w-full rounded-xl border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option>Peringatan</option>
                  <option>Banjir</option>
                  <option>Gempa</option>
                  <option>Cuaca</option>
                </select>
                <input value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} className="w-full rounded-xl border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Lokasi (kota/kecamatan)" />
                <textarea value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} rows={4} className="w-full rounded-xl border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Detail laporan" />
                <button onClick={addThread} className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition">
                  <Send className="h-4 w-4" /> Kirim
                </button>
                <p className="text-xs text-emerald-800/70">Mohon tetap gunakan bahasa sopan, sertakan foto bila perlu, dan hindari hoaks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
