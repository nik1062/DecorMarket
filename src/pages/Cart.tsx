
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  color?: string;
}

const Cart = () => {
  // Sample cart items - would typically come from context/state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "modern-sofa",
      name: "Modern Comfort Sofa",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      quantity: 1,
      color: "Charcoal Gray"
    },
    {
      id: "office-desk",
      name: "Executive Office Desk",
      price: 549.99,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      quantity: 1,
      color: "Oak"
    }
  ]);
  
  // Update quantity
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  // Remove item
  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  
  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 1000 ? 0 : 49.99;
  const total = subtotal + shipping;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-gray-900">Shopping Cart</h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-lg shadow">
              <ShoppingCart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Button asChild className="bg-furniture-primary hover:bg-furniture-primary/90">
                <Link to="/shop">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="border-b px-6 py-4 bg-gray-50">
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-6">Product</div>
                      <div className="col-span-2 text-center">Price</div>
                      <div className="col-span-2 text-center">Quantity</div>
                      <div className="col-span-2 text-center">Total</div>
                    </div>
                  </div>
                  
                  {cartItems.map(item => (
                    <div key={item.id} className="border-b last:border-b-0 px-6 py-4">
                      <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-6">
                          <div className="flex items-center space-x-4">
                            <Link to={`/products/${item.id}`} className="block shrink-0">
                              <img 
                                src={item.image} 
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded"
                              />
                            </Link>
                            <div>
                              <Link to={`/products/${item.id}`} className="font-medium text-gray-900 hover:text-furniture-primary">
                                {item.name}
                              </Link>
                              {item.color && (
                                <p className="text-sm text-gray-500">Color: {item.color}</p>
                              )}
                              <button 
                                onClick={() => removeItem(item.id)} 
                                className="text-sm text-red-500 mt-1 hover:underline"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-2 text-center">
                          ${item.price.toFixed(2)}
                        </div>
                        <div className="col-span-2 text-center">
                          <div className="flex items-center justify-center">
                            <button 
                              className="px-2 py-1 border border-gray-300 rounded-l"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <span className="w-8 text-center border-t border-b border-gray-300 py-1">
                              {item.quantity}
                            </span>
                            <button 
                              className="px-2 py-1 border border-gray-300 rounded-r"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="col-span-2 text-center font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow p-6">
                  <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">
                        {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="border-t pt-4 flex justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="font-bold text-lg">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-6 bg-furniture-primary hover:bg-furniture-primary/90"
                  >
                    Proceed to Checkout
                  </Button>
                  
                  <div className="mt-6 text-center">
                    <Link to="/shop" className="text-furniture-primary hover:underline text-sm">
                      Continue Shopping
                    </Link>
                  </div>
                </div>
                
                <div className="mt-6 bg-white rounded-lg shadow p-6">
                  <h3 className="font-semibold mb-4">Have a promo code?</h3>
                  <div className="flex">
                    <input 
                      type="text" 
                      placeholder="Enter code" 
                      className="border rounded-l px-4 py-2 flex-grow focus:outline-none focus:ring-1 focus:ring-furniture-primary"
                    />
                    <Button 
                      className="rounded-l-none bg-furniture-primary hover:bg-furniture-primary/90"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
