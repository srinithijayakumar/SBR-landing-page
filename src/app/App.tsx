import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CategoriesSection } from './components/CategoriesSection';
import { PremiumSection } from './components/PremiumSection';
import { TrustSection } from './components/TrustSection';
import { SocialProofSection } from './components/SocialProofSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white mobile-container no-scroll-mobile">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <PremiumSection />
      <TrustSection />
      <SocialProofSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
