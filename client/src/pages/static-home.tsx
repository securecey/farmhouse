import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FacilitiesShowcase from "@/components/FacilitiesShowcase";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function StaticHome() {
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