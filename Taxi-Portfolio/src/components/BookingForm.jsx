import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Static form - just show alert
    alert(
      `Fare Estimate:\nPickup: ${formData.pickup}\nDrop: ${
        formData.dropoff
      }\nEstimated Fare: ₹${Math.floor(Math.random() * 500 + 200)}`
    );
  };

  return (
    <section
      id="booking-section"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(to_bottom,#FAFAF9,white)]"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Book Your Ride
          </h2>
          <p className="text-xl text-gray-600">
            Get an instant fare estimate for your journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 shadow-2xl border-none bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Pickup Location */}
                <div className="space-y-2">
                  <Label
                    htmlFor="pickup"
                    className="text-sm font-semibold text-gray-700 flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4 text-yellow-500" />
                    Pickup Location
                  </Label>
                  <Input
                    id="pickup"
                    placeholder="Enter pickup address"
                    value={formData.pickup}
                    onChange={(e) =>
                      setFormData({ ...formData, pickup: e.target.value })
                    }
                    className="h-12 border-2 border-gray-200 focus:border-yellow-400 rounded-xl"
                  />
                </div>

                {/* Drop Location */}
                <div className="space-y-2">
                  <Label
                    htmlFor="dropoff"
                    className="text-sm font-semibold text-gray-700 flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4 text-red-500" />
                    Drop Location
                  </Label>
                  <Input
                    id="dropoff"
                    placeholder="Enter drop address"
                    value={formData.dropoff}
                    onChange={(e) =>
                      setFormData({ ...formData, dropoff: e.target.value })
                    }
                    className="h-12 border-2 border-gray-200 focus:border-yellow-400 rounded-xl"
                  />
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <Label
                    htmlFor="date"
                    className="text-sm font-semibold text-gray-700 flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-blue-500" />
                    Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="h-12 border-2 border-gray-200 focus:border-yellow-400 rounded-xl"
                  />
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <Label
                    htmlFor="time"
                    className="text-sm font-semibold text-gray-700 flex items-center gap-2"
                  >
                    <Clock className="w-4 h-4 text-purple-500" />
                    Time
                  </Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                    className="h-12 border-2 border-gray-200 focus:border-yellow-400 rounded-xl"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-14 bg-black hover:bg-gray-900 text-yellow-400 flex justify-center items-center font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                Get Fare Estimate
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}