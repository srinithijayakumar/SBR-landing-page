import { TrendingUp, BarChart3, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

export function PremiumSection() {
  return (
    <section id="sell" className="pt-4 sm:pt-12 pb-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.21, 0.8, 0.32, 1] }}
          className="relative  sm:rounded-3xl p-6 sm:p-12 lg:p-16 border-2 border-transparent shadow-2xl shadow-slate-900/5 overflow-hidden"
        >
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#1C6EF2]/20 via-purple-500/20 to-pink-500/20 -z-10 blur-xl" />
          <div className="absolute inset-[2px] rounded-3xl bg-gradient-to-br from-slate-50 to-white -z-10" />

          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-[#1C6EF2]/10 to-purple-500/10 text-[#1C6EF2] font-semibold text-xs sm:text-sm border border-[#1C6EF2]/20 mb-4 sm:mb-6">
              Premium Features
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Sell Faster with Premium Ads
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
              Unlock powerful tools to maximize your reach and close deals faster.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <div className="group relative bg-white rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-500/20 border border-slate-200/50">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1C6EF2] to-blue-600 flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Top Listings</h3>
              <p className="text-slate-600 leading-relaxed">
                Stand out in search results with priority placement. Your ads appear first to thousands of active buyers.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 text-[#1C6EF2] font-semibold">
                  <span className="text-2xl">5x</span>
                  <span className="text-sm">More Views</span>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-white rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-500/20 border border-slate-200/50">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1C6EF2] to-blue-600 flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Performance Dashboard</h3>
              <p className="text-slate-600 leading-relaxed">
                Track views, clicks, and engagement in real-time. Get insights to optimize your listings and pricing.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 text-[#1C6EF2] font-semibold">
                  <span className="h-2 w-2 rounded-full bg-[#1C6EF2]" />
                  <span className="text-sm">Live Analytics</span>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-white rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-500/20 border border-slate-200/50">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1C6EF2] to-blue-600 flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
                <CreditCard className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Secure Payments</h3>
              <p className="text-slate-600 leading-relaxed">
                Accept payments directly through the app. Support for UPI, credit cards, debit cards, and digital wallets.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 text-[#1C6EF2] font-semibold">
                  <span className="h-2 w-2 rounded-full bg-[#1C6EF2]" />
                  <span className="text-sm">Bank-Level Security</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
           
          </div>
        </motion.div>
      </div>
    </section>
  );
}
