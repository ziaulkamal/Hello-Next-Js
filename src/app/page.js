
import CTASection from './components/CTASection';
import BlogSection from './components/BlogSection';
import FAQSection from './components/FAQSection';
import StackTechnology from './components/StackTechnology';
import AboutCase from './components/AboutCase';
import ServiceSection from './components/ServiceSection';
import PartnerSection from './components/PartnerSection';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <>
        <HeroSection />
        <PartnerSection />
        <ServiceSection />
        <AboutCase />
        <StackTechnology />
        <FAQSection />
        <BlogSection />
        <CTASection />
    </>
  );
}
