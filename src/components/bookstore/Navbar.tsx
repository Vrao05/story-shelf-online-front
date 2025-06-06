
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="py-4 px-6 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="text-2xl font-bold text-bookstore-purple">BookNest</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              className="pl-8 w-36 lg:w-64 h-9 focus-visible:ring-bookstore-purple" 
              placeholder="Search books..." 
            />
          </div>
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
              <div className="relative w-full px-6 mt-4">
                <Search className="absolute left-8 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  className="pl-8 w-full h-10 focus-visible:ring-bookstore-purple" 
                  placeholder="Search books..." 
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
