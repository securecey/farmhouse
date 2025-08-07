import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FacilitiesShowcase from "@/components/FacilitiesShowcase";
import Gallery from "@/components/Gallery";
import VirtualTour from "@/components/VirtualTour";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <div className="font-poppins bg-cream">
      <Navigation />
      <HeroSection />
      <FacilitiesShowcase />
      <Gallery />
      <VirtualTour />
      <Testimonials />
      <BookingForm />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
