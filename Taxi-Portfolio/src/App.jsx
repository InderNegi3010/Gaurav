import React from "react";
import HeroSection from "./components/HeroSection";
import DriverProfile from "./components/DriverProfile";
import VehicleSection from "./components/VehicleSection";
import ServicesSection from "./components/ServicesSection";
import ReviewsSection from "./components/ReviewsSection";
import CoverageSection from "./components/CoverageSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-[#FAFAF9] overflow-x-hidden">
      <HeroSection />
      <DriverProfile />
      <VehicleSection />
      <ServicesSection />
      <ReviewsSection />
      <CoverageSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
