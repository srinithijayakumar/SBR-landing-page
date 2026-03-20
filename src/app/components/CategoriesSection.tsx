import { motion } from 'framer-motion';

// Import all category images
import electronicsImg from '../../assest/Images/Electronics.jpg';
import vehiclesImg from '../../assest/Images/vehicles.jpg';
import realEstateImg from '../../assest/Images/real-estate.jpg';
import furnitureImg from '../../assest/Images/Furniture.jpg';
import jobsImg from '../../assest/Images/Jobs.jpg';
import servicesImg from '../../assest/Images/Servies.jpg';
import fashionImg from '../../assest/Images/fashion.jpg';
import booksImg from '../../assest/Images/books.jpg';

const categories = [
  { name: 'Electronics', image: electronicsImg },
  { name: 'Vehicles', image: vehiclesImg },
  { name: 'Real Estate', image: realEstateImg },
  { name: 'Furniture', image: furnitureImg },
  { name: 'Jobs', image: jobsImg },
  { name: 'Services', image: servicesImg },
  { name: 'Fashion', image: fashionImg },
  { name: 'Books', image: booksImg },
];

export function CategoriesSection() {
  return (
    <section id="categories" className="py-8 sm:py-24 bg-white scroll-mt-24">
      <div className="w-full px-4 md:px-20">
        {/* Header Section - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.21, 0.8, 0.32, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Discover Everything You Need
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Browse through our diverse categories and find exactly what you're looking for in your local area.
          </p>
        </motion.div>

        {/* Cards Grid - All 8 cards in one row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.21, 0.8, 0.32, 1] }}
          className="grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-4"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image Card - Just like in the picture */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Category Name on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <h3 className="text-white text-lg md:text-xl font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {category.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
