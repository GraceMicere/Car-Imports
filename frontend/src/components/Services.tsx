import { Card } from "./ui/card";
import { Ship, Search, FileCheck, Wrench, Shield, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Search,
    title: "Vehicle Sourcing",
    description:
      "We source high-quality vehicles from trusted dealers and auctions from Japan, UK, and Dubai, ensuring you get the best options for your budget.",
    path: "/services/vehicle-sourcing",
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    description:
      "Our team handles all aspects of shipping, from secure loading to efficient transportation, with real-time tracking available.",
    path: "/services/shipping-and-logistics",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description:
      "We provide secure payment options and transparent pricing, with no hidden fees throughout the importation process.",
    path: "/services/secure-payment",
  },
  {
    icon: Headphones,
    title: "Listing of vehicles",
    description:
      "Easily list your vehicles on our platform to reach potential buyers. Our streamlined process ensures your cars get maximum visibility with detailed specifications, images, and pricing.",
    path: "/services/listing-of-vehicles",
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
            We provide comprehensive vehicle importation services to make your car buying experience
            seamless and stress-free.
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
