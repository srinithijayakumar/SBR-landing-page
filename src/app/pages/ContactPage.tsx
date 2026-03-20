import { useState } from 'react';
import { ArrowLeft, Send, MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import logoImage from '../../assest/Images/SBR-logo.png';

interface ContactFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  message: string;
}

export function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
        message: ''
      });
    }, 3000);
  };

  const isFormValid = formData.fullName && formData.email && formData.message;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="page-container">
        <Navigation />
        
        <main className="py-8 sm:py-16">
          <div className="w-full">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8 sm:mb-16"
              >
                <h1 className="text-mobile-xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
                  Contact Us
                </h1>
                <p className="text-mobile-xs sm:text-lg text-slate-600 max-w-2xl mx-auto">
                  Get in touch with our team. We're here to help and answer any questions you might have.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-5 gap-8 sm:gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="lg:col-span-2"
                >
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200">
                    <h2 className="text-mobile-base sm:text-xl font-bold text-slate-900 mb-6">Contact Information</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#1C6EF2]/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-[#1C6EF2]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">Address</h3>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            123 Business Street<br />
                            Tech City, TC 12345<br />
                            United States
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#1C6EF2]/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-[#1C6EF2]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                          <a href="tel:+15551234567" className="text-sm text-slate-600 hover:text-[#1C6EF2] transition-colors">
                            +1 (555) 123-4567
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#1C6EF2]/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-[#1C6EF2]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                          <a href="mailto:support@sbr.com" className="text-sm text-slate-600 hover:text-[#1C6EF2] transition-colors">
                            support@sbr.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#1C6EF2]/10 flex items-center justify-center flex-shrink-0">
                          <Clock className="w-5 h-5 text-[#1C6EF2]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                            Saturday: 10:00 AM - 4:00 PM<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:col-span-3"
                >
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200">
                    {isSubmitted ? (
                      <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center py-12"
                      >
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Message Sent Successfully!</h3>
                        <p className="text-slate-600">
                          Thank you for reaching out! We'll get back to you within 24 hours.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <h2 className="text-mobile-base sm:text-xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                        
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              id="fullName"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1C6EF2] focus:ring-2 focus:ring-[#1C6EF2]/20 transition-all outline-none text-sm"
                              placeholder="Enter your full name"
                            />
                          </div>

                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1C6EF2] focus:ring-2 focus:ring-[#1C6EF2]/20 transition-all outline-none text-sm"
                              placeholder="Enter your email address"
                            />
                          </div>

                          <div>
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-slate-700 mb-2">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              id="phoneNumber"
                              name="phoneNumber"
                              value={formData.phoneNumber}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1C6EF2] focus:ring-2 focus:ring-[#1C6EF2]/20 transition-all outline-none text-sm"
                              placeholder="Enter your phone number"
                            />
                          </div>

                          <div>
                            <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-2">
                              Address
                            </label>
                            <input
                              type="text"
                              id="address"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1C6EF2] focus:ring-2 focus:ring-[#1C6EF2]/20 transition-all outline-none text-sm"
                              placeholder="Enter your address"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                            Your Message *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={5}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1C6EF2] focus:ring-2 focus:ring-[#1C6EF2]/20 transition-all outline-none text-sm resize-none"
                            placeholder="Tell us how we can help you..."
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={!isFormValid || isSubmitting}
                          className="w-full py-3 bg-[#1C6EF2] text-white rounded-lg font-semibold hover:bg-[#1557C7] disabled:bg-slate-300 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Send Message
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}