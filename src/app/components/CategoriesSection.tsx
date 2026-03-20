import { Smartphone, Car, Home, Sofa, Briefcase, Wrench, ShoppingBag, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Electronics', icon: Smartphone, gradient: 'from-blue-500 to-cyan-500' },
  { name: 'Vehicles', icon: Car, gradient: 'from-purple-500 to-pink-500' },
  { name: 'Real Estate', icon: Home, gradient: 'from-orange-500 to-red-500' },
  { name: 'Furniture', icon: Sofa, gradient: 'from-green-500 to-emerald-500' },
  { name: 'Jobs', icon: Briefcase, gradient: 'from-indigo-500 to-blue-500' },
  { name: 'Services', icon: Wrench, gradient: 'from-yellow-500 to-orange-500' },
  { name: 'Fashion', icon: ShoppingBag, gradient: 'from-pink-500 to-rose-500' },
  { name: 'Books', icon: BookOpen, gradient: 'from-violet-500 to-purple-500' },
];

export function CategoriesSection() {
  return (
    <section id="categories" className="py-8 sm:py-24 bg-white scroll-mt-24 mobile-container no-scroll-mobile">
      <div className="w-full container-mobile sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.21, 0.8, 0.32, 1] }}
          className="text-center mb-6 sm:mb-16"
        >
          <h2 className="text-mobile-lg sm:text-4xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-2 sm:mb-4">
            Discover Everything You Need
          </h2>
          <p className="text-mobile-xs sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Browse through our diverse categories and find exactly what you're looking for.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.21, 0.8, 0.32, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-6 mobile-fit"
        >
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-mobile sm:rounded-2xl p-2 sm:p-8 hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/50 border border-slate-200/50 w-full"
            >
              {/* Icon Container */}
              <div className={`w-6 sm:w-16 h-6 sm:h-16 mx-auto mb-1 sm:mb-4 rounded-md sm:rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-3 sm:w-8 h-3 sm:h-8 text-white" strokeWidth={2.5} />
              </div>

              {/* Category Name */}
              <h3 className="text-center font-bold text-slate-900 text-mobile-xs sm:text-lg leading-tight">
                {category.name}
              </h3>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-mobile sm:rounded-2xl bg-gradient-to-br from-[#1C6EF2]/0 to-[#1C6EF2]/0 group-hover:from-[#1C6EF2]/5 group-hover:to-purple-500/5 transition-all duration-300 -z-10" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
