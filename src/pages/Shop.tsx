
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Product } from "@/components/FeaturedProducts";

// Extended list of products
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
    id: "wooden-dining-table",
    name: "Natural Wood Dining Table",
    price: 649.99,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    category: "dining",
    isFeatured: true
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
    id: "office-desk",
    name: "Executive Office Desk",
    price: 549.99,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    category: "office",
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
    id: "bedside-table",
    name: "Minimalist Bedside Table",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    category: "bedroom"
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
    id: "bookcase",
    name: "5-Tier Bookcase",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    category: "office"
  }
];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>("featured");
  
  // Filter products by category if one is selected
  const filteredProducts = activeCategory 
    ? allProducts.filter(product => product.category === activeCategory)
    : allProducts;
  
  // Sort products based on selection
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        // Default sort: featured first, then alphabetically
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return a.name.localeCompare(b.name);
    }
  });
  
  // Get unique categories
  const categories = [...new Set(allProducts.map(product => product.category))];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
            
            <div className="flex items-center space-x-4">
              <label htmlFor="sort" className="text-gray-700">Sort by:</label>
              <select 
                id="sort" 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-md p-2"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Filter Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow p-6 sticky top-20">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Categories</h3>
                <div className="space-y-2">
                  <div 
                    className={`cursor-pointer p-2 rounded ${activeCategory === null ? 'bg-furniture-primary text-white' : 'hover:bg-gray-100'}`}
                    onClick={() => setActiveCategory(null)}
                  >
                    All Products
                  </div>
                  {categories.map(category => (
                    <div 
                      key={category}
                      className={`cursor-pointer p-2 rounded ${activeCategory === category ? 'bg-furniture-primary text-white' : 'hover:bg-gray-100'}`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category.replace('-', ' ')}
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 my-6 pt-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Price Range</h3>
                  <div className="flex items-center">
                    <input 
                      type="range" 
                      min="0" 
                      max="2000" 
                      className="w-full" 
                    />
                  </div>
                  <div className="flex justify-between mt-2">
                    <span>$0</span>
                    <span>$2000+</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="lg:col-span-3">
              {sortedProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-xl text-gray-600">No products found.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
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
                        <Link to={`/categories/${product.category}`}>
                          <span className="text-sm text-furniture-secondary font-medium mb-2 block">
                            {product.category.replace('-', ' ')}
                          </span>
                        </Link>
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
