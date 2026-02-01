import { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      title: 'Custom Jersey Print',
      image: 'https://images.pexels.com/photos/3651820/pexels-photo-3651820.jpeg?auto=compress&cs=tinysrgb&w=1000'
    },
    {
      title: 'Team Sublimation',
      image: 'https://images.pexels.com/photos/3651378/pexels-photo-3651378.jpeg?auto=compress&cs=tinysrgb&w=1000'
    },
    {
      title: 'Vibrant Colors',
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1000'
    },
    {
      title: 'Professional Design',
      image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=1000'
    },
    {
      title: 'Custom Graphics',
      image: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=1000'
    },
    {
      title: 'Quality Printing',
      image: 'https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1000'
    },
    {
      title: 'Sports Collection',
      image: 'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=1000'
    },
    {
      title: 'Team Orders',
      image: 'https://images.pexels.com/photos/3651820/pexels-photo-3651820.jpeg?auto=compress&cs=tinysrgb&w=1000'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-dark mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of quality sublimation work
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="group cursor-pointer relative overflow-hidden rounded-lg h-64 sm:h-72"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="font-bold text-lg mb-2">{item.title}</p>
                  <p className="text-sm text-blue-300">Click to view</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-blue-400 transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={galleryItems[selectedImage].image}
              alt={galleryItems[selectedImage].title}
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4 font-bold text-lg">
              {galleryItems[selectedImage].title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
