
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7')] bg-cover bg-center py-32 md:py-40">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Transform Your Space with Quality Furniture
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Discover our collection of premium, handcrafted furniture for every room in your home.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-furniture-primary hover:bg-furniture-primary/90 text-white px-8 py-6 rounded-md text-lg">
              <Link to="/shop">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 rounded-md text-lg">
              <Link to="/categories">View Categories</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
