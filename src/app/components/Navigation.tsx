import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assest/Images/SBR-logo.png';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/60 mobile-container no-scroll-mobile">
      <div className="w-full container-mobile sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-28 mobile-fit">
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img 
                src={logoImage} 
                alt="SBR Logo" 
                className="h-16 sm:h-24 w-auto max-h-full"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="/#home" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Home
            </a>
            <a href="/#about" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              About Us
            </a>
            <a href="/#categories" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Categories
            </a>
            <Link to="/contact" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1 text-slate-600 hover:text-slate-900 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            <button className="bg-[#1C6EF2] text-white px-2 sm:px-6 py-1 sm:py-2.5 rounded-mobile sm:rounded-xl font-semibold hover:bg-[#1557C7] transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/35 flex items-center gap-1 sm:gap-2 text-mobile-xs sm:text-base flex-shrink-0">
              <Download className="w-3 sm:w-4 h-3 sm:h-4" />
              <span className="hidden sm:inline">Download App</span>
              <span className="sm:hidden">App</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200/60 bg-white/95 backdrop-blur-md">
            <div className="py-3 space-y-2">
              <a 
                href="/#home" 
                className="block px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors font-medium text-mobile-xs"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="/#about" 
                className="block px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors font-medium text-mobile-xs"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="/#categories" 
                className="block px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors font-medium text-mobile-xs"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Categories
              </a>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors font-medium text-mobile-xs"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
