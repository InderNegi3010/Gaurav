import React from "react";
import { motion } from "framer-motion";
import { Car, Truck, MapPin, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PricingSection() {
  const pricingPlans = [
    {
      icon: Car,
      name: "Sedan",
      price: "₹12",
      period: "per km",
      description: "Perfect for daily commute",
      features: [
        "4 Passenger seats",
        "AC & Music",
        "Clean interior",
        "Safe journey",
      ],
      color: "from-blue-500 to-blue-600",
      popular: false,
    },
    {
      icon: Truck,
      name: "SUV",
      price: "₹16",
      period: "per km",
      description: "Spacious & comfortable",
      features: [
        "7 Passenger seats",
        "Premium AC",
        "Extra luggage space",
        "Family trips",
      ],
      color: "from-yellow-400 to-yellow-500",
      popular: true,
    },
    {
      icon: MapPin,
      name: "City to City",
      price: "Custom",
      period: "packages",
      description: "Long distance travel",
      features: [
        "Delhi to Chandigarh: ₹3500",
        "Delhi to Jaipur: ₹4500",
        "Delhi to Agra: ₹3000",
        "Custom routes available",
      ],
      color: "from-purple-500 to-purple-600",
      popular: false,
    },
  ];

  const handleBooking = (plan) => {
    const phone = "+919876543210";
    const message = `Hi, I want to book a ${plan} taxi. Please share availability.`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the best option for your journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <Card
                className={`p-8 h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${
                  plan.popular
                    ? "border-yellow-400 shadow-xl"
                    : "border-gray-200"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-linear-to-br ${plan.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <plan.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check
                        className="w-5 h-5 text-green-600 shrink-0 mt-0.5"
                        strokeWidth={3}
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={() => handleBooking(plan.name)}
                  className={`w-full h-12 font-semibold rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                      : "bg-black hover:bg-gray-800 text-white"
                  }`}
                >
                  Book {plan.name}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            * Prices may vary based on traffic conditions and time of day. Toll
            charges extra.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
