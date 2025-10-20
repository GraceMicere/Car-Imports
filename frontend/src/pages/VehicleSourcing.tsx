import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import { fadeUp } from "../animations/fadeUp";
import { motion } from "framer-motion";
import {
  Search,
  Wrench,
  CheckCircle,
  Shield,
  Gauge,
  ClipboardCheck,
  Phone,
  Mail,
  MapPin,
  Car,
  Zap,
  Truck,
  Cpu,
  Bike,
} from "lucide-react";


const VehicleSourcing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-primary to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <Search className="mx-auto h-12 w-12 mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find the Right Car, the Right Way
            </h1>
            <p className="text-lg opacity-90 mb-8">
            We simplify the process of importing your dream car. Our team of mechanics and sourcing experts handle everything — from vehicle inspection to customs compliance — ensuring every import meets Kenya’s strict standards for safety, age, and specification.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-full shadow hover:shadow-lg transition"
            >
              Get Free Quote
            </a>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <main className="flex-1">
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-3xl font-bold text-center mb-12"
            >
              How It Works
            </motion.h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Tell Us Your Needs",
                  desc: "Share your vehicle preferences, budget, and specific requirements.",
                },
                {
                  step: "2",
                  title: "We Search Our Network",
                  desc: "Our sourcing team searches our trusted global network for matches.",
                },
                {
                  step: "3",
                  title: "Present Options",
                  desc: "We present verified vehicle options that meet your requirements.",
                },
                {
                  step: "4",
                  title: "Secure Purchase",
                  desc: "We handle all logistics — purchase, shipment, and inspection.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="p-6 text-center rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/5 to-transparent shadow-sm hover:shadow-lg transition"
                >
                  <div className="text-4xl font-bold text-primary mb-2">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-20 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-3xl font-bold text-center mb-12"
            >
              Why Choose Our Vehicle Sourcing?
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Kenya-Compliant Sourcing",
                  desc: "We source RHD vehicles under 8 years old from Japan, UK, and UAE.",
                },
                {
                  icon: ClipboardCheck,
                  title: "KEBS Pre-Inspection",
                  desc: "All vehicles undergo mandatory pre-export inspection by KEBS agents.",
                },
                {
                  icon: Gauge,
                  title: "Best Prices",
                  desc: "We negotiate favorable rates through our trusted dealer relationships.",
                },
                {
                  icon: Zap,
                  title: "Fast Sourcing",
                  desc: "Quick turnaround with constant updates on your vehicle search.",
                },
                {
                  icon: CheckCircle,
                  title: "Age Verification",
                  desc: "We confirm manufacturing dates to meet the 8-year age limit.",
                },
                {
                  icon: Wrench,
                  title: "Garage Expertise",
                  desc: "Our certified mechanics assess mechanical, electrical, and body condition.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="p-6 rounded-xl bg-white shadow-md border-l-4 border-primary/40"
                >
                  <item.icon className="text-primary w-8 h-8 mb-3" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNICAL EXPERTISE SECTION */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-3xl font-bold mb-6 text-center"
            >
              Xplore Car Imports: Automotive Garage Expertise Behind Every Import
            </motion.h2>

            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            We're not just import agents — we're automotive technicians who live and breathe cars. 
            That means every vehicle we recommend has been assessed with a mechanic’s eye, not just a sales pitch.
            </p>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Left column features */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <Wrench className="text-primary" /> Technical Assessment & Verification
                </h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Full inspection of engine, gearbox, and suspension systems</li>
                <li>Electrical and safety system diagnostics</li>
                <li>Body, frame, and undercarriage integrity review</li>
                <li>Service and maintenance record verification</li>
                </ul>

                <h3 className="text-2xl font-semibold flex items-center gap-2 mt-8">
                  <CheckCircle className="text-primary" /> Personalized Recommendations
                </h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Model suggestions based on Kenya’s driving conditions</li>
                <li>Brands with reliable parts availability locally</li>
                <li>Advice on fuel economy, durability, and resale value</li>
                <li>Transparent insights to help you make the right choice</li>
                </ul>
              </motion.div>

              {/* Right column features */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <Shield className="text-primary" /> Spotting Red Flags Before You Buy
                </h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Hidden accident or frame damage detection</li>
                <li>Water or flood exposure indicators</li>
                <li>Odometer and mileage verification</li>
                <li>Early signs of costly mechanical issues</li>
                </ul>

                <h3 className="text-2xl font-semibold flex items-center gap-2 mt-8">
                  <Wrench className="text-primary" /> Support That Continues After Arrival
                </h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Detailed pre-delivery inspection and tuning</li>
                <li>Servicing, repairs, and maintenance packages</li>
                <li>Genuine spare parts and accessories sourcing</li>
                <li>Friendly after-sales advice from our garage team</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* VEHICLE TYPES */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-indigo-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-3xl font-bold text-center mb-12"
            >
              Vehicle Types We Source for Kenya
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Car, title: "Japanese Imports", desc: "Toyota, Honda, Nissan, Subaru" },
                { icon: Zap, title: "European Luxury", desc: "BMW, Mercedes, Audi – RHD models" },
                { icon: Truck, title: "Commercial Vehicles", desc: "Hiace, Isuzu trucks, vans" },
                { icon: Shield, title: "SUVs & 4x4s", desc: "Land Cruiser, Prado, Range Rover" },
                { icon: Cpu, title: "Electric Vehicles", desc: "Tesla, Nissan Leaf (RHD)" },
                { icon: Bike, title: "Motorcycles", desc: "Honda, Yamaha, Kawasaki" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="p-6 bg-white rounded-xl shadow-md border-l-4 border-primary/40"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            Enquire About Vehicle Sourcing
          </h2>
          <p className="text-muted-foreground">
            Have specific vehicle requirements in mind? Fill out the form below and
            our team will get back to you with the best sourcing options tailored to your needs.
          </p>
        </div>

        <div className="container mx-auto px-4 max-w-4xl">
          <EnquiryForm />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default VehicleSourcing;