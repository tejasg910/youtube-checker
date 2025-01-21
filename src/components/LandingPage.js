"use client"
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import HandleChecker from './ChannelChecker';

const YouTubeChannelChecker = () => {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const searchChannel = async () => {
        // Note: API_KEY needs to be provided
        const API_KEY = 'AIzaSyDu6gXC_xPY5r5tRfAMB-lEbS5mUm0P-YA';
        setLoading(true);
        setError('');
        setResult(null);

        try {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${encodeURIComponent(
                    query
                )}&key=${API_KEY}`
            );

            if (!response.ok) {
                throw new Error('Failed to fetch channel data');
            }

            const data = await response.json();
            console.log(data, "thisis data")
            if (data.items && data.items.length > 0) {
                setResult(data.items);
            } else {
                setError(`No similar channel found with "${query}"`);
            }
        } catch (err) {
            console.log(err)
            setError('Error searching for channel. Please try again.');
        } finally {
            setLoading(false);
        }
    };


    const handleChangeInput = (e) => {
        setQuery(e.target.value);
        setResult(null);
        setError("")
    }


    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && query.trim()) {
            searchChannel();
        }
    };

    return (
        <div className="w-full mx-auto my-2 max-w-5xl  bg-white rounded-lg px-4 shadow-lg overflow-hidden">
            {/* Header */}
            <div className="p-6 bg-gray-50 border-b border-gray-200">
                <h2 className="text-2xl font-bold">
                    <span className="text-gray-400">Check if a</span>
                    {' '}
                    <span className="text-emerald-500">YouTube Channel Exists</span>
                </h2>            </div>

            {/* Content */}
            <div className=" mt-4">
                {/* Search Input */}
                <div className="flex gap-4 mb-6">
                    <input onKeyDown={handleKeyPress}
                        type="text"
                        value={query}
                        onChange={handleChangeInput}
                        placeholder="Enter channel name and hit Enter button"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <button
                        onClick={searchChannel}
                        disabled={loading || !query}
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    >
                        <Search className="w-5 h-5" />
                        Search
                    </button>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="text-gray-600">
                        Searching...
                    </div>
                )}


                {result &&
                    <div className="my-2">
                        {/* Your existing search input */}
                        <HandleChecker searchResults={result} currentQuery={query} />
                        {/* Rest of your results */}
                    </div>}


                {error &&
                    <div className="my-2">
                        {/* Your existing search input */}
                        <HandleChecker searchResults={result} currentQuery={query} />
                        {/* Rest of your results */}
                    </div>}

                {/* Error Message */}
                {error && (

                    <div className="p-4 mb-4 text-red-700 bg-red-100 rounded-md">
                        {error}
                    </div>



                )}




                {/* Results */}
                {result && (
                    result.map((result, index) => {


                        return <div key={index} className="mt-4">
                            <div className="flex items-start gap-4">
                                <img
                                    src={result.snippet.thumbnails.default.url}
                                    alt={result.snippet.title}
                                    className="w-24 h-24 rounded-md object-cover"
                                />
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {result.snippet.title}
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        {result.snippet.description}
                                    </p>
                                    <div className="mt-3 p-2 bg-gray-50 rounded-md">
                                        <span className="text-sm text-gray-500">Channel ID: </span>
                                        <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                                            {result.snippet.channelId}
                                        </code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })

                )}
            </div>
        </div>
    );
};

export default YouTubeChannelChecker;