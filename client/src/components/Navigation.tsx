import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "absolute top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/98 shadow-lg" : "bg-white/95 backdrop-blur-md shadow-lg"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="font-playfair text-2xl font-bold text-olive">
              Serenity Farmhouse
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-dark-gray hover:text-olive transition-colors duration-300 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("facilities")}
                className="text-dark-gray hover:text-olive transition-colors duration-300 font-medium"
              >
                Facilities
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-dark-gray hover:text-olive transition-colors duration-300 font-medium"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("virtual-tour")}
                className="text-dark-gray hover:text-olive transition-colors duration-300 font-medium"
              >
                Virtual Tour
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-dark-gray hover:text-olive transition-colors duration-300 font-medium"
              >
                Contact
              </button>
            </div>
          </div>

          {/* CTA Button - Desktop (hidden, we'll use fixed button instead) */}
          <div className="hidden"></div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-dark-gray hover:text-olive focus:outline-none"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-3 py-2 text-dark-gray hover:text-olive"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("facilities")}
              className="block w-full text-left px-3 py-2 text-dark-gray hover:text-olive"
            >
              Facilities
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left px-3 py-2 text-dark-gray hover:text-olive"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("virtual-tour")}
              className="block w-full text-left px-3 py-2 text-dark-gray hover:text-olive"
            >
              Virtual Tour
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 text-dark-gray hover:text-olive"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="block w-full text-center px-3 py-2 bg-terracotta text-white rounded-lg mx-3"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}