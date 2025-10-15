import { Link } from "react-router-dom";
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-hero-gradient p-2 rounded-lg">
                <Car className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Kenya Imports</h3>
                <p className="text-sm opacity-80">Premium Auto Imports</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Your trusted partner for importing quality vehicles from Japan, UK, and Dubai to Kenya.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/inventory" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Inventory
                </Link>
              </li>
              <li>
                <Link to="/services" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Vehicle Sourcing</li>
              <li>Shipping & Logistics</li>
              <li>Customs Clearance</li>
              <li>Vehicle Inspection</li>
              <li>After-Sales Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="opacity-80">Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+254700000000" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  +254 700 000 000
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@kenyaimports.com" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  info@kenyaimports.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Kenya Imports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
