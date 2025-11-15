import React from 'react'
import HeroSection from "./components/HeroSection";
import BookingForm from "./components/BookingForm";
import DriverProfile from "./components/DriverForm";
import PricingSection from "./components/PricingSection";
import ReviewsSection from "./components/ReviewsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";


const App = () => {
  return (
<div className="min-h-screen bg-[#FAFAF9]">
      <HeroSection />
      <BookingForm />
      <DriverProfile />
      <PricingSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App