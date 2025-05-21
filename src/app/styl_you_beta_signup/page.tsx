'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function StylYouBetaPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_STYLYOU_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ name: name, email: email })
      });

      if (response.ok) {
        setShowConfirmation(true);
        setName('');
        setEmail('');
      } else {
        console.error('Form submission failed');
        // Optionally, show an error message to the user
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Optionally, show an error message to the user
    }

    setIsSubmitting(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="flex flex-col md:flex-row max-w-[1000px] w-full p-5 md:space-x-16">
          <div className="flex-1 flex flex-col justify-center items-center text-center md:pr-10 mb-10 md:mb-0">
            <div className="w-full max-w-[300px]">
              <h1 className="text-5xl font-bold mb-2.5">StylYou</h1>
              <p className="text-[#86868b] mb-5">Join the beta waitlist for StylYou! Get exclusive access and be one of the first to try our new app. We'll send you a TestFlight link once it's ready.</p>
              <form onSubmit={handleSubmit} className="flex flex-col w-full">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  required
                  className="p-3 mb-3 bg-gray-100 border-none rounded-md text-gray-700"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  required
                  className="p-3 mb-3 bg-gray-100 border-none rounded-md text-gray-700"
                />
                <button
                  type="submit"
                  className="p-3 bg-black text-white border-none rounded-md cursor-pointer font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Join the StylYou Beta'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-3xl text-center max-w-sm w-full mx-4">
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">Welcome to StylYou Beta!</h2>
            <p className="text-gray-500 mb-6">
              You've successfully joined the StylYou beta waitlist. We'll email you a TestFlight link soon!
            </p>
            <button
              onClick={() => setShowConfirmation(false)}
              className="w-full p-3 bg-black text-white rounded-full font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
