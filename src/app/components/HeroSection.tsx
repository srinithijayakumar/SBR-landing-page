import { Search, MapPin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

// Import app store logos
import appStoreLogo from '../../assest/Images/appstore.svg';
import playStoreLogo from '../../assest/Images/playstore.svg';

export function HeroSection() {
  return (
    <section id="home" className="relative pt-4 sm:pt-8 pb-4 sm:pb-12 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white scroll-mt-24">
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: 'radial-gradient(circle, #94A3B8 1px, transparent 1px)',
        backgroundSize: '26px 26px'
      }} />

      <div className="relative w-full container-mobile sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-16 items-center mobile-fit">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.8, 0.32, 1] }}
            className="space-mobile sm:space-y-8 w-full"                          
          >
            <div className="inline-block">
              <span className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-blue-50/80 backdrop-blur-sm text-[#1C6EF2] border border-blue-100 font-semibold text-mobile-xs sm:text-sm shadow-lg shadow-blue-500/10">
                <span className="w-1 sm:w-2 h-1 sm:h-2 rounded-full bg-[#1C6EF2]" />
                <span className="hidden sm:inline">The Future of Local Classifieds</span>
                <span className="sm:hidden">Local Classifieds</span>
              </span>
            </div>
            <h1 className="text-mobile-xl sm:text-5xl lg:text-20xl font-extrabold text-slate-900 leading-[1.2] tracking-tight w-full">
              Buy, Sell, and Discover<br className="hidden sm:block" /> in Your City.
            </h1>
            <p className="text-mobile-xs sm:text-xl text-slate-600 leading-relaxed w-full">
              Post ads in seconds, chat directly with verified buyers, and find the best local deals securely.
            </p>
            <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-3 pt-2 sm:pt-4 w-full">
              <button className="group flex items-center justify-center gap-1 px-1.5 sm:px-3 py-1 sm:py-2 bg-slate-900 text-white rounded-mobile sm:rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex-1">
                <img src={appStoreLogo} alt="App Store" className="w-3.5 sm:w-4 h-3.5 sm:h-4 flex-shrink-0" />
                <div className="text-left flex-shrink-0">
                  <div className="text-[10px] sm:text-xs opacity-90">Download on the</div>
                  <div className="text-[11px] sm:text-xs font-bold">App Store</div>
                </div>
              </button>
              <button className="group flex items-center justify-center gap-1 px-1.5 sm:px-3 py-1 sm:py-2 bg-slate-900 text-white rounded-mobile sm:rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex-1">
                <img src={playStoreLogo} alt="Google Play" className="w-3.5 sm:w-4 h-3.5 sm:h-4 flex-shrink-0" />
                <div className="text-left flex-shrink-0">
                  <div className="text-[10px] sm:text-xs opacity-90">Get it on</div>
                  <div className="text-[11px] sm:text-xs font-bold">Google Play</div>
                </div>
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.21, 0.8, 0.32, 1] }}
            className="relative lg:h-[600px] flex items-center justify-center mt-4 lg:mt-0 w-full overflow-hidden"
          >
            <motion.div
              // animate={{ y: [0, -8, 0] }}
              // transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <div className="relative w-[200px] sm:w-[300px] h-[360px] sm:h-[550px] bg-slate-900 rounded-[2rem] sm:rounded-[3rem] p-1.5 sm:p-3 shadow-2xl shadow-slate-900/30 mx-auto">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-b from-white to-slate-50">
                    <div className="px-5 pt-10">
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-extrabold text-slate-900 tracking-tight">
                          SBR<span className="text-[#1C6EF2]">.</span>
                        </div>
                        <div className="h-9 w-9 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-slate-900/20">
                          <Heart className="h-4 w-4" />
                        </div>
                      </div>

                      <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-slate-900/5 border border-slate-200/70">
                        <Search className="h-4 w-4 text-slate-400" />
                        <div className="text-sm text-slate-400">
                          Search “iPhone, sofa, bike…”
                        </div>
                      </div>

                      <div className="mt-4 flex gap-2 overflow-hidden">
                        {['Electronics', 'Vehicles', 'Furniture'].map((label) => (
                          <div
                            key={label}
                            className="shrink-0 rounded-full bg-[#1C6EF2]/10 px-3 py-1 text-xs font-semibold text-[#1C6EF2]"
                          >
                            {label}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 px-5 space-y-3">
                      {[
                        {
                          title: 'iPhone 15 Pro',
                          price: '$799',
                          image:
                            'https://images.unsplash.com/photo-1695048130676-7aa6f0b0c0de?auto=format&fit=crop&w=600&q=80',
                        },
                        {
                          title: 'Modern Sofa',
                          price: '$310',
                          image:
                            'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=600&q=80',
                        },
                      ].map((card) => (
                        <div
                          key={card.title}
                          className="rounded-3xl bg-white border border-slate-200/70 shadow-xl shadow-slate-900/5 overflow-hidden"
                        >
                          <div className="relative h-24">
                            <img
                              src={card.image}
                              alt={card.title}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0" />
                            <div className="absolute bottom-2 left-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold text-slate-900">
                              {card.price}
                            </div>
                          </div>
                          <div className="p-3">
                            <div className="flex items-center justify-between gap-3">
                              <div className="text-sm font-bold text-slate-900">
                                {card.title}
                              </div>
                              <div className="flex items-center gap-1 text-xs text-slate-500">
                                <MapPin className="h-3.5 w-3.5 text-slate-400" />
                                <span>2 mi</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-full" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-12 -left-4 z-20"
            >
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl shadow-slate-900/10 border border-slate-100 max-w-[220px]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#1C6EF2] to-blue-600 flex items-center justify-center text-white font-extrabold shadow-lg shadow-blue-500/20">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">New Message</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      “Is this still available?”
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-24 -right-4 z-20"
            >
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl shadow-slate-900/10 border border-slate-100 max-w-[200px]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white font-extrabold shadow-lg shadow-emerald-500/20">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">Item Sold!</p>
                    <p className="text-xs text-slate-500 mt-0.5">Payment secured</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-tr from-[#1C6EF2]/20 via-transparent to-purple-500/20 blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}




































