export default function FacilitiesShowcase() {
  const facilities = [
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
      title: "AC Rooms & Cottages",
      description: "Comfortable air-conditioned accommodation with modern amenities and rustic charm",
    },
    {
      icon: "fas fa-child",
      title: "Kids Play Area",
      description: "Safe and fun playground with swings, slides, and nature-based activities",
    },
    {
      icon: "fas fa-fire",
      title: "Bonfire & BBQ Zone",
      description: "Evening bonfire experiences with barbecue facilities for memorable gatherings",
    },
    {
      icon: "fas fa-utensils",
      title: "Indoor & Outdoor Dining",
      description: "Flexible dining options with farm-to-table meals in beautiful settings",
    },
    {
      icon: "fas fa-calendar-alt",
      title: "Event Lawn & Stage",
      description: "Spacious event area perfect for weddings, parties, and corporate gatherings",
    },
    {
      icon: "fas fa-car",
      title: "Secure Parking",
      description: "Ample safe parking space for all vehicles with 24/7 security monitoring",
    },
    {
      icon: "fas fa-shield-alt",
      title: "24/7 Security & Power",
      description: "Round-the-clock security and uninterrupted power backup for your peace of mind",
    },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="card-hover-effect bg-cream rounded-xl p-8 text-center border border-gray-100"
            >
              <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${facility.icon} text-2xl text-olive`}></i>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-dark-gray mb-3">
                {facility.title}
              </h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
