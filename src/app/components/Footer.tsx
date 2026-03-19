import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logoImage from '../../assest/Images/SBR-logo.png';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto container-mobile sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid md:grid-cols-3 gap-6 sm:gap-12 mb-6 sm:mb-12">
          <div className="space-mobile sm:space-y-4">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <img 
                src={logoImage} 
                alt="SBR Logo" 
                className="h-16 sm:h-20 w-auto"
              />
            </div>
            <p className="text-slate-400 leading-relaxed text-mobile-xs sm:text-base">
              The most trusted local classifieds marketplace. Buy, sell, and discover in your city with confidence.
            </p>
            {/* Social Icons */}
            <div className="flex gap-2 sm:gap-3 pt-3 sm:pt-4">
              <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-slate-800 hover:bg-[#1C6EF2] flex items-center justify-center transition-colors">
                <Facebook className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-slate-800 hover:bg-[#1C6EF2] flex items-center justify-center transition-colors">
                <Twitter className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-slate-800 hover:bg-[#1C6EF2] flex items-center justify-center transition-colors">
                <Instagram className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
              <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-slate-800 hover:bg-[#1C6EF2] flex items-center justify-center transition-colors">
                <Linkedin className="w-4 sm:w-5 h-4 sm:h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-mobile-base sm:text-lg mb-3 sm:mb-4">Company</h4>
            <ul className="space-mobile sm:space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors text-mobile-xs sm:text-base">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors text-mobile-xs sm:text-base">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors text-mobile-xs sm:text-base">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-mobile-base sm:text-lg mb-3 sm:mb-4">Legal</h4>
            <ul className="space-mobile sm:space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors text-mobile-xs sm:text-base">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors text-mobile-xs sm:text-base">Privacy Policy</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors text-mobile-xs sm:text-base">FAQ</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-slate-500 text-mobile-xs sm:text-sm">
              © 2026 SBR. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6 text-mobile-xs sm:text-sm">
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
