
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "NFT Artist",
    image: "/lovable-uploads/avatar-1.jpg",
    content: "NEFTIT has transformed how I share my digital art. The platform's engagement system is revolutionary!",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Blockchain Developer",
    image: "/lovable-uploads/avatar-2.jpg",
    content: "The most user-friendly NFT platform I've used. Their task-based system makes Web3 accessible to everyone.",
    rating: 5
  },
  {
    name: "Michael Roberts",
    role: "Crypto Investor",
    image: "/lovable-uploads/avatar-3.jpg",
    content: "Outstanding platform for discovering quality NFT projects. The rewards system keeps me coming back daily.",
    rating: 5
  }
];

const TrustBadges = () => (
  <div className="flex flex-wrap justify-center gap-8 items-center py-12">
    {['Verified Security', 'Blockchain Certified', '24/7 Support', 'Community Approved'].map((badge) => (
      <div
        key={badge}
        className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-lg rounded-full border border-white/10 hover:border-white/20 transition-all duration-300"
      >
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-sm font-medium text-white/80">{badge}</span>
      </div>
    ))}
  </div>
);

export const Testimonials = () => {
  return (
    <div className="relative py-32">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent blur-3xl" />
      
      <div className="text-center mb-16 relative">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Trusted by Creators & Collectors
        </h2>
        <p className="mt-4 text-lg text-white/60">
          Join thousands of satisfied users in the NEFTIT ecosystem
        </p>
      </div>

      <TrustBadges />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-4">
        {testimonials.map((testimonial, index) => (
          <Card 
            key={testimonial.name}
            className="relative overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group"
            style={{ 
              animationDelay: `${index * 150}ms`,
            }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-2xl rounded-full transform group-hover:scale-150 transition-transform duration-700" />
            
            <div className="p-6 relative">
              <Quote className="w-10 h-10 text-purple-400/40 mb-4" />
              
              <p className="text-white/80 mb-6 leading-relaxed">
                {testimonial.content}
              </p>
              
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                
                <div>
                  <h4 className="font-semibold text-white/90">{testimonial.name}</h4>
                  <p className="text-sm text-white/60">{testimonial.role}</p>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 flex">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
