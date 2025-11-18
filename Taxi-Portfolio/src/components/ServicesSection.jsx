import React from "react";
import { motion } from "framer-motion";
import { Navigation, MapPin, Users, Car } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      icon: Navigation,
      title: "Airport Transfers",
      description: "Reliable pickup and drop services to all major airports",
      color: "bg-blue-500"
    },
    {
      icon: MapPin,
      title: "City Tours",
      description: "Explore the city with our knowledgeable driver",
      color: "bg-green-500"
    },
    {
      icon: Users,
      title: "Corporate Travel",
      description: "Professional service for business meetings and events",
      color: "bg-purple-500"
    },
    {
      icon: Car,
      title: "Daily Commute",
      description: "Regular office and school pickup/drop services",
      color: "bg-yellow-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(to_bottom,white,rgb(249_250_251))]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive taxi solutions for all your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-yellow-400">
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}