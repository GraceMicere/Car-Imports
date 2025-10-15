import { Card } from "./ui/card";
import { Ship, Search, FileCheck, Wrench, Shield, Headphones } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Vehicle Sourcing",
    description:
      "We source high-quality vehicles from trusted dealers and auctions worldwide, ensuring you get the best options for your budget.",
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    description:
      "Our team handles all aspects of shipping, from secure loading to efficient transportation, with real-time tracking available.",
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    description:
      "We manage all customs documentation and clearance procedures, ensuring smooth and compliant importation into Kenya.",
  },
  {
    icon: Wrench,
    title: "Vehicle Inspection",
    description:
      "Every vehicle undergoes thorough inspection to verify condition, authenticity, and compliance with Kenyan standards.",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description:
      "We provide secure payment options and transparent pricing, with no hidden fees throughout the importation process.",
  },
  {
    icon: Headphones,
    title: "After-Sales Support",
    description:
      "Our commitment continues after delivery with comprehensive support for registration, maintenance, and any queries.",
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
            <Card
              key={index}
              className="p-6 hover:shadow-large transition-all duration-300 border-2 hover:border-primary group"
            >
              <div className="bg-hero-gradient p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
