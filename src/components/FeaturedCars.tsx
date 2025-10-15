import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowRight, Fuel, Gauge, Calendar } from "lucide-react";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";

const featuredCars = [
  {
    id: 1,
    name: "2019 Toyota Fielder Hybrid",
    price: "KES 1,850,000",
    year: 2019,
    fuel: "Hybrid",
    mileage: "45,000 km",
    image: car1,
    status: "Available",
  },
  {
    id: 2,
    name: "2018 Mazda CX-3",
    price: "KES 2,100,000",
    year: 2018,
    fuel: "Petrol",
    mileage: "52,000 km",
    image: car2,
    status: "Available",
  },
  {
    id: 3,
    name: "2016 BMW X3 xDrive 20d",
    price: "KES 3,200,000",
    year: 2016,
    fuel: "Diesel",
    mileage: "68,000 km",
    image: car3,
    status: "Reserved",
  },
];

const FeaturedCars = () => {
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

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCars.map((car) => (
            <Card
              key={car.id}
              className="group overflow-hidden hover:shadow-large transition-all duration-300 border-2 hover:border-primary"
            >
              {/* Car Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      car.status === "Available"
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
                  <p className="text-2xl font-bold text-primary">{car.price}</p>
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
