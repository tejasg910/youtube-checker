const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>

      <div className="prose max-w-none">
        <p className="text-gray-600">Last updated: January 21, 2024</p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            1. Information We Collect
          </h2>

          <p className="text-gray-600 mb-4">
            When you use the YouTube Channel Checker tool, we collect the search
            queries you enter to retrieve YouTube channel information.
          </p>

          <p className="text-gray-600 mb-4">
            Through YouTube API Services, we access publicly available channel
            information such as:
          </p>

          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Channel name and channel ID</li>
            <li>Subscriber count and video count</li>
            <li>Channel description and profile image</li>
          </ul>

          <p className="text-gray-600 mt-4">
            We do not access, request, or store any private user data from Google
            or YouTube accounts.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            2. Analytics and Device Information
          </h2>

          <p className="text-gray-600 mb-4">
            We use Google Analytics to understand how users interact with our
            website and to improve performance. Google Analytics may collect
            information such as pages visited, browser type, device information,
            and approximate location.
          </p>

          <p className="text-gray-600 mb-4">
            Google Analytics may use cookies or similar technologies in
            accordance with Google’s policies. This data is collected in an
            aggregated and anonymized form and is not used to identify individual
            users.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            3. How We Use Information
          </h2>

          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>To display real-time YouTube channel information</li>
            <li>To improve website functionality and performance</li>
            <li>To analyze usage trends and enhance user experience</li>
          </ul>

          <p className="text-gray-600 mt-4">
            Public YouTube data retrieved through the API is used only during the
            active session and is not stored, aggregated, or shared.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            4. Data Retention
          </h2>

          <p className="text-gray-600">
            We do not permanently store YouTube API data. Any temporary data used
            to process a request is discarded after the request is completed.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            5. Third-Party Services
          </h2>

          <p className="text-gray-600 mb-4">
            This tool uses YouTube API Services. By using this tool, you also
            agree to:
          </p>

          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              <a
                href="https://www.youtube.com/t/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                YouTube Terms of Service
              </a>
            </li>
            <li>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Google Privacy Policy
              </a>
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            6. User Control and Revocation
          </h2>

          <p className="text-gray-600">
            Users can manage or revoke permissions granted to applications using
            Google services at any time by visiting:
            <br />
            <a
              href="https://security.google.com/settings/security/permissions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://security.google.com/settings/security/permissions
            </a>
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            7. Contact
          </h2>

          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, contact us at{" "}
            <a
              href="mailto:tejasgiri910@gmail.com"
              className="text-blue-600 hover:underline"
            >
              tejasgiri910@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
