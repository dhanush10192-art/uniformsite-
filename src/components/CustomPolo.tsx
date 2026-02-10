import { motion } from 'framer-motion';

const CustomPolo = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=compress&cs=tinysrgb&w=800"
                                alt="Custom Polo T-shirts"
                                className="w-full h-auto rounded-[2.5rem] shadow-2xl"
                            />
                            {/* Accent Background */}
                            <div className="absolute -inset-4 bg-orange-100/30 -z-10 rounded-[3rem] transform -rotate-3"></div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight">
                            Custom School Uniform 
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                            <p className="text-justify">
                                A school uniform is a neat, standardized outfit worn by students to create a sense of discipline, equality, and school identity. Designed for comfort, durability, and a smart appearance, it helps students focus on learning while representing their school with pride
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CustomPolo;
