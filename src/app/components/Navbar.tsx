import { Menu, X, Globe, Phone } from 'lucide-react';
import { useState } from 'react';
import svgPaths from "../../imports/svg-vdelx866xc";
import logoImage from "../../imports/fathalla-logo.jpg";
import { useLanguage } from './LanguageContext';
import { translations, t } from './translations';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, toggleLanguage, isRTL } = useLanguage();
  const nav = translations.nav;

  return (
    <>
      <nav className="bg-black sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#f8931f] rounded-lg overflow-hidden flex items-center justify-center">
                <img 
                  src={logoImage} 
                  alt="Fathalla Market Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl text-white font-bold">{t(nav.brandName, lang)}</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-white hover:text-[#f8931f] transition-colors">
                {t(nav.home, lang)}
              </a>
              <a href="#about" className="text-white hover:text-[#f8931f] transition-colors">
                {t(nav.about, lang)}
              </a>
              <a href="#news" className="text-white hover:text-[#f8931f] transition-colors">
                {t(nav.news, lang)}
              </a>
              <a href="#branches" className="text-white hover:text-[#f8931f] transition-colors">
                {t(nav.branches, lang)}
              </a>
              <a href="#contact" className="text-white hover:text-[#f8931f] transition-colors">
                {t(nav.contact, lang)}
              </a>

              {/* Hotline in Navbar */}
              <a
                href="tel:15260"
                className="flex items-center gap-2 bg-[#f8931f] hover:bg-[#db8200] text-white px-4 py-2 rounded-lg transition-colors"
                dir="ltr"
              >
                <Phone size={16} className="fill-current" />
                <span className="tracking-[0.1em]">15260</span>
              </a>

              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-white hover:text-[#f8931f] transition-colors bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg"
              >
                <Globe size={18} />
                <span className="text-sm">{lang === 'ar' ? 'EN' : 'عربي'}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-[#f8931f] transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Panel */}
      <div 
        dir={isRTL ? 'rtl' : 'ltr'}
        className={`fixed top-0 bottom-0 right-0 z-50 w-80 max-w-[85vw] bg-[#111111] p-6 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out md:hidden ${
          isRTL ? 'border-r border-white/10' : 'border-l border-white/10'
        }`}
        style={{
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        {/* Drawer Header */}
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#f8931f] rounded-lg overflow-hidden flex items-center justify-center">
                <img 
                  src={logoImage} 
                  alt="Fathalla Market Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold text-white">{t(nav.brandName, lang)}</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="text-white hover:text-[#f8931f] p-1 rounded-lg hover:bg-white/5 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex flex-col gap-2">
            <a 
              href="#home" 
              onClick={() => setIsMenuOpen(false)} 
              className="text-white hover:text-[#f8931f] py-3 px-2 rounded-lg hover:bg-white/5 transition-all"
            >
              {t(nav.home, lang)}
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)} 
              className="text-white hover:text-[#f8931f] py-3 px-2 rounded-lg hover:bg-white/5 transition-all"
            >
              {t(nav.about, lang)}
            </a>
            <a 
              href="#news" 
              onClick={() => setIsMenuOpen(false)} 
              className="text-white hover:text-[#f8931f] py-3 px-2 rounded-lg hover:bg-white/5 transition-all"
            >
              {t(nav.news, lang)}
            </a>
            <a 
              href="#branches" 
              onClick={() => setIsMenuOpen(false)} 
              className="text-white hover:text-[#f8931f] py-3 px-2 rounded-lg hover:bg-white/5 transition-all"
            >
              {t(nav.branches, lang)}
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)} 
              className="text-white hover:text-[#f8931f] py-3 px-2 rounded-lg hover:bg-white/5 transition-all"
            >
              {t(nav.contact, lang)}
            </a>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="border-t border-white/10 pt-6 mt-6 flex flex-col gap-4">
          <a
            href="tel:15260"
            className="flex items-center justify-center gap-3 bg-[#f8931f] hover:bg-[#db8200] text-white px-4 py-3.5 rounded-xl transition-all font-bold"
            dir="ltr"
          >
            <Phone size={20} className="fill-current" />
            <span className="text-xl tracking-[0.1em]">15260</span>
          </a>

          <button 
            onClick={() => {
              toggleLanguage();
              setIsMenuOpen(false);
            }}
            className="flex items-center justify-center gap-2 text-white hover:text-[#f8931f] transition-all bg-white/10 hover:bg-white/20 py-3 rounded-xl"
          >
            <Globe size={20} />
            <span className="text-base font-medium">{lang === 'ar' ? 'English' : 'عربي'}</span>
          </button>
        </div>
      </div>
    </>
  );
}