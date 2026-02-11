import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'RATHI D',
        role: 'Mixed Apparel x 100',
        content: '"Started my small merch business with their prints. The quality helps me charge premium prices. Highly recommend!"',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=compress&cs=tinysrgb&w=150'
    },
    {
        id: 2,
        name: 'DHANUSH R',
        role: 'Cricket Club Captain',
        content: '"The uniforms are breathable and durable. Our team feels like pros on the field. The design process was seamless."',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=compress&cs=tinysrgb&w=150'
    },
    {
        id: 3,
        name: 'PRIYA M',
        role: 'School Principal',
        content: '"Consistently high quality for our school uniforms. Delivery is always on time and the prices are very competitive."',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=compress&cs=tinysrgb&w=150'
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, []);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 500 : -500,
            opacity: 0
        })
    };

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                    >
                        What Our Customers Say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-500 max-w-2xl mx-auto"
                    >
                        Join hundreds of satisfied customers who trust us with their prints
                    </motion.p>
                </div>

                <div className="relative max-w-4xl mx-auto px-12 lg:px-24">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="w-full"
                        >
                            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 md:p-12 relative min-h-[350px] flex flex-col justify-center">
                                <div className="absolute top-8 left-8">
                                    <Quote size={48} className="text-orange-100 transform -scale-x-100" />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <Star key={i} size={20} className="fill-orange-500 text-orange-500" />
                                        ))}
                                    </div>

                                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                                        {testimonials[currentIndex].content}
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <img
                                            src={testimonials[currentIndex].avatar}
                                            alt={testimonials[currentIndex].name}
                                            className="w-14 h-14 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">
                                                {testimonials[currentIndex].name}
                                            </h4>
                                            <p className="text-gray-500 text-sm">
                                                {testimonials[currentIndex].role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 rounded-full bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all z-20 group"
                    >
                        <ChevronLeft size={24} className="text-gray-400 group-hover:text-uniform-secondary" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 rounded-full bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all z-20 group"
                    >
                        <ChevronRight size={24} className="text-gray-400 group-hover:text-uniform-secondary" />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-12">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`transition-all duration-300 rounded-full h-2.5 ${index === currentIndex ? 'bg-orange-500 w-8' : 'bg-gray-200 w-2.5'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
