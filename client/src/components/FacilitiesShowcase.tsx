export default function FacilitiesShowcase() {
  const mainFacilities = [
    {
      icon: "fas fa-swimming-pool",
      title: "Private Pool",
      description: "Crystal clear swimming pool exclusively for our guests with pool-side seating",
      bgImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: "fas fa-seedling",
      title: "Organic Farm Access",
      description: "Fresh organic vegetables and fruits picked directly from our sustainable farm",
      bgImage: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: "fas fa-bed",
      title: "Luxury Cottages",
      description: "Comfortable air-conditioned accommodation with modern amenities and rustic charm",
      bgImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: "fas fa-fire",
      title: "Bonfire & BBQ Zone",
      description: "Evening bonfire experiences with barbecue facilities for memorable gatherings",
      bgImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: "fas fa-calendar-alt",
      title: "Event Spaces",
      description: "Spacious areas perfect for weddings, parties, and corporate gatherings",
      bgImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: "fas fa-utensils",
      title: "Farm-to-Table Dining",
      description: "Flexible dining options with fresh, organic meals in beautiful settings",
      bgImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    },
  ];

  const additionalFeatures = [
    "Kids Play Area", "Secure Parking", "24/7 Security", "Power Backup", 
    "WiFi Access", "Event Support", "Catering Services", "Photography Areas"
  ];

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-olive mb-6">
            Premium Facilities
          </h2>
          <p className="text-xl text-dark-gray max-w-3xl mx-auto">
            Experience luxury amenities designed for your comfort and enjoyment in our nature paradise
          </p>
        </div>

        {/* Main Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainFacilities.map((facility, index) => (
            <div
              key={index}
              className="card-hover-effect rounded-xl overflow-hidden shadow-lg relative h-80"
              style={{
                backgroundImage: `url(${facility.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                  <i className={`${facility.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-2">
                  {facility.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="font-playfair text-2xl font-semibold text-olive mb-6 text-center">
            Additional Amenities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-cream rounded-lg">
                <i className="fas fa-check-circle text-terracotta"></i>
                <span className="text-sm font-medium text-dark-gray">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}