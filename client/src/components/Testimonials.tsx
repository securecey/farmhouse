import { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Martinez",
      date: "Family Vacation, March 2024",
      rating: 5,
      text: "An absolutely magical experience! The farmhouse exceeded our expectations with its perfect blend of luxury and nature. The organic farm fresh meals and peaceful environment made our family vacation unforgettable.",
      initials: "SM",
    },
    {
      name: "Rajesh Kumar",
      date: "Corporate Retreat, January 2024",
      rating: 5,
      text: "Outstanding venue for our team retreat! The facilities were top-notch, staff was incredibly helpful, and the natural setting provided the perfect backdrop for team bonding activities.",
      initials: "RK",
    },
    {
      name: "Emily Chen",
      date: "Wedding Celebration, February 2024",
      rating: 5,
      text: "Our wedding at Serenity Farmhouse was like a dream come true! The event lawn was beautifully decorated, the catering was exceptional, and our guests are still talking about the magical evening.",
      initials: "EC",
    },
  ];

  const stats = [
    { number: "150+", label: "Happy Guests" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Return Guests" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-olive mb-6">
            Guest Experiences
          </h2>
          <p className="text-xl text-dark-gray max-w-3xl mx-auto">
            Hear from our delighted guests about their memorable stays at Serenity Farmhouse
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="testimonial-slider overflow-hidden">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
              <blockquote className="text-lg text-dark-gray italic mb-6 font-medium">
                "{testimonials[currentSlide].text}"
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-olive rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonials[currentSlide].initials}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-dark-gray">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonials[currentSlide].date}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-olive hover:bg-olive hover:text-white transition-all duration-300"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-olive hover:bg-olive hover:text-white transition-all duration-300"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Social Proof */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-olive mb-2">{stat.number}</div>
              <p className="text-dark-gray font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}