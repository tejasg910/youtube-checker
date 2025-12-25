// data/blogs.ts
export const blogs = [
  {
    slug: "mastering-nextjs-app-router",
    title: "Mastering Next.js App Router with Tailwind",
    description: "A complete guide to building scalable websites using the App Router and TailwindCSS.",
    readTime: "6 min read",
    date: "2025-10-05",
    content: `
      <div class="prose prose-lg max-w-none">
        <p>The Next.js App Router introduces a new file-system-based routing system...</p>

        <h2 class="text-2xl font-semibold mt-8">1. Layouts and Routing</h2>
        <p>Layouts in the App Router allow for persistent UI across nested routes...</p>

        <blockquote class="border-l-4 border-blue-500 pl-4 italic my-4">
          "Think of the App Router as React Server Components on steroids."
        </blockquote>

        <h2 class="text-2xl font-semibold mt-8">2. Combining with TailwindCSS</h2>
        <p>With TailwindCSS, your design stays consistent and responsive without writing much CSS.</p>

        <ul class="list-disc pl-5">
          <li>Automatic dark mode</li>
          <li>Responsive grids</li>
          <li>Typography via <code>@tailwindcss/typography</code></li>
        </ul>

        <h3 class="text-xl font-semibold mt-8">Final Thoughts</h3>
        <p>By combining static data, App Router, and Tailwind, you can build dynamic pages without APIs!</p>
      </div>
    `,
  },
  {
    slug: "nextjs-seo-optimization",
    title: "Next.js SEO Optimization Tips",
    description: "Practical steps to make your Next.js website rank better on Google.",
    readTime: "4 min read",
    date: "2025-09-25",
    content: `
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>How to Choose the Perfect YouTube Channel Name | ChannelChecker</title>
        <meta name="description" content="Pro tips for choosing a YouTube channel name that stands out, attracts viewers, and boosts your brand. Real examples included!" />
      </Head>

      <main className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 md:p-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Choose the Perfect YouTube Channel Name (That Doesn't Suck)
          </h1>
          <div className="flex justify-center items-center space-x-4 text-gray-600">
            <span>By Team ChannelChecker</span>
            <span>•</span>
            <span>Updated: August 3, 2025</span>
          </div>
        </div>

        <div className="relative h-64 mb-10 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-700 absolute inset-0 flex items-center justify-center">
            <div className="text-center p-4">
              <h2 className="text-white text-2xl font-bold mb-2">Your Channel Name Matters More Than You Think</h2>
              <p className="text-purple-200 max-w-md mx-auto">It's your first impression and permanent brand - don't screw it up!</p>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            Picking a YouTube channel name feels like naming your firstborn, right? You're stuck between "Is this too cheesy?" and "Will people remember this?" 
            After analyzing 500+ successful channels, we've cracked the code. Here's how to choose a name you won't regret in 6 months.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <div className="flex">
              <div className="flex-shrink-0">💡</div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Pro Tip:</strong> Before you fall in love with a name, <a href="/" className="font-bold text-indigo-600 hover:underline">check if it's available</a> using our tool. Heartbreak avoided.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-6 pb-2 border-b border-gray-200">
            7 Rules For YouTube Names That Actually Work
          </h2>

          <div className="grid gap-8">
            {/* Rule 1 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-indigo-500 text-white w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Say It Out Loud Test</h3>
                <p>
                  If it's awkward to say, it's dead on arrival. Try: <br />
                  <span className="inline-block bg-gray-100 px-3 py-1 rounded-md mt-2 font-mono">
                    "Hey, check out [YourChannelName] on YouTube!"
                  </span>
                </p>
                <div className="bg-green-50 p-4 rounded-lg mt-3">
                  <p className="font-medium text-green-800">Good Examples:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>TechWithSarah → "Check out Tech With Sarah!"</li>
                    <li>GamingGuru → "Watch Gaming Guru's new video!"</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Rule 2 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-indigo-500 text-white w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">The 3-Second Memory Test</h3>
                <p>
                  Can someone remember it after hearing once? <br />
                  <span className="inline-block bg-gray-100 px-3 py-1 rounded-md mt-2 font-mono">
                    "Was it CookingWithJay or JayCooks? Jay'sKitchen?"
                  </span>
                </p>
                <div className="bg-red-50 p-4 rounded-lg mt-3">
                  <p className="font-medium text-red-800">Avoid Like Plague:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Xx_DarkPhoenixGamer_xX</li>
                    <li>EpicQuantumCulinaryExperiences</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Rule 3 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-indigo-500 text-white w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Leave Room to Grow</h3>
                <p>
                  "iPhoneHacks" limits you when Android becomes interesting. Better: <br />
                  <span className="inline-block bg-gray-100 px-3 py-1 rounded-md mt-2 font-mono">
                    "TechSimplified" or "MobileTechLab"
                  </span>
                </p>
                <div className="mt-3 flex">
                  <div className="flex-1 bg-green-50 p-4 rounded-lg mr-2">
                    <p className="font-medium text-green-800">Flexible:</p>
                    <p>FitnessJourney</p>
                  </div>
                  <div className="flex-1 bg-red-50 p-4 rounded-lg ml-2">
                    <p className="font-medium text-red-800">Rigid:</p>
                    <p>KetoDietOnly</p>
                  </div>
                </div>
              </div>
            </div>

            {/* More rules would continue here... */}

          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-6 pb-2 border-b border-gray-200">
            Real Channel Names That Nailed It
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="font-bold text-lg text-indigo-600 mb-2">Marques Brownlee</div>
              <p>Uses his real name - works because he's the brand. Simple and professional for tech reviews.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="font-bold text-lg text-indigo-600 mb-2">5-Minute Crafts</div>
              <p>Tells you exactly what to expect: quick DIY projects. Genius for algorithm searches.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="font-bold text-lg text-indigo-600 mb-2">Yes Theory</div>
              <p>Memorable, short, and reflects their content theme (seeking discomfort).</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="font-bold text-lg text-indigo-600 mb-2">LTT (Linus Tech Tips)</div>
              <p>Shortened version works better than full name. Became their brand identity.</p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 mt-10 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Before You Go...</h3>
            <p className="mb-4">
              Use our <a href="/" className="font-bold text-indigo-600 hover:underline">Channel Name Checker</a> to:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <li className="bg-white py-2 px-4 rounded-lg shadow-sm">1. Test availability</li>
              <li className="bg-white py-2 px-4 rounded-lg shadow-sm">2. Check similar names</li>
              <li className="bg-white py-2 px-4 rounded-lg shadow-sm">3. Get suggestions</li>
            </ul>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Check Your Channel Name Now
            </button>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-200">
            <h3 className="font-bold text-lg mb-4">About ChannelChecker</h3>
            <p>
              We've helped over 12,000 creators launch their channels successfully. Our tools check name availability across all platforms and suggest alternatives when your dream name is taken. Born from our own frustration with unavailable names!
            </p>
          </div>
        </div>
      </main>
    </div>
    `,
  },
];
