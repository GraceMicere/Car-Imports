import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Fuel, Gauge, Calendar, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";

const allCars = [
  {
    id: 1,
    name: "2019 Toyota Fielder Hybrid",
    price: "KES 1,850,000",
    year: 2019,
    fuel: "Hybrid",
    mileage: "45,000 km",
    image: car1,
    status: "Available",
    type: "Wagon",
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
    type: "SUV",
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
    type: "SUV",
  },
  {
    id: 4,
    name: "2020 Toyota Corolla Fielder",
    price: "KES 1,950,000",
    year: 2020,
    fuel: "Hybrid",
    mileage: "38,000 km",
    image: car1,
    status: "Available",
    type: "Wagon",
  },
  {
    id: 5,
    name: "2019 Mazda CX-30",
    price: "KES 2,400,000",
    year: 2019,
    fuel: "Diesel",
    mileage: "42,000 km",
    image: car2,
    status: "Available",
    type: "SUV",
  },
  {
    id: 6,
    name: "2017 BMW 3 Series",
    price: "KES 2,800,000",
    year: 2017,
    fuel: "Petrol",
    mileage: "55,000 km",
    image: car3,
    status: "Available",
    type: "Sedan",
  },
];

const Inventory = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-hero-gradient text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Inventory</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              Browse our extensive collection of premium imported vehicles from Japan, UK, and Dubai.
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="border-b border-border bg-background sticky top-16 z-40 shadow-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search vehicles..." className="pl-10" />
              </div>
              
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Vehicle Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="wagon">Wagon</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Fuel Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Fuel Types</SelectItem>
                  <SelectItem value="petrol">Petrol</SelectItem>
                  <SelectItem value="diesel">Diesel</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="year">Year: Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Cars Grid */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <p className="text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{allCars.length}</span> vehicles
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCars.map((car) => (
                <Card
                  key={car.id}
                  className="group overflow-hidden hover:shadow-large transition-all duration-300 border-2 hover:border-primary"
                >
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

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {car.name}
                      </h3>
                      <p className="text-2xl font-bold text-primary">{car.price}</p>
                    </div>

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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Inventory;
