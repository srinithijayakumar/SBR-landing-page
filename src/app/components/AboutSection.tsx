import { Users, Target, Award, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Active Users', value: '500K+', icon: Users },
  { label: 'Items Listed', value: '1M+', icon: Target },
  { label: 'App Rating', value: '4.8★', icon: Award },
  { label: 'Cities Covered', value: '100+', icon: Globe },
];

export function AboutSection() {
  return (
    <section id="about" className="pt-4 sm:pt-12 pb-8 sm:pb-24 scroll-mt-24">
      <div className="w-full container-mobile sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.21, 0.8, 0.32, 1] }}
          className="text-center mb-8 sm:mb-16"
        >
          <div className="inline-block px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-blue-50 text-[#1C6EF2] font-semibold text-mobile-xs sm:text-sm border border-blue-100 mb-4 sm:mb-6">
            About SBR
          </div>
          <h2 className="text-mobile-lg sm:text-4xl lg:text-60xl font-extrabold text-slate-900 tracking-tight mb-3 sm:mb-6">
            Revolutionizing Local Commerce
          </h2>
          <p className="text-mobile-xs sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            SBR is more than just a marketplace. We're building the future of local commerce by connecting communities, 
            enabling secure transactions, and making buying and selling as simple as a conversation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.8, 0.32, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-8 sm:mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-3 sm:p-6 bg-white rounded-mobile sm:rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-200/50"
            >
              <div className="w-8 sm:w-12 h-8 sm:h-12 mx-auto mb-2 sm:mb-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#1C6EF2] to-blue-600 flex items-center justify-center shadow-lg">
                <stat.icon className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
              </div>
              <div className="text-mobile-lg sm:text-3xl font-extrabold text-slate-900 mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-mobile-xs sm:text-sm text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.8, 0.32, 1] }}
          className="grid md:grid-cols-2 gap-6 sm:gap-12 items-center"
        >
          <div className="space-mobile sm:space-y-6">
            <h3 className="text-mobile-base sm:text-2xl font-bold text-slate-900">
              Our Mission
            </h3>
            <p className="text-mobile-xs sm:text-lg text-slate-600 leading-relaxed">
              We believe that local commerce should be simple, secure, and accessible to everyone. 
              Our platform empowers individuals and small businesses to connect with their communities, 
              fostering economic growth and building stronger neighborhoods.
            </p>
            <div className="space-mobile sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#1C6EF2]" />
                </div>
                <span className="text-mobile-xs sm:text-base text-slate-700">Secure and verified transactions</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#1C6EF2]" />
                </div>
                <span className="text-mobile-xs sm:text-base text-slate-700">Community-focused marketplace</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#1C6EF2]" />
                </div>
                <span className="text-mobile-xs sm:text-base text-slate-700">Easy-to-use mobile experience</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#1C6EF2] to-blue-600 rounded-mobile sm:rounded-3xl p-6 sm:p-8 text-white shadow-2xl shadow-blue-500/20">
              <h4 className="text-mobile-base sm:text-xl font-bold mb-3 sm:mb-4">
                Why Choose SBR?
              </h4>
              <ul className="space-mobile sm:space-y-3">
                <li className="flex items-center gap-2 sm:gap-3">
                  <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-white" />
                  </div>
                  <span className="text-mobile-xs sm:text-sm">No hidden fees or commissions</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-white" />
                  </div>
                  <span className="text-mobile-xs sm:text-sm">24/7 customer support</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-white" />
                  </div>
                  <span className="text-mobile-xs sm:text-sm">Advanced search and filtering</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-white" />
                  </div>
                  <span className="text-mobile-xs sm:text-sm">Built-in messaging system</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}