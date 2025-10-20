import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { fadeUp } from "../animations/fadeUp";
import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Globe, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Page Header */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="bg-hero-gradient text-primary-foreground py-16"
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Xplore Car Imports</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Your trusted partner in premium vehicle importation from Japan, UK, and Dubai.
            </p>
          </div>
        </motion.section>

        {/* Our Story */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16"
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Our Story
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Bringing Quality Vehicles to Kenya Since 2020
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Xplore Car Imports was founded with a simple mission: to make premium vehicle importation
                    accessible, transparent, and stress-free for Kenyan buyers.
                  </p>
                  <p>
                    Over the years, we've built strong relationships with dealers and auction houses in
                    Japan, UK, and Dubai, enabling us to source the best vehicles at competitive prices.
                  </p>
                  <p>
                    Our team of experienced professionals handles every aspect of the importation process,
                    from sourcing to delivery, ensuring you receive your dream car in perfect condition.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { count: "500+", label: "Vehicles Imported" },
                  { count: "450+", label: "Happy Clients" },
                  { count: "8+", label: "Years Experience" },
                  { count: "3", label: "Source Countries" },
                ].map((item, i) => (
                  <Card key={i} className="p-6 text-center border-2 hover:border-primary transition-colors">
                    <div className="text-4xl font-bold text-primary mb-2">{item.count}</div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Values */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 bg-secondary/30"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: CheckCircle, title: "Quality Assurance", description: "Every vehicle is thoroughly inspected to meet our high standards before shipment." },
                { icon: Heart, title: "Customer First", description: "Your satisfaction is our priority. We go above and beyond to exceed expectations." },
                { icon: Globe, title: "Global Network", description: "Strong partnerships worldwide ensure access to the best vehicles at competitive prices." },
                { icon: Award, title: "Excellence", description: "We strive for excellence in every aspect of our service, from sourcing to delivery." },
                { icon: Users, title: "Expertise", description: "Our experienced team brings years of industry knowledge to serve you better." },
                { icon: Target, title: "Transparency", description: "Clear communication and honest pricing with no hidden fees or surprises." },
              ].map((value, index) => (
                <Card
                  key={index}
                  className="p-6 text-center border-2 hover:border-primary hover:shadow-large transition-all group"
                >
                  <div className="bg-hero-gradient p-3 rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Kenya Imports?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer more than just vehicle importation – we provide peace of mind.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                "Competitive pricing with transparent quotations",
                "Extensive network of trusted dealers and auctions",
                "Comprehensive vehicle inspection reports",
                "Efficient shipping and logistics management",
                "Expert customs clearance handling",
                "Real-time tracking and regular updates",
                "Full documentation support",
                "Dedicated after-sales support",
                "Flexible payment options",
                "Years of proven track record",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 bg-secondary/30"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Dedicated professionals committed to delivering exceptional service.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { name: "John Kamau", role: "Founder & CEO", description: "15+ years in automotive industry" },
                { name: "Sarah Wanjiku", role: "Head of Operations", description: "Expert in logistics & shipping" },
                { name: "David Omondi", role: "Customer Relations", description: "Dedicated to client satisfaction" },
              ].map((member, index) => (
                <Card
                  key={index}
                  className="p-6 text-center border-2 hover:border-primary hover:shadow-large transition-all"
                >
                  <div className="w-24 h-24 bg-hero-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary-foreground">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
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
