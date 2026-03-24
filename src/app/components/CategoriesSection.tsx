import { motion } from 'framer-motion';

// Import category images
import electronicsImg from '../../assest/CategoryImages/Electronics.jpg';
import vehiclesImg from '../../assest/CategoryImages/vehicles.jpg';
import realEstateImg from '../../assest/CategoryImages/real-estate.jpg';
import furnitureImg from '../../assest/CategoryImages/Furniture.jpg';
import jobsImg from '../../assest/CategoryImages/Jobs.jpg';
import servicesImg from '../../assest/CategoryImages/Servies.jpg';
import fashionImg from '../../assest/CategoryImages/fashion.jpg';
import booksImg from '../../assest/CategoryImages/books.jpg';

const categoriesData = [
  {
    "id": 1,
    "name": "Electronics",
    "description": "Gadgets & Tech",
    "image": electronicsImg
  },
  {
    "id": 2,
    "name": "Vehicles",
    "description": "Cars & Bikes",
    "image": vehiclesImg
  },
  {
    "id": 3,
    "name": "Real Estate",
    "description": "Properties",
    "image": realEstateImg
  },
  {
    "id": 4,
    "name": "Furniture",
    "description": "Home & Office",
    "image": furnitureImg
  },
  {
    "id": 5,
    "name": "Jobs",
    "description": "Career Opportunities",
    "image": jobsImg
  },
  {
    "id": 6,
    "name": "Services",
    "description": "Professional Services",
    "image": servicesImg
  },
  {
    "id": 7,
    "name": "Fashion",
    "description": "Clothing & Style",
    "image": fashionImg
  },
  {
    "id": 8,
    "name": "Books",
    "description": "Literature & Learning",
    "image": booksImg
  }
];

export function CategoriesSection() {
  return (
    <section id="categories" className="pt-4 sm:pt-12 pb-4 sm:pb-12 bg-white scroll-mt-24">
      <div className="w-full px-4 md:px-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.21, 0.8, 0.32, 1] }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Discover Everything You Need  
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Browse through our diverse categories and find exactly what you're looking for.
          </p>
        </motion.div>

        {/* Animated Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {categoriesData.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.21, 0.8, 0.32, 1]
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="w-full"
            >
              <div 
                className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
                style={{
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <h3 className="text-white text-sm sm:text-base font-bold mb-1">
                    {category.name}
                  </h3>
                  <p className="text-white/90 text-xs sm:text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}