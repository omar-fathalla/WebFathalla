import { Phone } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from './LanguageContext';

export function FloatingHotline() {
  const { lang } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-24 end-5 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-3 bg-white rounded-xl shadow-2xl border border-[#f8931f]/20 p-4 w-56"
          >
            <p className="text-[#502800] text-sm mb-2">
              {lang === 'ar' ? 'اتصل بنا الآن' : 'Call us now'}
            </p>
            <a
              href="tel:15260"
              className="flex items-center gap-3 bg-[#f8931f] hover:bg-[#db8200] text-white px-4 py-3 rounded-lg transition-colors group"
              dir="ltr"
            >
              <Phone size={18} className="fill-current" />
              <span className="text-2xl tracking-[0.15em]">15260</span>
            </a>
            <div className="mt-3 space-y-2">
              <a
                href="https://wa.me/201050215260"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#713d00] hover:text-[#f8931f] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-green-600">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span dir="ltr">01050215260</span>
              </a>
              <a
                href="mailto:cs@fathallamarket.com.eg"
                className="flex items-center gap-2 text-sm text-[#713d00] hover:text-[#f8931f] transition-colors"
                dir="ltr"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#f8931f]">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span>cs@fathallamarket.com.eg</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 bg-[#f8931f] hover:bg-[#db8200] text-white rounded-full shadow-lg flex items-center justify-center transition-colors relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#f8931f] animate-ping opacity-30"></span>
        <Phone size={24} className="fill-current relative z-10" />
      </motion.button>

      {/* Hotline badge */}
      <div className="absolute -top-1 -end-1 bg-[#2d1600] text-white text-xs px-2 py-0.5 rounded-full pointer-events-none" dir="ltr">
        15260
      </div>
    </div>
  );
}
