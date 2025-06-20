import type { Metadata } from 'next';
import React from 'react';
// The unused 'import Link from 'next/link';' has been removed.

// Metadata for your Contact page SEO
export const metadata: Metadata = {
  title: 'Contact - Modern Wheel',
  description: 'Contact Brandon Tan, the solo developer behind the Modern Wheel application. Provide your feedback or suggestions here.',
};

const ContactPage = () => {
  return (
    <main className="flex-grow">
      <div className="max-w-4xl mx-auto p-4 sm:p-8 text-slate-300">
        <h1 className="text-4xl font-bold mb-6 text-white">Contact Me</h1>
        
        <div className="prose prose-invert max-w-none text-lg leading-relaxed space-y-4">
          <p>
            Hello, Im Brandon Tan. I am the solo developer behind this Modern Wheel project.
          </p>
          <p>
            I built this project as a personal exercise to create a web application with dedication—from concept and functionality to the deployment process. The goal is to continuously learn and sharpen my skills in the world of modern web development.
          </p>
          <p>
            I am very open to receiving feedback, criticism, or suggestions for the future development of this application. If you find a bug, have a feature idea, or just want to chat, please don t hesitate to reach out to me through one of the methods below.
          </p>
          
          <div className="mt-8 border-t border-slate-700 pt-6">
            <h2 className="text-2xl font-semibold text-white">Contact & Feedback</h2>
            <ul className="list-none p-0 mt-4 space-y-2">
              <li>
                <span className="font-semibold">Instagram:</span> 
                {/* Replace with your email address */}
                <a href="https://www.instagram.com/barrel_studio13?igsh=dWU5am0xMDgyazR4" className="text-blue-400 hover:underline ml-2">
                  @Barrel_Studio13
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;