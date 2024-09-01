import React from 'react';
import DuckButton from '@/components/DuckButton';

const SupportPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-duckBlue">Support</h1>
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-duckBlue2">Frequently Asked Questions</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>How do I create an account?</li>
            <li>What payment methods do you accept?</li>
            <li>How can I track my order?</li>
            <li>What is your return policy?</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-duckBlue2">Contact Us</h2>
          <p className="mb-4">If you couldn't find the answer to your question, please don't hesitate to contact us:</p>
          <div className="space-y-2">
            <p>Email: support@duckcompany.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Hours: Monday - Friday, 9am - 5pm EST</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-duckBlue2">Submit a Support Ticket</h2>
          <DuckButton className="px-6 py-2 text-lg">
            Submit Ticket
          </DuckButton>
        </section>
      </div>
    </div>
  );
};

export default SupportPage;