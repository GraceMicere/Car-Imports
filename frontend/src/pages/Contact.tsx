import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { fadeUp } from "../animations/fadeUp";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <motion.section
          className="bg-hero-gradient text-primary-foreground py-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              Have questions? We're here to help you find your perfect vehicle.
            </p>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          className="py-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="p-6 border-2 hover:border-primary transition-colors">
                  <MapPin className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Our Location</h3>
                  <p className="text-muted-foreground">New rain, along Kenyatta Road - Nairobi</p>
                </Card>

                <Card className="p-6 border-2 hover:border-primary transition-colors">
                  <Phone className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+254757356989" className="hover:text-primary transition-colors">
                      +254 757 356 989
                    </a>
                  </p>
                </Card>

                <Card className="p-6 border-2 hover:border-primary transition-colors">
                  <Mail className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="mailto:localsays@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      localsays@gmail.com
                    </a>
                  </p>
                </Card>

                <Card className="p-6 border-2 hover:border-primary transition-colors">
                  <Clock className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">Business Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 8:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </Card>
              </div>

              {/* Replace old Contact Form with Enquiry Form */}
              <div className="lg:col-span-2">
                <Card className="p-8 border-2">
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                  <EnquiryForm />
                </Card>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Map Section */}
        <motion.section
          className="py-16 bg-secondary/30"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <div className="aspect-video w-full bg-muted rounded-xl overflow-hidden shadow-large">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35846418597!2d36.70730744863279!3d-1.3028617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kenya Imports Location"
              />
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
