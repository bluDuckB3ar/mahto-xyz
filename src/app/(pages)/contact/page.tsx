"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Send, Phone, User, Mail, MessageSquare } from 'lucide-react';
import Alert from "@/components/ui/alert";
import { useForm, ValidationError } from '@formspree/react';
import { useRouter } from 'next/navigation';

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
  const [state, handleSubmit] = useForm("myzzwnbk");
  const router = useRouter();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://formspree.io/js/formbutton-v1.min.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = (data: FormData): FormErrors => {
    const errors: FormErrors = {};
    if (!data.name) errors.name = 'Name is required';
    if (!data.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = 'Email is invalid';
    if (!data.phoneNumber) errors.phoneNumber = 'Phone number is required';
    else if (!/^\d{10}$/.test(data.phoneNumber)) errors.phoneNumber = 'Phone number is invalid';
    if (!data.message) errors.message = 'Message is required';
    return errors;
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
      await handleSubmit(e);
      if (state.succeeded) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phoneNumber: '', message: '' });
        router.push('/success'); // Redirect to the success page
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className= "flex  p-4">
      <div className="border-duckYellow rounded-lg border max-w-6xl w-full flex ">
        <div className="text-duckBlue2 border-duckYellow border p-8 md:w-1/3 lg:3/5 flex flex-col justify-between">

            <h2 className="text-3xl font-bold mb-4">Need Tech Support?</h2>
            <p className="mb-2">Feel free to reach out to me!</p>
            <p className='flex-auto'>Phone: (317)-316-0964</p>
            <div className='my-3'>
              <p> All Week:<span className=''> 08:00-1700</span></p>
              <div className='my-3'>
              </div>
            </div>
       
          <div className="">
            <h3 className="text-xl font-semibold">Brennan Mahto</h3>
            <p>Tech Support Specialist</p>
          </div>
        </div>
        <div className="p-8 md:w-2/3">
          <h1 className="text-3xl font-bold text-duckBlue mb-6">Contact Me</h1>
          {isSubmitted ? (
            <Alert message="Thank you for your message! I'll get back to you soon." type="success" />
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-duckBlue mb-1">Name</label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`pl-10 pr-3 py-2 w-full border rounded-md focus:ring-2 focus:ring-duckBlue ${errors.name ? 'border-duckBlue' : 'border-red'}`}
                  />
                  <User className="absolute left-3 top-1/2 transform  text-duckBlue" size={18} />
                </div>
                {errors.name && <p className="mt-1 text-xs text-duckBlue">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-duckBlue mb-1">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`pl-10 pr-3 py-2 w-full border rounded-md focus:ring-2 focus:ring-duckBlue ${errors.email ? 'border-duckBlue' : 'border-duckBlue2'}`}
                  />
                  <Mail className="absolute left-3 top-1/2 text-duckBlue" size={18} />
                </div>
                {errors.email && <p className="mt-1 text-xs text-duckBlue">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-duckBlue mb-1">Phone Number</label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={`pl-10 pr-3 py-2 w-full border rounded-md  ${errors.phoneNumber ? 'border-duckBlue' : 'border-duckBlue2'}`}
                  />
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-duckBlue" size={18} />
                </div>
                {errors.phoneNumber && <p className="mt-1 text-xs text-duckBlue">{errors.phoneNumber}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-duckBlue mb-1">Message</label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`pl-10 pr-3 py-2 w-full border rounded-md  ${errors.message ? 'border-duckBlue' : 'border-duckBlue2'}`}
                  />
                  <MessageSquare className="absolute left-3 top-3 text-duckBlue" size={18} />
                </div>
                {errors.message && <p className="mt-1 text-xs text-black">{errors.message}</p>}
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="inline-flex items-center px-4 py-2  rounded-md  duration-300 "
                >
                  <Send className="mr-2" size={18} />
                  Send Message
                </button>
              </div>
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
