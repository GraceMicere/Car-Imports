import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Inventory from "./pages/Inventory";
import CarDetail from "./pages/CarDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import VehicleSourcing from "./pages/VehicleSourcing";
import CarImportationMasterclass from "./pages/CarImportationMasterclass";  

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/car-listing" element={<Inventory />} />
            <Route path="/car-listing/:id" element={<CarDetail />} />
            <Route path="/services/vehicle-sourcing" element={<VehicleSourcing />} />
            <Route path="/services/taxi-masterclass" element={<CarImportationMasterclass />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

