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
  { name: 'Electronics', image: electronicsImg, description: 'Phones, Laptops, Gadgets' },
  { name: 'Vehicles', image: vehiclesImg, description: 'Cars, Bikes, Trucks' },
  { name: 'Real Estate', image: realEstateImg, description: 'Houses, Apartments, Land' },
  { name: 'Furniture', image: furnitureImg, description: 'Sofas, Tables, Beds' },
  { name: 'Jobs', image: jobsImg, description: 'Full-time, Part-time, Freelance' },
  { name: 'Services', image: servicesImg, description: 'Repair, Cleaning, Maintenance' },
  { name: 'Fashion', image: fashionImg, description: 'Clothes, Shoes, Accessories' },
  { name: 'Books', image: booksImg, description: 'Novels, Textbooks, Comics' },
];

export function CategoriesSection() {
  return (
    <section id="categories" className="py-8 sm:py-24 bg-slate-50 scroll-mt-24">
      <div className="w-full">
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
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-32 sm:h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Hover Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="text-center text-white px-4">
                    <h3 className="text-lg sm:text-xl font-bold mb-1">{category.name}</h3>
                    <p className="text-xs sm:text-sm text-white/90">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Bottom Label */}
              <div className="p-3 sm:p-4">
                <h3 className="text-center font-semibold text-slate-900 text-sm sm:text-base group-hover:text-[#1C6EF2] transition-colors duration-300">
                  {category.name}
                </h3>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#1C6EF2]/30 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
