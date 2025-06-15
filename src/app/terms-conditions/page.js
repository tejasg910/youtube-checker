const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms and Conditions</h1>

      <div className="prose max-w-none">
        <p className="text-gray-600">Last updated: January 21, 2024</p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-4">
            By accessing and using the YouTube Channel Checker tool ("the tool"), you accept and agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree, you are prohibited from using this tool.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. Use License</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Permission is granted to temporarily use this tool for personal, non-commercial purposes only.</li>
            <li>You may not modify, copy, republish, or use the tool for commercial purposes.</li>
            <li>This license shall automatically terminate if you violate any of these restrictions.</li>
            <li>Upon termination, you must destroy any downloaded or derived data from the tool.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Disclaimer</h2>
          <p className="text-gray-600 mb-4">
            The tool is provided "as is". We make no warranties, expressed or implied, regarding the accuracy, reliability, or completeness of the content or results obtained from the tool.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Limitations</h2>
          <p className="text-gray-600 mb-4">
            We are not liable for any damages (including, without limitation, data loss, loss of profit, or business interruption) arising out of the use or inability to use the tool.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. YouTube API Services</h2>
          <p className="text-gray-600 mb-4">
            This tool uses YouTube API Services to access and display publicly available information from YouTube channels. By using this tool, you also agree to:
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
          <p className="text-gray-600 mt-4">
            We do not store or access any private user data. All API data accessed is public and used only to provide real-time insights within your session.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">6. Modifications</h2>
          <p className="text-gray-600 mb-4">
            We may revise these Terms and Conditions at any time without prior notice. By using this tool, you agree to be bound by the then-current version.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">7. Contact</h2>
          <p className="text-gray-600 mb-4">
            For any questions regarding these Terms and Conditions, please contact us at:
            <a href="mailto:tejasgiri910@gmail.com" className="text-blue-600 hover:underline ml-1">tejasgiri910@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
