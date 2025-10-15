import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedCars from "@/components/FeaturedCars";
import Services from "@/components/Services";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedCars />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
