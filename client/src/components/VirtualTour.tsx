export default function VirtualTour() {
  return (
    <section id="virtual-tour" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-olive mb-6">
            Virtual Tour
          </h2>
          <p className="text-xl text-dark-gray max-w-3xl mx-auto">
            Take a 360° immersive tour of our farmhouse and experience the beauty before you visit
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 360° Tour Embed */}
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-xl">
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-olive to-terracotta">
              <div className="text-center text-white">
                <i className="fas fa-360-degrees text-6xl mb-4"></i>
                <h3 className="text-2xl font-playfair font-semibold mb-2">
                  360° Virtual Tour
                </h3>
                <p className="text-lg opacity-90 mb-4">
                  Interactive walkthrough experience
                </p>
                <button className="bg-white text-olive px-6 py-3 rounded-full font-semibold hover:bg-cream transition-colors">
                  Start Tour
                </button>
              </div>
            </div>
          </div>

          {/* Video Tour */}
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-xl">
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-terracotta to-olive">
              <div className="text-center text-white">
                <i className="fas fa-play-circle text-6xl mb-4"></i>
                <h3 className="text-2xl font-playfair font-semibold mb-2">
                  Cinematic Tour
                </h3>
                <p className="text-lg opacity-90 mb-4">
                  Professional video walkthrough
                </p>
                <button className="bg-white text-olive px-6 py-3 rounded-full font-semibold hover:bg-cream transition-colors">
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tour Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-eye text-2xl text-olive"></i>
            </div>
            <h3 className="font-playfair text-xl font-semibold text-dark-gray mb-2">
              Immersive Experience
            </h3>
            <p className="text-gray-600">
              Explore every corner with interactive 360° views
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-mobile-alt text-2xl text-olive"></i>
            </div>
            <h3 className="font-playfair text-xl font-semibold text-dark-gray mb-2">
              Mobile Friendly
            </h3>
            <p className="text-gray-600">
              Experience the tour on any device, anywhere
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-clock text-2xl text-olive"></i>
            </div>
            <h3 className="font-playfair text-xl font-semibold text-dark-gray mb-2">
              Available 24/7
            </h3>
            <p className="text-gray-600">
              Take the tour anytime at your convenience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}