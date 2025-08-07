import { useIsMobile } from "@/hooks/use-mobile";

export default function FloatingCTA() {
  const isMobile = useIsMobile();

  const whatsappMessage = encodeURIComponent(
    "Hi, I'd like to book a stay at Serenity Farmhouse. Please provide me with availability and pricing details."
  );

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
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/919123456789?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center text-2xl shadow-xl animate-float z-40 transition-all duration-300"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Sticky Mobile CTA */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-xl p-4 flex space-x-3 z-30">
          <a
            href="tel:+919123456789"
            className="flex-1 bg-olive text-white py-3 rounded-lg text-center font-semibold"
          >
            <i className="fas fa-phone mr-2"></i>Call
          </a>
          <button
            onClick={() => scrollToSection("booking")}
            className="flex-1 bg-terracotta text-white py-3 rounded-lg text-center font-semibold"
          >
            <i className="fas fa-calendar mr-2"></i>Book
          </button>
        </div>
      )}
    </>
  );
}
