import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, Zap, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-secondary overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium imported vehicles"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-primary font-medium">Trusted Vehicle Importation Services</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Premium
                <span className="block bg-accent-gradient bg-clip-text text-transparent">
                  Vehicle Importation
                </span>
                Services
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Kenya Imports specializes in importing high-quality vehicles from{" "}
                <span className="text-primary font-semibold">Japan, UK, and Dubai</span>. 
                We deliver your dream car with excellence and reliability.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/inventory">View Our Inventory</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-medium transition-shadow">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-xs font-semibold text-primary">Quality</p>
                <p className="text-xs text-muted-foreground">Assured</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-medium transition-shadow">
                <Zap className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="text-xs font-semibold text-accent">Fast</p>
                <p className="text-xs text-muted-foreground">Service</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-medium transition-shadow">
                <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-xs font-semibold text-primary">Global</p>
                <p className="text-xs text-muted-foreground">Sourcing</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-medium transition-shadow">
                <Shield className="h-8 w-8 text-accent mx-auto mb-2" />
                <p className="text-xs font-semibold text-accent">Secure</p>
                <p className="text-xs text-muted-foreground">Process</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden md:block">
            <div className="relative">
              <img
                src={heroImage}
                alt="Premium imported car"
                className="rounded-2xl shadow-large hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl" />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-large">
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Vehicles Imported</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
