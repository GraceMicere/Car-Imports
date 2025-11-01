import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Car Options", path: "/car-options" },
    { name: "Services", path: "/services" },
    { name: "Testimonials", path: "/#testimonials" }, // ✅ Use HashLink
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) =>
    location.pathname === path || location.hash === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-hero-gradient rounded-lg transition-transform group-hover:scale-110">
              <img src="/favicon.ico" alt="Kenya Imports Logo" className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-foreground">
                Xplore Car Imports
              </span>
              <span className="text-xs text-muted-foreground">
                Import Cars from Japan with Ease
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 relative">
            {navLinks.map((link) =>
              link.name === "Services" ? (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors ${
                      isServicesOpen
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.name} <ChevronDown className="h-4 w-4" />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute left-0 mt-2 w-60 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 z-50 transition-all duration-200 ${
                      isServicesOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <Link
                      to="/services/car-importation"
                      className="block w-full text-left px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Car Importation
                    </Link>
                    <Link
                      to="/services/taxi-masterclass"
                      className="block w-full text-left px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Kenya Taxi Business Advisory
                    </Link>
                  </div>
                </div>
              ) : link.name === "Testimonials" ? (
                // ✅ HashLink for smooth scroll
                <HashLink
                  key={link.path}
                  smooth
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </HashLink>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}

            {/* 🌙 Theme Toggle + Button */}
            <div className="flex items-center gap-3 ml-4">
              <ThemeToggle />
              <Button variant="green" size="sm" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) =>
              link.name === "Services" ? (
                <div key={link.name}>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full text-left px-4 py-2 rounded-md text-sm font-medium text-foreground dark:text-gray-100 hover:bg-muted flex justify-between items-center transition-colors"
                  >
                    Services <ChevronDown className="h-4 w-4" />
                  </button>
                  {isServicesOpen && (
                    <div className="pl-4 mt-1 space-y-1">
                      <Link
                        to="/services/car-importation"
                        onClick={() => {
                          setIsOpen(false);
                          setIsServicesOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        Car Importation
                      </Link>
                      <Link
                        to="/services/taxi-masterclass"
                        onClick={() => {
                          setIsOpen(false);
                          setIsServicesOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        Kenya Taxi Business Advisory
                      </Link>
                    </div>
                  )}
                </div>
              ) : link.name === "Testimonials" ? (
                // ✅ HashLink also works on mobile
                <HashLink
                  key={link.path}
                  smooth
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </HashLink>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}

            {/* 🌙 Theme Toggle + CTA Button (Mobile) */}
            <div className="flex flex-col gap-3 mt-4 px-4">
              <ThemeToggle />
              <Button variant="green" size="lg" asChild className="w-full">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
