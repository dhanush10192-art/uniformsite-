import { Calendar } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      title: 'Why Sublimation Printing is Best for Jerseys',
      date: 'Jan 15, 2024',
      excerpt: 'Discover why sublimation is the superior choice for custom jersey printing.',
      image: 'https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Guide to Choosing Team Jersey Colors',
      date: 'Jan 10, 2024',
      excerpt: 'Tips for selecting the perfect color combination for your team jerseys.',
      image: 'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Care Tips for Sublimated Apparel',
      date: 'Jan 5, 2024',
      excerpt: 'How to maintain and care for your sublimation printed jerseys.',
      image: 'https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-dark mb-4">
            Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Latest insights and tips on sublimation printing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar size={16} />
                  <span>{article.date}</span>
                </div>

                <h3 className="text-xl font-bold text-navy-dark mb-3">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
