import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowRight, Fuel, Gauge, Calendar } from "lucide-react";
import { fetchCars } from "../services/api";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";


interface Car {
  id: number;
  name: string;
  year: string;
  price: number;
  engine_type: string;
  mileage: number;
  status?: string;
  images?: (string | { image: string })[];
}

const FeaturedCars = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCars() {
      try {
        setLoading(true);
        const data = await fetchCars();
        console.log("✅ FeaturedCars data:", data);

        // Limit to first 3 cars
        setCars(Array.isArray(data) ? data.slice(0, 3) : []);
      } catch (error) {
        console.error("❌ Failed to load cars:", error);
      } finally {
        setLoading(false);
      }
    }

    loadCars();
  }, []);

  // Helper to safely get car image
  const getImageUrl = (car: Car): string => {
    if (!car.images || car.images.length === 0) return "/placeholder-car.jpg";

    const firstImage = car.images[0];
    const imagePath =
      typeof firstImage === "string" ? firstImage : firstImage.image;

    if (!imagePath) return "/placeholder-car.jpg";

    return imagePath.startsWith("http")
      ? imagePath
      : `${API_BASE_URL.replace('/api', '')}${imagePath}`;
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Vehicles
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our handpicked selection of premium imported vehicles, ready for delivery to Kenya.
          </p>
        </div>

        {/* Loading / Empty states */}
        {loading ? (
          <div className="text-center py-10 text-gray-500 dark:text-gray-400">
            Loading featured cars...
          </div>
        ) : cars.length === 0 ? (
          <div className="text-center py-10 text-gray-500 dark:text-gray-400">
            No cars available at the moment.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {cars.map((car) => (
              <Card
                key={car.id}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 bg-white dark:bg-gray-800"
              >
                {/* Car Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={getImageUrl(car)}
                    alt={car.name || "Car image"}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder-car.jpg";
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        car.status === "available"
                          ? "bg-green-500 text-white"
                          : "bg-yellow-400 text-black dark:text-gray-900"
                      }`}
                    >
                      {car.status || "N/A"}
                    </span>
                  </div>
                </div>

                {/* Car Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 text-gray-900 dark:text-white transition-colors">
                      {car.name || "Unnamed Car"}
                    </h3>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {car.price
                        ? `KES ${Number(car.price).toLocaleString()}`
                        : "Price on Request"}
                    </p>
                  </div>

                  {/* Car Specs */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{car.year || "—"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Fuel className="h-4 w-4" />
                      <span>{car.engine_type || "—"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gauge className="h-4 w-4" />
                      <span>
                        {car.mileage
                          ? `${car.mileage.toLocaleString()} km`
                          : "—"}
                      </span>
                    </div>
                  </div>

                  <Button
                    variant="default"
                    className="w-full dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white transition-colors"
                    asChild
                  >
                    <Link to={`/car-listing/${car.id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center">
          <Button
            variant="hero"
            size="lg"
            asChild
            className="dark:bg-blue-600 dark:hover:bg-blue-500 dark:text-white transition-colors"
          >
            <Link to="/car-listing">
              Checkout Our Car Listing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
