import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  Phone,
  MessageCircle,
  Mail,
  ArrowLeft,
  ShieldCheck,
  FileText,
  Car,
  Gauge,
  Settings,
  Fuel,
  Calendar,
  PaintBucket,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { fadeUp } from "../animations/fadeUp";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { fetchCars } from "../services/api";

const CarDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [carData, setCarData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCar() {
      setLoading(true);
      try {
        const data = await fetchCars();
        const foundCar = data.find((car: any) => String(car.id) === id);
        setCarData(foundCar || null);
      } catch (error) {
        console.error("Error fetching car:", error);
      }
      setLoading(false);
    }
    loadCar();
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-muted-foreground">
        Loading car details...
      </div>
    );
  }

  if (!carData) {
    return <Navigate to="/inventory" replace />;
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in the ${carData.name} listed on your website.`
    );
    if (carData.owner?.whatsapp) {
      window.open(`https://wa.me/${carData.owner.whatsapp}?text=${message}`, "_blank");
    } else {
      toast({ title: "WhatsApp number not available." });
    }
  };

  const handleCall = () => {
    if (carData.owner?.phone) {
      window.location.href = `tel:${carData.owner.phone}`;
    } else {
      toast({ title: "Phone number not available." });
    }
  };

  const handleEmail = () => {
    if (carData.owner?.email) {
      const subject = encodeURIComponent(`Inquiry about ${carData.name}`);
      const body = encodeURIComponent(
        `Hello ${carData.owner.name || "there"},\n\nI am interested in the ${carData.name} you have listed. Please provide more details.\n\nThank you.`
      );
      window.location.href = `mailto:${carData.owner.email}?subject=${subject}&body=${body}`;
    } else {
      toast({ title: "Email address not available." });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Fade animation wrapper */}
      <motion.main
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="flex-1 bg-gray-50"
      >
        {/* Breadcrumb */}
        <div className="bg-gray-100 py-4">
          <div className="container mx-auto px-4">
            <Link
              to="/inventory"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Inventory
            </Link>
          </div>
        </div>

        {/* Car Detail Section */}
        <div className="container mx-auto px-4 py-10">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-2 border-gray-200 shadow">
                <img
                  src={
                    carData.image
                      ? `http://127.0.0.1:8000${carData.image}`
                      : "/placeholder-car.jpg"
                  }
                  alt={carData.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-primary/90 capitalize">
                  {carData.status}
                </Badge>
              </div>
            </div>

            {/* Car Info Section */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold mb-2">{carData.name}</h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">{carData.year}</Badge>
                  <Badge variant="outline">{carData.make}</Badge>
                  <Badge variant="outline">{carData.model}</Badge>
                </div>
                <p className="text-4xl font-bold text-primary">
                  {carData.price
                    ? `KES ${Number(carData.price).toLocaleString()}`
                    : "Price on Request"}
                </p>
              </div>

              <Separator />

              {/* Specifications */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Specifications</h2>
                <div className="grid grid-cols-2 gap-4 text-gray-800">
                  <div className="flex items-center gap-2">
                    <Fuel className="h-5 w-5 text-primary" />
                    <span><strong>Engine:</strong> {carData.engine_type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    <span><strong>Transmission:</strong> {carData.transmission}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gauge className="h-5 w-5 text-primary" />
                    <span><strong>Mileage:</strong> {carData.mileage.toLocaleString()} km</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PaintBucket className="h-5 w-5 text-primary" />
                    <span><strong>Color:</strong> {carData.color}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span><strong>Year:</strong> {carData.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="h-5 w-5 text-primary" />
                    <span><strong>Status:</strong> {carData.status}</span>
                  </div>
                </div>
              </div>

              <Separator />
            </div>
          </div>

          {/* Description */}
          <Card className="mb-10">
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                {carData.description || "No description available for this vehicle."}
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default CarDetail;
