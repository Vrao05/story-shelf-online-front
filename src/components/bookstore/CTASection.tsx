
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CTASection() {
  return (
    <section className="py-16 px-6 bg-bookstore-purple">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-white font-serif">Join Our Book-Loving Community</h2>
        <p className="mt-4 text-bookstore-purple-light/90 max-w-xl mx-auto">
          Subscribe to our newsletter for exclusive deals, author interviews, and personalized recommendations delivered straight to your inbox.
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input 
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white" 
            placeholder="Your email address" 
          />
          <Button className="bg-white text-bookstore-purple hover:bg-bookstore-purple-light hover:text-bookstore-purple-dark font-medium">
            Subscribe
          </Button>
        </div>
        
        <div className="mt-12 flex justify-center gap-6 flex-wrap">
          <div className="flex flex-col items-center">
            <div className="text-white text-3xl font-bold">10K+</div>
            <div className="text-bookstore-purple-light/90 text-sm">Books</div>
          </div>
          
          <div className="w-px h-12 bg-white/20 hidden sm:block"></div>
          
          <div className="flex flex-col items-center">
            <div className="text-white text-3xl font-bold">50K+</div>
            <div className="text-bookstore-purple-light/90 text-sm">Customers</div>
          </div>
          
          <div className="w-px h-12 bg-white/20 hidden sm:block"></div>
          
          <div className="flex flex-col items-center">
            <div className="text-white text-3xl font-bold">100+</div>
            <div className="text-bookstore-purple-light/90 text-sm">Authors</div>
          </div>
          
          <div className="w-px h-12 bg-white/20 hidden sm:block"></div>
          
          <div className="flex flex-col items-center">
            <div className="text-white text-3xl font-bold">4.8</div>
            <div className="text-bookstore-purple-light/90 text-sm">Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
