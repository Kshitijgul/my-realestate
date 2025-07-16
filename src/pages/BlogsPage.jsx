import React from 'react';
import Navbar from '../components/Navbar';

const BlogsPage = ({ currentPage, setCurrentPage }) => {
  const blogs = [
    {
      id: 1,
      title: "Real Estate Market Trends 2024",
      date: "March 15, 2024",
      excerpt: "Exploring the latest trends in the real estate market and what they mean for buyers and sellers."
    },
    {
      id: 2,
      title: "Home Buying Tips for First-Time Buyers",
      date: "March 10, 2024",
      excerpt: "Essential advice for navigating your first home purchase successfully."
    },
    {
      id: 3,
      title: "Investment Properties: A Complete Guide",
      date: "March 5, 2024",
      excerpt: "Everything you need to know about investing in real estate properties."
    },
    {
      id: 4,
      title: "Commercial Real Estate Opportunities",
      date: "February 28, 2024",
      excerpt: "Discovering lucrative opportunities in the commercial real estate sector."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Real Estate Blog</h1>
        <div className="space-y-8">
          {blogs.map((blog) => (
            <article key={blog.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="h-32 bg-gradient-to-br from-green-400 to-blue-600 rounded-lg"></div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-3 text-gray-800">{blog.title}</h2>
                  <p className="text-gray-600 mb-4">{blog.date}</p>
                  <p className="text-gray-700 mb-4">{blog.excerpt}</p>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
