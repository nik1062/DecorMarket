
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
            <p className="text-2xl text-furniture-primary font-semibold mb-4">Page Not Found</p>
            <p className="text-gray-600 mb-8">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <div className="space-y-4">
              <Button asChild className="bg-furniture-primary hover:bg-furniture-primary/90 w-full">
                <Link to="/">Back to Home</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/shop">Browse Our Products</Link>
              </Button>
              <Button asChild variant="link" className="text-gray-500">
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
