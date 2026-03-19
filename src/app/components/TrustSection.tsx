import { ShieldCheck, UserCheck, AlertCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function TrustSection() {
  return (
    <section id="safety" className="py-16 sm:py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 max-w-md mx-auto">
              <div className="relative w-64 sm:w-80 h-80 sm:h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1C6EF2] to-purple-600 rounded-[3rem] shadow-2xl shadow-blue-500/30 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                  <ShieldCheck className="w-40 h-40 text-white" strokeWidth={1.5} />
                </div>
                
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-xl shadow-slate-900/10 flex items-center justify-center border border-slate-200"
                >
                  <UserCheck className="w-10 h-10 text-green-500" strokeWidth={2} />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-white rounded-2xl shadow-xl shadow-slate-900/10 flex items-center justify-center border border-slate-200"
                >
                  <CheckCircle className="w-10 h-10 text-[#1C6EF2]" strokeWidth={2} />
                </motion.div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-[#1C6EF2]/30 via-purple-500/30 to-pink-500/30 blur-3xl -z-10" />
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div>
              <div className="inline-block px-3 sm:px-4 py-2 rounded-full bg-green-50 text-green-600 font-semibold text-xs sm:text-sm border border-green-100 mb-4 sm:mb-6">
                Your Safety First
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 sm:mb-6">
                A Community Built on Trust
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                We've implemented multiple layers of security to ensure every transaction is safe and every user is protected.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <UserCheck className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">Verified Profiles & KYC Enabled</h4>
                  <p className="text-slate-600 text-sm sm:text-base">
                    All sellers go through a verification process. Buy with confidence knowing you're dealing with real people.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1C6EF2] to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">100% Admin Moderated Ads</h4>
                  <p className="text-slate-600 text-sm sm:text-base">
                    Every listing is reviewed to prevent spam, scams, and prohibited items. Our team works 24/7 to keep the marketplace clean.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  <AlertCircle className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">Easy In-App Reporting & User Blocking</h4>
                  <p className="text-slate-600 text-sm sm:text-base">
                    Encountered suspicious activity? Report users or listings instantly. Block unwanted contacts with one tap.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="pt-6">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-4 rounded-2xl border border-green-200">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Trusted by 500K+ Users</p>
                  <p className="text-sm text-slate-600">4.8★ Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
