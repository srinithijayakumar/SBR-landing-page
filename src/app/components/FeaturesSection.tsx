import { Camera, MapPin, MessageCircle, Image as ImageIcon, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export function FeaturesSection() {
  return (
    <section id="features" className="py-8 sm:py-24 bg-slate-50 scroll-mt-24 mobile-container no-scroll-mobile">
      <div className="w-full container-mobile sm:px-6 lg:px-8 space-y-12 sm:space-y-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.21, 0.8, 0.32, 1] }}
          className="grid lg:grid-cols-2 gap-4 sm:gap-16 items-center mobile-fit"
        >
          <div className="space-mobile sm:space-y-6 w-full">
            <h2 className="text-mobile-lg sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Snap, Price, and Post in 30 Seconds
            </h2>
            <p className="text-mobile-xs sm:text-xl text-slate-600 leading-relaxed">
              Upload photos, auto-detect your location, and go live instantly.
            </p>
            <ul className="space-mobile sm:space-y-4 pt-1 sm:pt-4">
              <li className="flex items-start gap-1 sm:gap-3">
                <div className="w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-[#1C6EF2]/10 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <Camera className="w-2 sm:w-4 h-2 sm:h-4 text-[#1C6EF2]" />
                </div>
                <span className="text-slate-700 text-mobile-xs sm:text-base">Drag-and-drop photo upload with smart compression</span>
              </li>
              <li className="flex items-start gap-1 sm:gap-3">
                <div className="w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-[#1C6EF2]/10 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <MapPin className="w-2 sm:w-4 h-2 sm:h-4 text-[#1C6EF2]" />
                </div>
                <span className="text-slate-700 text-mobile-xs sm:text-base">Automatic location detection for local buyers</span>
              </li>
            </ul>
          </div>

          <div className="relative mt-4 lg:mt-0 w-full">
            <div className="bg-white rounded-mobile sm:rounded-3xl p-3 sm:p-8 shadow-2xl shadow-slate-900/10 border border-slate-200/50 hover:shadow-3xl transition-shadow w-full">
              <div className="space-mobile sm:space-y-6">
                <h3 className="text-mobile-sm sm:text-2xl font-bold text-slate-900">Create New Listing</h3>
                
                {/* Photo Upload Area */}
                <div className="border-2 border-dashed border-slate-300 rounded-mobile sm:rounded-2xl p-3 sm:p-12 bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer">
                  <div className="text-center space-y-1 sm:space-y-2">
                    <div className="w-6 sm:w-16 h-6 sm:h-16 mx-auto rounded-md sm:rounded-2xl bg-gradient-to-br from-[#1C6EF2] to-blue-600 flex items-center justify-center shadow-lg">
                      <ImageIcon className="w-3 sm:w-8 h-3 sm:h-8 text-white" />
                    </div>
                    <p className="font-semibold text-slate-900 text-mobile-xs sm:text-base">Upload Photos</p>
                    <p className="text-mobile-xs sm:text-sm text-slate-500">Drag & drop or click to browse</p>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-mobile sm:space-y-4">
                  <div>
                    <label className="block text-mobile-xs sm:text-sm font-semibold text-slate-700 mb-1 sm:mb-2">Title</label>
                    <input
                      type="text"
                      placeholder="e.g., iPhone 15 Pro Max"
                      className="w-full px-2 sm:px-4 py-1.5 sm:py-3 rounded-md sm:rounded-xl border border-slate-300 focus:border-[#1C6EF2] focus:ring-2 focus:ring-[#1C6EF2]/20 transition-all outline-none text-mobile-xs sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-mobile-xs sm:text-sm font-semibold text-slate-700 mb-1 sm:mb-2">Price</label>
                    <input
                      type="text"
                      placeholder="$0.00"
                      className="w-full px-2 sm:px-4 py-1.5 sm:py-3 rounded-md sm:rounded-xl border border-slate-300 focus:border-[#1C6EF2] focus:ring-2 focus:ring-[#1C6EF2]/20 transition-all outline-none text-mobile-xs sm:text-base"
                    />
                  </div>
                </div>

                <button className="w-full py-2 sm:py-4 bg-[#1C6EF2] text-white rounded-md sm:rounded-xl font-bold hover:bg-[#1557C7] transition-all shadow-lg shadow-blue-500/30 text-mobile-xs sm:text-base">
                  Post Now
                </button>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-2 sm:-top-6 -right-2 sm:-right-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white px-2 sm:px-6 py-1 sm:py-3 rounded-md sm:rounded-2xl shadow-xl font-bold text-mobile-xs sm:text-sm">
              30 sec avg.
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.21, 0.8, 0.32, 1] }}
          className="grid lg:grid-cols-2 gap-4 sm:gap-16 items-center mobile-fit"
        >
          <div className="relative lg:order-1 mt-4 lg:mt-0 w-full">
            <div className="bg-white rounded-mobile sm:rounded-3xl p-3 sm:p-8 shadow-2xl shadow-slate-900/10 border border-slate-200/50 hover:shadow-3xl transition-shadow w-full">
              <div className="space-mobile sm:space-y-6">
                <div className="flex items-center gap-2 sm:gap-3 pb-2 sm:pb-4 border-b border-slate-200">
                  <div className="w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-gradient-to-br from-[#1C6EF2] to-blue-600 flex items-center justify-center text-white font-bold text-mobile-xs sm:text-base flex-shrink-0">
                    M
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-slate-900 text-mobile-xs sm:text-base truncate">Mike Johnson</h3>
                    <p className="text-mobile-xs sm:text-sm text-slate-500">Online now</p>
                  </div>
                </div>

                {/* Chat Bubbles */}
                <div className="space-mobile sm:space-y-4">
                  <div className="flex justify-start">
                    <div className="bg-slate-100 rounded-lg sm:rounded-2xl rounded-tl-none px-2 sm:px-4 py-1.5 sm:py-3 max-w-[80%] sm:max-w-[85%]">
                      <p className="text-slate-900 text-mobile-xs sm:text-base leading-tight">Hi! Is the MacBook still available?</p>
                      <p className="text-mobile-xs text-slate-500 mt-0.5 sm:mt-1">2:34 PM</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-[#1C6EF2] text-white rounded-lg sm:rounded-2xl rounded-tr-none px-2 sm:px-4 py-1.5 sm:py-3 max-w-[80%] sm:max-w-[85%]">
                      <p className="text-mobile-xs sm:text-base leading-tight">Yes! It's in perfect condition. Would you like to see more photos?</p>
                      <p className="text-mobile-xs text-blue-100 mt-0.5 sm:mt-1">2:35 PM</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-slate-100 rounded-lg sm:rounded-2xl rounded-tl-none px-2 sm:px-4 py-1.5 sm:py-3 max-w-[80%] sm:max-w-[85%]">
                      <p className="text-slate-900 text-mobile-xs sm:text-base leading-tight">That would be great! 📸</p>
                      <p className="text-mobile-xs text-slate-500 mt-0.5 sm:mt-1">2:35 PM</p>
                    </div>
                  </div>
                </div>

                {/* Input */}
                <div className="flex gap-1 sm:gap-2 pt-2 sm:pt-4">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 min-w-0 px-2 sm:px-4 py-1.5 sm:py-3 rounded-md sm:rounded-xl border border-slate-300 focus:border-[#1C6EF2] focus:ring-2 focus:ring-[#1C6EF2]/20 transition-all outline-none text-mobile-xs sm:text-base"
                  />
                  <button className="w-8 sm:w-12 h-8 sm:h-12 bg-[#1C6EF2] rounded-md sm:rounded-xl flex items-center justify-center hover:bg-[#1557C7] transition-all shadow-lg shadow-blue-500/30 flex-shrink-0">
                    <Send className="w-3 sm:w-5 h-3 sm:h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 bg-gradient-to-br from-purple-500 to-pink-600 text-white px-2 sm:px-6 py-1 sm:py-3 rounded-md sm:rounded-2xl shadow-xl font-bold text-mobile-xs sm:text-sm">
              100% Private
            </div>
          </div>

          <div className="space-mobile sm:space-y-6 lg:order-2 w-full">
            <div className="inline-block px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-purple-50 text-purple-600 font-semibold text-mobile-xs sm:text-sm border border-purple-100">
              Secure Communication
            </div>
            <h2 className="text-mobile-lg sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Negotiate Safely In-App
            </h2>
            <p className="text-mobile-xs sm:text-xl text-slate-600 leading-relaxed">
              No need to share your personal number. Chat, send photos, and share locations directly within SBR's secure messaging system.
            </p>
            <ul className="space-mobile sm:space-y-4 pt-1 sm:pt-4">
              <li className="flex items-start gap-1 sm:gap-3">
                <div className="w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <MessageCircle className="w-2 sm:w-4 h-2 sm:h-4 text-purple-600" />
                </div>
                <span className="text-slate-700 text-mobile-xs sm:text-base">Real-time messaging with read receipts</span>
              </li>
              <li className="flex items-start gap-1 sm:gap-3">
                <div className="w-4 sm:w-6 h-4 sm:h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <ImageIcon className="w-2 sm:w-4 h-2 sm:h-4 text-purple-600" />
                </div>
                <span className="text-slate-700 text-mobile-xs sm:text-base">Share additional photos during negotiation</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
