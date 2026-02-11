import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft } from 'lucide-react';
import { blogData } from '../data/blogData';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BlogDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const article = blogData.find((post) => post.id === id);

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
                    <Link to="/" className="text-uniform-secondary hover:underline">Return to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            <main className="pt-32 pb-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back Button */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-uniform-secondary hover:text-uniform-primary font-semibold mb-8 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Back to Home
                    </Link>

                    {/* Header */}
                    <header className="mb-12">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                            <Calendar size={18} />
                            <span>{article.date}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-6">
                            {article.title}
                        </h1>
                    </header>

                    {/* Cover Image */}
                    <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-xl">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                        {article.content.map((paragraph, index) => (
                            <p key={index} className="mb-6">
                                {paragraph}
                            </p>
                        ))}
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BlogDetailPage;
