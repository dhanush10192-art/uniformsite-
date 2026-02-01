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
              About SubliColor
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a professional sublimation printing company dedicated to delivering high-quality, vibrant custom jerseys and apparel. With over 5 years of experience, we've served hundreds of teams and organizations.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to excellence and customer satisfaction has made us the preferred choice for sublimation printing. We use only the finest materials and state-of-the-art printing technology to ensure every product exceeds expectations.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Teams Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">5 yrs</div>
                <div className="text-gray-600">In Business</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>

            <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
