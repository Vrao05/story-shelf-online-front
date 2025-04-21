import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="py-4 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="text-2xl font-bold text-bookstore-purple">BookHaven</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-bookstore-charcoal hover:text-bookstore-purple transition-colors">Home</a>
          <a href="#categories" className="text-bookstore-charcoal hover:text-bookstore-purple transition-colors">Categories</a>
          <a href="#featured" className="text-bookstore-charcoal hover:text-bookstore-purple transition-colors">Featured</a>
          <a href="#about" className="text-bookstore-charcoal hover:text-bookstore-purple transition-colors">About</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              className="pl-8 w-36 lg:w-64 h-9 focus-visible:ring-bookstore-purple" 
              placeholder="Search books..." 
            />
          </div>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5 text-bookstore-charcoal" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5 text-bookstore-charcoal" />
          </Button>
          <Link to="/signin">
            <Button className="bg-bookstore-purple hover:bg-bookstore-purple-dark text-white">
              Sign In
            </Button>
          </Link>
        </div>
        
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6 text-bookstore-charcoal" />
        </button>
        
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 md:hidden">
            <div className="flex justify-end p-4">
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6 text-bookstore-charcoal" />
              </button>
            </div>
            <div className="flex flex-col items-center gap-6 pt-8">
              <a href="#" className="text-xl text-bookstore-charcoal">Home</a>
              <a href="#categories" className="text-xl text-bookstore-charcoal">Categories</a>
              <a href="#featured" className="text-xl text-bookstore-charcoal">Featured</a>
              <a href="#about" className="text-xl text-bookstore-charcoal">About</a>
              
              <div className="relative w-full px-6 mt-4">
                <Search className="absolute left-8 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  className="pl-8 w-full h-10 focus-visible:ring-bookstore-purple" 
                  placeholder="Search books..." 
                />
              </div>
              
              <div className="flex gap-4 mt-4">
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5 text-bookstore-charcoal" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5 text-bookstore-charcoal" />
                </Button>
              </div>
              
              <Link to="/signin">
                <Button className="w-2/3 bg-bookstore-purple hover:bg-bookstore-purple-dark text-white mt-4">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
