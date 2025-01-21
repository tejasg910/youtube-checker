// Main Blog Layout Component

import React from 'react';
import BlogCard from './Blog';

const BlogLayout = () => {
    // Sample blog data
    const blogPosts = [
        {
            title: "Getting Started with React",
            description: "Learn the basics of React and start building your first application with this comprehensive guide.",
            date: "Jan 20, 2024",
            image: "/api/placeholder/400/200"
        },
        {
            title: "Advanced CSS Techniques",
            description: "Discover modern CSS techniques that will take your styling skills to the next level.",
            date: "Jan 19, 2024",
            image: "/api/placeholder/400/200"
        },
        {
            title: "JavaScript Best Practices",
            description: "Follow these best practices to write clean, maintainable JavaScript code.",
            date: "Jan 18, 2024",
            image: "/api/placeholder/400/200"
        },
        {
            title: "Understanding TypeScript",
            description: "A deep dive into TypeScript and how it can improve your development workflow.",
            date: "Jan 17, 2024",
            image: "/api/placeholder/400/200"
        },
        {
            title: "Web Performance Optimization",
            description: "Tips and tricks to optimize your website's performance and improve user experience.",
            date: "Jan 16, 2024",
            image: "/api/placeholder/400/200"
        },
        {
            title: "Modern Web Development",
            description: "Explore the latest trends and tools in modern web development.",
            date: "Jan 15, 2024",
            image: "/api/placeholder/400/200"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col rounded-lg shadow-lg">
           

            <main className="flex-grow bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-3xl font-bold mb-8">Latest Blog Posts</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <BlogCard key={index} {...post} />
                        ))}
                    </div>
                </div>
            </main>

   
        </div>
    );
};

export default BlogLayout;