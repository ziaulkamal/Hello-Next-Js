// src/app/layout.js
import '../../public/css/bootstrap.min.css';
import '../../public/css/fontawesome.css';
import '../../public/css/animate.min.css';
import '../../public/css/swiper-bundle.min.css';
import '../../public/css/magnific-popup.min.css';
import '../../public/css/odometer.min.css';
import '../../public/css/style.css';

import '../../styles/scss/style.scss'
// import '../../public/css/style.css';
import Footer from './components/Footer';
import MyScript from './components/MyScript';

import Link from 'next/link';
import Preloader from './components/Preloader';
import Heads from './components/Heads';

import { SpeedInsights } from '@vercel/speed-insights/next';
export const metadata = {
  title: 'Mindkreativ - Solusi Mitra Digital Anda',
  description: 'Mau buat aplikasi atau cari jasa kelola sosmed hingga scaleup brand ? Ya mindkreativ solusi nya!',
  charset: 'utf-8',
  keywords: 'Mindkreativ, Startup, Pembuatan Aplikasi Berkualitas, Mind Kreativ',
  author: 'Ziadev',
  generator: 'medium',
  robots: 'follow, index, max-snippet:large, max-video-preview:large, max-image-preview:large',
  notable: 'index',
  googlebot: 'index,follow',
  GoogleProducer: 'index,follow',
  GoogleOther: 'index,follow',
  Bingbot: 'index,follow',
  DuckDuckBot: 'index,follow',
  Baidubot: 'index,follow',
  Kakaobot: 'index,follow',
  Yahoobot: 'index,follow',
  Facebookbot: 'index,follow',
  Yandexbot: 'index,follow',
  Yeti: 'index,follow',
  'DC.title': 'Lintas Service',
  links: [
    { href: process.env.NEXT_PUBLIC_API_URL, hreflang: 'x-default', rel: 'alternate' },
    { href: process.env.NEXT_PUBLIC_API_URL, rel: 'openid.delegate' },
    { href: process.env.NEXT_PUBLIC_API_URL, rel: 'canonical' }
  ]
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={false}>
        <div className="backtotop">
            <Link href="#" className="scroll">
              <i className="fa-solid fa-arrow-up"></i>
            </Link>
        </div>
        {/* <Preloader /> */}
        <Heads />
        <main>
          { children }
          <SpeedInsights />
        </main>

      <Footer />
      </body>

    <MyScript />
    </html>
  )
}