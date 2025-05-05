
import { Book, BookOpen, Truck, Users } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 bg-bookstore-purple-light p-3 rounded-lg">
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-bookstore-charcoal">{title}</h3>
        <p className="text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-6 bg-bookstore-purple-light/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-bookstore-charcoal font-serif">About BookNest</h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              BookNest is more than just an online bookstore. We're a community of book lovers dedicated to sharing the joy of reading and making quality literature accessible to everyone.
            </p>
            
            <div className="mt-8 grid grid-cols-1 gap-6">
              <Feature 
                icon={<Book className="h-6 w-6 text-bookstore-purple" />}
                title="Vast Selection"
                description="Over 10,000 titles across all genres, including rare and limited editions."
              />
              
              <Feature 
                icon={<Truck className="h-6 w-6 text-bookstore-purple" />}
                title="Fast Shipping"
                description="Free shipping on orders over $35 with delivery within 2-3 business days."
              />
              
              <Feature 
                icon={<Users className="h-6 w-6 text-bookstore-purple" />}
                title="Community"
                description="Join our book clubs, author events, and reading challenges."
              />
              
              <Feature 
                icon={<BookOpen className="h-6 w-6 text-bookstore-purple" />}
                title="Expert Recommendations"
                description="Personalized suggestions from our team of avid readers and literary experts."
              />
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=841&q=80" 
                alt="Bookstore interior" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 -rotate-6 w-full h-full bg-bookstore-purple rounded-lg -z-10"></div>
            <div className="absolute bottom-8 right-8 bg-white p-4 rounded-lg shadow-lg max-w-xs">
              <p className="text-bookstore-charcoal italic text-sm">
                "BookNest has transformed my reading experience! Their recommendations are always spot-on."
              </p>
              <div className="mt-2 flex items-center">
                <div className="text-yellow-500 text-sm">★★★★★</div>
                <p className="ml-2 text-gray-600 text-xs">Sarah T., Loyal Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
