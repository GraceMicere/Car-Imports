import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Phone, MessageCircle, Mail, ArrowLeft, ShieldCheck, FileText, Car } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Mock data - in production this would come from API
const carData = {
  id: 1,
  name: "2016 BMW X3 XDRIVE 20d F25",
  year: 2016,
  condition: "Used",
  availability: "In Stock",
  price: 3200000,
  images: [
    "/src/assets/hero-car.jpg",
    "/src/assets/car-1.jpg",
    "/src/assets/car-2.jpg",
    "/src/assets/car-3.jpg",
  ],
  specs: {
    engine: "2.0L Diesel",
    transmission: "Automatic",
    fuelType: "Diesel",
    mileage: "45,000 km",
    exteriorColor: "Alpine White",
    interiorType: "Black Leather",
  },
  features: [
    "Leather Seats",
    "Backup Camera",
    "LED Headlights",
    "Navigation System",
    "Bluetooth Connectivity",
    "Cruise Control",
    "Parking Sensors",
    "Sunroof",
    "Alloy Wheels",
    "ABS Brakes",
  ],
  description:
    "This 2016 BMW X3 XDRIVE 20d F25 is in excellent condition with full service history. The vehicle has been meticulously maintained and comes with all original documentation. Perfect for Kenyan roads with its all-wheel drive system and robust build quality. The car features a powerful yet economical diesel engine, making it ideal for both city driving and long-distance travel.",
  owner: {
    name: "AutoImport Kenya",
    phone: "+254 712 345 678",
    whatsapp: "+254712345678",
  },
};

const CarDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in the ${carData.name} listed on your website.`
    );
    window.open(
      `https://wa.me/${carData.owner.whatsapp}?text=${message}`,
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = `tel:${carData.owner.phone}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/30 py-4">
          <div className="container mx-auto px-4">
            <Link
              to="/inventory"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Inventory
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-2 border-border">
                <img
                  src={carData.images[selectedImage]}
                  alt={carData.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-primary/90">
                  {carData.availability}
                </Badge>
              </div>
              
              {/* Thumbnail Slider */}
              <Carousel className="w-full">
                <CarouselContent>
                  {carData.images.map((image, index) => (
                    <CarouselItem key={index} className="basis-1/4">
                      <button
                        onClick={() => setSelectedImage(index)}
                        className={`relative aspect-square rounded-md overflow-hidden border-2 transition-all ${
                          selectedImage === index
                            ? "border-primary shadow-md"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${carData.name} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            {/* Car Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                  {carData.name}
                </h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">{carData.year}</Badge>
                  <Badge variant="outline">{carData.condition}</Badge>
                </div>
                <p className="text-4xl font-bold text-primary">
                  KES {carData.price.toLocaleString()}
                </p>
              </div>

              <Separator />

              {/* Specifications */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Specifications</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Engine</p>
                    <p className="font-medium">{carData.specs.engine}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Transmission</p>
                    <p className="font-medium">{carData.specs.transmission}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Fuel Type</p>
                    <p className="font-medium">{carData.specs.fuelType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Mileage</p>
                    <p className="font-medium">{carData.specs.mileage}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Exterior Color</p>
                    <p className="font-medium">{carData.specs.exteriorColor}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Interior</p>
                    <p className="font-medium">{carData.specs.interiorType}</p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Features */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Features</h2>
                <div className="flex flex-wrap gap-2">
                  {carData.features.map((feature, index) => (
                    <Badge key={index} variant="secondary">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Contact Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={handleCall}
                  variant="hero"
                  size="lg"
                  className="w-full"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Owner
                </Button>
                <Button
                  onClick={handleWhatsApp}
                  variant="accent"
                  size="lg"
                  className="w-full"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Owner
                </Button>
              </div>
            </div>
          </div>

          {/* Description */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {carData.description}
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Seller:</span>{" "}
                  {carData.owner.name}
                </p>
                <p>
                  <span className="font-semibold">Phone:</span>{" "}
                  {carData.owner.phone}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Info Banner */}
          <Card className="mb-8 border-primary/50 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" />
                Want Peace of Mind?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Get professional vehicle inspection and verification services before
                making your purchase. Our certified inspectors will thoroughly check
                the vehicle's condition, documentation, and history to ensure you're
                making a safe investment.
              </p>
              <Button variant="outline">Request Inspection</Button>
            </CardContent>
          </Card>

          {/* Notice Section */}
          <Card className="mb-8 border-muted">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                <strong>Important Notice:</strong> This website acts as an
                advertising platform connecting buyers and sellers. We are not the
                vehicle owners and do not handle transactions directly. All
                negotiations and purchases are conducted between buyers and sellers.
                Please exercise due diligence before making any purchase.
              </p>
            </CardContent>
          </Card>

          {/* Need Help Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Need Help?
              </CardTitle>
              <CardDescription>
                We offer professional inspection and import assistance services
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Our team can help you with vehicle inspection, import documentation,
                shipping arrangements, and customs clearance. Contact us for expert
                assistance.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline">
                  <Phone className="mr-2 h-4 w-4" />
                  Call for Assistance
                </Button>
                <Button variant="outline">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Support
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Selling Your Car Section */}
          <Card className="mb-8 bg-accent-gradient text-accent-foreground">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-5 w-5" />
                Selling Your Car?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 opacity-90">
                List your vehicle on our platform and reach thousands of potential
                buyers across Kenya. Fast, easy, and effective!
              </p>
              <Button variant="secondary" size="lg">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Us on WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Inquiry Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Send Inquiry
              </CardTitle>
              <CardDescription>
                Have questions? Send us a message and we'll get back to you soon
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CarDetail;
