import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, Linkedin, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';

// EmailJS credentials from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setSubmitStatus('loading');
      setErrorMessage('');
      
      try {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: PERSONAL_INFO.name,
          },
          EMAILJS_PUBLIC_KEY
        );
        
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } catch (error) {
        console.error('EmailJS Error:', error);
        setSubmitStatus('error');
        setErrorMessage('Failed to send message. Please try again or email directly.');
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
          setErrorMessage('');
        }, 5000);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    
    // Clear error when user starts typing
    if (errors[id as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  return (
    <footer id="contact" className="bg-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
      {/* Background Graphic Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="currentColor" className="text-white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl font-extrabold font-heading mb-6 tracking-tight">Let's Connect</h2>
            <p className="text-slate-400 mb-10 max-w-md text-lg leading-relaxed">
              I am currently seeking new opportunities in Project Management and Business Operations. 
              Feel free to reach out to discuss how I can contribute to your team.
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center text-slate-300 hover:text-white transition-colors group">
                <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-brand-600 transition-colors mr-5 border border-slate-700">
                  <Mail size={22} />
                </div>
                <span className="font-medium">{PERSONAL_INFO.email}</span>
              </a>
              
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center text-slate-300 hover:text-white transition-colors group">
                <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-brand-600 transition-colors mr-5 border border-slate-700">
                  <Phone size={22} />
                </div>
                <span className="font-medium">{PERSONAL_INFO.phone}</span>
              </a>

              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center text-slate-300 hover:text-white transition-colors group">
                <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-brand-600 transition-colors mr-5 border border-slate-700">
                  <Linkedin size={22} />
                </div>
                <span className="font-medium">LinkedIn Profile</span>
              </a>
            </div>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50 backdrop-blur-sm">
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">Name</label>
                <div className="relative">
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-slate-700/50 border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-600 focus:ring-brand-500'} rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all placeholder-slate-500`}
                    placeholder="Your Name" 
                  />
                  {errors.name && <AlertCircle className="absolute right-3 top-3.5 text-red-500" size={18} />}
                </div>
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">Email</label>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-slate-700/50 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-600 focus:ring-brand-500'} rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all placeholder-slate-500`}
                    placeholder="your@email.com" 
                  />
                  {errors.email && <AlertCircle className="absolute right-3 top-3.5 text-red-500" size={18} />}
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">Message</label>
                <div className="relative">
                  <textarea 
                    id="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-slate-700/50 border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-600 focus:ring-brand-500'} rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all placeholder-slate-500`}
                    placeholder="How can I help you?"
                  ></textarea>
                  {errors.message && <AlertCircle className="absolute right-3 top-3.5 text-red-500" size={18} />}
                </div>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <button 
                type="submit" 
                disabled={submitStatus === 'success' || submitStatus === 'loading'}
                className={`w-full flex justify-center items-center py-3.5 px-4 rounded-xl font-bold font-heading transition-all shadow-lg ${
                  submitStatus === 'success' 
                    ? 'bg-green-600 text-white cursor-default' 
                    : submitStatus === 'error'
                    ? 'bg-red-600 text-white'
                    : submitStatus === 'loading'
                    ? 'bg-brand-600/70 text-white cursor-wait'
                    : 'bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 text-white hover:shadow-brand-500/25'
                }`}
              >
                {submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="mr-2" size={20} />
                    Message Sent!
                  </>
                ) : submitStatus === 'loading' ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" size={20} />
                    Sending...
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <AlertCircle className="mr-2" size={20} />
                    Failed to Send
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
              
              {errorMessage && (
                <p className="text-center text-sm text-red-400 mt-2">{errorMessage}</p>
              )}
            </form>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm font-medium">© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;