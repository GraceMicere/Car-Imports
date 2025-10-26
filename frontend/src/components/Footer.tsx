import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Youtube,
  MessageCircle,
  Music,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/favicon.ico"
                alt="Logo"
                className="h-10 w-10 rounded-lg object-contain"
              />
              <div>
                <h3 className="font-bold text-lg">Xplore Car Imports</h3>
                <p className="text-sm opacity-80">Import Cars From Japan With Ease</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Your trusted partner for importing quality vehicles from Japan to Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Car Listing", "About", "Contact"].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s/g, '-')}`}
                    className="opacity-80 hover:opacity-100 hover:text-primary dark:hover:text-primary transition-all"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Vehicle Sourcing</li>
              <li>Kenya Taxi Business Advisory</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="opacity-80">New Lane, along Kenyatta Road - Nairobi</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href="tel:+254757356989"
                  className="opacity-80 hover:opacity-100 hover:text-primary dark:hover:text-primary transition-all"
                >
                  +254 757 356 989
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:info@xplorecarimports.com"
                  className="opacity-80 hover:opacity-100 hover:text-primary dark:hover:text-primary transition-all"
                >
                  info@xplorecarimports.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Centered Social Icons */}
        <div className="mt-10 flex justify-center space-x-6">
          {[
            {
              Icon: Facebook,
              color: "#1877F2",
              link: "https://www.youtube.com/Explore254Discover",
            },
            {
              Icon: Youtube,
              color: "#FF0000",
              link: "https://www.youtube.com/@Explore254Discover",
            },
            {
              Icon: Music,
              color: "#000",
              link: "https://www.tiktok.com/@explore_254k3?_t=ZM-90qsd8mGmTo&_r=1",
            },
            {
              Icon: MessageCircle,
              color: "#25D366",
              link: "https://wa.me/254757356989", 
            },
          ].map(({ Icon, color, link }, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
            >
              <Icon className="h-6 w-6" style={{ color }} />
            </a>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center text-sm opacity-80">
          <p>
            &copy; {new Date().getFullYear()} Xplore Car Imports. All rights reserved.
          </p>
          <p className="mt-2">
            Powered by{" "}
            <a
              href="https://wa.me/254757356989"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#25D366] hover:underline"
            >
              CodeConjurer Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
