import { MessageCircle } from "lucide-react";

const FeaturedCars = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Featured Car Options
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Explore our handpicked selection of premium imported cars, ready for delivery to Kenya.
        </p>
        
        <a
          href="https://wa.me/c/254757356989"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-semibold text-lg">
            <MessageCircle className="h-5 w-5" />
            View Our Catalog
          </button>
        </a>
      </div>
    </section>
  );
};

export default FeaturedCars;