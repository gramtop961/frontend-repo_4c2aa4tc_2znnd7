import { ShieldAlert, BellRing, MessageSquare, MapPin, Users, Sparkles } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: ShieldAlert,
      title: 'Peringatan Real-time',
      desc: 'Notifikasi instan untuk banjir, gempa, longsor, dan cuaca ekstrem.'
    },
    {
      icon: MapPin,
      title: 'Lokasi Berbasis Peta',
      desc: 'Filter info berdasarkan wilayah untuk fokus pada area Anda.'
    },
    {
      icon: MessageSquare,
      title: 'Forum Diskusi',
      desc: 'Ruang obrolan terstruktur untuk tanya jawab dan update lapangan.'
    },
    {
      icon: Users,
      title: 'Komunitas Terverifikasi',
      desc: 'Role admin, relawan, dan warga untuk kredibilitas informasi.'
    },
    {
      icon: BellRing,
      title: 'Push Notification',
      desc: 'Aktifkan pemberitahuan ketika ada laporan baru di sekitar Anda.'
    },
    {
      icon: Sparkles,
      title: 'UI/UX Modern',
      desc: 'Animasi halus, kontras yang nyaman, dan tema hijau Beringin.'
    },
  ];

  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">Fitur Unggulan</h2>
          <p className="text-emerald-800/80 mt-2">Semua yang Anda butuhkan untuk tetap waspada dan terhubung.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group p-6 rounded-2xl bg-white border border-emerald-100 shadow-sm hover:shadow-lg transition relative overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-emerald-100/60 to-emerald-50/30 pointer-events-none" />
              <div className="h-11 w-11 rounded-xl bg-emerald-600 text-white grid place-items-center shadow-md shadow-emerald-600/30">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-emerald-900 text-lg">{title}</h3>
              <p className="mt-1 text-emerald-800/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
