// src/config.js
export const SITE_CONFIG = {
  driver: {
    name: "Gaurav Singh",
    experience: "5+ Years",
    image:
      "/profile.jpeg",
    description:
      "Professional driver with extensive knowledge of city routes. Committed to providing safe, comfortable, and punctual service to all passengers.",
  },
  contact: {
    phone: "+918077398835",
    phoneDisplay: "+91 80773 98835",
    email: "gauravnegi258@gmail.com",
    whatsappMessage:
      "Hi, I want to book a taxi. Please share your availability.",
  },
  business: {
    name: "TaxiPro",
    tagline:
      "Your trusted taxi service for safe, reliable, and affordable rides",
    location: "Delhi, India",
    availability: "24/7",
  },
  car: {
    name: "Maruti Suzuki Baleno",
    model: "Baleno",
    brand: "Maruti Suzuki",
    year: "2025",
    color: "Pearl White",
    seats: 5,
    transmission: "Manual",
    fuelType: "Petrol",
    image: "/car.png",
    features: [
      "Clean & Sanitized Daily",
      "AC with Climate Control",
      "Music System with Bluetooth",
      "Comfortable Seating for 4 Passengers",
      "Ample Luggage Space",
      "Well Maintained & Serviced",
    ],
    pricing: {
      baseRate: 12,
      perKm: 12,
      nightCharges: 15,
      waitingCharges: 50,
      intercityRoutes: [
        { from: "Haldwani", to: "Nanital", price: 3500, distance: "250 km" },
        { from: "Haldwani", to: "Lakhnow", price: 4500, distance: "280 km" },
        { from: "Haldwani", to: "Anywhere", price: "Negotiable", distance: "" },
      ],
    },
  },
  stats: {
    customers: "100+",
    rating: "4.9★",
    experience: "5+ Years",
    trips: "500+",
  },
};

// Helper functions
export const makeCall = (phone = SITE_CONFIG.contact.phone) => {
  window.location.href = `tel:${phone}`;
};

export const openWhatsApp = (
  message = SITE_CONFIG.contact.whatsappMessage,
  phone = SITE_CONFIG.contact.phone
) => {
  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};

export const sendEmail = (email = SITE_CONFIG.contact.email) => {
  window.location.href = `mailto:${email}`;
};
