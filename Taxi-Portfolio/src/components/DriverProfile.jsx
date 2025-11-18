import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, Sparkles, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SITE_CONFIG } from "@/config";

export default function DriverProfile() {
  const credentials = [
    {
      icon: Shield,
      title: "Licensed Driver",
      description: "Verified government license",
      color: "text-blue-600",
    },
    {
      icon: Award,
      title: "Safe Driving",
      description: "Zero accidents record",
      color: "text-green-600",
    },
    {
      icon: Sparkles,
      title: "Clean Car",
      description: "Sanitized & well-maintained",
      color: "text-purple-600",
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "Always at your service",
      color: "text-yellow-600",
    },
  ];

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
            Meet Your Driver
          </h2>
          <p className="text-xl text-gray-600">
            Experienced professional at your service
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Driver Image & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block mb-6">
              <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full overflow-hidden border-8 border-yellow-400 shadow-2xl">
                <img
                  src={SITE_CONFIG.driver.image}
                  alt={SITE_CONFIG.driver.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                {SITE_CONFIG.driver.experience}
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {SITE_CONFIG.driver.name}
            </h3>
            <p className="text-xl text-yellow-600 font-semibold mb-4">
              Professional Taxi Driver
            </p>
            <p className="text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
              {SITE_CONFIG.driver.description}
            </p>
          </motion.div>

          {/* Credentials Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {credentials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100 hover:border-yellow-400">
                  <div className={`${item.color} mb-4`}>
                    <item.icon className="w-10 h-10" strokeWidth={2} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}