import React from "react";
import { Car } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-bold text-yellow-400">TaxiPro</span>
            </div>
            <p className="text-gray-400">
              Your trusted taxi service for safe, reliable, and affordable rides across the city.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-yellow-400 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#booking-section" className="hover:text-yellow-400 transition-colors">
                  Book a Ride
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  About Driver
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-yellow-400 mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: +91 98765 43210</li>
              <li>Email: inder.taxi@example.com</li>
              <li>Available: 24/7</li>
              <li>Location: Delhi, India</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} TaxiPro - Inder Singh. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Built with ❤️ for safe journeys
          </p>
        </div>
      </div>
    </footer>
  );
}