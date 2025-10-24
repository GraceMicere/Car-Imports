import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James Mwangi",
    role: "First-time Buyer",
    rating: 5,
    message:
      "The team at Xplore Car Imports is amazing. They guided me through every step, from choosing the car to shipping and documentation. My Toyota Prado arrived in perfect condition!",
  },
  {
    name: "Linda Njeri",
    role: "Car Enthusiast",
    rating: 5,
    message:
      "I have always been wanting to import my own car from Japan. After I consulted with Xplore Car Imports, they made my dream come true. I finally have my own Mazda CX5. I acknowledge their hard work and professionalism to ensure we – the customers – are satisfied.",
  },
  {
    name: "Samuel Ochieng",
    role: "Small Business Owner",
    rating: 5,
    message:
      "I was skeptical at first, but Xplore Car Imports proved reliable. Excellent communication, smooth process, and my Nissan X-Trail feels brand new. Highly recommended.",
  },
  {
    name: "John Kamau",
    role: "Uber Driver",
    rating: 5,
    message:
      "Hizi services za Xplore Car Imports ni legit. Gari yangu ya Mazda inafanya kazi kwa vibe kabisa, na communication yao ni crisp. Big up!",
  },
  {
    name: "Peter Otieno",
    role: "Taxi Owner",
    rating: 5,
    message: "Affordable cars for my business. Excellent customer support.",
  },
  {
    name: "Mercy Kamau",
    role: "First-time Buyer",
    rating: 5,
    message: "Superb service! Transparent pricing and fast delivery.",
  },
  {
    name: "David Kariuki",
    role: "Rideshare Driver",
    rating: 5,
    message: "Smooth process and reliable vehicles for my daily work.",
  },
  {
    name: "Joyce Achieng",
    role: "Car Collector",
    rating: 5,
    message: "Highly recommend for anyone looking for imported vehicles.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 relative overflow-hidden transition-colors duration-500 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center mb-12">
        What Our Customers Say
      </h2>

      {/* Testimonials List */}
      <div className="flex gap-8 overflow-x-auto px-4 scrollbar-hide">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100"
          >
            <h3 className="font-semibold text-xl">{testimonial.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {testimonial.role}
            </p>

            {/* Star Rating */}
            <div className="flex space-x-1 mb-4">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-yellow-400"
                />
              ))}
            </div>

            <p className="text-center">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

