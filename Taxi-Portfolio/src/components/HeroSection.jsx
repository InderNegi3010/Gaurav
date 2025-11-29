import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG, makeCall, openWhatsApp } from "@/config";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/background.jpeg"
          alt="Taxi Driver"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(0_0_0/0.8),rgb(0_0_0/0.6),rgb(0_0_0/0.4))]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold text-sm mb-6"
            >
              <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
              Available {SITE_CONFIG.business.availability}
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Book a Reliable
              <span className="block text-yellow-400">Taxi Anytime</span>
            </motion.h1>

            {/* Subheading with Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap items-center gap-4 text-xl text-gray-200 mb-10"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                Safe
              </span>
              <span className="text-yellow-400">•</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                Fast
              </span>
              <span className="text-yellow-400">•</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                Affordable
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={makeCall}
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold flex justify-center items-center px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button
                onClick={() => openWhatsApp()}
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold flex justify-center items-center px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-12 flex flex-wrap gap-8"
            >
              <div>
                <div className="text-3xl font-bold text-yellow-400">
                  {SITE_CONFIG.stats.customers}
                </div>
                <div className="text-gray-300">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">
                  {SITE_CONFIG.stats.experience}
                </div>
                <div className="text-gray-300">Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">
                  {SITE_CONFIG.stats.rating}
                </div>
                <div className="text-gray-300">Average Rating</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
