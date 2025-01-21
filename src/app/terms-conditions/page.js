const TermsAndConditions = () => {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms and Conditions</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-600">Last updated: January 21, 2024</p>
  
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using the YouTube Channel Checker tool, you accept and agree to be bound by these Terms and Conditions.
            </p>
          </section>
  
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. Use License</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Permission is granted to temporarily use this tool for personal, non-commercial purposes.</li>
              <li>This license shall automatically terminate if you violate any of these restrictions.</li>
              <li>Upon termination, you must destroy any downloaded materials.</li>
            </ul>
          </section>
  
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              The tool is provided "as is". We make no warranties about the completeness, reliability, or accuracy of this tool's results.
            </p>
          </section>
  
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Limitations</h2>
            <p className="text-gray-600 mb-4">
              We shall not be held liable for any damages arising from the use or inability to use the tool.
            </p>
          </section>
  
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. YouTube API Services</h2>
            <p className="text-gray-600 mb-4">
              This tool uses YouTube API Services and is bound by YouTube's Terms of Service.
            </p>
          </section>
  
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">6. Contact</h2>
            <p className="text-gray-600 mb-4">
              Questions about these Terms should be sent to: 
              <a href="mailto:tejasgiri910@gmail.com" className="text-blue-600 hover:underline"> tejasgiri910@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    );
  };
  
  export default TermsAndConditions;