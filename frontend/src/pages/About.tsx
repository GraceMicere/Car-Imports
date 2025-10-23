import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { fadeUp } from "../animations/fadeUp";
import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Globe, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />

      <main className="flex-1">
        {/* ===== Header Section ===== */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-20"
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-green-200">Xplore Imports</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              Making car importation{" "}
              <span className="font-semibold text-green-100">easy, transparent,</span> and{" "}
              <span className="font-semibold text-green-100">stress-free</span> for every Kenyan.
            </p>
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
              <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Helping Kenyans Drive Their Dreams Home
              </h2>

              <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
                <p>
                  <span className="font-semibold text-green-700">Xplore Imports</span> was born out
                  of a simple idea — helping everyday Kenyans find the right cars for their{" "}
                  <span className="font-semibold">taxi and personal businesses.</span> Over the
                  years, we noticed one common challenge: many people wanted to import cars but
                  didn’t know{" "}
                  <span className="font-semibold text-green-700">where to start</span> or{" "}
                  <span className="font-semibold text-green-700">who to trust.</span>
                </p>

                <p>
                  Our mission is to make the car importation journey{" "}
                  <span className="font-semibold text-green-700">easy, transparent, and stress-free.</span>{" "}
                  We connect clients to{" "}
                  <span className="font-semibold">quality and affordable vehicles</span> from trusted
                  markets such as{" "}
                  <span className="font-semibold text-green-700">Japan, the UK, and Dubai</span>,
                  handling everything from sourcing, inspection, shipping, and customs clearance to{" "}
                  <span className="font-semibold">final delivery straight to your door.</span>
                </p>

                <p>
                  We believe in{" "}
                  <span className="font-semibold text-green-700">open communication and honesty</span>{" "}
                  every step of the way. Clients receive{" "}
                  <span className="font-semibold">clear updates, transparent costs,</span> and total{" "}
                  <span className="font-semibold text-green-700">peace of mind</span> knowing their
                  cars are handled with care.
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1605559424843-9e4a9a3c1c8f?auto=format&fit=crop&w=900&q=80"
                alt="About Xplore Imports"
                className="rounded-2xl shadow-md object-cover w-full h-[400px]"
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
          className="py-20 bg-gray-50"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
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
                  className="p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600">{description}</p>
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
              <p className="text-gray-600 max-w-2xl mx-auto">
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
                <Card key={i} className="p-6 hover:shadow-md transition-shadow text-center">
                  <h3 className="text-xl font-semibold mb-2 text-green-700">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ===== Google Map Section ===== */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-20 bg-gray-50"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Us</h2>
            <p className="text-gray-600 mb-8">
              Visit our office or reach out to learn more about how we can help you import your dream car.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-lg max-w-5xl mx-auto">
              <iframe
                title="Xplore Imports Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8562122365034!2d36.82194631475324!3d-1.292065035985058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e8be52862f%3A0x9f0b4d2b9f8d11c0!2sNairobi%20CBD!5e0!3m2!1sen!2ske!4v1699874631244!5m2!1sen!2ske"
                width="100%"
                height="400"
                allowFullScreen
                loading="lazy"
                className="border-0 w-full h-[400px]"
              ></iframe>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
