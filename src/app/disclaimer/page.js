const Disclaimer = () => {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Disclaimer</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-600">Last updated: January 21, 2024</p>
  
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Information Accuracy</h2>
            <p className="text-gray-600 mb-4">
              While we strive to provide accurate results, the YouTube Channel Checker tool relies on data from YouTube's API, and we cannot guarantee 100% accuracy of the results.
            </p>
          </section>
  
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. No Legal Advice</h2>
            <p className="text-gray-600 mb-4">
              The results provided by this tool should not be considered legal advice regarding trademark or brand rights. Consult a legal professional for such matters.
            </p>
          </section>
  
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. External Links</h2>
            <p className="text-gray-600 mb-4">
              Our tool may contain links to external sites. We are not responsible for the content or privacy practices of these sites.
            </p>
          </section>
  
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Service Availability</h2>
            <p className="text-gray-600 mb-4">
              We do not guarantee uninterrupted access to our tool. Service may be affected by YouTube API limitations or technical issues.
            </p>
          </section>
        </div>
      </div>
    );
  };
  
  export default Disclaimer;