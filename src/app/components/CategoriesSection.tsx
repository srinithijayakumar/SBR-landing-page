import { motion } from 'framer-motion';

// SVG Icons for categories
const categoryIcons = {
  electronics: (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17 2v2h3v16H4V4h3V2h2v2h6V2h2zM6 6v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"/>
    </svg>
  ),
  vehicles: (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
    </svg>
  ),
  realEstate: (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
  ),
  furniture: (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"/>
      <path d="M5 1v4H3V3H1v18h2v-2h2v4h12V1H5zm10 18H7V5h8v14z"/>
    </svg>
  ),
  jobs: (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5z"/>
    </svg>
  ),
  services: (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
    </svg>
  ),
  fashion: (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 21 12 17.77 5.82 21 7 13.87 2 9l6.91-.74L12 2z"/>
    </svg>
  ),
  books: (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
    </svg>
  )
};

// Static categories data - with SVG icons
const categoriesData = [
  {
    "id": 1,
    "name": "Electronics",
    "description": "Gadgets & Tech",
    "color": "bg-blue-500",
    "icon": categoryIcons.electronics
  },
  {
    "id": 2,
    "name": "Vehicles",
    "description": "Cars & Bikes",
    "color": "bg-green-500",
    "icon": categoryIcons.vehicles
  },
  {
    "id": 3,
    "name": "Real Estate",
    "description": "Properties",
    "color": "bg-purple-500",
    "icon": categoryIcons.realEstate
  },
  {
    "id": 4,
    "name": "Furniture",
    "description": "Home & Office",
    "color": "bg-orange-500",
    "icon": categoryIcons.furniture
  },
  {
    "id": 5,
    "name": "Jobs",
    "description": "Career Opportunities",
    "color": "bg-red-500",
    "icon": categoryIcons.jobs
  },
  {
    "id": 6,
    "name": "Services",
    "description": "Professional Services",
    "color": "bg-teal-500",
    "icon": categoryIcons.services
  },
  {
    "id": 7,
    "name": "Fashion",
    "description": "Clothing & Style",
    "color": "bg-pink-500",
    "icon": categoryIcons.fashion
  },
  {
    "id": 8,
    "name": "Books",
    "description": "Literature & Learning",
    "color": "bg-indigo-500",
    "icon": categoryIcons.books
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
              <div className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <motion.div 
                  className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-1">
                  {category.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}