// Static categories data - no external dependencies
const categoriesData = [
  {
    "id": 1,
    "name": "Electronics",
    "image": "Electronics.jpg",
    "description": "Gadgets & Tech"
  },
  {
    "id": 2,
    "name": "Vehicles",
    "image": "vehicles.jpg",
    "description": "Cars & Bikes"
  },
  {
    "id": 3,
    "name": "Real Estate",
    "image": "real-estate.jpg",
    "description": "Properties"
  },
  {
    "id": 4,
    "name": "Furniture",
    "image": "Furniture.jpg",
    "description": "Home & Office"
  },
  {
    "id": 5,
    "name": "Jobs",
    "image": "Jobs.jpg",
    "description": "Career Opportunities"
  },
  {
    "id": 6,
    "name": "Services",
    "image": "Servies.jpg",
    "description": "Professional Services"
  },
  {
    "id": 7,
    "name": "Fashion",
    "image": "fashion.jpg",
    "description": "Clothing & Style"
  },
  {
    "id": 8,
    "name": "Books",
    "image": "books.jpg",
    "description": "Literature & Learning"
  }
];

// Import images directly for better performance
import electronicsImg from '../../assest/Images/Electronics.jpg';
import vehiclesImg from '../../assest/Images/vehicles.jpg';
import realEstateImg from '../../assest/Images/real-estate.jpg';
import furnitureImg from '../../assest/Images/Furniture.jpg';
import jobsImg from '../../assest/Images/Jobs.jpg';
import servicesImg from '../../assest/Images/Servies.jpg';
import fashionImg from '../../assest/Images/fashion.jpg';
import booksImg from '../../assest/Images/books.jpg';

// Create image mapping for performance
const imageMap: { [key: string]: string } = {
  'Electronics.jpg': electronicsImg,
  'vehicles.jpg': vehiclesImg,
  'real-estate.jpg': realEstateImg,
  'Furniture.jpg': furnitureImg,
  'Jobs.jpg': jobsImg,
  'Servies.jpg': servicesImg,
  'fashion.jpg': fashionImg,
  'books.jpg': booksImg,
};

// Define the category type
interface Category {
  id: number;
  name: string;
  image: string;
  description: string;
}

export function CategoriesSection() {
  // Map data with actual images - no async operations
  const categories: Category[] = categoriesData.map((category: Category) => ({
    ...category,
    image: imageMap[category.image] || category.image
  }));

  return (
    <section id="categories" className="pt-4 sm:pt-12 pb-4 sm:pb-12 bg-white scroll-mt-24">
      <div className="w-full px-4 md:px-20">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Discover Everything You Need  
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Browse through our diverse categories and find exactly what you're looking for.
          </p>
        </div>

        {/* Static Grid Layout - Zero Performance Issues */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {categories.map((category) => (
            <div key={category.id} className="w-full">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                  <h3 className="text-white text-xs sm:text-sm font-semibold">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-[10px] sm:text-xs">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}