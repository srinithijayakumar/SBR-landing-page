// Static categories data - with colored backgrounds
const categoriesData = [
  {
    "id": 1,
    "name": "Electronics",
    "description": "Gadgets & Tech",
    "color": "bg-blue-500",
    "icon": "📱"
  },
  {
    "id": 2,
    "name": "Vehicles",
    "description": "Cars & Bikes",
    "color": "bg-green-500",
    "icon": "🚗"
  },
  {
    "id": 3,
    "name": "Real Estate",
    "description": "Properties",
    "color": "bg-purple-500",
    "icon": "🏠"
  },
  {
    "id": 4,
    "name": "Furniture",
    "description": "Home & Office",
    "color": "bg-orange-500",
    "icon": "🪑"
  },
  {
    "id": 5,
    "name": "Jobs",
    "description": "Career Opportunities",
    "color": "bg-red-500",
    "icon": "💼"
  },
  {
    "id": 6,
    "name": "Services",
    "description": "Professional Services",
    "color": "bg-teal-500",
    "icon": "🔧"
  },
  {
    "id": 7,
    "name": "Fashion",
    "description": "Clothing & Style",
    "color": "bg-pink-500",
    "icon": "👕"
  },
  {
    "id": 8,
    "name": "Books",
    "description": "Literature & Learning",
    "color": "bg-indigo-500",
    "icon": "📚"
  }
];

export function CategoriesSection() {
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

        {/* Simple Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {categoriesData.map((category) => (
            <div key={category.id} className="w-full">
              <div className="bg-white border border-slate-200 rounded-xl p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <span className="text-2xl">
                    {category.icon}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-1">
                  {category.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}