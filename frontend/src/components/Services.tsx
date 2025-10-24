import { Card } from "./ui/card";
import { Ship, Search, GraduationCap, CarFront, Headphones } from "lucide-react";
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
    path: "/services/kenya-taxi-business-advisory",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Comprehensive Import Services
          </div>
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer end-to-end vehicle importation and business support services designed to make
            your car buying journey simple, transparent, and profitable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link to={service.path} key={index}>
              <Card className="p-6 hover:shadow-large transition-all duration-300 border-2 hover:border-primary group cursor-pointer">
                <div className="bg-hero-gradient p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
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
