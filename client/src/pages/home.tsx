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
    <div className="min-h-screen bg-cream">
      <Navigation />
      <main>
        <HeroSection />
        <FacilitiesShowcase />
        <Gallery />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
