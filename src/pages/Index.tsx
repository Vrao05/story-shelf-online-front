
import { Navbar } from "@/components/bookstore/Navbar";
import { HeroSection } from "@/components/bookstore/HeroSection";
import { FeaturedBooks } from "@/components/bookstore/FeaturedBooks";
import { Categories } from "@/components/bookstore/Categories";
import { AboutSection } from "@/components/bookstore/AboutSection";
import { CTASection } from "@/components/bookstore/CTASection";
import { Footer } from "@/components/bookstore/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturedBooks />
      <Categories />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
