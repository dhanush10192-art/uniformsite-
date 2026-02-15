import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const navigate = useNavigate();

  const galleryItems = [
    { id: 1, title: 'Boys Collection', image: '/001.jpg', alt: 'Boys Collection' },
    { id: 4, title: 'Girls Collection', image: '/004.jpg', alt: 'Girls Collection' },
    { id: 7, title: 'Sports Uniform', image: '/007.jpg', alt: 'Sports Uniform' },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-dark mb-4">
            Our Gallery
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Explore our range of professional uniforms and custom apparel solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl h-64 shadow-md hover:shadow-xl transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Overlay Branding */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-white/30 font-bold text-xs tracking-tighter">FAST COLOUR.</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-lg font-bold tracking-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => navigate('/gallery')}
            className="inline-flex items-center px-8 py-3 bg-uniform-secondary text-white rounded-full font-semibold hover:bg-uniform-primary transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View More
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
