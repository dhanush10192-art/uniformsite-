import { motion } from 'framer-motion';

const WhatWeDo = () => {
  return (
    <section id="whatwedo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">What We Do</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A uniform is standardized clothing worn by a group to promote unity, identity, and professionalism. It ensures consistent appearance, supports functionality, encourages team spirit, and reflects shared values within organizations, schools, workplaces, or teams.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <img
              src="/9001.jpg"
              alt="Cricket jersey design left"
              className="w-full h-50 object-cover rounded-lg hidden md:block"
            />

            <img
              src="/7001.jpg"
              alt="Jersey production facility"
              className="w-100% h-100  object-cover rounded-lg"
            />

            <img
              src="/dkdk.jpg"
              alt="Cricket jersey design right"
              className="w-full h-75 object-cover rounded-lg hidden md:block"
            />
          </div>

          {/* <div>
            <img
              src="/"
              alt="Premium cricket jersey fabric"
              className="w-100% h-48 md:h-64 object-cover rounded-lg"
            />
          </div> */}

          <div className="flex justify-center">
            <a href="#about" className="px-6 py-3 bg-uniform-secondary text-white rounded-lg font-semibold shadow hover:bg-uniform-primary transition">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
