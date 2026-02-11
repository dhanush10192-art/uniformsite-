import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, MessageSquare } from 'lucide-react';
import { galleryData } from '../data/galleryData';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import WhatsAppIcon from '../components/WhatsAppIcon';

const GalleryDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const product = galleryData.find((item) => item.id === id);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4 text-navy-dark">Product Not Found</h2>
                    <Link to="/gallery" className="text-uniform-secondary hover:underline">Return to Gallery</Link>
                </div>
            </div>
        );
    }

    const whatsappMessage = `Hi Fast Colors, I'm interested in the ${product.title} (SKU: ${product.sku}). Can I get more details?`;
    const whatsappUrl = `https://wa.me/917812865788?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            <main className="pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs / Back Link */}
                    <Link
                        to="/gallery"
                        className="inline-flex items-center gap-2 text-uniform-secondary hover:text-uniform-primary font-semibold mb-8 transition-colors group"
                    >
                        <ArrowLeft size={20} className="transform group-hover:-translate-x-1 transition-transform" />
                        Back to Gallery
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Image Gallery (Simplified to one main image for now) */}
                        <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
                                <span className="text-xs font-bold text-navy-dark uppercase tracking-wider">{product.category}</span>
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="flex flex-col">
                            <div className="mb-8">
                                <div className="text-sm font-bold text-uniform-secondary mb-2 uppercase tracking-widest">{product.sku}</div>
                                <h1 className="text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-4">
                                    {product.title}
                                </h1>
                                <div className="text-2xl font-bold text-blue-600 mb-6">{product.price}</div>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    {product.description}
                                </p>
                            </div>

                            {/* Features List */}
                            <div className="mb-10">
                                <h3 className="text-lg font-bold text-navy-dark mb-4 uppercase tracking-wide">Key Features</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {product.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-100">
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 min-w-[200px] flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    <MessageSquare size={24} />
                                    Enquire via WhatsApp
                                </a>
                                <button className="flex-1 min-w-[200px] bg-navy-dark hover:bg-black text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                    Place Bulk Order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
            <WhatsAppIcon />
        </div>
    );
};

export default GalleryDetailPage;
