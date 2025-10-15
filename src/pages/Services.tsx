import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Ship, 
  Search, 
  FileCheck, 
  Wrench, 
  Shield, 
  Headphones,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Vehicle Sourcing",
    description:
      "We source high-quality vehicles from trusted dealers and auctions in Japan, UK, and Dubai. Our extensive network ensures you get the best options for your budget.",
    features: [
      "Access to major Japanese auctions",
      "Direct dealer relationships",
      "Wide selection of makes and models",
      "Competitive pricing",
    ],
  },
  {
    icon: Ship,
    title: "Shipping & Logistics",
    description:
      "Our team handles all aspects of shipping, from secure loading to efficient transportation. We provide real-time tracking and updates throughout the journey.",
    features: [
      "Secure container shipping",
      "Real-time GPS tracking",
      "Insurance coverage",
      "Multiple shipping routes",
    ],
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    description:
      "We manage all customs documentation and clearance procedures, ensuring smooth and compliant importation into Kenya with minimal delays.",
    features: [
      "Complete documentation handling",
      "Tax calculation and payment",
      "KRA compliance",
      "Duty optimization",
    ],
  },
  {
    icon: Wrench,
    title: "Vehicle Inspection",
    description:
      "Every vehicle undergoes thorough inspection to verify condition, authenticity, and compliance with Kenyan standards before shipment.",
    features: [
      "Pre-purchase inspection",
      "Mechanical assessment",
      "Body and paint inspection",
      "Detailed inspection reports",
    ],
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description:
      "We provide secure payment options and transparent pricing, with no hidden fees throughout the importation process.",
    features: [
      "Multiple payment methods",
      "Transparent pricing",
      "No hidden fees",
      "Payment protection",
    ],
  },
  {
    icon: Headphones,
    title: "After-Sales Support",
    description:
      "Our commitment continues after delivery with comprehensive support for registration, maintenance, and any queries you may have.",
    features: [
      "Registration assistance",
      "Warranty support",
      "Maintenance guidance",
      "24/7 customer support",
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-hero-gradient text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Comprehensive Import Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              We provide end-to-end vehicle importation services to make your car buying experience
              seamless and stress-free.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-large transition-all duration-300 border-2 hover:border-primary group"
                >
                  <div className="bg-hero-gradient p-4 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our streamlined process makes importing your dream car simple and transparent.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Select Your Vehicle",
                  description: "Browse our inventory or request a specific vehicle from our global network.",
                },
                {
                  step: "02",
                  title: "Secure Payment",
                  description: "Make a secure deposit and we'll begin the importation process immediately.",
                },
                {
                  step: "03",
                  title: "Shipping & Clearance",
                  description: "We handle all shipping logistics and customs clearance procedures.",
                },
                {
                  step: "04",
                  title: "Delivery & Support",
                  description: "Receive your vehicle and enjoy our comprehensive after-sales support.",
                },
              ].map((process, index) => (
                <div key={index} className="relative">
                  <div className="text-6xl font-bold text-primary/10 mb-4">{process.step}</div>
                  <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                  <p className="text-muted-foreground text-sm">{process.description}</p>
                  
                  {index < 3 && (
                    <div className="hidden md:block absolute top-12 -right-4 text-primary">
                      <ArrowRight className="h-6 w-6" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="p-12 text-center bg-hero-gradient text-primary-foreground border-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Import Your Dream Car?
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Get started today and let us help you find and import the perfect vehicle.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/inventory">
                    View Inventory
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
