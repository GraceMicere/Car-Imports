import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCars } from "../services/api";
import { fadeUp } from "../animations/fadeUp";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CarInventoryEnquiry from "../components/CarInventoryEnquiry"; // ✅ new component

interface Car {
  id: number;
  name: string;
  make: string;
  model: string;
  year: string;
  engine_type: string;
  transmission: string;
  mileage: number;
  price: number;
  color: string;
  status: string;
  images?: string[];
}

function Inventory() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  useEffect(() => {
    async function loadCars() {
      const data = await fetchCars();
      console.log("✅ Loaded cars in Inventory:", data);
      setCars(data);
      setLoading(false);
    }
    loadCars();
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-lg">Loading cars...</div>;
  }

  if (cars.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-600">
        No cars available right now. Check again later!
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="container mx-auto p-6">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-gray-800"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          🚘 Explore Our Car Collection
        </motion.h2>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cars.map((car, index) => {
            const mainImage =
              car.images && car.images.length > 0
                ? car.images[0]
                : "/placeholder-car.jpg";

            return (
              <motion.div
                key={car.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Car Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={mainImage}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder-car.jpg";
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-primary text-white text-xs px-3 py-1 rounded-full capitalize">
                    {car.status || "available"}
                  </div>
                </div>

                {/* Car Details */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-1">{car.name}</h3>
                  <p className="text-gray-600 text-sm mb-1">
                    {car.make} • {car.model} • {car.year}
                  </p>
                  <p className="text-gray-700 font-medium mb-1">
                    {car.engine_type} • {car.transmission}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <strong>Price:</strong> KES{" "}
                    {Number(car.price).toLocaleString()}
                  </p>
                  <p className="text-gray-500 text-sm mb-3">
                    {car.mileage?.toLocaleString()} km • {car.color}
                  </p>

                  {/* Buttons */}
                  <div className="flex justify-between mt-4">
                    <Link
                      to={`/inventory/${car.id}`}
                      className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primary/80 transition"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => setSelectedCar(car)}
                      className="border border-primary text-primary px-4 py-2 rounded-lg text-sm hover:bg-primary hover:text-white transition"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Authenticity Section */}
        <section className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            ✅ 100% Verified Car Listings
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every vehicle listed on our platform is verified for authenticity,
            mileage accuracy, and ownership history. We ensure you buy with
            confidence.
          </p>

          <div className="flex justify-center gap-6 mt-8 flex-wrap">
            <img
              src="/images/authenticity1.jpg"
              alt="Verification"
              className="w-60 h-40 object-cover rounded-lg shadow"
            />
            <img
              src="/images/authenticity2.jpg"
              alt="Inspection"
              className="w-60 h-40 object-cover rounded-lg shadow"
            />
            <img
              src="/images/authenticity3.jpg"
              alt="Delivery"
              className="w-60 h-40 object-cover rounded-lg shadow"
            />
          </div>
        </section>
      </main>

      {/* Car Enquiry Modal */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-4">
          {/* Modal container */}
          <div className="bg-white rounded-2xl max-h-[90vh] overflow-y-auto w-full max-w-2xl p-6 relative shadow-2xl animate-fadeInScale flex flex-col justify-center items-center">
            <CarInventoryEnquiry
              car={selectedCar}
              onClose={() => setSelectedCar(null)}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Inventory;
