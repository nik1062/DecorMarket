
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[url('https://images.unsplash.com/photo-1483058712412-4245e9b90334')] bg-cover bg-center py-24">
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About FurnishEverywhere</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We're passionate about creating beautiful, high-quality furniture that transforms your living spaces.
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="furniture-section-title">Our Story</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Founded in 2010, FurnishEverywhere began as a small family-owned furniture workshop with a passion for craftsmanship and design. What started as a local business has grown into a nationwide provider of quality furniture, but our dedication to excellence remains unchanged.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  We believe that furniture is more than just functional—it's an expression of style and personality that transforms houses into homes. Every piece in our collection is thoughtfully designed and crafted to bring beauty, comfort, and joy to your living spaces.
                </p>
                <p className="text-lg text-gray-700">
                  Today, we continue to expand our offerings while maintaining our commitment to quality, sustainability, and customer satisfaction. Our team of designers and craftspeople work tirelessly to create furniture that meets the highest standards of both aesthetics and durability.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                  alt="Our workshop" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-furniture-beige/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-furniture-primary mb-16">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <div className="w-20 h-20 bg-furniture-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-furniture-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Quality Craftsmanship</h3>
                <p className="text-gray-600">
                  We're committed to excellence in every piece we create, using premium materials and attention to detail to ensure furniture that lasts for generations.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <div className="w-20 h-20 bg-furniture-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-furniture-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
                <p className="text-gray-600">
                  We're dedicated to responsible sourcing and production practices that minimize our environmental impact while maximizing the longevity of our products.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <div className="w-20 h-20 bg-furniture-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-furniture-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Fair Pricing</h3>
                <p className="text-gray-600">
                  We believe in providing honest value, offering premium furniture at fair prices by streamlining our process and building direct relationships with customers.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="furniture-section-title text-center">Meet Our Team</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Behind every beautiful piece of furniture is our dedicated team of designers, craftspeople, and furniture experts who are passionate about creating the perfect pieces for your home.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                    alt="Alex Chen - Founder & CEO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold">Alex Chen</h3>
                  <p className="text-furniture-primary mb-4">Founder & CEO</p>
                  <p className="text-gray-600 text-sm">
                    With over 20 years of experience in furniture design and craftsmanship, Alex leads our vision of creating beautiful, functional furniture for modern homes.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1483058712412-4245e9b90334" 
                    alt="Sarah Johnson - Head of Design" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold">Sarah Johnson</h3>
                  <p className="text-furniture-primary mb-4">Head of Design</p>
                  <p className="text-gray-600 text-sm">
                    Sarah brings her innovative design philosophy and attention to detail to create furniture that combines aesthetic appeal with practical functionality.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                    alt="Marcus Rivera - Master Craftsman" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold">Marcus Rivera</h3>
                  <p className="text-furniture-primary mb-4">Master Craftsman</p>
                  <p className="text-gray-600 text-sm">
                    With his expert woodworking skills and passion for quality, Marcus ensures that every piece meets our exacting standards of craftsmanship.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                    alt="Emma Williams - Customer Experience" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold">Emma Williams</h3>
                  <p className="text-furniture-primary mb-4">Customer Experience</p>
                  <p className="text-gray-600 text-sm">
                    Emma leads our customer service team, ensuring that every interaction with FurnishEverywhere exceeds expectations from browsing to delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-furniture-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Browse our collection and find the perfect furniture pieces to create the home of your dreams.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-white text-furniture-primary hover:bg-furniture-beige px-8 py-6 text-lg">
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-furniture-primary px-8 py-6 text-lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
