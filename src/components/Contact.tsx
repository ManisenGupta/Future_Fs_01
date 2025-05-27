import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, Github, Linkedin } from 'lucide-react';
import Button from './Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-1 w-24 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out to me for any inquiries or collaboration opportunities. I'm always open to discussing new projects and ideas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg h-full">
              <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600/20 text-indigo-500">
                      <Mail size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                    <a href="mailto:guptankit90047@gmail.com" className="text-gray-400 hover:text-indigo-400 transition-colors">
                      guptankit90047@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600/20 text-indigo-500">
                      <Phone size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Phone</h4>
                    <a href="tel:+919997129599" className="text-gray-400 hover:text-indigo-400 transition-colors">
                      +91 9997129599
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600/20 text-indigo-500">
                      <MapPin size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Location</h4>
                    <p className="text-gray-400">
                      Teerthanker Mahaveer University, Moradabad, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-lg font-medium text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/ManisenGupta" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://in.linkedin.com/in/manisen-gupta-40a60133b" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-white mb-8">Send Me a Message</h3>
              
              {submitSuccess ? (
                <div className="bg-green-600/20 border border-green-600/30 text-green-200 rounded-lg p-4 mb-6">
                  <p>Your message has been sent successfully! I'll get back to you as soon as possible.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg"
                  className="w-full md:w-auto flex items-center justify-center"
                  onClick={() => {}}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <Send size={18} className="ml-2" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;