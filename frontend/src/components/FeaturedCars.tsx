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
      setLoading(true);
      const data = await fetchCars();
      setCars(data.slice(0, 3)); // ✅ show only first 3
      setLoading(false);
    }
    loadCars();
  }, []);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Vehicles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked selection of premium imported vehicles, ready for delivery to Kenya.
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-10 text-muted-foreground">Loading featured cars...</div>
        ) : cars.length === 0 ? (
          <div className="text-center py-10 text-muted-foreground">
            No cars are available at the moment.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {cars.map((car) => (
              <Card
                key={car.id}
                className="group overflow-hidden hover:shadow-large transition-all duration-300 border-2 hover:border-primary"
              >
                {/* Car Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={
                      car.image
                        ? `http://127.0.0.1:8000${car.image}`
                        : "/placeholder-car.jpg"
                    }
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        car.status === "available"
                          ? "bg-primary text-primary-foreground"
                          : "bg-accent text-accent-foreground"
                      }`}
                    >
                      {car.status}
                    </span>
                  </div>
                </div>

                {/* Car Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {car.name}
                    </h3>
                    <p className="text-2xl font-bold text-primary">
                      {car.price ? `KES ${Number(car.price).toLocaleString()}` : "Price on Request"}
                    </p>
                  </div>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{car.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Fuel className="h-4 w-4" />
                      <span>{car.fuel}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gauge className="h-4 w-4" />
                      <span>{car.mileage}</span>
                    </div>
                  </div>

                  <Button
                    variant="default"
                    className="w-full group-hover:shadow-medium"
                    asChild
                  >
                    <Link to={`/inventory/${car.id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
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
