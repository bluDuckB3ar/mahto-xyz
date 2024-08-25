"use client";
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Add form submission logic here
    console.log('Form submitted!');
  };

  return (
    <div className='flex-auto grid-flow-row row-span-2 col-span-2'>
      <div>

        </div>

      <div className="flex items-center justify-center min-h-screen bg-background text-duckBlue2">
        <div className="m-4 w-1/3 p-8 border rounded-lg shadow-lg"><div>
</div>
      </div>
        <div className="space-y-4 w-1/3 p-8 border-duckBlue2 border">
          <h1 className="text-3xl font-bold text-center text-duckYellow">Contact Me</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-duckYellow">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={name}
                onChange={(e) => setName(e.target.value || '')}
                className="mt-1 block w-full px-3 py-2 border border-duckYellow rounded-md shadow-sm focus:outline-none focus:ring-duckPurple focus:border-duckPurple sm:text-sm"
                required
              />
              {errors?.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-duckYellow">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={email}
                onChange={(e) => setEmail(e.target.value || '')}
                className="mt-1 block w-full px-3 py-2 border border-duckYellow rounded-md shadow-sm focus:outline-none focus:ring-duckPurple focus:border-duckPurple sm:text-sm"
                required
              />
              {errors?.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-duckYellow">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                defaultValue={message}
                onChange={(e) => setMessage(e.target.value || '')}
                className="mt-1 block w-full px-3 py-2 border border-duckYellow rounded-md shadow-sm focus:outline-none focus:ring-duckPurple focus:border-duckPurple sm:text-sm"
                rows={4}
                required
              />
              {errors?.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-duckPurple hover:bg-duckYellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-duckPurple"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;