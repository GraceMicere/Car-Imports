import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/fadeUp";
import EnquiryForm from "@/components/EnquiryForm";

const CustomClearance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <motion.main
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="flex-1"
      >
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20 text-center">
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Customs Clearance Solutions
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl mx-auto text-lg opacity-90"
          >
            We handle Kenya Customs procedures and documentation so you can import your
            vehicle through Mombasa Port without stress or delays.
          </motion.p>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-6 md:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-semibold text-center mb-12"
            >
              Why Work With Our Customs Team?
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Full Compliance",
                  description:
                    "We ensure your vehicle meets all KRA and iCMS regulations for smooth clearance.",
                },
                {
                  title: "Expert Documentation",
                  description:
                    "All customs paperwork and forms are prepared and submitted on your behalf.",
                },
                {
                  title: "Faster Processing",
                  description:
                    "Avoid unnecessary delays and storage charges with our expedited clearance service.",
                },
                {
                  title: "Local Knowledge",
                  description:
                    "We understand Kenyan import laws, taxes, and Mombasa Port procedures inside out.",
                },
                {
                  title: "Cost Optimization",
                  description:
                    "We help minimize taxes and duties by applying proper CRSP valuation methods.",
                },
                {
                  title: "Dispute Handling",
                  description:
                    "In case of customs queries or disputes, our team resolves them quickly and professionally.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-bold mb-3 text-blue-700">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="py-16 px-6 md:px-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-semibold text-center mb-10"
            >
              Documents Needed for Clearance
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
              {[
                "Bill of Lading (BOL)",
                "Commercial Invoice",
                "Original Logbook (canceled)",
                "Pre-Shipment Inspection Certificate",
                "KRA PIN Certificate",
                "Power of Attorney",
                "Import Declaration Form",
                "CRSP Valuation Report",
                "KEBS Inspection Report",
                "Age & Right-Hand Drive Verification",
                "Odometer & VIN Verification",
                "Roadworthiness & Emission Certificates",
              ].map((doc, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition"
                >
                  <p className="font-medium">{doc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 px-6 md:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-semibold text-center mb-10"
            >
              Our Step-by-Step Clearance Process
            </motion.h2>
            <ol className="space-y-6">
              {[
                {
                  step: "1. Document Review",
                  text: "We carefully check and prepare all necessary paperwork before submission.",
                },
                {
                  step: "2. Customs Filing",
                  text: "All declarations and forms are filed accurately with KRA systems.",
                },
                {
                  step: "3. Inspection",
                  text: "We coordinate customs inspections and address any queries promptly.",
                },
                {
                  step: "4. Release & Delivery",
                  text: "Your vehicle is cleared, released, and prepared for final delivery.",
                },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-blue-700 mb-2">{item.step}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        {/* Enquiry Form */}
        <section className="py-16 px-6 md:px-20 bg-white text-center">
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-semibold mb-4"
          >
            Request a Customs Clearance Quote
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-2xl mx-auto mb-10 text-gray-600">
            Get in touch with us for personalized customs clearance assistance. Fill in the enquiry form and our team will respond promptly.
          </motion.p>
          <EnquiryForm />
        </section>
      </motion.main>

      <Footer />
    </div>
  );
};

export default CustomClearance;
