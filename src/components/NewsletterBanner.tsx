
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterBanner = () => {
  return (
    <section className="py-16 bg-furniture-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Join Our Newsletter
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Subscribe to get exclusive offers, early access to new collections, and interior design tips.
        </p>
        
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Your email address"
            className="bg-white/90 border-0 text-gray-900 placeholder-gray-500 focus-visible:ring-furniture-secondary"
          />
          <Button 
            type="submit"
            className="bg-white text-furniture-primary hover:bg-furniture-beige"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterBanner;
