import { Card } from "./ui/card";
import { Search, CarFront } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Search,
    title: "Vehicle Sourcing",
    description:
      "We source high-quality vehicles from trusted dealers and auctions across Japan, the UK, and Dubai — ensuring every import meets strict quality and value standards tailored to your budget.",
    path: "/services/vehicle-sourcing",
  },
  {
    icon: CarFront,
    title: "Kenya Taxi Business Advisory",
    description:
      "Thinking of starting a taxi or ride-hailing business? Get professional guidance on vehicle selection, financing, and licensing to build a profitable and sustainable taxi business in Kenya.",
    path: "/services/taxi-masterclass",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Comprehensive Import Services
          </div>
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer end-to-end vehicle importation and business support services designed to make
            your car buying journey simple, transparent, and profitable.
          </p>
        </div>

        {/* Services Grid (Centered) */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <Link to={service.path} key={index} className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%]">
              <Card className="p-8 h-full flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-200 hover:border-primary/70 group cursor-pointer">
                <div className="bg-primary/10 p-4 rounded-xl w-fit mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
