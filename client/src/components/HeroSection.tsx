import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
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
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        onError={(e) => console.error('Video failed to load:', e)}
        onLoadStart={() => console.log('Video loading started')}
        onCanPlay={() => console.log('Video can start playing')}
      >
        <source src="/hero-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      
      {/* Fallback background image - shows if video fails */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
          zIndex: -1
        }}
      ></div>
      
      <div className="absolute inset-0 gradient-overlay"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1
          className={`font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow ${
            isLoaded ? "animate-fade-in" : "opacity-0"
          }`}
        >
          Serenity Farmhouse
        </h1>
        <p
          className={`text-xl md:text-2xl mb-8 text-shadow opacity-90 ${
            isLoaded ? "animate-slide-up" : "opacity-0"
          }`}
        >
          Luxury farm living with nature's tranquility
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${
            isLoaded ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <button
            onClick={() => scrollToSection("booking")}
            className="bg-terracotta hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Book Your Stay
          </button>
          <button
            onClick={() => scrollToSection("virtual-tour")}
            className="border-2 border-white text-white hover:bg-white hover:text-olive px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Virtual Tour
          </button>
          <a
            href="tel:+919123456789"
            className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 px-6 py-4 rounded-full font-semibold text-lg transition-all duration-300 sm:ml-4"
          >
            <i className="fas fa-phone mr-2"></i>Call Now
          </a>
        </div>

        {/* USPs - Simplified */}
        <div
          className={`mt-12 flex flex-wrap justify-center gap-8 text-sm ${
            isLoaded ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
            <i className="fas fa-leaf text-terracotta"></i>
            <span>Nature Escape</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
            <i className="fas fa-swimming-pool text-terracotta"></i>
            <span>Private Pool</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
            <i className="fas fa-seedling text-terracotta"></i>
            <span>Organic Farm</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="fas fa-chevron-down text-2xl"></i>
      </div>
    </section>
  );
}