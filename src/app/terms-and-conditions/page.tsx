import type { Metadata } from 'next';
import React from 'react';

// Metadata for your Terms & Conditions page
export const metadata: Metadata = {
  title: 'Terms and Conditions - Modern Wheel',
  description: 'Terms and Conditions for using the Modern Wheel application.',
};

const TermsAndConditionsPage: React.FC = () => {
  return (
    <main className="flex-grow">
      <div className="max-w-4xl mx-auto p-4 sm:p-8 text-slate-300">
        <h1 className="text-4xl font-bold mb-6 text-white">Terms & Conditions</h1>
        
        <div className="prose prose-invert max-w-none text-lg">
          <p><em>Last updated: June 20, 2025</em></p>

          <h2 className="text-2xl font-semibold mt-8 text-white">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Modern Wheel website (Service), you agree to accept and comply with these Terms and Conditions. If you do not agree, please do not use our Service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 text-white">2. Limitation of Liability</h2>
          <p>
            The Service is provided (AS IS). We are not responsible for any data loss, damage, or any other loss arising from the use of this Service. You are fully responsible for the data you enter.
          </p>
          
          {/* You can continue adding other points here... */}

          <h2 className="text-2xl font-semibold mt-8 text-white">Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at [your.email.address@example.com].
          </p>
        </div>
      </div>
    </main>
  );
};

export default TermsAndConditionsPage;