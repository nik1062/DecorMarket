
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

const featuredProducts: Product[] = [
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
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="furniture-section-title">Featured Products</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
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
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-furniture-primary text-furniture-primary hover:bg-furniture-primary hover:text-white px-8">
            <Link to="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
