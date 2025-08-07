export default function Footer() {
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
    <footer id="contact" className="bg-olive text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-playfair text-3xl font-bold mb-4">
              Serenity Farmhouse
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-md">
              Your perfect escape to nature's luxury. Experience tranquility, comfort, 
              and unforgettable memories at our premium farmhouse retreat.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <i className="fab fa-tripadvisor"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="opacity-90 hover:opacity-100 transition-opacity text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("facilities")}
                  className="opacity-90 hover:opacity-100 transition-opacity text-left"
                >
                  Facilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="opacity-90 hover:opacity-100 transition-opacity text-left"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("virtual-tour")}
                  className="opacity-90 hover:opacity-100 transition-opacity text-left"
                >
                  Virtual Tour
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("booking")}
                  className="opacity-90 hover:opacity-100 transition-opacity text-left"
                >
                  Book Now
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <i className="fas fa-phone mr-3"></i>
                <span>+91 91234 56789</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope mr-3"></i>
                <span>info@serenityfarmhouse.com</span>
              </div>
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt mr-3 mt-1"></i>
                <span>123 Serenity Lane, Green Valley, Countryside 456789</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-80">
            &copy; 2024 Serenity Farmhouse. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
              Terms of Service
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
              Cancellation Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
