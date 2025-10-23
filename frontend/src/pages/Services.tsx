import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { fadeUp } from "../animations/fadeUp";
import { motion } from "framer-motion";
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
  ArrowRight,
} from "lucide-react";

// ---- Services Data ----
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
    link: "/services/vehicle-sourcing",
  },
];

// ---- Page Component ----
const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="bg-hero-gradient text-primary-foreground py-16">
          <motion.div
            className="container mx-auto px-4 text-center"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Comprehensive Import Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              We provide end-to-end vehicle importation services to make your
              car buying experience seamless and stress-free.
            </p>
          </motion.div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-8 hover:shadow-large transition-all duration-300 border-2 hover:border-primary group">
                    <div className="bg-hero-gradient p-4 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="w-full">
                      <Link to={service.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-16 bg-secondary/30">
          <motion.div
            className="container mx-auto px-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our streamlined process makes importing your dream car simple
                and transparent.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Select Your Vehicle",
                  description:
                    "Browse our inventory or request a specific vehicle from our global network.",
                },
                {
                  step: "02",
                  title: "Secure Payment",
                  description:
                    "Make a secure deposit and we'll begin the importation process immediately.",
                },
                {
                  step: "03",
                  title: "Shipping & Clearance",
                  description:
                    "We handle all shipping logistics and customs clearance procedures.",
                },
                {
                  step: "04",
                  title: "Delivery & Support",
                  description:
                    "Receive your vehicle and enjoy our comprehensive after-sales support.",
                },
              ].map((process, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-6xl font-bold text-primary/10 mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {process.description}
                  </p>

                  {index < 3 && (
                    <div className="hidden md:block absolute top-12 -right-4 text-primary">
                      <ArrowRight className="h-6 w-6" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA SECTION */}
        <motion.section
          className="py-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <Card className="p-12 text-center bg-hero-gradient text-primary-foreground border-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Import Your Dream Car?
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Get started today and let us help you find and import the perfect
                vehicle.
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
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
