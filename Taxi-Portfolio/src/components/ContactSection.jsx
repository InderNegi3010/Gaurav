import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };

  const handleWhatsApp = () => {
    const phone = "+919876543210";
    const message =
      "Hi, I want to book a taxi. Please share your availability.";
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleEmail = () => {
    window.location.href = "mailto:inder.taxi@example.com";
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(to_bottom,rgb(249_250_251),white)]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600">We're here to help you 24/7</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Quick Contact
              </h3>
              <p className="text-gray-600 mb-8">
                Choose your preferred way to reach us. We respond quickly to all
                inquiries.
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-4">
              <Button
                onClick={handleCall}
                className="w-full h-16 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] justify-start px-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm opacity-90">Call Now</div>
                    <div className="font-bold">+91 98765 43210</div>
                  </div>
                </div>
              </Button>

              <Button
                onClick={handleWhatsApp}
                className="w-full h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] justify-start px-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm opacity-90">WhatsApp</div>
                    <div className="font-bold">Chat with us</div>
                  </div>
                </div>
              </Button>

              <Button
                onClick={handleEmail}
                className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] justify-start px-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm opacity-90">Email</div>
                    <div className="font-bold">inder.taxi@example.com</div>
                  </div>
                </div>
              </Button>
            </div>

            {/* Operating Hours */}
            <Card className="p-6 bg-yellow-50 border-2 border-yellow-200">
              <h4 className="font-bold text-gray-900 mb-3">Operating Hours</h4>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Sunday</span>
                  <span className="font-semibold">24/7</span>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Available round the clock for your convenience
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 shadow-xl border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="h-12 border-2 border-gray-200 focus:border-yellow-400 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="h-12 border-2 border-gray-200 focus:border-yellow-400 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your booking requirements..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="min-h-32 border-2 border-gray-200 focus:border-yellow-400 rounded-xl"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-black flex items-center justify-center hover:bg-gray-900 text-yellow-400 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}