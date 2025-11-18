import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function CoverageSection() {
  const areas = [
    "Central Delhi",
    "South Delhi",
    "North Delhi",
    "East Delhi",
    "West Delhi",
    "Gurgaon",
    "Noida",
    "Faridabad",
    "Ghaziabad",
    "Greater Noida",
    "Delhi Airport",
    "Nearby Cities"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(to_bottom,white,rgb(249_250_251))]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Coverage Areas
          </h2>
          <p className="text-xl text-gray-600">
            Serving Delhi NCR and surrounding regions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center gap-2 p-4 bg-white rounded-lg hover:bg-yellow-50 transition-colors border-2 border-gray-100 hover:border-yellow-400 hover:shadow-md"
            >
              <MapPin className="w-5 h-5 text-yellow-600 shrink-0" />
              <span className="text-gray-700 font-medium">{area}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}