
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Testimonials from "@/components/Testimonials";
import NewsletterBanner from "@/components/NewsletterBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="py-8 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="text-4xl text-furniture-primary mb-2">
                <i className="fas fa-truck"></i>
              </div>
              <h3 className="font-semibold mb-1">Free Delivery</h3>
              <p className="text-sm text-gray-600">On orders over $500</p>
            </div>
            <div className="p-4">
              <div className="text-4xl text-furniture-primary mb-2">
                <i className="fas fa-undo"></i>
              </div>
              <h3 className="font-semibold mb-1">Easy Returns</h3>
              <p className="text-sm text-gray-600">30-day return policy</p>
            </div>
            <div className="p-4">
              <div className="text-4xl text-furniture-primary mb-2">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="font-semibold mb-1">Secure Payment</h3>
              <p className="text-sm text-gray-600">Protected transactions</p>
            </div>
            <div className="p-4">
              <div className="text-4xl text-furniture-primary mb-2">
                <i className="fas fa-headset"></i>
              </div>
              <h3 className="font-semibold mb-1">Customer Support</h3>
              <p className="text-sm text-gray-600">24/7 dedicated support</p>
            </div>
          </div>
        </div>
        <CategorySection />
        <FeaturedProducts />
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="furniture-section-title">Quality Craftsmanship</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At FurnishEverywhere, we believe furniture should be both beautiful and durable. That's why all our pieces are crafted with premium materials and attention to detail.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Whether you're furnishing a new home or refreshing your space, our collection offers timeless designs that will transform your interiors.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-furniture-primary mr-2">✓</span>
                    <span>Premium quality materials</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-furniture-primary mr-2">✓</span>
                    <span>Expert craftsmanship</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-furniture-primary mr-2">✓</span>
                    <span>Timeless designs</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-furniture-primary mr-2">✓</span>
                    <span>Sustainable practices</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                  alt="Craftsman working on furniture" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <Testimonials />
        <NewsletterBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
