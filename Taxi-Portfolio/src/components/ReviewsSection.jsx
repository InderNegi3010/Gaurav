import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Rajesh Kumar",
      image:
        "/Rajesh.jpeg",
      rating: 5,
      review:
        "Excellent service! Inder is very punctual and drives safely. The car was clean and comfortable. Highly recommend for airport trips.",
      date: "2 weeks ago",
    },
    {
      name: "Priya Sharma",
      image:
        "/Priya.jpeg",
      rating: 5,
      review:
        "Best taxi service in the city! Very reliable and affordable. I've been using his service for 6 months now. Always on time!",
      date: "1 month ago",
    },
    {
      name: "Amit Patel",
      image:
        "/Amit.jpeg",
      rating: 5,
      review:
        "Very professional driver. Knows all the shortcuts and always gets me to my destination on time. The SUV is perfect for family trips.",
      date: "3 weeks ago",
    },
    {
      name: "Sneha Reddy",
      image:
        "/Sneha.jpeg",
      rating: 4,
      review:
        "Great experience! Safe driving and friendly nature. Booked for a long trip from Delhi to Jaipur and it was very comfortable.",
      date: "1 week ago",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-200 text-gray-200"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100 hover:border-yellow-400 relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-12 h-12 text-yellow-400" />
                </div>

                {/* Profile Section */}
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-12 h-12 border-2 border-yellow-400">
                    <AvatarImage src={review.image} alt={review.name} />
                    <AvatarFallback className="bg-yellow-100 text-yellow-700 font-semibold">
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {renderStars(review.rating)}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed">
                  "{review.review}"
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-yellow-50 border-2 border-yellow-200 px-6 py-3 rounded-full">
            <div className="flex -space-x-2">
              {reviews.slice(0, 3).map((review, index) => (
                <Avatar key={index} className="w-8 h-8 border-2 border-white">
                  <AvatarImage src={review.image} alt={review.name} />
                </Avatar>
              ))}
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900">100+ Happy Customers</p>
              <p className="text-sm text-gray-600">Trusted by locals</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
