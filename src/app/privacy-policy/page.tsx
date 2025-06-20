import type { Metadata } from 'next';
import React from 'react';

// Metadata for your Privacy Policy page
export const metadata: Metadata = {
  title: 'Privacy Policy - Modern Wheel',
  description: 'Privacy Policy for the Modern Wheel application, detailing the data we collect and how it is used.',
};

const PrivacyPolicyPage: React.FC = () => {
  return (
    <main className="flex-grow">
      <div className="max-w-4xl mx-auto p-4 sm:p-8 text-slate-300">
        <h1 className="text-4xl font-bold mb-6 text-white">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none text-lg">
          <p><em>Last updated: June 20, 2025</em></p>

          <h2 className="text-2xl font-semibold mt-8 text-white">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us. For the Modern Wheel application, this includes:
          </p>
          <ul className="list-disc pl-5">
            <li>
              <strong>Entry Data:</strong> Any names or text you enter into the input area to be spun on the wheel. This data is stored temporarily in your browser using `localStorage` technology to maintain your session, but it is not sent to or stored on our servers.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 text-white">2. How We Use Your Information</h2>
          <p>
            The information you provide is used solely for the core functionality of the application:
          </p>
          <ul className="list-disc pl-5">
            <li>To display the entries on the wheel segments.</li>
            <li>To randomly determine and announce a winner.</li>
            <li>To save the list of entries in your browser so it is not lost when the page is reloaded.</li>
          </ul>

          {/* You can continue adding other points here... */}
          
          <h2 className="text-2xl font-semibold mt-8 text-white">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at contact page.
          </p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;