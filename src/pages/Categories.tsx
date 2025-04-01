
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  productCount: number;
}

const categories: Category[] = [
  {
    id: "living-room",
    name: "Living Room",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    description: "Transform your living space with our stunning collection of sofas, coffee tables, entertainment units, and accent furniture.",
    productCount: 24
  },
  {
    id: "bedroom",
    name: "Bedroom",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    description: "Create your perfect sanctuary with our beautiful range of beds, mattresses, nightstands, wardrobes, and storage solutions.",
    productCount: 18
  },
  {
    id: "dining",
    name: "Dining",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    description: "Elevate your dining experience with our collection of tables, chairs, bar stools, buffets, and kitchen furniture.",
    productCount: 15
  },
  {
    id: "office",
    name: "Office",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    description: "Create a productive workspace with our ergonomic desks, chairs, bookcases, filing cabinets, and storage solutions.",
    productCount: 12
  },
  {
    id: "outdoor",
    name: "Outdoor",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    description: "Make the most of your outdoor space with our weather-resistant furniture, including dining sets, lounges, and accessories.",
    productCount: 9
  },
  {
    id: "decor",
    name: "Decor & Accessories",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    description: "Add the finishing touches to your home with our selection of rugs, lighting, wall art, and decorative accessories.",
    productCount: 30
  }
];

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-gray-900">Browse Categories</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link 
                key={category.id}
                to={`/categories/${category.id}`} 
                className="group"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow h-full product-card">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-furniture-primary transition-colors">
                        {category.name}
                      </h3>
                      <span className="text-furniture-secondary text-sm font-medium">
                        {category.productCount} products
                      </span>
                    </div>
                    <p className="text-gray-600 line-clamp-2">{category.description}</p>
                    <div className="mt-4 flex justify-end">
                      <span className="text-furniture-primary font-medium group-hover:underline">
                        Browse Collection →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
