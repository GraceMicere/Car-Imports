import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import { fadeUp } from "../animations/fadeUp";
import { motion } from "framer-motion";
import { CheckCircle, ClipboardList, User, Car, FileText } from "lucide-react";

const ListingOfVehicles = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <motion.main
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="flex-1"
      >
        {/* HERO SECTION */}
        <section className="bg-gradient-to-r from-primary to-indigo-600 text-white py-20 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Car className="mx-auto h-12 w-12 mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              List Your Vehicle with Us
            </h1>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Turn your car into cash with ease. We’ll showcase your vehicle to
              serious buyers while ensuring all the paperwork and inspections are handled professionally.
            </p>
          </motion.div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              How It Works
            </motion.h2>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: User,
                  title: "Submit Your Details",
                  desc: "Fill in your personal and vehicle details using our form.",
                },
                {
                  icon: FileText,
                  title: "Verify Documents",
                  desc: "Ensure you have logbook, ownership proof, and service records.",
                },
                {
                  icon: ClipboardList,
                  title: "We List Your Car",
                  desc: "Our team creates a professional listing and promotes it.",
                },
                {
                  icon: CheckCircle,
                  title: "Connect with Buyers",
                  desc: "We handle inquiries and connect you with verified buyers.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  custom={i * 0.1}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="p-6 text-center rounded-2xl border border-primary/20 bg-gradient-to-b from-primary/5 to-transparent shadow-sm hover:shadow-lg transition"
                >
                  <step.icon className="mx-auto w-10 h-10 text-primary mb-3" />
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* REQUIREMENTS CHECKLIST */}
        <section className="py-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-8 border-l-4 border-primary/40"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <ClipboardList className="w-6 h-6 text-primary" /> Requirements Checklist
              </h2>
              <p className="mb-6 text-muted-foreground">
                Please ensure your vehicle meets these requirements before submitting:
              </p>

              <ul className="space-y-4">
                {[
                  "I have ownership documents (proof of ownership required)",
                  "I have the original vehicle logbook/title",
                  "I have all vehicle keys (including spare)",
                  "I have service history (optional but recommended)",
                  "Vehicle is running and drivable",
                  "I understand there is a service fee for listing",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      </motion.main>
        <section className="py-20 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              List Your Vehicle With Us
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Looking to sell your car? Fill in the form below with your details 
              and vehicle information, and we’ll help you reach serious buyers 
              while taking care of the paperwork and listing process.
            </p>

            {/* Enquiry form connected to backend */}
            <div className="bg-white shadow-lg rounded-xl p-8 border border-primary/10">
              <EnquiryForm />
            </div>
          </div>
        </section>
      <Footer />
    </div>
  );
};

export default ListingOfVehicles;
