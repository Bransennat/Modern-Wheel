import type { Metadata } from 'next';
import React from 'react';

// This metadata is important for your About page's SEO
export const metadata: Metadata = {
  title: 'About - Modern Wheel',
  description: 'Learn more about the Modern Wheel application, a modern and easy-to-use online prize wheel tool.',
};

const AboutPage = () => {
  return (
    <main className="flex-grow">
      <div className="max-w-4xl mx-auto p-4 sm:p-8 text-slate-300">
        <h1 className="text-4xl font-bold mb-6 text-white">About Modern Wheel</h1>
        
        <div className="prose prose-invert max-w-none text-lg leading-relaxed space-y-4">
          <p>
            Welcome to Modern Wheel!
          </p>
          <p>
            Modern Wheel is a simple web application designed to make the process of drawings, giveaways, or random decision-making more fun and interactive. We believe that even simple tools should be well-designed, fast, and easy to use.
          </p>
          <p>
            This project was built using modern web technologies to ensure fast performance and a smooth user experience across various devices. Simply enter a list of names or entries, and let the wheel decide the winner!
          </p>
          <p>
            Thank you for using our application.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;