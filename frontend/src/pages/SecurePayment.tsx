import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp } from "../animations/fadeUp";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Shield, CreditCard, Banknote, Wallet, CheckCircle } from "lucide-react";

const SecurePayment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="bg-hero-gradient text-primary-foreground py-20 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="container mx-auto px-4"
          >
            <Shield className="h-12 w-12 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Secure Payment</h1>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              We ensure your payments are safe, transparent, and flexible — whether you’re importing a car or listing one for sale.
            </p>
          </motion.div>
        </section>

        {/* PAYMENT OPTIONS */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {/* Importation Payments */}
              <Card className="p-8 shadow-lg border border-primary/10 hover:shadow-xl transition">
                <CreditCard className="h-10 w-10 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">For Car Importation</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <span>50% deposit required before vehicle sourcing/shipping</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <span>Remaining 50% payable before customs clearance</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <span>Receipts & contracts provided for every transaction</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <span>Payment options: Bank transfer, Mobile money, Card</span>
                  </li>
                </ul>
              </Card>

              {/* Listing Payments */}
              <Card className="p-8 shadow-lg border border-primary/10 hover:shadow-xl transition">
                <Banknote className="h-10 w-10 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">For Vehicle Listings</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <span>One-time listing fee payable before approval</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <span>No hidden charges — clear breakdown of costs</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <span>Premium promotion packages available</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <span>Secure payouts for sellers once sale is completed</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* TERMS & CONDITIONS */}
        <section className="py-20 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-center">Payment Terms & Conditions</h2>
              <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
                To protect both our clients and sellers, the following conditions apply to all transactions.
              </p>

              <ul className="list-disc list-inside space-y-4 text-gray-700 leading-relaxed">
                <li>All payments must be made through official company channels only.</li>
                <li>Deposits for importation are strictly non-refundable once sourcing begins.</li>
                <li>Full payment must be cleared before vehicle delivery or release.</li>
                <li>Listing fees are payable in advance and non-refundable once the vehicle is published.</li>
                <li>We do not accept cash payments — digital and bank transfers only.</li>
                <li>Receipts, invoices, and contracts will be issued for every transaction.</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <motion.section
          className="py-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <Card className="p-12 text-center bg-hero-gradient text-primary-foreground border-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted. Transparent. Secure.
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Your peace of mind is our priority. Let’s make your car purchase or listing safe and hassle-free.
              </p>
              <Wallet className="h-10 w-10 mx-auto mb-6" />
            </Card>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default SecurePayment;

