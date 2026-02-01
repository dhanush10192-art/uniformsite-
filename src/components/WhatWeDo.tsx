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
            If you want precise workmanship, durable materials and customized fits (combined with your individual design), short delivery times, a personalized service and a product
            produced under fair conditions in Germany, owayo is your reliable partner in sport.
          </p>
        </motion.div>

        <div className="mt-8 flex justify-center">
          <a href="#about" className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold shadow hover:bg-blue-800 transition">Learn more</a>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
