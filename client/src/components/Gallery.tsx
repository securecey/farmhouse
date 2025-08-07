import { useState } from "react";

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("photos");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const photos = [
    {
      src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Luxury cottage interior",
    },
    {
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Private swimming pool",
    },
    {
      src: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Organic farm produce",
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Outdoor dining area",
    },
    {
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Kids play area",
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Evening bonfire",
    },
  ];

  const dronePhotos = [
    {
      src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Aerial farmhouse view",
    },
    {
      src: "https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Aerial field view",
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Aerial pool and facilities",
    },
  ];

  const tabs = [
    { id: "photos", label: "Photos", icon: "fas fa-camera" },
    { id: "videos", label: "Virtual Tours", icon: "fas fa-video" },
    { id: "drone", label: "Drone Views", icon: "fas fa-helicopter" },
  ];

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-olive mb-6">
            Experience Gallery
          </h2>
          <p className="text-xl text-dark-gray max-w-3xl mx-auto">
            Immerse yourself in the beauty and tranquility of our farmhouse through our visual journey
          </p>
        </div>

        {/* Gallery Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-olive text-white"
                    : "text-dark-gray hover:text-olive"
                }`}
              >
                <i className={`${tab.icon} mr-2`}></i>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Photos Tab */}
        {activeTab === "photos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="gallery-item cursor-pointer overflow-hidden rounded-xl shadow-lg card-hover-effect"
                onClick={() => openLightbox(photo.src)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        )}

        {/* Virtual Tours Tab */}
        {activeTab === "videos" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 360° Tour */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-olive to-terracotta flex items-center justify-center">
                  <div className="text-center text-white">
                    <i className="fas fa-360-degrees text-6xl mb-4"></i>
                    <h3 className="text-xl font-semibold mb-2">360° Virtual Tour</h3>
                    <p className="text-sm opacity-90 mb-4">Interactive walkthrough</p>
                    <button className="bg-white text-olive px-6 py-2 rounded-full font-semibold hover:bg-cream transition-colors">
                      Start Tour
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Video Tour */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-terracotta to-olive flex items-center justify-center">
                  <div className="text-center text-white">
                    <i className="fas fa-play-circle text-6xl mb-4"></i>
                    <h3 className="text-xl font-semibold mb-2">Cinematic Tour</h3>
                    <p className="text-sm opacity-90 mb-4">Professional video walkthrough</p>
                    <button className="bg-white text-olive px-6 py-2 rounded-full font-semibold hover:bg-cream transition-colors">
                      Watch Video
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tour Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-eye text-lg text-olive"></i>
                </div>
                <h4 className="font-semibold text-dark-gray mb-2">Immersive Experience</h4>
                <p className="text-sm text-gray-600">Explore every corner with interactive views</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-mobile-alt text-lg text-olive"></i>
                </div>
                <h4 className="font-semibold text-dark-gray mb-2">Mobile Friendly</h4>
                <p className="text-sm text-gray-600">Experience on any device, anywhere</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-clock text-lg text-olive"></i>
                </div>
                <h4 className="font-semibold text-dark-gray mb-2">Available 24/7</h4>
                <p className="text-sm text-gray-600">Take the tour anytime at your convenience</p>
              </div>
            </div>
          </div>
        )}

        {/* Drone Views Tab */}
        {activeTab === "drone" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dronePhotos.map((photo, index) => (
              <div
                key={index}
                className="gallery-item cursor-pointer overflow-hidden rounded-xl shadow-lg card-hover-effect"
                onClick={() => openLightbox(photo.src)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 lightbox-overlay z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="max-w-4xl max-h-full">
            <img
              src={lightboxImage}
              alt=""
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-3xl hover:text-terracotta transition-colors"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}