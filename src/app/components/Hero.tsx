import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { translations, t } from './translations';

interface HeroProps {
  heroImage: string;
}

export function Hero({ heroImage }: HeroProps) {
  const { lang, isRTL } = useLanguage();
  const hero = translations.hero;

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          src={heroImage}
          alt="Fathalla Market Interior"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${isRTL ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-black/70 via-black/50 to-transparent`}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl mb-6"
          >
            {t(hero.welcome, lang)} <span className="text-[#f8931f]">{t(hero.brand, lang)}</span> {t(hero.market, lang)}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            {t(hero.subtitle, lang)}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://apps.apple.com/eg/app/fathalla-market/id6752622758?l=ar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#f8931f] hover:bg-[#db8200] text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2.01.77-3.27.82-1.31.05-2.31-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.24-2.04 1.1-3.19-1.09.04-2.41.72-3.19 1.63-.69.8-1.26 1.91-1.1 3.04 1.21.09 2.47-.65 3.19-1.48z"/>
                </svg>
                <div className="text-right">
                  <div className="text-[10px] leading-tight opacity-80">{lang === 'ar' ? 'حمل من' : 'Download on'}</div>
                  <div className="text-sm font-bold leading-tight">App Store</div>
                </div>
              </motion.a>
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.fathallamarket.trustystore"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.65,14.21C20.28,13.39 20.28,10.61 18.65,9.79L16.81,8.88L14.39,11.3L16.81,15.12M13,12L15.39,9.61L3.84,2.15C3.84,2.15 3.84,2.15 3.84,2.15L13,12M13,12L3.84,21.85C3.84,21.85 3.84,21.85 3.84,21.85L15.39,14.39L13,12Z"/>
                </svg>
                <div className="text-right">
                  <div className="text-[10px] leading-tight opacity-80">{lang === 'ar' ? 'احصل عليه من' : 'Get it on'}</div>
                  <div className="text-sm font-bold leading-tight">Google Play</div>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
