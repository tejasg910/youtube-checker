const ContactPage = () => {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-gray-600 mb-6">
            Have questions about our YouTube Channel Checker tool? We're here to help! Get in touch with us through any of the following methods:
          </p>
  
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-3">Email Us</h2>
              <p className="text-gray-600">
                For general inquiries: <a href="mailto:tejasgiri910@gmail.com" className="text-blue-600 hover:underline">tejasgiri910@gmail.com</a>
              </p>
            </div>
  
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-3">Response Time</h2>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 24-48 hours during business days.
              </p>
            </div>
  
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-700 mb-3">Before Contacting</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Check our FAQ section for quick answers</li>
                <li>Make sure to include your username/email in correspondence</li>
                <li>Be specific about any issues you're experiencing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactPage;