import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-bookstore-charcoal text-white">
      <div className="container mx-auto max-w-6xl pt-12 pb-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">BookNest</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your destination for literary treasures, where every book tells a story and every reader finds their perfect match.
            </p>
            <div className="mt-4 flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bestsellers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fiction</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Non-Fiction</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Children's Books</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Textbooks</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Order Status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Payment Methods</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} BookNest. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center">
            <img src="https://cdn-icons-png.flaticon.com/512/179/179431.png" alt="Visa" className="h-6 w-auto" />
            <img src="https://cdn-icons-png.flaticon.com/512/179/179457.png" alt="Mastercard" className="h-6 w-auto ml-2" />
            <img src="https://cdn-icons-png.flaticon.com/512/179/179439.png" alt="American Express" className="h-6 w-auto ml-2" />
            <img src="https://cdn-icons-png.flaticon.com/512/179/179451.png" alt="PayPal" className="h-6 w-auto ml-2" />
          </div>
        </div>
      </div>
    </footer>
  );
}
