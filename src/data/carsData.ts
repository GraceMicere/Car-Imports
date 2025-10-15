import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import heroCar from "@/assets/hero-car.jpg";

export interface Car {
  id: number;
  name: string;
  price: string;
  priceNumeric: number;
  year: number;
  fuel: string;
  mileage: string;
  image: string;
  status: string;
  type: string;
  condition: string;
  images: string[];
  specs: {
    engine: string;
    transmission: string;
    fuelType: string;
    mileage: string;
    exteriorColor: string;
    interiorType: string;
  };
  features: string[];
  description: string;
  owner: {
    name: string;
    phone: string;
    whatsapp: string;
  };
}

export const allCars: Car[] = [
  {
    id: 1,
    name: "2019 Toyota Fielder Hybrid",
    price: "KES 1,850,000",
    priceNumeric: 1850000,
    year: 2019,
    fuel: "Hybrid",
    mileage: "45,000 km",
    image: car1,
    status: "Available",
    type: "Wagon",
    condition: "Used",
    images: [car1, car2, car3, heroCar],
    specs: {
      engine: "1.5L Hybrid",
      transmission: "CVT Automatic",
      fuelType: "Hybrid",
      mileage: "45,000 km",
      exteriorColor: "Pearl White",
      interiorType: "Fabric",
    },
    features: [
      "Hybrid Engine",
      "Backup Camera",
      "Bluetooth Audio",
      "Push Start Button",
      "Climate Control",
      "Cruise Control",
      "Parking Sensors",
      "Alloy Wheels",
      "ABS Brakes",
      "Airbags",
    ],
    description:
      "This 2019 Toyota Fielder Hybrid is the perfect combination of fuel efficiency and practicality. With its spacious wagon body and hybrid technology, this vehicle offers excellent fuel economy, making it ideal for both city commuting and long-distance travel across Kenya. The car has been well-maintained with a full service history and comes with all original documentation.",
    owner: {
      name: "AutoImport Kenya",
      phone: "+254 712 345 678",
      whatsapp: "+254712345678",
    },
  },
  {
    id: 2,
    name: "2018 Mazda CX-3",
    price: "KES 2,100,000",
    priceNumeric: 2100000,
    year: 2018,
    fuel: "Petrol",
    mileage: "52,000 km",
    image: car2,
    status: "Available",
    type: "SUV",
    condition: "Used",
    images: [car2, car3, car1, heroCar],
    specs: {
      engine: "2.0L Petrol",
      transmission: "6-Speed Automatic",
      fuelType: "Petrol",
      mileage: "52,000 km",
      exteriorColor: "Soul Red Metallic",
      interiorType: "Black Leather",
    },
    features: [
      "Leather Seats",
      "Navigation System",
      "LED Headlights",
      "Backup Camera",
      "Bluetooth Connectivity",
      "Sunroof",
      "Heated Seats",
      "Parking Sensors",
      "Alloy Wheels",
      "Multi-Function Steering",
    ],
    description:
      "Experience the perfect blend of style and performance with this 2018 Mazda CX-3. This compact SUV features Mazda's SKYACTIV technology for optimal fuel efficiency and responsive handling. The premium interior with leather seats and advanced infotainment system ensures a comfortable and connected driving experience. Ideal for urban adventures and weekend getaways.",
    owner: {
      name: "Premium Motors",
      phone: "+254 723 456 789",
      whatsapp: "+254723456789",
    },
  },
  {
    id: 3,
    name: "2016 BMW X3 xDrive 20d",
    price: "KES 3,200,000",
    priceNumeric: 3200000,
    year: 2016,
    fuel: "Diesel",
    mileage: "68,000 km",
    image: car3,
    status: "Reserved",
    type: "SUV",
    condition: "Used",
    images: [car3, heroCar, car1, car2],
    specs: {
      engine: "2.0L Diesel Turbo",
      transmission: "8-Speed Automatic",
      fuelType: "Diesel",
      mileage: "68,000 km",
      exteriorColor: "Alpine White",
      interiorType: "Black Dakota Leather",
    },
    features: [
      "Premium Leather Seats",
      "Navigation System",
      "LED Headlights",
      "Backup Camera",
      "Bluetooth & USB",
      "Panoramic Sunroof",
      "Cruise Control",
      "Parking Sensors",
      "19-inch Alloy Wheels",
      "ABS & Traction Control",
      "xDrive All-Wheel Drive",
      "Auto Climate Control",
    ],
    description:
      "This 2016 BMW X3 XDRIVE 20d is in excellent condition with full service history. The vehicle has been meticulously maintained and comes with all original documentation. Perfect for Kenyan roads with its all-wheel drive system and robust build quality. The car features a powerful yet economical diesel engine, making it ideal for both city driving and long-distance travel. Experience luxury and performance combined.",
    owner: {
      name: "Elite Auto Imports",
      phone: "+254 734 567 890",
      whatsapp: "+254734567890",
    },
  },
  {
    id: 4,
    name: "2020 Toyota Corolla Fielder",
    price: "KES 1,950,000",
    priceNumeric: 1950000,
    year: 2020,
    fuel: "Hybrid",
    mileage: "38,000 km",
    image: car1,
    status: "Available",
    type: "Wagon",
    condition: "Used",
    images: [car1, car3, car2, heroCar],
    specs: {
      engine: "1.5L Hybrid",
      transmission: "CVT Automatic",
      fuelType: "Hybrid",
      mileage: "38,000 km",
      exteriorColor: "Silver Metallic",
      interiorType: "Grey Fabric",
    },
    features: [
      "Hybrid System",
      "Reverse Camera",
      "Touch Screen Display",
      "Push Start",
      "Auto AC",
      "Eco Mode",
      "LED DRL",
      "Keyless Entry",
      "Power Windows",
      "Airbags",
    ],
    description:
      "Nearly new 2020 Toyota Corolla Fielder Hybrid with low mileage. This vehicle represents exceptional value with Toyota's renowned reliability and hybrid fuel efficiency. Perfect for families and businesses alike, offering ample cargo space and comfortable seating. The hybrid system delivers impressive fuel economy, reducing your running costs significantly.",
    owner: {
      name: "Tokyo Auto Imports",
      phone: "+254 745 678 901",
      whatsapp: "+254745678901",
    },
  },
  {
    id: 5,
    name: "2019 Mazda CX-30",
    price: "KES 2,400,000",
    priceNumeric: 2400000,
    year: 2019,
    fuel: "Diesel",
    mileage: "42,000 km",
    image: car2,
    status: "Available",
    type: "SUV",
    condition: "Used",
    images: [car2, car1, heroCar, car3],
    specs: {
      engine: "1.8L Diesel",
      transmission: "6-Speed Automatic",
      fuelType: "Diesel",
      mileage: "42,000 km",
      exteriorColor: "Machine Grey",
      interiorType: "Black Leather",
    },
    features: [
      "Premium Leather Interior",
      "Mazda Connect Infotainment",
      "Adaptive LED Headlights",
      "360° Camera",
      "Wireless Charging",
      "Head-Up Display",
      "Heated Seats",
      "Power Tailgate",
      "18-inch Alloys",
      "Smart Brake Support",
    ],
    description:
      "The 2019 Mazda CX-30 combines sophisticated design with advanced technology. This premium compact SUV offers a refined driving experience with excellent fuel economy from its diesel engine. The interior features high-quality materials and the latest connectivity options. Perfect for discerning drivers who appreciate Japanese engineering excellence.",
    owner: {
      name: "Skyline Motors",
      phone: "+254 756 789 012",
      whatsapp: "+254756789012",
    },
  },
  {
    id: 6,
    name: "2017 BMW 3 Series",
    price: "KES 2,800,000",
    priceNumeric: 2800000,
    year: 2017,
    fuel: "Petrol",
    mileage: "55,000 km",
    image: car3,
    status: "Available",
    type: "Sedan",
    condition: "Used",
    images: [car3, car2, car1, heroCar],
    specs: {
      engine: "2.0L Petrol Turbo",
      transmission: "8-Speed Sport Automatic",
      fuelType: "Petrol",
      mileage: "55,000 km",
      exteriorColor: "Black Sapphire",
      interiorType: "Cognac Leather",
    },
    features: [
      "M Sport Package",
      "Professional Navigation",
      "Xenon Headlights",
      "Harman Kardon Sound",
      "Comfort Access",
      "Dual-Zone Climate",
      "Sport Seats",
      "iDrive System",
      "18-inch M Alloys",
      "Dynamic Damper Control",
    ],
    description:
      "Experience the ultimate driving machine with this 2017 BMW 3 Series featuring the M Sport package. This sedan offers exceptional performance, luxury, and cutting-edge technology. The turbocharged engine delivers exhilarating performance while maintaining reasonable fuel consumption. Pristine condition with comprehensive service records and one previous owner.",
    owner: {
      name: "Prestige Auto Gallery",
      phone: "+254 767 890 123",
      whatsapp: "+254767890123",
    },
  },
];
