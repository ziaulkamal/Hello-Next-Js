
import CTASection from './components/CTASection';
import BlogSection from './components/BlogSection';
import FAQSection from './components/FAQSection';
import StackTechnology from './components/StackTechnology';
import AboutCase from './components/AboutCase';
import ServiceSection from './components/ServiceSection';
import PartnerSection from './components/PartnerSection';
import HeroSection from './components/HeroSection';

export const metadata = {
  title: 'Mindkreativ - Solusi Mitra Digital Anda',
  description: 'Mau buat aplikasi atau cari jasa kelola sosmed hingga scaleup brand ? Ya mindkreativ solusi nya!',
  charset: 'utf-8',
  keywords: 'Mindkreativ, Startup, Pembuatan Aplikasi Berkualitas, Mind Kreativ'
}

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
