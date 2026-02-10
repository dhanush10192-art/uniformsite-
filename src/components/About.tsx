const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-dark mb-6">
              About  Our Services
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a dedicated Uniforms and manufacturing company committed to delivering high-quality, professional custom jerseys for Football,cricket teams at all levels. With over 11+ years of specialized  apparel experience, we've equipped hundreds of teams across India.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to excellence in Uniforms design and production has made us the preferred choice for amateur leagues, school teams, and professional franchises. We use premium breathable materials and advanced sublimation technology to ensure every jersey is comfortable, durable, and looks professional on the field.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-uniform-secondary mb-2">11+</div>
                <div className="text-gray-600">Uniforms Focus</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-uniform-secondary mb-2">1000+</div>
                <div className="text-gray-600">1000+ Teams</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-uniform-secondary mb-2">99+</div>
                <div className="text-gray-600">States Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-uniform-secondary mb-2">99%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>

            <button className="px-8 py-3 bg-uniform-secondary text-white font-bold rounded-lg hover:bg-uniform-primary transition-colors duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
