import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- Types ---
type Product = {
    id: number;
    title: string;
    category: string;
    image: string;
};

// --- Mock Data Generation (150 Items) ---
const generateProducts = () => {
    const products: Product[] = [];
    const categories = ['Boys Collection', 'Girls Collection', 'Sports Uniform'];
    const baseImages = ['/001.jpg', '/002.jpg', '/003.jpg', '/004.jpg', '/005.jpg', '/006.jpg', '/007.jpg', '/008.jpg', '/009.jpeg'];

    categories.forEach((category) => {
        for (let i = 1; i <= 50; i++) {
            products.push({
                id: products.length + 1,
                category,
                title: `Gallery Image ${i}`,
                image: baseImages[Math.floor(Math.random() * baseImages.length)]
            });
        }
    });
    return products;
};

const allProducts = generateProducts();

// --- Sub-components ---

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 cursor-pointer">
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 md:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-sm md:text-base opacity-95 group-hover:opacity-100">
                    {product.title}
                </h3>
            </div>
        </div>
    );
};

const GalleryPage = () => {
    const [activeCategory, setActiveCategory] = useState('Boys Collection');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const filteredProducts = allProducts.filter(p => p.category === activeCategory);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    const categories = ['Boys Collection', 'Girls Collection', 'Sports Uniform'];

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navigation />

            {/* Banner Section */}
            <div className="pt-24 pb-12 text-center bg-white border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tighter uppercase">
                        Our Gallery
                    </h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium mb-8">
                        Explore our collection of stunning gallery images
                    </p>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-gray-900 text-white shadow-lg scale-105'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <main className="flex-grow py-12 container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Active Category Title */}
                <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter">
                        {activeCategory}
                    </h2>
                    <div className="h-[2px] bg-gray-200 flex-1"></div>
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest bg-white px-4 py-1 rounded-full border border-gray-100">
                        {filteredProducts.length} Images
                    </span>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                    {currentItems.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm font-semibold transition-all ${currentPage === 1
                                ? 'text-gray-300 cursor-not-allowed'
                                : 'text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                                }`}
                        >
                            <ChevronLeft size={18} />
                            Previous
                        </button>

                        <div className="flex items-center space-x-1">
                            {Array.from({ length: totalPages }, (_, i) => {
                                const pageNum = i + 1;
                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => paginate(pageNum)}
                                        className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${currentPage === pageNum
                                            ? 'bg-gray-900 text-white shadow-lg'
                                            : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                                            }`}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm font-semibold transition-all ${currentPage === totalPages
                                ? 'text-gray-300 cursor-not-allowed'
                                : 'text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                                }`}
                        >
                            Next
                            <ChevronRight size={18} />
                        </button>
                    </div>

                    <p className="text-sm text-gray-500 font-medium">
                        Page {currentPage} of {totalPages} ({filteredProducts.length} images in {activeCategory})
                    </p>
                </div>
            </main>

            <Footer />
            <WhatsAppIcon />
        </div>
    );
};

export default GalleryPage;
