import { motion } from 'framer-motion';

const CustomRoundNeck = () => {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 order-2 lg:order-1"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight">
                            Custom Uniforms 
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                            <p className="text-justify">
                                Fast Colors Uniform delivers professional, high-quality workwear designed for comfort, durability, and sharp presentation. Using advanced sublimation printing, every garment features vibrant, fade-resistant colors and crisp detail that lasts through daily use and frequent washing. Fabrics are breathable, lightweight, and sweat-absorbent, ensuring all-day comfort in active environments. Precision stitching, modern fits, and neat finishes create a polished look for teams across industries. Custom logo branding, name printing, and full-bleed designs strengthen identity and visibility. Ideal for corporate, school, sports, hospital, hotel, and industrial needs, Fast Colors Uniform combines performance, style, reliability, and long-lasting value in every piece.
                            </p>
                        </div>
                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 order-1 lg:order-2"
                    >
                        <div className="relative">
                            <img
                                src="1212.jpg"
                                alt="Custom Round Neck T-shirts"
                                className="w-full h-auto rounded-[2.5rem] shadow-2xl"
                            />
                            {/* Accent Background */}
                            <div className="absolute -inset-4 bg-blue-100/30 -z-10 rounded-[3rem] transform rotate-3"></div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default CustomRoundNeck;
