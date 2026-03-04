import { Menu, X, Globe, Phone } from 'lucide-react';
import { useState } from 'react';
import svgPaths from "../../imports/svg-vdelx866xc";
import logoImage from "figma:asset/42faab0c6669490037b7f6549f9a617275106a3b.png";
import { useLanguage } from './LanguageContext';
import { translations, t } from './translations';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, toggleLanguage, isRTL } = useLanguage();
  const nav = translations.nav;

  return (
    <nav className="bg-black sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#f8931f] rounded-lg overflow-hidden">
              <img 
                src={logoImage} 
                alt="Fathalla Market Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl text-white">{t(nav.brandName, lang)}</h1>
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4">
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

              {/* Mobile Hotline */}
              <a
                href="tel:15260"
                className="flex items-center gap-3 bg-[#f8931f] hover:bg-[#db8200] text-white px-4 py-3 rounded-lg transition-colors w-fit"
                dir="ltr"
              >
                <Phone size={18} className="fill-current" />
                <span className="text-lg tracking-[0.15em]">15260</span>
              </a>

              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-white hover:text-[#f8931f] transition-colors w-fit bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg"
              >
                <Globe size={18} />
                <span className="text-sm">{lang === 'ar' ? 'English' : 'عربي'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}