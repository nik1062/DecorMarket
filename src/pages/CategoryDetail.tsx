
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Product } from "@/components/FeaturedProducts";

interface CategoryInfo {
  id: string;
  name: string;
  description: string;
  banner: string;
}

const categoryInfo: Record<string, CategoryInfo> = {
  "living-room": {
    id: "living-room",
    name: "Living Room",
    description: "Create a stunning living space with our collection of stylish and comfortable furniture. From sofas and sectionals to coffee tables and entertainment units, find everything you need to design your perfect living room.",
    banner: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
  },
  "bedroom": {
    id: "bedroom",
    name: "Bedroom",
    description: "Transform your bedroom into a luxurious retreat with our beautiful collection of beds, nightstands, dressers, and more. Discover furniture that combines style, comfort, and functionality.",
    banner: "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
  },
  "dining": {
    id: "dining",
    name: "Dining",
    description: "Elevate your dining experience with our stunning collection of tables, chairs, buffets, and more. Whether you're hosting a dinner party or enjoying a family meal, our dining furniture combines style and functionality.",
    banner: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
  },
  "office": {
    id: "office",
    name: "Office",
    description: "Create a productive workspace with our collection of desks, chairs, bookcases, and storage solutions. Our office furniture combines ergonomic design with stylish aesthetics.",
    banner: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  }
};

// Sample products - normally this would come from an API
const allProducts: Product[] = [
  {
    id: "modern-sofa",
    name: "Modern Comfort Sofa",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    category: "living-room",
    isNew: true,
    isFeatured: true
  },
  {
    id: "accent-chair",
    name: "Modern Accent Chair",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    category: "living-room"
  },
  {
    id: "wooden-dining-table",
    name: "Natural Wood Dining Table",
    price: 649.99,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    category: "dining",
    isFeatured: true
  },
  {
    id: "dining-chairs-set",
    name: "Set of 4 Dining Chairs",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    category: "dining",
    isNew: true
  },
  {
    id: "king-bed-frame",
    name: "Luxurious King Bed Frame",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    category: "bedroom",
    isNew: true,
    isFeatured: true
  },
  {
    id: "bedside-table",
    name: "Minimalist Bedside Table",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    category: "bedroom"
  },
  {
    id: "office-desk",
    name: "Executive Office Desk",
    price: 549.99,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    category: "office",
    isFeatured: true
  },
  {
    id: "bookcase",
    name: "5-Tier Bookcase",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    category: "office"
  }
];

const CategoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Get category info
  const category = id ? categoryInfo[id] : undefined;
  
  // Filter products by category
  const products = allProducts.filter(product => product.category === id);
  
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
            <p className="text-gray-600 mb-8">The category you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/categories">View All Categories</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Category Banner */}
        <div className="relative h-64 md:h-80 bg-cover bg-center" style={{ backgroundImage: `url(${category.banner})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container mx-auto h-full flex items-center px-4 relative z-10">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{category.name}</h1>
              <p className="text-white/90 max-w-2xl">{category.description}</p>
            </div>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">{products.length} Products</h2>
            
            {products.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <p className="text-xl text-gray-600">No products found in this category.</p>
                <Button asChild className="mt-6 bg-furniture-primary hover:bg-furniture-primary/90">
                  <Link to="/categories">View All Categories</Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden product-card">
                    <Link to={`/products/${product.id}`} className="block relative">
                      <div className="h-64 overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                        />
                      </div>
                      {product.isNew && (
                        <span className="absolute top-4 left-4 bg-furniture-primary text-white text-xs font-bold px-3 py-1 rounded">
                          New Arrival
                        </span>
                      )}
                    </Link>
                    <div className="p-4">
                      <span className="text-sm text-furniture-secondary font-medium mb-2 block">
                        {category.name}
                      </span>
                      <Link to={`/products/${product.id}`}>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-furniture-primary transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-xl font-bold text-furniture-primary">
                          ${product.price.toFixed(2)}
                        </span>
                        <Button size="sm" className="bg-furniture-primary hover:bg-furniture-primary/90">
                          <ShoppingCart className="h-5 w-5 mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryDetail;
