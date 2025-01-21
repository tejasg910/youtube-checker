import React from 'react';



// Blog Card Component
const BlogCard = ({ title, description, image, date }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
            src={image || "/api/placeholder/400/200"}
            alt={title}
            className="w-full h-48 object-cover"
        />
        <div className="p-4">
            <span className="text-sm text-gray-500">{date}</span>
            <h3 className="text-xl font-semibold mt-2">{title}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
            <button className="mt-4 text-red-600 font-semibold hover:text-red-700">
                Read More →
            </button>
        </div>
    </div>
);


export default BlogCard;

// Footer Component

