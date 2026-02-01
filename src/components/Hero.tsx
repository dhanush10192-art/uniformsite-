import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const jerseyImages = [
    'https://images.pexels.com/photos/3651820/pexels-photo-3651820.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/3651378/pexels-photo-3651378.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % jerseyImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % jerseyImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + jerseyImages.length) % jerseyImages.length);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-dark">
      <div className="absolute inset-0">
        {jerseyImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-40' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/80 to-navy-dark/90"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10">
        <div className="mb-8 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold border border-blue-500/30">
            Premium Sublimation Technology
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Fast Color
          <span className="block text-blue-400">Sublimation</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Premium Quality Jersey & T-Shirt Printing
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Place Order
          </button>
          <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 font-bold rounded-lg transition-all duration-300">
            Learn More
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: '500+', label: 'Jersey Orders' },
            { number: '50+', label: 'Teams Served' },
            { number: '5 years', label: 'Experience' },
            { number: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center items-center gap-4">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-blue-600/80 hover:bg-blue-700 text-white transition-all duration-300"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex gap-2">
          {jerseyImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-blue-500 w-8' : 'bg-gray-500'
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-blue-600/80 hover:bg-blue-700 text-white transition-all duration-300"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
