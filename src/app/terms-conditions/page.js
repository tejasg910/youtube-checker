const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Terms and Conditions
      </h1>

      <div className="prose max-w-none">
        <p className="text-gray-600">Last updated: January 21, 2024</p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600">
            By accessing and using the YouTube Channel Checker tool ("the tool"),
            you agree to be bound by these Terms and Conditions and all applicable
            laws and regulations. If you do not agree, you must not use this tool.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            2. Permitted Use
          </h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              The tool is provided for informational purposes only.
            </li>
            <li>
              You may use the tool to view publicly available YouTube channel
              information.
            </li>
            <li>
              You must not misuse the tool or attempt to interfere with its
              normal operation.
            </li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            3. Disclaimer
          </h2>
          <p className="text-gray-600">
            The tool is provided on an "as is" and "as available" basis. We make
            no warranties, express or implied, regarding accuracy, reliability,
            or availability of the results displayed.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            4. Limitation of Liability
          </h2>
          <p className="text-gray-600">
            We shall not be liable for any direct, indirect, incidental, or
            consequential damages arising out of the use or inability to use
            this tool.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            5. YouTube API Services
          </h2>
          <p className="text-gray-600 mb-4">
            This tool uses YouTube API Services to retrieve and display publicly
            available information from YouTube channels.
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
            Data obtained through YouTube API Services is limited to publicly
            available information and is used only to display real-time channel
            details. This data is not stored, aggregated, or used for profiling
            or secondary purposes.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            6. Analytics
          </h2>
          <p className="text-gray-600">
            The website uses Google Analytics to understand usage patterns and
            improve performance. Google Analytics may use cookies or similar
            technologies in accordance with Google’s policies.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            7. Changes to These Terms
          </h2>
          <p className="text-gray-600">
            We may update these Terms and Conditions at any time. Continued use
            of the tool constitutes acceptance of the updated terms.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            8. Contact
          </h2>
          <p className="text-gray-600">
            If you have any questions regarding these Terms and Conditions,
            contact us at{" "}
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

export default TermsAndConditions;
