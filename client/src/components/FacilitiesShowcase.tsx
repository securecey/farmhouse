export default function FacilitiesShowcase() {
  const mainFacilities = [
    {
      icon: "fas fa-swimming-pool",
      title: "Private Pool",
      description: "Crystal clear swimming pool exclusively for our guests with pool-side seating",
    },
    {
      icon: "fas fa-seedling",
      title: "Organic Farm Access",
      description: "Fresh organic vegetables and fruits picked directly from our sustainable farm",
    },
    {
      icon: "fas fa-bed",
      title: "Luxury Cottages",
      description: "Comfortable air-conditioned accommodation with modern amenities and rustic charm",
    },
    {
      icon: "fas fa-fire",
      title: "Bonfire & BBQ Zone",
      description: "Evening bonfire experiences with barbecue facilities for memorable gatherings",
    },
    {
      icon: "fas fa-calendar-alt",
      title: "Event Spaces",
      description: "Spacious areas perfect for weddings, parties, and corporate gatherings",
    },
    {
      icon: "fas fa-utensils",
      title: "Farm-to-Table Dining",
      description: "Flexible dining options with fresh, organic meals in beautiful settings",
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
              className="card-hover-effect bg-white rounded-xl p-8 text-center border border-gray-100 shadow-sm"
            >
              <div className="w-20 h-20 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${facility.icon} text-3xl text-olive`}></i>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-dark-gray mb-3">
                {facility.title}
              </h3>
              <p className="text-gray-600">{facility.description}</p>
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