import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const trending = [
  {
    title: 'iPhone 15 Pro Max · 256GB',
    price: '$899',
    distance: '2 miles away',
    image:
      'https://images.unsplash.com/photo-1695048130676-7aa6f0b0c0de?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'DSLR Camera · 24MP Kit',
    price: '$420',
    distance: '3 miles away',
    image:
      'https://images.unsplash.com/photo-1519183071298-a2962be96b8a?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Modern Sofa · 3-Seater',
    price: '$310',
    distance: '1 mile away',
    image:
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1400&q=80',
  },
];

export function SneakPeekSection() {
  return (
    <section id="trending" className="bg-slate-50 py-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.21, 0.8, 0.32, 1] }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
            Trending Deals Near You.
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
            High-intent listings that are moving fast in your area.
          </p>
        </motion.div>
      </div>

      <div className="mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="-mx-6 lg:-mx-8 overflow-x-auto">
            <div className="px-6 lg:px-8">
              <div className="flex gap-6 min-w-max py-2">
                {trending.map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.06,
                      ease: [0.21, 0.8, 0.32, 1],
                    }}
                    whileHover={{ y: -6 }}
                    className="group w-[320px] sm:w-[360px] rounded-3xl bg-white border border-slate-200/70 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:shadow-blue-500/10 transition-shadow overflow-hidden"
                  >
                    <div className="relative h-44">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />
                      <div className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-900/10">
                        {item.price}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-bold text-slate-900 leading-snug">
                          {item.title}
                        </h3>
                        <div className="shrink-0 rounded-2xl bg-[#1C6EF2]/10 px-3 py-1 text-xs font-semibold text-[#1C6EF2]">
                          Hot
                        </div>
                      </div>

                      <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                        <MapPin className="h-4 w-4 text-slate-400" />
                        <span>{item.distance}</span>
                      </div>

                      <div className="mt-5 h-px bg-slate-200/70" />
                      <div className="mt-4 flex items-center justify-between">
                        <button className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800 transition-colors">
                          View Details
                        </button>
                        <span className="text-xs text-slate-500">
                          Verified seller
                        </span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
