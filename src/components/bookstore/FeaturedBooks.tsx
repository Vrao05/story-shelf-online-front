
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  price: string;
  rating: number;
}

const featuredBooks: Book[] = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: "$16.99",
    rating: 4.5
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    price: "$14.99",
    rating: 4.8
  },
  {
    id: 3,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    price: "$13.99",
    rating: 4.3
  },
  {
    id: 4,
    title: "Educated",
    author: "Tara Westover",
    cover: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80",
    price: "$15.99",
    rating: 4.6
  }
];

export function FeaturedBooks() {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="text-yellow-500">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-500">★</span>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
    }
    
    return stars;
  };
  
  return (
    <section id="featured" className="py-16 px-6 bg-bookstore-cream">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-bookstore-charcoal font-serif">Featured Books</h2>
            <p className="text-gray-600 mt-2">Handpicked favorites for every reader</p>
          </div>
          <Button variant="ghost" className="hidden sm:flex items-center gap-2 text-bookstore-purple hover:text-bookstore-purple-dark">
            View All <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book, index) => (
            <Card key={book.id} className="overflow-hidden transition-all hover:shadow-lg group animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="relative pt-[120%]">
                <img 
                  src={book.cover} 
                  alt={book.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-bookstore-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-bookstore-charcoal line-clamp-1">{book.title}</h3>
                <p className="text-gray-600 text-sm">{book.author}</p>
                <div className="flex text-sm mt-2">
                  {renderStars(book.rating)}
                  <span className="ml-1 text-gray-500">({book.rating})</span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="font-bold text-bookstore-purple">{book.price}</span>
                  <Button className="bg-bookstore-purple hover:bg-bookstore-purple-dark text-white rounded-full h-8 px-3">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center sm:hidden">
          <Button variant="outline" className="border-bookstore-purple text-bookstore-purple hover:bg-bookstore-purple-light">
            View All Books
          </Button>
        </div>
      </div>
    </section>
  );
}
