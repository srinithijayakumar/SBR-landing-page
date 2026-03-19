import { Apple, Play, Sparkles } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="relative bg-[#1C6EF2] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/30">
          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `
              linear-gradient(30deg, #0F52BA 12%, transparent 12.5%, transparent 87%, #0F52BA 87.5%, #0F52BA),
              linear-gradient(150deg, #0F52BA 12%, transparent 12.5%, transparent 87%, #0F52BA 87.5%, #0F52BA),
              linear-gradient(30deg, #0F52BA 12%, transparent 12.5%, transparent 87%, #0F52BA 87.5%, #0F52BA),
              linear-gradient(150deg, #0F52BA 12%, transparent 12.5%, transparent 87%, #0F52BA 87.5%, #0F52BA)
            `,
            backgroundSize: '80px 140px',
            backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
          }} />

          {/* Content */}
          <div className="relative py-12 sm:py-20 px-4 sm:px-8 lg:px-16 text-center space-y-6 sm:space-y-8">
            {/* Icon/Badge */}
            <div className="inline-block">
              <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto rounded-xl sm:rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center shadow-xl border border-white/30">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-white/20 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 sm:w-7 h-5 sm:h-7 text-white" strokeWidth={2.5} />
                </div>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Declutter or Discover?
            </h2>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-blue-50 max-w-2xl mx-auto">
              Join thousands of users on SBR today and experience the future of local classifieds.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
              <button className="group flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-900 rounded-2xl font-semibold hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                <Apple className="w-5 sm:w-6 h-5 sm:h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-70">Download on the</div>
                  <div className="text-sm sm:text-base font-bold">App Store</div>
                </div>
              </button>

              <button className="group flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-slate-900 text-white rounded-2xl font-semibold hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                <Play className="w-5 sm:w-6 h-5 sm:h-6 fill-current" />
                <div className="text-left">
                  <div className="text-xs opacity-90">Get it on</div>
                  <div className="text-sm sm:text-base font-bold">Google Play</div>
                </div>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto pt-8 sm:pt-12 border-t border-white/20">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">500K+</div>
                <div className="text-xs sm:text-sm text-blue-100">Active Users</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">1M+</div>
                <div className="text-xs sm:text-sm text-blue-100">Items Listed</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">4.8★</div>
                <div className="text-xs sm:text-sm text-blue-100">App Rating</div>
              </div>
            </div>
          </div>

          {/* Decorative Circles */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
