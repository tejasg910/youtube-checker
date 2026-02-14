import YouTubeChannelChecker from '@/components/LandingPage'
import SEOContent from '@/components/SeoContent'
import React from 'react'
import Link from 'next/link'
import { blogs } from '@/lib/data'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import HeroSection from '@/components/HeroSection'

const page = () => {
  // Get the first 8 blogs
  const recentBlogs = blogs.slice(0, 8);

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <HeroSection />

      {/* YouTube Checker Section */}
      <div id="youtube-checker" className="scroll-mt-4">
        {/* 
          SECURITY NOTE: 
          The API_KEY is passed to the client component below. 
          Ensure that this key is restricted in the Google Cloud Console 
          to only accept requests from your domain (https://chennelchecker.online) 
          to prevent unauthorized use.
        */}
        <YouTubeChannelChecker API_KEY={process.env.YOUTUBE_API_KEY} />
      </div>

      {/* Featured Blogs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Latest Insights & Guides</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Master YouTube growth with our expert strategies, tips, and in-depth guides.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentBlogs.map((blog) => (
              <Link 
                key={blog.slug} 
                href={`/blog/${blog.slug}`}
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full"
              >
                <div className="p-5 flex flex-col h-full">
                  <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {blog.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {blog.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                    {blog.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {blog.description}
                  </p>
                  
                  <div className="flex items-center text-emerald-600 text-sm font-medium mt-auto group-hover:translate-x-1 transition-transform">
                    Read Article 
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/blog" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Explore All Articles
            </Link>
          </div>
        </div>
      </section>

      <SEOContent />  
    </div>
  )
}

export default page