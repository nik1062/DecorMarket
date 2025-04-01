
const testimonials = [
  {
    id: 1,
    name: "Emily Rodriguez",
    role: "Interior Designer",
    content: "The quality and craftsmanship of the furniture from FurnishEverywhere is exceptional. My clients are always impressed with the pieces I recommend from their collection.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Homeowner",
    content: "After searching for months for the perfect dining set, I finally found it at FurnishEverywhere. The ordering process was simple and delivery was faster than expected.",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Office Manager",
    content: "We furnished our entire office with pieces from FurnishEverywhere. The furniture is not only beautiful but durable and functional. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-furniture-beige/50">
      <div className="container mx-auto px-4">
        <h2 className="furniture-section-title">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-md relative product-card"
            >
              <div className="mb-6">
                <svg 
                  className="h-10 w-10 text-furniture-secondary opacity-20 absolute top-6 right-6" 
                  fill="currentColor" 
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8v10c0 2.2-1.8 4-4 4H4c-1.1 0-2 .9-2 2v2h8c3.3 0 6-2.7 6-6V8h-6zm20 0v10c0 2.2-1.8 4-4 4h-2c-1.1 0-2 .9-2 2v2h8c3.3 0 6-2.7 6-6V8h-6z" />
                </svg>
                <p className="text-gray-600 italic relative z-10">{testimonial.content}</p>
              </div>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-furniture-secondary"
                />
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
