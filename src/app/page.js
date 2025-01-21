import BlogLayout from '@/components/BlogLayout'
import YouTubeChannelChecker from '@/components/LandingPage'
import SEOContent from '@/components/SeoContent'
import React from 'react'

const page = () => {
  return (
    <div className=' mt-4 min-h-screen'>




      <YouTubeChannelChecker />

      <SEOContent />  </div>
  )
}

export default page