
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Product } from "@/components/FeaturedProducts";

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

// Additional product details
const productDetails = {
  "modern-sofa": {
    description: "Our Modern Comfort Sofa combines sleek design with unparalleled comfort. The premium fabric upholstery and solid wood frame ensure both durability and style. Perfect for contemporary living spaces.",
    dimensions: "84\" W x 38\" D x 34\" H",
    materials: ["Premium polyester blend fabric", "Solid hardwood frame", "High-density foam cushions"],
    colors: ["Charcoal Gray", "Navy Blue", "Beige"],
    inStock: true,
    deliveryTime: "2-3 weeks",
    additionalImages: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    ]
  },
  "wooden-dining-table": {
    description: "Our Natural Wood Dining Table features a stunning solid oak top with a live edge design. The black metal legs provide a contemporary contrast while ensuring stability and durability.",
    dimensions: "72\" L x 36\" W x 30\" H",
    materials: ["Solid oak top", "Powder-coated steel legs", "Natural oil finish"],
    colors: ["Natural Oak", "Walnut", "Ebony"],
    inStock: true,
    deliveryTime: "3-4 weeks",
    additionalImages: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
    ]
  },
  "king-bed-frame": {
    description: "The Luxurious King Bed Frame combines modern design with classic craftsmanship. The padded headboard provides comfort for reading or watching TV, while the solid wood frame ensures years of durability.",
    dimensions: "80\" L x 76\" W x 45\" H (headboard)",
    materials: ["Solid hardwood frame", "Premium linen upholstery", "Reinforced center beam"],
    colors: ["Light Gray", "Oatmeal", "Navy"],
    inStock: true,
    deliveryTime: "2-3 weeks",
    additionalImages: [
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    ]
  },
  "office-desk": {
    description: "The Executive Office Desk provides ample workspace with two built-in drawers for storage. The sleek design and quality materials make it perfect for your home office or professional workspace.",
    dimensions: "60\" W x 30\" D x 29\" H",
    materials: ["Engineered wood with oak veneer", "Metal drawer slides", "Adjustable feet"],
    colors: ["Oak", "White", "Walnut"],
    inStock: true,
    deliveryTime: "1-2 weeks",
    additionalImages: [
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
    ]
  }
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [activeImage, setActiveImage] = useState(0);
  
  // Find product by id
  const product = allProducts.find(p => p.id === id);
  
  // Get additional details
  const details = id ? productDetails[id as keyof typeof productDetails] : undefined;
  
  if (!product || !details) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Handle add to cart
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} ${selectedColor ? `(${selectedColor})` : ""} added to your cart.`,
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-furniture-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-furniture-primary">Shop</Link>
            <span className="mx-2">/</span>
            <Link to={`/categories/${product.category}`} className="hover:text-furniture-primary">
              {product.category.replace('-', ' ')}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{product.name}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="mb-4 rounded-lg overflow-hidden border">
                <img 
                  src={activeImage === 0 ? product.image : details.additionalImages[activeImage - 1]} 
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div 
                  className={`cursor-pointer rounded-md overflow-hidden border-2 ${activeImage === 0 ? 'border-furniture-primary' : 'border-transparent'}`}
                  onClick={() => setActiveImage(0)}
                >
                  <img 
                    src={product.image} 
                    alt={`${product.name}-main`}
                    className="w-full h-24 object-cover"
                  />
                </div>
                {details.additionalImages.map((img, index) => (
                  <div 
                    key={index}
                    className={`cursor-pointer rounded-md overflow-hidden border-2 ${activeImage === index + 1 ? 'border-furniture-primary' : 'border-transparent'}`}
                    onClick={() => setActiveImage(index + 1)}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name}-${index + 1}`}
                      className="w-full h-24 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              {product.isNew && (
                <span className="inline-block bg-furniture-primary text-white text-xs font-bold px-3 py-1 rounded mb-4">
                  New Arrival
                </span>
              )}
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="text-2xl font-bold text-furniture-primary mb-4">
                ${product.price.toFixed(2)}
              </div>
              
              <p className="text-gray-700 mb-6">{details.description}</p>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Color</h3>
                <div className="flex space-x-2">
                  {details.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-md ${selectedColor === color ? 'border-furniture-primary bg-furniture-primary/10' : 'border-gray-300'}`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Quantity</h3>
                <div className="flex items-center">
                  <button 
                    className="px-4 py-2 border border-gray-300 rounded-l-md"
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  >
                    -
                  </button>
                  <span className="w-16 text-center border-t border-b border-gray-300 py-2">
                    {quantity}
                  </span>
                  <button 
                    className="px-4 py-2 border border-gray-300 rounded-r-md"
                    onClick={() => setQuantity(prev => prev + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Add to Cart Button */}
              <div className="mb-8">
                <Button 
                  className="w-full py-6 text-lg bg-furniture-primary hover:bg-furniture-primary/90"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <p className="text-sm text-center mt-2 text-gray-600">
                  {details.inStock 
                    ? `In stock - Delivery in ${details.deliveryTime}` 
                    : "Currently out of stock"}
                </p>
              </div>
              
              {/* Product Details */}
              <div className="border-t border-gray-200 pt-6">
                <div className="mb-4">
                  <h3 className="font-semibold">Dimensions</h3>
                  <p className="text-gray-600">{details.dimensions}</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold">Materials</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {details.materials.map((material, index) => (
                      <li key={index}>{material}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
