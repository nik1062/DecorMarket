
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-furniture-primary">
            Furnish<span className="text-furniture-secondary">Everywhere</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-furniture-primary font-medium">Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-furniture-primary font-medium">Shop</Link>
            <Link to="/categories" className="text-gray-700 hover:text-furniture-primary font-medium">Categories</Link>
            <Link to="/about" className="text-gray-700 hover:text-furniture-primary font-medium">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-furniture-primary font-medium">Contact</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center border rounded-full pl-4 pr-2 py-1 bg-gray-50">
              <Input 
                type="text" 
                placeholder="Search products..." 
                className="border-0 focus-visible:ring-0 bg-transparent w-40 lg:w-60"
              />
              <Button size="icon" variant="ghost" className="text-gray-500">
                <Search size={20} />
              </Button>
            </div>
            
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-6 w-6 text-gray-700" />
              </Button>
              <span className="absolute -top-1 -right-1 bg-furniture-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>

            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white absolute left-0 right-0 shadow-md z-50 px-4 mt-2">
            <div className="flex items-center border rounded-md mb-4">
              <Input 
                type="text" 
                placeholder="Search products..." 
                className="border-0 focus-visible:ring-0"
              />
              <Button size="icon" variant="ghost" className="text-gray-500">
                <Search size={18} />
              </Button>
            </div>
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-furniture-primary font-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/shop" className="text-gray-700 hover:text-furniture-primary font-medium" onClick={() => setIsMenuOpen(false)}>
                Shop
              </Link>
              <Link to="/categories" className="text-gray-700 hover:text-furniture-primary font-medium" onClick={() => setIsMenuOpen(false)}>
                Categories
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-furniture-primary font-medium" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-furniture-primary font-medium" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
