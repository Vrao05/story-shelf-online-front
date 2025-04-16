
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-r from-bookstore-purple-light to-white">
      {/* Decorative elements */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-bookstore-purple opacity-10"></div>
      <div className="absolute bottom-12 -left-16 w-48 h-48 rounded-full bg-bookstore-purple opacity-10"></div>
      
      <div className="container mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0 animate-fade-in-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bookstore-charcoal leading-tight font-serif">
            Discover Your <span className="text-bookstore-purple">Next</span> Favorite Book
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
            Explore thousands of titles with our curated collection of bestsellers, new releases, and classic literature.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                className="pl-10 pr-4 py-6 text-base rounded-full border-bookstore-purple-light focus-visible:ring-bookstore-purple shadow-sm" 
                placeholder="Search by title, author, or ISBN..." 
              />
            </div>
            <Button className="px-8 py-6 bg-bookstore-purple hover:bg-bookstore-purple-dark text-white rounded-full">
              Search
            </Button>
          </div>
          
          <div className="mt-6 text-sm text-gray-500">
            <span>Popular searches: </span>
            <a href="#" className="text-bookstore-purple hover:underline">Fiction</a>,{" "}
            <a href="#" className="text-bookstore-purple hover:underline">Biography</a>,{" "}
            <a href="#" className="text-bookstore-purple hover:underline">Self-help</a>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative animate-fade-in-right">
            <img 
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1290&q=80" 
              alt="Stack of books" 
              className="w-full max-w-lg rounded-lg shadow-xl transform rotate-1 animate-float"
            />
            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg transform -rotate-3">
              <div className="flex items-center gap-2">
                <div className="bg-green-500 h-3 w-3 rounded-full"></div>
                <span className="text-sm font-semibold">10,000+ Books</span>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg transform rotate-3">
              <div className="flex items-center gap-2">
                <div className="bg-bookstore-purple h-3 w-3 rounded-full"></div>
                <span className="text-sm font-semibold">Free Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
