'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Users, BarChart3, Sparkles } from 'lucide-react'

const HeroSection = () => {
  // Scroll to checker function
  const scrollToChecker = () => {
    const checkerElement = document.getElementById('youtube-checker');
    if (checkerElement) {
      checkerElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-blue-50 pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Free YouTube Analytics Tool
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Grow Your YouTube Channel with
              <span className="text-emerald-500"> Data-Driven Insights</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Analyze any YouTube channel instantly. Get detailed statistics, subscriber counts, video performance metrics, and expert strategies to skyrocket your growth.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToChecker}
                className="group inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-white text-lg font-semibold rounded-full hover:bg-emerald-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Analyze Channel Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 text-lg font-semibold rounded-full hover:bg-gray-50 transition-all shadow-md border border-gray-200"
              >
                Read Growth Guides
              </Link>
            </div>

            {/* Stats/Trust Indicators */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full shadow-md mb-3">
                  <TrendingUp className="w-8 h-8 text-emerald-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">100% Free</div>
                <div className="text-sm text-gray-600">No Credit Card Required</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full shadow-md mb-3">
                  <BarChart3 className="w-8 h-8 text-emerald-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">Real-Time Data</div>
                <div className="text-sm text-gray-600">Instant Analysis</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full shadow-md mb-3">
                  <Users className="w-8 h-8 text-emerald-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">Expert Tips</div>
                <div className="text-sm text-gray-600">Proven Strategies</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HeroSection