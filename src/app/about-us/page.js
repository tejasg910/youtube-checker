const AboutUs = () => {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About Channel Finder</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              Channel Finder was created to help content creators and viewers easily verify YouTube channel existence and avoid naming conflicts. Our mission is to simplify the channel research process and help creators make informed decisions about their brand identity on YouTube.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">What We Offer</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Quick and accurate YouTube channel verification</li>
              <li>Similar channel name detection</li>
              <li>Channel information and insights</li>
              <li>User-friendly interface</li>
              <li>Free access to essential tools</li>
            </ul>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Accuracy</h3>
                <p className="text-gray-600">
                  We use YouTube's official API to provide the most accurate and up-to-date information.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">Simplicity</h3>
                <p className="text-gray-600">
                  Our tool is designed to be intuitive and easy to use, saving you time and effort.
                </p>
              </div>
            </div>
          </section>
  
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              Have questions or suggestions? We'd love to hear from you. Contact us at: 
              <a href="mailto:tejasgiri910@gmail.com" className="text-blue-600 hover:underline"> tejasgiri910@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    );
  };
  
  export default AboutUs;