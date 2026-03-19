import { useState } from 'react';
import { ArrowLeft, Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  message: string;
}

interface ContactPageProps {
  onBack: () => void;
}

export function ContactPage({ onBack }: ContactPageProps) {
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
    <div className="min-h-screen bg-white mobile-container no-scroll-mobile">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/60">
        <div className="w-full container-mobile sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 sm:h-16 mobile-fit">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Back</span>
            </button>
            
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <span className="text-mobile-base sm:text-2xl font-bold text-slate-900 tracking-tight">
                SBR<span className="text-[#1C6EF2]">.</span>
              </span>
            </div>
            
            <div className="w-16"></div> {/* Spacer for centering */}
          </