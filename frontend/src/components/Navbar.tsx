import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Inventory", path: "/inventory" },
    { name: "Services", path: "/services" }, 
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Smooth scroll to section on homepage
  const handleScrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      return;
    }
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-hero-gradient rounded-lg transition-transform group-hover:scale-110">
              <img
                src="/favicon.ico"
                alt="Kenya Imports Logo"
                className="h-6 w-6"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-foreground">
                Xplore Car Imports
              </span>
              <span className="text-xs text-muted-foreground">
                Import Cars From Japan With Ease
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 relative">
            {navLinks.map((link) =>
              link.name === "Services" ? (
                <div
                  key={link.name}
                  className="relative"
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
                  {isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-60 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                      <button
                        onClick={() => handleScrollToSection("vehicle-sourcing")}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Vehicle Sourcing
                      </button>
                      <button
                        onClick={() =>
                          handleScrollToSection("importation-masterclass")
                        }
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Car Importation Masterclass
                      </button>
                      <button
                        onClick={() =>
                          handleScrollToSection("taxi-business-advisory")
                        }
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Kenya Taxi Business Advisory
                      </button>
                    </div>
                  )}
                </div>
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
            <Button variant="green" size="sm" asChild className="ml-4">
              <Link to="/contact">Get Started</Link>
            </Button>
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
                    className="w-full text-left px-4 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted flex justify-between items-center"
                  >
                    Services <ChevronDown className="h-4 w-4" />
                  </button>
                  {isServicesOpen && (
                    <div className="pl-4 mt-1 space-y-1">
                      <button
                        onClick={() => handleScrollToSection("vehicle-sourcing")}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Vehicle Sourcing
                      </button>
                      <button
                        onClick={() =>
                          handleScrollToSection("importation-masterclass")
                        }
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Car Importation Masterclass
                      </button>
                      <button
                        onClick={() =>
                          handleScrollToSection("taxi-business-advisory")
                        }
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Kenya Taxi Business Advisory
                      </button>
                    </div>
                  )}
                </div>
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
