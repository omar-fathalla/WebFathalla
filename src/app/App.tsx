import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { News } from './components/News';
import { Testimonials } from './components/Testimonials';
import { Branches } from './components/Branches';
import { Partners } from './components/Partners';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { TopBar } from './components/TopBar';
import { FloatingHotline } from './components/FloatingHotline';
import { LanguageProvider } from './components/LanguageContext';
import heroImage from 'figma:asset/412f4955d01987800b94e8979b57ee116cbf86a1.png';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#fffbff]" style={{ fontFamily: "'Cairo', sans-serif" }}>
        <TopBar />
        <Navbar />
        <Hero heroImage={heroImage} />
        <About />
        <News />
        <Testimonials />
        <Branches />
        <Partners />
        <Contact />
        <Footer />
        <ScrollToTop />
        <FloatingHotline />
      </div>
    </LanguageProvider>
  );
}