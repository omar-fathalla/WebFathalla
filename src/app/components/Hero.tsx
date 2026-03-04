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
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#f8931f] hover:bg-[#db8200] text-white px-8 py-4 rounded-lg transition-colors"
            >
              {t(hero.downloadApp, lang)}
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white hover:bg-white hover:text-[#2d1600] text-white px-8 py-4 rounded-lg transition-colors"
            >
              {t(hero.exploreProducts, lang)}
            </motion.button>
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
