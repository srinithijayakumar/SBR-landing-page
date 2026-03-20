import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Rahul T.',
    role: 'Seller',
    quote: 'Sold my old bike in 2 hours. The chat feature is incredibly smooth.',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Nisha K.',
    role: 'Buyer',
    quote: 'The listings feel curated. Verified profiles made me comfortable meeting locally.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Arjun S.',
    role: 'Seller',
    quote: 'Premium ads actually work. My laptop got serious inquiries the same day.',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Meera P.',
    role: 'Buyer',
    quote: 'Clean UI, fast search, and no spam. This is how classifieds should feel.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Vikram R.',
    role: 'Seller',
    quote: 'Best platform for selling electronics. Got genuine buyers within hours.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Priya M.',
    role: 'Buyer',
    quote: 'Found my dream apartment here. The location feature is amazing.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Amit K.',
    role: 'Seller',
    quote: 'Sold my car in just one day! The verification system builds real trust.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Sneha D.',
    role: 'Buyer',
    quote: 'Love the in-app messaging. No more sharing personal numbers with strangers.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Rohan B.',
    role: 'Seller',
    quote: 'The premium features are worth it. My listings get way more visibility.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Kavya S.',
    role: 'Buyer',
    quote: 'Finally found genuine sellers. The quality of listings is impressive.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Deepak M.',
    role: 'Seller',
    quote: 'Quick posting, instant responses. This is the future of classifieds.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Ananya R.',
    role: 'Buyer',
    quote: 'Great deals, safe transactions. SBR has become my go-to marketplace.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=256&q=80',
  },
];

export function SocialProofSection() {
  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="bg-white py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.21, 0.8, 0.32, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Loved by buyers and sellers.
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto">
            Real reviews from real people who love using SBR.
          </p>
        </motion.div>

        {/* Scrolling Reviews Container */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-6 min-w-max"
              animate={{
                x: [0, -(408 * reviews.length)], // 384px card + 24px gap = 408px per card
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 100,
                  ease: "linear",
                },
              }}
            >
              {duplicatedReviews.map((review, index) => (
                <div
                  key={`${review.name}-${index}`}
                  className="flex-shrink-0 w-96 bg-white rounded-3xl border-2 border-slate-300 
                   hover:shadow-3xl transition-shadow p-8"
                >
                  <div className="flex items-center gap-6 mb-6">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="h-16 w-16 rounded-full object-cover ring-4 ring-blue-100 shadow-lg"
                      loading="lazy"
                    />
                    <div className="flex-1">
                      <div className="font-bold text-xl text-slate-900">{review.name}</div>
                      <div className="text-base text-slate-600 font-medium">{review.role}</div>
                    </div>
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-slate-800 text-lg leading-relaxed font-medium">
                    "{review.quote}"
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}