import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Inventory from "./pages/Inventory";
import CarDetail from "./pages/CarDetail";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import CustomClearance from "./pages/CustomClearance";
import VehicleSourcing from "./pages/VehicleSourcing";
import ShippingLogistics from "./pages/ShippingLogistics";
import SecurePayment from "./pages/SecurePayment";
import ListingOfVehicles from "./pages/ListingOfVehicles";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/:id" element={<CarDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/vehicle-sourcing" element={<VehicleSourcing />} />
          <Route path="/services/shipping-and-logistics" element={<ShippingLogistics />} />
          <Route path="/services/secure-payment" element={<SecurePayment />} />
          <Route path="/services/custom-clearance" element={<CustomClearance />} />
          <Route path="/services/listing-of-vehicles" element={<ListingOfVehicles />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

