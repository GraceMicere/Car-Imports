import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCars } from "../services/api";
import { fadeUp } from "../animations/fadeUp";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Inventory() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCars() {
      const data = await fetchCars();
      setCars(data);
      setLoading(false);
    }
    loadCars();
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Loading cars...</div>;
  }

  if (cars.length === 0) {
    return (
      <div className="text-center mt-5 text-gray-600">
        No cars are available at the moment.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="p-4 bg-gray-50 min-h-screen">
        {/* Page Title */}
        <motion.h2
          className="text-2xl font-bold mb-6 text-center text-gray-800"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Available Cars
        </motion.h2>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }} // small staggered delay
            >
              {/* Car Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={
                    car.image
                      ? `http://127.0.0.1:8000${car.image}`
                      : "/placeholder-car.jpg"
                  }
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                <span
                  className={`absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full ${
                    car.status === "available"
                      ? "bg-green-600 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {car.status}
                </span>
              </div>

              {/* Car Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{car.name}</h3>
                <p className="text-gray-700 mb-1">
                  <strong>Make:</strong> {car.make}
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>Model:</strong> {car.model}
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>Year:</strong> {car.year}
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>Engine:</strong> {car.engine_type}
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>Transmission:</strong> {car.transmission}
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>Mileage:</strong> {car.mileage.toLocaleString()} km
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>Color:</strong> {car.color}
                </p>
                <p className="text-gray-700 mb-1">
                  <strong>Price:</strong> KES {Number(car.price).toLocaleString()}
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  {car.description?.length > 100
                    ? car.description.slice(0, 100) + "..."
                    : car.description}
                </p>

                <div className="mt-4 text-center">
                  <Link
                    to={`/inventory/${car.id}`}
                    className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Inventory;
