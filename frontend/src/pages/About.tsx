import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { fadeUp } from "../animations/fadeUp";
import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Globe, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        {/* ===== Header Section ===== */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-green-600 to-emerald-700 text-white dark:from-green-700 dark:to-emerald-800 py-20"
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-green-200 dark:text-green-300">Xplore Imports</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              Making car importation{" "}
              <span className="font-semibold text-green-100 dark:text-green-200">easy, transparent,</span> and{" "}
              <span className="font-semibold text-green-100 dark:text-green-200">stress-free</span> for every Kenyan.
            </p>
          </div>
        </motion.section>

        {/* ===== Popup Stats Section ===== */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="py-16 bg-white dark:bg-gray-800 -mt-10 relative z-10 transition-colors duration-300"
        >
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
              {[
                { label: "Cars Imported", value: "10+" },
                { label: "Happy Clients", value: "10+" },
                { label: "Taxi Investors Trained", value: "100+" },
                { label: "Drivers Trained", value: "200+" },
                { label: "Drivers Connected", value: "100+" },
              ].map(({ label, value }, index) => (
                <Card
                  key={index}
                  className="py-8 px-4 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-gray-200 dark:border-gray-600"
                >
                  <h3 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-2">{value}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm font-medium">{label}</p>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ===== About Section (Text + Image Side by Side) ===== */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20"
        >
          <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-block bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Helping Kenyans Drive Their Dream Cars and Own a Stabilized Taxi Business
              </h2>

              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                <p>
                  <span className="font-semibold text-green-700 dark:text-green-400">Xplore Imports</span> was born out
                  of a simple idea — helping everyday Kenyans find the right cars for their{" "}
                  <span className="font-semibold">taxi and personal businesses.</span> Over the
                  years, we noticed one common challenge: many people wanted to import cars but
                  didn’t know{" "}
                  <span className="font-semibold text-green-700 dark:text-green-400">where to start</span> or{" "}
                  <span className="font-semibold text-green-700 dark:text-green-400">who to trust.</span>
                </p>

                <p>
                  Our mission is to make the car importation journey{" "}
                  <span className="font-semibold text-green-700 dark:text-green-400">easy, transparent, and stress-free.</span>{" "}
                  We connect clients to{" "}
                  <span className="font-semibold">quality and affordable vehicles</span> from trusted
                  markets such as{" "}
                  <span className="font-semibold text-green-700 dark:text-green-400">Japan, the UK, and Dubai</span>,
                  handling everything from sourcing, inspection, shipping, and customs clearance to{" "}
                  <span className="font-semibold">final delivery straight to your door.</span>
                </p>

                <p>
                  We believe in{" "}
                  <span className="font-semibold text-green-700 dark:text-green-400">open communication and honesty</span>{" "}
                  every step of the way. Clients receive{" "}
                  <span className="font-semibold">clear updates, transparent costs,</span> and total{" "}
                  <span className="font-semibold text-green-700 dark:text-green-400">peace of mind</span> knowing their
                  cars are handled with care.
                </p>

                <div className="pt-4">
                  <p className="font-semibold text-green-700 dark:text-green-400">Taxi Business Advising since 2021</p>
                  <p className="font-semibold text-green-700 dark:text-green-400">Car Import Services since 2025</p>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1605559424843-9e4a9a3c1c8f?auto=format&fit=crop&w=900&q=80"
                alt="About Xplore Imports"
                className="rounded-2xl shadow-md object-cover w-full h-[400px] transition-all duration-300"
              />
            </div>
          </div>
        </motion.section>

        {/* ===== Our Core Values ===== */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                The principles that define who we are and how we serve our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: CheckCircle, title: "Integrity & Transparency", description: "Honest communication and clear pricing with no hidden fees." },
                { icon: Heart, title: "Customer Care", description: "Every client is treated as a partner — your satisfaction is our success." },
                { icon: Globe, title: "Global Reach", description: "Strong partnerships in Japan, UK, and Dubai ensure premium selections." },
                { icon: Target, title: "Reliability", description: "We deliver what we promise — on time and with care." },
                { icon: Users, title: "Community Focus", description: "We grow by empowering Kenyans to make informed car investment decisions." },
                { icon: Award, title: "Excellence", description: "Striving for quality service in every import, every client, every time." },
              ].map(({ icon: Icon, title, description }, index) => (
                <Card
                  key={index}
                  className="p-6 text-center shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-700"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="w-10 h-10 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{description}</p>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ===== Why Choose Us ===== */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20"
        >
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Xplore Imports is built on trust, experience, and a passion for making car importation simple.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "End-to-End Service", desc: "From vehicle sourcing to doorstep delivery — we handle it all for you." },
                { title: "Trusted Markets", desc: "We only source cars from reputable and verified dealers worldwide." },
                { title: "Personal Guidance", desc: "Our team walks with you through every step of the process." },
                { title: "Affordable Pricing", desc: "We ensure competitive rates without compromising on quality." },
                { title: "Fast & Secure Delivery", desc: "Your car arrives safely, with real-time shipment updates." },
                { title: "After-Sale Support", desc: "We remain available even after delivery — your satisfaction matters most." },
              ].map(({ title, desc }, i) => (
                <Card
                  key={i}
                  className="p-6 hover:shadow-md transition-shadow text-center bg-white dark:bg-gray-700"
                >
                  <h3 className="text-xl font-semibold mb-2 text-green-700 dark:text-green-400">{title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
