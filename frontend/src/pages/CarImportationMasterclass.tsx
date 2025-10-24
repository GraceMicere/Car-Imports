import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MasterclassEnquiryForm from "../components/MasterclassEnquiryForm";

const CarImportationMasterclass: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-green-50 via-white to-green-50 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Car Importation & Taxi Business Masterclass
            </h1>
            <p className="mt-5 text-gray-700 text-lg leading-relaxed">
              Thinking of joining Kenya's online taxi economy? This masterclass walks you through
              everything — from choosing the right vehicle and understanding platforms like Uber and
              Bolt, to cost breakdowns, documentation, and profit insights. Perfect for new drivers,
              fleet owners, or anyone starting out in Kenya’s taxi industry.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center items-center">
              <button
                onClick={() => setShowModal(true)} 
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow transition-all"
              >
                Enroll Now
              </button>
            </div>
          </div>

          <div className="flex-1">
            <img
              src="/images/taxi-hero.jpg"
              alt="Taxi Business Masterclass"
              className="rounded-3xl shadow-lg object-cover w-full h-[350px]"
            />
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-20">

        {/* PILLAR 1 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img
              src="/images/taxi-driver-training.jpg"
              alt="Taxi Training"
              className="rounded-2xl shadow-md object-cover w-full h-[300px]"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-3">1. Taxi Business Masterclass</h2>
            <p className="text-gray-700 mb-4">
              A hands-on, revenue-focused module that gives you everything you need to run a
              profitable taxi business — whether you want to drive part-time or build a full-time fleet.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Training:</strong> Platform setup, customer handling, and safety basics.</li>
              <li><strong>Cost & revenue analysis:</strong> Templates to calculate expenses and profits.</li>
              <li><strong>Pros & cons:</strong> Honest breakdown of platform dynamics and challenges.</li>
              <li><strong>Best cars:</strong> Reliable, fuel-efficient models for Kenya’s market.</li>
              <li><strong>Part-time vs full-time:</strong> Which approach suits your goals best?</li>
            </ul>
          </div>
        </div>

        {/* PILLAR 2 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-3">2. Driver Management</h2>
            <p className="text-gray-700 mb-4">
              Build a dependable and professional team. Learn to recruit, train, monitor and motivate drivers
              to maintain consistency and reliability in your operations.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Recruitment:</strong> Find and onboard reliable, well-vetted drivers.</li>
              <li><strong>Monitoring & performance:</strong> Tools to track daily performance and ratings.</li>
              <li><strong>Payment & incentives:</strong> Transparent and motivating compensation systems.</li>
              <li><strong>Retention:</strong> Keep top drivers happy through growth opportunities.</li>
            </ul>
          </div>

          <div className="md:w-1/2">
            <img
              src="/images/driver-management.jpg"
              alt="Driver Management"
              className="rounded-2xl shadow-md object-cover w-full h-[300px]"
            />
          </div>
        </div>

        {/* PILLAR 3 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img
              src="/images/car-documents.jpg"
              alt="Car Documents and Compliance"
              className="rounded-2xl shadow-md object-cover w-full h-[300px]"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-3">3. Documents & Compliance</h2>
            <p className="text-gray-700 mb-4">
              Navigate Kenya’s regulatory landscape confidently. Learn which documents you need for
              both car and driver to stay compliant and avoid penalties.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Car documents:</strong> Logbook, customs clearance, inspection reports.</li>
              <li><strong>Driver documents:</strong> Valid PSV licenses, contracts, and IDs.</li>
              <li><strong>Insurance & licensing:</strong> Best policies and renewal procedures.</li>
            </ul>
          </div>
        </div>

        {/* MAINTENANCE */}
        <div className="bg-gradient-to-r from-green-100 via-white to-green-100 p-10 rounded-3xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Car Maintenance & Parts</h3>
          <p className="text-gray-700 mb-6">
            Preventive maintenance keeps your cars profitable. Learn service intervals, sourcing quality
            parts, and building relationships with reliable vendors.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <img src="/images/car-service.jpg" alt="Service" className="rounded-lg mb-3 w-full h-[200px] object-cover" />
              <h4 className="font-semibold">Service</h4>
              <p className="text-sm text-gray-700">
                Track maintenance routines — oil changes, brakes, suspension — to extend vehicle lifespan.
              </p>
            </div>
            <div>
              <img src="/images/car-parts.jpg" alt="Parts" className="rounded-lg mb-3 w-full h-[200px] object-cover" />
              <h4 className="font-semibold">Parts</h4>
              <p className="text-sm text-gray-700">
                Source quality spare parts affordably, manage inventory, and reduce downtime.
              </p>
            </div>
            <div>
              <img src="/images/mechanic.jpg" alt="Mechanics" className="rounded-lg mb-3 w-full h-[200px] object-cover" />
              <h4 className="font-semibold">Repairs & Vendors</h4>
              <p className="text-sm text-gray-700">
                Build a trusted network of mechanics and workshops for quick, quality repairs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ✅ ENROLL MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4 sm:px-6 overflow-auto">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl relative animate-fadeInScale">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl z-10"
            >
              &times;
            </button>

            {/* The Form */}
            <div className="p-6 sm:p-10">
              <MasterclassEnquiryForm />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default CarImportationMasterclass;
