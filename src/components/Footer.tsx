
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">FurnishEverywhere</h3>
            <p className="text-gray-300 mb-4">
              Quality furniture for every home, delivered to your doorstep.
            </p>
            <p className="text-gray-300">
              123 Furniture Street<br />
              Design District<br />
              Anywhere, World 12345
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-white">All Products</Link>
              </li>
              <li>
                <Link to="/categories/living-room" className="text-gray-300 hover:text-white">Living Room</Link>
              </li>
              <li>
                <Link to="/categories/bedroom" className="text-gray-300 hover:text-white">Bedroom</Link>
              </li>
              <li>
                <Link to="/categories/dining" className="text-gray-300 hover:text-white">Dining</Link>
              </li>
              <li>
                <Link to="/categories/office" className="text-gray-300 hover:text-white">Office</Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-white">Shipping & Delivery</Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 hover:text-white">Returns & Refunds</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest products and offers.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full text-black rounded-l focus:outline-none"
              />
              <button className="bg-furniture-primary hover:bg-furniture-secondary text-white px-4 py-2 rounded-r transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} FurnishEverywhere. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
