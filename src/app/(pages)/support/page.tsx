"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Send, Phone, User, Mail, MessageSquare } from 'lucide-react';
import Alert, { AlertDescription } from "@/components/ui/alert"; // Corrected import

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phoneNumber?: string;
  message?: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted!', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phoneNumber: '', message: '' });
    } else {
      setErrors(validationErrors);
    }
  };

  const validate = (data: FormData): FormErrors => {
    const errors: FormErrors = {};
    if (!data.name) errors.name = 'Name is required';
    if (!data.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = 'Email is invalid';
    if (!data.phoneNumber) errors.phoneNumber = 'Phone number is required';
    if (!data.message) errors.message = 'Message is required';
    return errors;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-duckBlue1 to-duckBlue2 flex items-center justify-center p-4">
      <div className=" border-duckYellow rounded-lg border shadow-xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        <div className=" text-duckBlue2 border-duckYellow border p-8 md:w-/3 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Need Tech Support?</h2>
            <p className="mb-2">Feel free to reach out to me!</p>
            <p>Saturday - Sunday:<span className='text-duckYellow'>(317)-316-0964</span></p>

            <div className='my-3'>
            <p>Saturday - Sunday:<span className='text-duckYellow'> 08:00-0300</span></p>
            <div className='my-3'>
              
            <p>Saturday - Sunday:<span className='text-duckYellow'> 08:00-0300</span></p>
            </div>
</div>
          </div>
          <div className="text-duckYellow">
            <h3 className="text-xl font-semibold">Brennan Mahto</h3>
            <p>Tech Support Specialist</p>
          </div>
        </div>
        <div className="p-8 md:w-2/3">
          <h1 className="text-3xl font-bold text-duckBlue2 mb-6">Contact Me</h1>
          {isSubmitted ? (
            <Alert message="Thank you for your message! I'll get back to you soon." type="success" />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-duckBlue2 mb-1">Name</label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`pl-10 pr-3 py-2 w-full border rounded-md focus:ring-2 focus:ring-duckPurple ${errors.name ? 'border-duckPurple' : 'border-duckBlue2'}`}
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-duckBlue2" size={18} />
                </div>
                {errors.name && <p className="mt-1 text-xs text-duckPurple">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-duckBlue2 mb-1">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`pl-10 pr-3 py-2 w-full border rounded-md focus:ring-2 focus:ring-duckPurple ${errors.email ? 'border-duckPurple' : 'border-duckBlue2'}`}
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-duckBlue2" size={18} />
                </div>
                {errors.email && <p className="mt-1 text-xs text-duckPurple">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-duckBlue2 mb-1">Phone Number</label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`pl-10 pr-3 py-2 w-full border rounded-md focus:ring-2 focus:ring-duckPurple ${errors.phoneNumber ? 'border-duckPurple' : 'border-duckBlue2'}`}
                  />
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-duckBlue2" size={18} />
                </div>
                {errors.phoneNumber && <p className="mt-1 text-xs text-duckPurple">{errors.phoneNumber}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-duckBlue2 mb-1">Message</label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`pl-10 pr-3 py-2 w-full border rounded-md focus:ring-2 focus:ring-duckPurple ${errors.message ? 'border-duckPurple' : 'border-duckBlue2'}`}
                  />
                  <MessageSquare className="absolute left-3 top-3 text-duckBlue2" size={18} />
                </div>
                {errors.message && <p className="mt-1 text-xs text-duckPurple">{errors.message}</p>}
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 bg-duckPurple text-duckBlue2 rounded-md hover:bg-duckYellow hover:text-duckPurple transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-duckPurple"
                >
                  <Send className="mr-2" size={18} />
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;