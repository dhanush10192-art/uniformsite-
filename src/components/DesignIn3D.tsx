import { motion } from 'framer-motion';

const DesignIn3D = () => {
  return (
    <section id="design3d" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Simple To Design - In 3D In Real Time</h2>
            <p className="text-gray-700 mb-6">
              Choose your product, decide on a basic design and customize colors, logos and texts as desired - all in 3D and in real time.
              Save your designs, share them with your team or order directly. Simple, fast and as individual as you are.
            </p>

            <ul className="space-y-3 text-gray-700 mb-6">
              <li>• Real-time 3D preview of your design</li>
              <li>• Change colors, add logos and edit text instantly</li>
              <li>• Save designs and share with teammates</li>
              <li>• Order directly from your finalized design</li>
            </ul>

            <a href="#" className="inline-block px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold shadow hover:bg-blue-800 transition">
              Learn More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/images/customize-3d.jpg"
                alt="3D customizer preview"
                className="w-full h-80 object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-gray-500">Tip: upload an image to <span className="font-medium">public/images/customize-3d.jpg</span> or change the path to your preferred asset.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DesignIn3D;
