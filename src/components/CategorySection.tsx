
import { Link } from "react-router-dom";

interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

const categories: Category[] = [
  {
    id: "living-room",
    name: "Living Room",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    productCount: 24
  },
  {
    id: "bedroom",
    name: "Bedroom",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    productCount: 18
  },
  {
    id: "dining",
    name: "Dining",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    productCount: 15
  },
  {
    id: "office",
    name: "Office",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    productCount: 12
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-furniture-cream/30">
      <div className="container mx-auto px-4">
        <h2 className="furniture-section-title">Browse Categories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/categories/${category.id}`} 
              className="group"
            >
              <div className="overflow-hidden rounded-lg bg-white shadow product-card h-full">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-gray-500">{category.productCount} products</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
