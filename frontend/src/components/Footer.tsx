import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Youtube,
  Instagram,
  MessageCircle,
  Music,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 border-t border-gray-200 dark:border-gray-800">
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
                <p className="text-sm opacity-80">
                  Import Cars From Japan With Ease
                </p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Your trusted partner for importing quality vehicles from Japan to
              Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-indigo-600 dark:text-indigo-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Car Options", "About", "Contact"].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={
                      link === "Home"
                        ? "/"
                        : `/${link.toLowerCase().replace(/\s/g, "-")}`
                    }
                    className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-all hover:underline underline-offset-4"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-indigo-600 dark:text-indigo-400">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Car Importation", path: "/services/car-importation" },
                { name: "Kenya Taxi Business Advisory", path: "/services/taxi-masterclass" },
              ].map(({ name, path }, idx) => (
                <li key={idx}>
                  <Link
                    to={path}
                    className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-all hover:underline underline-offset-4"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-indigo-600 dark:text-indigo-400">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300 font-medium">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-indigo-500 dark:text-indigo-400" />
                <span>New Rain, along Kenyatta Road - Nairobi</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-green-600 dark:text-green-400" />
                <a
                  href="tel:+254757356989"
                  className="hover:text-green-600 dark:hover:text-green-400 underline underline-offset-4 transition-all"
                >
                  +254 757 356 989
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-red-500 dark:text-red-400" />
                <a
                  href="mailto:localsays@gmail.com"
                  className="hover:text-red-500 dark:hover:text-red-400 underline underline-offset-4 transition-all"
                >
                  localsays@gmail.com
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
              link: "https://www.facebook.com/XploreImports",
              label: "Facebook",
            },
            {
              Icon: Youtube,
              color: "#FF0000",
              link: "https://www.youtube.com/@Explore254Discover",
              label: "YouTube",
            },
            {
              Icon: Music,
              color: "#000000",
              link: "https://www.tiktok.com/@explore_254k3?_t=ZM-90qsd8mGmTo&_r=1",
              label: "TikTok",
            },
            {
              Icon: Instagram,
              color: "#E1306C",
              link: "https://www.instagram.com/xplorecar_imports/",
              label: "Instagram",
            },
            {
              Icon: MessageCircle,
              color: "#25D366",
              link: "https://wa.me/254757356989",
              label: "WhatsApp",
            },
          ].map(({ Icon, color, link, label }, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-transform transform hover:scale-110 hover:brightness-110"
            >
              <Icon className="h-6 w-6" style={{ color }} />
            </a>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              Xplore Car Imports
            </span>
            . All rights reserved.
          </p>
          <p className="mt-2">
            Powered by{" "}
            <a
              href="https://wa.me/254757356989"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-green-600 dark:text-green-400 hover:underline underline-offset-4"
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
