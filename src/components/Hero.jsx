import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero({ onGetStarted }) {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-emerald-900"
          >
            Beringin — Forum Tanggap Bencana & Komunitas Waspada
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-emerald-800/80 text-lg"
          >
            Pantau peringatan banjir, gempa, dan cuaca ekstrem. Diskusi cepat bersama warga sekitar, berbagi informasi, dan saling menjaga.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button onClick={onGetStarted} className="px-5 py-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-lg shadow-emerald-600/30">
              Mulai Sekarang
            </button>
            <a href="#features" className="px-5 py-3 rounded-xl bg-white text-emerald-900 hover:bg-emerald-50 transition border border-emerald-200">
              Lihat Fitur
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/70 backdrop-blur rounded-2xl border border-emerald-100 p-6 shadow-xl"
        >
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-700">120K+</div>
              <div className="text-sm text-emerald-800/70">Pengguna Aktif</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-700">8K+</div>
              <div className="text-sm text-emerald-800/70">Laporan/ bln</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-700">98%</div>
              <div className="text-sm text-emerald-800/70">Akurasi Info</div>
            </div>
          </div>
          <div className="mt-6 text-sm text-emerald-900/80">
            Komunitas yang rapi, moderasi aktif, dan sumber data resmi BMKG + BPBD.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
