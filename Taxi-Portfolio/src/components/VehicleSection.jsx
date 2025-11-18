import React from "react";
import { motion } from "framer-motion";
import { Car, Users, Fuel, Settings, Check, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG, openWhatsApp } from "@/config";

export default function VehicleSection() {
  const carSpecs = [
    {
      icon: Car,
      label: "Model",
      value: SITE_CONFIG.car.model,
      color: "text-blue-600"
    },
    {
      icon: Users,
      label: "Seating",
      value: `${SITE_CONFIG.car.seats} Passengers`,
      color: "text-green-600"
    },
    {
      icon: Settings,
      label: "Transmission",
      value: SITE_CONFIG.car.transmission,
      color: "text-purple-600"
    },
    {
      icon: Fuel,
      label: "Fuel Type",
      value: SITE_CONFIG.car.fuelType,
      color: "text-orange-600"
    }
  ];

  const handleBooking = () => {
    const message = `Hi, I want to book your ${SITE_CONFIG.car.name}. Please share availability and rates.`;
    openWhatsApp(message);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Vehicle
          </h2>
          <p className="text-xl text-gray-600">
            Clean, comfortable, and well-maintained car for your journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Car Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={SITE_CONFIG.car.image}
                alt={SITE_CONFIG.car.name}
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 left-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-lg">
                {SITE_CONFIG.car.year} Model
              </div>
            </div>
          </motion.div>

          {/* Car Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {SITE_CONFIG.car.name}
              </h3>
              <p className="text-xl text-yellow-600 font-semibold mb-4">
                {SITE_CONFIG.car.color} • {SITE_CONFIG.car.year}
              </p>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-4">
              {carSpecs.map((spec, index) => (
                <Card
                  key={index}
                  className="p-4 border-2 border-gray-100 hover:border-yellow-400 transition-all hover:shadow-md"
                >
                  <div className={`${spec.color} mb-2`}>
                    <spec.icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <p className="text-sm text-gray-600">{spec.label}</p>
                  <p className="font-bold text-gray-900">{spec.value}</p>
                </Card>
              ))}
            </div>

            {/* Features List */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-4 text-lg">
                Car Features
              </h4>
              <ul className="grid grid-cols-1 gap-3">
                {SITE_CONFIG.car.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check
                      className="w-5 h-5 text-green-600 shrink-0"
                      strokeWidth={3}
                    />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Book Button */}
            <Button
              onClick={handleBooking}
              className="w-full h-14 bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              Book This Car Now
            </Button>
          </motion.div>
        </div>

        {/* Pricing Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 border-2 border-yellow-200 bg-yellow-50">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Transparent Pricing
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Local Rates */}
              <div>
                <h4 className="font-bold text-gray-900 mb-4 text-lg">
                  Local Rides
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Base Rate (First 5 km)</span>
                    <span className="font-bold text-gray-900">
                      ₹{SITE_CONFIG.car.pricing.baseRate * 5}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Per Kilometer</span>
                    <span className="font-bold text-gray-900">
                      ₹{SITE_CONFIG.car.pricing.perKm}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Night Charges (11 PM - 6 AM)</span>
                    <span className="font-bold text-gray-900">
                      ₹{SITE_CONFIG.car.pricing.nightCharges}/km
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Waiting Charges</span>
                    <span className="font-bold text-gray-900">
                      ₹{SITE_CONFIG.car.pricing.waitingCharges}/hour
                    </span>
                  </div>
                </div>
              </div>

              {/* Intercity Routes */}
              <div>
                <h4 className="font-bold text-gray-900 mb-4 text-lg">
                  Popular Routes
                </h4>
                <div className="space-y-3">
                  {SITE_CONFIG.car.pricing.intercityRoutes.map((route, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <MapPin className="w-5 h-5 text-yellow-600 shrink-0" />
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">
                          {route.from} → {route.to}
                        </div>
                        <div className="text-sm text-gray-600">{route.distance}</div>
                      </div>
                      <div className="font-bold text-gray-900">₹{route.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t-2 border-yellow-200">
              <p className="text-sm text-gray-600 text-center">
                * Prices may vary based on traffic conditions and time of day. Toll and parking charges extra.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}