import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowRight, Fuel, Gauge, Calendar } from "lucide-react";
import { fetchCars } from "../services/api";

const FeaturedCars = () => {
  const [cars, setCars] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCars() {
      try {
        setLoading(true);
        const data = await fetchCars();
        setCars(data.slice(0, 3)); 
      } catch (error) {
        console.error("Failed to load cars:", error);
      } finally {
        setLoading(false);
      }
    }

    loadCars();
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Vehicles</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Explore our handpicked selection of premium imported vehicles, ready for delivery to Kenya.
          </p>
        </div>

        {/* Loading and Empty States */}
        {loading ? (
          <div className="text-center py-10 text-gray-500">Loading featured cars...</div>
        ) : cars.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            No cars available at the moment.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {cars.map((car) => {
              // ✅ Handle multiple images
              const firstImage =
                car.images && car.images.length > 0
                  ? `http://127.0.0.1:8000${car.images[0].image}`
                  : "/placeholder-car.jpg";

              return (
                <Card
                  key={car.id}
                  className="group overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-500"
                >
                  {/* Car Image */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    {car.images && car.images.length > 0 ? (
                      <img
                        src={car.images[0].image.startsWith("http")
                          ? car.images[0].image
                          : `http://127.0.0.1:8000${car.images[0].image}`}
                        alt={car.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
                        No Image Available
                      </div>
                    )}

                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          car.status === "available"
                            ? "bg-green-500 text-white"
                            : "bg-yellow-400 text-black"
                        }`}
                      >
                        {car.status}
                      </span>
                    </div>
                  </div>

                  {/* Car Details */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                        {car.name}
                      </h3>
                      <p className="text-2xl font-bold text-blue-600">
                        {car.price
                          ? `KES ${Number(car.price).toLocaleString()}`
                          : "Price on Request"}
                      </p>
                    </div>

                    {/* Car Specs */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{car.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Fuel className="h-4 w-4" />
                        <span>{car.engine_type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gauge className="h-4 w-4" />
                        <span>{car.mileage.toLocaleString()} km</span>
                      </div>
                    </div>

                    <Button variant="default" className="w-full" asChild>
                      <Link to={`/inventory/${car.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/inventory">
              View All Inventory
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
