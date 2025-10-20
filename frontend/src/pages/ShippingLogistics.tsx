import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Ship,
  Shield,
  Map,
  Clock,
  Package,
  Plane,
  FileText,
  Users,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const ShippingAndLogistics = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-800 text-white py-20 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="container mx-auto px-4"
        >
          <Ship className="mx-auto h-12 w-12 mb-4 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Global Vehicle Shipping & Logistics
          </h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
          We provide reliable, end-to-end logistics for imported vehicles from Japan,
          the UK, and the UAE — managing sea freight, customs clearance, port
          handling, and delivery right to your doorstep in Kenya.
          </p>
        </motion.div>
      </section>

      <main className="flex-1">
        {/* Why choose us section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Shipping Services?</h2>
              <p className="text-muted-foreground mb-12 max-w-3xl mx-auto">
                We combine years of automotive logistics experience with global partnerships to 
                deliver vehicles safely, transparently, and on schedule. Every shipment is managed 
                with precision — from documentation to final handover in Kenya.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 mt-10">
              {[
                {
                  icon: Map,
                  title: "Mombasa Port Access",
                  text: "Direct shipping lanes from Japan, the UK, Dubai, and other top vehicle markets — ensuring faster arrivals and minimal transit delays.",
                },
                {
                  icon: Shield,
                  title: "Secure & Insured Transport",
                  text: "All shipments are fully insured against damage or loss and handled by certified logistics experts with decades of experience.",
                },
                {
                  icon: Clock,
                  title: "Live Shipment Tracking",
                  text: "Stay updated through every milestone with real-time shipment tracking and automatic progress notifications.",
                },
                {
                  icon: Ship,
                  title: "Flexible Shipping Options",
                  text: "Choose between RORO, container, or air freight — depending on your budget, vehicle type, and urgency.",
                },
                {
                  icon: FileText,
                  title: "KRA & Clearance Assistance",
                  text: "We manage all Kenya Revenue Authority (KRA) import paperwork, including customs entries and Bill of Lading documentation.",
                },
                {
                  icon: Users,
                  title: "Trusted Global Partnerships",
                  text: "We work only with verified shipping companies and international freight partners who meet strict quality standards.",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl shadow-md bg-gradient-to-b from-blue-50 to-white border border-blue-100 hover:-translate-y-2 transition-transform duration-300"
                >
                  <feature.icon className="h-10 w-10 text-blue-700 mb-4 mx-auto" />
                  <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Shipping Methods Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl font-extrabold mb-14 text-center text-blue-900"
            >
              Shipping Methods Available
            </motion.h2>

            {/* Shipping Methods Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Ship,
                  title: "RORO Shipping",
                  details: [
                    "Most economical option",
                    "4–6 weeks sea transit",
                    "Vehicle must be driveable",
                    "Japan/UK to Mombasa",
                  ],
                },
                {
                  icon: Package,
                  title: "Container Shipping",
                  details: [
                    "Maximum security",
                    "6–8 weeks sea transit",
                    "Can include personal items",
                    "Ideal for luxury vehicles",
                  ],
                },
                {
                  icon: Plane,
                  title: "Air Freight",
                  details: [
                    "Fastest delivery method",
                    "5–7 days air transit",
                    "Premium pricing",
                    "For rare or urgent shipments",
                  ],
                },
              ].map((method, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl border border-blue-100 bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300"
                >
                  <method.icon className="h-10 w-10 text-blue-700 mb-4" />
                  <h3 className="font-semibold text-xl text-blue-800 mb-4">
                    {method.title}
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {method.details.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Import Timeline Section */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white p-10 rounded-3xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">
                Complete Import Timeline to Kenya
              </h3>
              <p className="text-center text-blue-100 mb-8">
                The timelines below include the estimated shipping and clearance durations
                for a smooth vehicle import process.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Sea Transit Time:</h4>
                  <ul className="space-y-1 text-blue-100">
                    <li>• RORO: 4–6 weeks</li>
                    <li>• Container: 6–8 weeks</li>
                  </ul>

                  <h4 className="font-semibold text-lg mt-6 mb-3">
                    Clearance & Registration:
                  </h4>
                  <ul className="space-y-1 text-blue-100">
                    <li>• KRA Customs: 3–5 days</li>
                    <li>• KEBS Inspection: 2–3 days</li>
                    <li>• NTSA Registration: 7–14 days</li>
                    <li>• Port Handling: 2–4 days</li>
                  </ul>
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-lg leading-relaxed">
                    <span className="font-semibold text-white">
                      Total Realistic Timeline:
                    </span>{" "}
                    Approximately <strong>6–10 weeks</strong> from vehicle purchase to
                    final delivery — covering shipping, customs clearance, inspection,
                    registration, and transport to your destination.
                  </p>
                  <p className="text-sm mt-4 italic text-blue-200">
                    *Timelines may vary based on port congestion, documentation
                    completeness, and seasonal factors.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-14"
            >
              Our Shipping Process
            </motion.h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Vehicle Collection",
                  description:
                    "Once your purchase is confirmed, our local agents in Japan, the UK, or the UAE collect the vehicle from the dealer or auction yard. The vehicle is then transported to our export inspection facility for initial assessment.",
                },
                {
                  step: "2",
                  title: "Inspection & Preparation",
                  description:
                    "The vehicle undergoes comprehensive mechanical, mileage, and body inspections to ensure it meets Kenya Bureau of Standards (KEBS) requirements. It’s then cleaned, secured, and photographed before shipment documentation is prepared.",
                },
                {
                  step: "3",
                  title: "Shipping & Tracking",
                  description:
                    "We coordinate with trusted global shipping partners to book space on the next available vessel — via RORO, container, or air freight. You’ll receive your Bill of Lading, insurance details, and tracking link to monitor progress in real time.",
                },
                {
                  step: "4",
                  title: "Customs Clearance & Delivery",
                  description:
                    "Upon arrival at Mombasa Port, our clearing partners handle KRA customs, KEBS inspection, port handling, and NTSA registration. Once cleared, the vehicle is transported to your city or picked up from our designated delivery point.",
                },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="text-5xl font-bold text-blue-200 mb-4">{p.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{p.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-16 bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-sm shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Transparent, Secure, and Reliable Every Step of the Way
              </h3>
              <p className="text-blue-100 leading-relaxed max-w-3xl mx-auto">
                From purchase to final delivery, our logistics experts ensure full visibility and 
                compliance at every stage. You’ll receive continuous updates — from inspection reports 
                to shipping confirmations and customs clearance notifications — giving you peace of 
                mind until your vehicle is safely in Kenya.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ShippingAndLogistics;
