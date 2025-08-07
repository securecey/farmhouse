import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useOfflineStorage } from "@/hooks/use-offline-storage";
import { Wifi, WifiOff } from "lucide-react";

export default function BookingForm() {
  const { toast } = useToast();
  const { isOnline, addOfflineData } = useOfflineStorage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    purpose: "",
    requests: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Handle offline/online booking submission
    if (!isOnline) {
      // Save for later sync when online
      addOfflineData(formData, 'booking');
      toast({
        title: "Booking Saved Offline",
        description: "Your booking will be sent when you're back online.",
      });
    } else {
      // Here you would integrate with your booking system
      toast({
        title: "Booking Request Sent!",
        description: "We'll get back to you within 24 hours to confirm your reservation.",
      });
    }

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      purpose: "",
      requests: "",
    });
  };

  const whatsappMessage = encodeURIComponent(
    "Hi, I'd like to book a stay at Serenity Farmhouse. Please provide me with availability and pricing details."
  );

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-olive mb-6">
            Book Your Stay
          </h2>
          <p className="text-xl text-dark-gray max-w-3xl mx-auto">
            Ready to experience tranquility? Contact us to reserve your perfect getaway
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <div className="bg-cream rounded-xl p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-playfair text-2xl font-semibold text-olive">
                Reserve Now
              </h3>
              <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                isOnline 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-amber-100 text-amber-700'
              }`}>
                {isOnline ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
                {isOnline ? 'Online' : 'Offline Mode'}
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-dark-gray font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive focus:border-transparent transition-all duration-300"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-dark-gray font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-dark-gray font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone"
                    required
                  />
                </div>
                <div>
                  <label className="block text-dark-gray font-medium mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-dark-gray font-medium mb-2">
                  Visit Purpose
                </label>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select purpose</option>
                  <option value="family-stay">Family Stay</option>
                  <option value="corporate-event">Corporate Event</option>
                  <option value="wedding">Wedding/Celebration</option>
                  <option value="photography">Photography/Videography</option>
                  <option value="day-visit">Day Visit</option>
                </select>
              </div>

              <div>
                <label className="block text-dark-gray font-medium mb-2">
                  Special Requests
                </label>
                <textarea
                  name="requests"
                  value={formData.requests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive focus:border-transparent transition-all duration-300"
                  placeholder="Any special requirements or questions..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-terracotta hover:bg-orange-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Send Booking Request
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:+919123456789"
                className="bg-olive text-white p-6 rounded-xl text-center hover:bg-olive/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <i className="fas fa-phone text-3xl mb-3"></i>
                <h4 className="font-semibold mb-1">Call Now</h4>
                <p className="text-sm opacity-90">+91 91234 56789</p>
              </a>

              <a
                href={`https://wa.me/919123456789?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-6 rounded-xl text-center hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <i className="fab fa-whatsapp text-3xl mb-3"></i>
                <h4 className="font-semibold mb-1">WhatsApp</h4>
                <p className="text-sm opacity-90">Quick Response</p>
              </a>
            </div>

            {/* Location Info */}
            <div className="bg-cream rounded-xl p-8">
              <h3 className="font-playfair text-2xl font-semibold text-olive mb-6">
                Location & Directions
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt text-terracotta mt-1 mr-3"></i>
                  <div>
                    <h4 className="font-semibold text-dark-gray">Address</h4>
                    <p className="text-gray-600">
                      123 Serenity Lane, Green Valley, Countryside 456789
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <i className="fas fa-car text-terracotta mt-1 mr-3"></i>
                  <div>
                    <h4 className="font-semibold text-dark-gray">Distance</h4>
                    <p className="text-gray-600">
                      45 mins from City Center | 2 hours from Airport
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center text-dark-gray">
                  <i className="fas fa-map text-4xl mb-2"></i>
                  <p className="font-medium">Interactive Map</p>
                  <button className="mt-2 bg-olive text-white px-4 py-2 rounded-lg text-sm hover:bg-olive/90 transition-colors">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-playfair text-xl font-semibold text-olive mb-4">
                Contact Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-dark-gray">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-gray">Saturday - Sunday</span>
                  <span className="font-medium">8:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between border-t pt-2 mt-2">
                  <span className="text-dark-gray">Emergency Contact</span>
                  <span className="font-medium text-terracotta">24/7 Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}