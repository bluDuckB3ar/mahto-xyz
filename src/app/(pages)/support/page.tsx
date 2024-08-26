"use client";

import React, { useState } from 'react';

const SupportPage = () => {
  const [faqs, setFaqs] = useState([
    { question: 'How do I reset my password?', answer: 'You can reset your password by visiting the account settings page.', isOpen: false },
    { question: 'What should I do if my computer won\'t start?', answer: 'Please check the power supply and ensure all cables are connected properly.', isOpen: false },
    { question: 'How can I contact support after hours?', answer: 'Our support team is available 24/7 via email and live chat.', isOpen: false },
  ]);

  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setFaqs(faqs.map((faq, i) => ({
      ...faq,
      isOpen: i === index ? !faq.isOpen : faq.isOpen
    })));
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the feedback to a server
    console.log('Feedback submitted:', feedback);
    setIsSubmitted(true);
    setFeedback('');
  };

  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>IT Support Page</h1>
      <p className='mb-4'>Welcome to our IT support page. How can we assist you with your technical issues today?</p>
      <ul className='list-disc pl-5 mb-8'>
        <li className='mb-2'><a href="/software-support" className='text-blue-600 hover:underline'>Software Support</a> - For software installation and troubleshooting.</li>
        <li className='mb-2'><a href="/network-support" className='text-blue-600 hover:underline'>Network Support</a> - If you are experiencing network connectivity issues.</li>
        <li className='mb-2'><a href="/hardware-support" className='text-blue-600 hover:underline'>Hardware Support</a> - Need help with hardware problems.</li>
      </ul>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className='mb-4 border-b pb-2'>
            <button
              onClick={() => toggleFaq(index)}
              className='w-full text-left font-medium'
              aria-expanded={faq.isOpen}
            >
              {faq.question}
            </button>
            {faq.isOpen && <p className='mt-2'>{faq.answer}</p>}
          </div>
        ))}
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Feedback</h2>
        {isSubmitted ? (
          <p className='text-green-600'>Thank you for your feedback!</p>
        ) : (
          <form onSubmit={handleFeedbackSubmit}>
            <label htmlFor='feedback' className='block mb-2'>How can we improve our service?</label>
            <textarea
              id='feedback'
              name='feedback'
              rows={4}
              className='w-full p-2 border rounded'
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            ></textarea>
            <button type='submit' className='mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>Submit Feedback</button>
          </form>
        )}
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Contact Information</h2>
        <p className='mb-2'>If you need further assistance or have any questions, feel free to reach out to us:</p>
        <ul className='list-disc pl-5'>
          <li>Email: support@itcompany.com</li>
          <li>Phone: 123-456-7890</li>
          <li>Live Chat: Click the chat icon on the bottom right corner of the page</li>
        </ul>
      </section>

      <button
        className='fixed bottom-4 right-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Back to Top
      </button>
    </div>
  );
};

export default SupportPage;