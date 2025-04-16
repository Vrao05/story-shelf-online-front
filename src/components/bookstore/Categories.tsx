
import { ArrowRight } from "lucide-react";

interface Category {
  id: number;
  name: string;
  image: string;
  count: number;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Fiction",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
    count: 1243
  },
  {
    id: 2,
    name: "Science & Technology",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    count: 856
  },
  {
    id: 3,
    name: "Business & Economics",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1011&q=80",
    count: 742
  },
  {
    id: 4,
    name: "Literature & Classics",
    image: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    count: 651
  },
  {
    id: 5,
    name: "Biography & Memoir",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    count: 428
  },
  {
    id: 6,
    name: "Self Improvement",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    count: 367
  }
];

export function Categories() {
  return (
    <section id="categories" className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-bookstore-charcoal font-serif">Browse by Category</h2>
          <p className="text-gray-600 mt-2 max-w-lg mx-auto">Explore our vast collection organized by categories to help you find your perfect read</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <a 
              key={category.id} 
              href="#" 
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                    <p className="text-gray-300 text-sm">{category.count} Books</p>
                  </div>
                  <div className="bg-white rounded-full p-2 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowRight className="h-4 w-4 text-bookstore-purple" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
