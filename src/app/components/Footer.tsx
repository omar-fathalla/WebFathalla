import { useState } from 'react';
import { Phone } from 'lucide-react';
import svgPaths from "../../imports/svg-vdelx866xc";
import logoImage from "figma:asset/42faab0c6669490037b7f6549f9a617275106a3b.png";
import { useLanguage } from './LanguageContext';
import { translations, t } from './translations';
import { TermsModal } from './TermsModal';

export function Footer() {
  const { lang } = useLanguage();
  const ft = translations.footer;
  const nav = translations.nav;
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#2d1600] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#f8931f] rounded-lg overflow-hidden">
                  <img 
                    src={logoImage} 
                    alt="Fathalla Market Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl">{t(ft.brandName, lang)}</h3>
              </div>
              <p className="text-gray-300 mb-4">
                {t(ft.description, lang)}
              </p>
              {/* Hotline in Footer */}
              <a
                href="tel:15260"
                className="inline-flex items-center gap-3 bg-[#f8931f] hover:bg-[#db8200] text-white px-5 py-3 rounded-xl transition-colors group"
                dir="ltr"
              >
                <div className="w-9 h-9 bg-white/20 group-hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                  <Phone size={18} className="fill-current" />
                </div>
                <div>
                  <div className="text-xs opacity-80">{lang === 'ar' ? 'الخط الساخن' : 'Hotline'}</div>
                  <div className="text-xl tracking-[0.15em]">15260</div>
                </div>
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg mb-4">{t(ft.quickLinks, lang)}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-[#f8931f] transition-colors">
                    {t(nav.home, lang)}
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-[#f8931f] transition-colors">
                    {t(nav.about, lang)}
                  </a>
                </li>
                <li>
                  <a href="#news" className="text-gray-300 hover:text-[#f8931f] transition-colors">
                    {t(nav.news, lang)}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-[#f8931f] transition-colors">
                    {t(nav.contact, lang)}
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setIsTermsOpen(true)}
                    className="text-gray-300 hover:text-[#f8931f] transition-colors"
                  >
                    {t(ft.termsAndConditions, lang)}
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg mb-4">{t(ft.services, lang)}</h3>
              <ul className="space-y-2 text-gray-300">
                <li>{t(ft.homeDelivery, lang)}</li>
                <li>{t(ft.onlineShopping, lang)}</li>
                <li>{t(ft.loyaltyProgram, lang)}</li>
                <li>{t(ft.giftCards, lang)}</li>
              </ul>
            </div>

            {/* Newsletter */}
            {/* Newsletter section removed */}
          </div>

          {/* Social Media & Copyright */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p className="text-gray-300 text-center md:text-start">
                {t(ft.copyright, lang)}
              </p>
              <span className="hidden sm:inline text-gray-500">|</span>
              <button
                onClick={() => setIsTermsOpen(true)}
                className="text-gray-400 hover:text-[#f8931f] transition-colors text-sm"
              >
                {t(ft.termsAndConditions, lang)}
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/aswaqfathallamarket"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#f8931f] rounded-lg flex items-center justify-center transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 46 46" fill="currentColor">
                  <path d={svgPaths.p18bc6300} />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/aswaq.fathallamarket/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#f8931f] rounded-lg flex items-center justify-center transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 46 46" fill="currentColor">
                  <path d={svgPaths.p23678a80} />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#f8931f] rounded-lg flex items-center justify-center transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 46 46" fill="currentColor">
                  <path d={svgPaths.p2167a700} />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Terms & Conditions Modal */}
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </>
  );
}