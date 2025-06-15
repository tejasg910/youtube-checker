const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>

      <div className="prose max-w-none">
        <p className="text-gray-600">Last updated: January 21, 2024</p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            When you use our YouTube Channel Checker tool, we collect:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Search queries you enter into the tool</li>
          </ul>
          <p className="text-gray-600 mt-4">
            Through the YouTube API, we access publicly available channel information such as:
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Channel name and ID</li>
            <li>Subscriber count and video count</li>
            <li>Channel profile image and description</li>
          </ul>
          <p className="text-gray-600 mt-4">
            We do not access or store any private user data from Google or YouTube accounts.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">We use the collected information to:</p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Provide and improve our YouTube Channel Checker service</li>
            <li>Analyze usage patterns to enhance user experience</li>
            <li>Maintain and optimize our tool's performance</li>
          </ul>
          <p className="text-gray-600 mt-4">
            Public YouTube data retrieved through the API is used solely to display real-time channel insights during a search session. We do not retain or share this data after use.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Data Security</h2>
          <p className="text-gray-600 mb-4">
            We implement appropriate security measures to protect your information. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Third-Party Services</h2>
          <p className="text-gray-600 mb-4">
            Our tool uses the YouTube API Services. By using our tool, you also agree to the
            <a href="https://www.youtube.com/t/terms" className="text-blue-600 hover:underline ml-1">YouTube Terms of Service</a> and the
            <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline ml-1">Google Privacy Policy</a>.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about this Privacy Policy, please contact us at:
            <a href="mailto:tejasgiri910@gmail.com" className="text-blue-600 hover:underline ml-1">tejasgiri910@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
