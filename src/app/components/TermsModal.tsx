import { X, ChevronDown, ChevronUp, Shield, FileText, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { termsData, TermsSection } from './termsData';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function SectionAccordion({ section, index }: { section: TermsSection; index: number }) {
  const { lang } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(index === 0);

  const sectionIcons: Record<number, JSX.Element> = {
    0: <FileText className="w-5 h-5" />,
    5: <Shield className="w-5 h-5" />,
    15: <Phone className="w-5 h-5" />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="border border-[#f8931f]/20 rounded-xl overflow-hidden bg-white"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-[#fff8ef] transition-colors text-start"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#f8931f]/10 rounded-lg flex items-center justify-center text-[#f8931f] flex-shrink-0">
            <span className="text-sm">{index + 1}</span>
          </div>
          <h3 className="text-[#502800] text-lg sm:text-xl">
            {section.title[lang]}
          </h3>
        </div>
        <div className="text-[#f8931f] flex-shrink-0">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-5 space-y-4">
              <div className="h-px bg-[#f8931f]/10"></div>
              {section.content.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-6 h-6 bg-[#f8931f]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-[#f8931f]">{i + 1}</span>
                  </div>
                  <p className="text-[#713d00] leading-relaxed text-sm sm:text-base">
                    {item[lang]}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  const { lang, isRTL } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Filter sections based on search
  const filteredSections = searchQuery.trim()
    ? termsData.filter(
        (section) =>
          section.title[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
          section.content.some((item) =>
            item[lang].toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : termsData;

  const title = lang === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions';
  const subtitle =
    lang === 'ar'
      ? 'أسواق فتح الله - الشروط والأحكام العامة'
      : 'Aswaq Fathalla - General Terms & Conditions';
  const searchPlaceholder = lang === 'ar' ? 'ابحث في الشروط والأحكام...' : 'Search terms & conditions...';
  const noResults = lang === 'ar' ? 'لا توجد نتائج مطابقة' : 'No matching results';
  const sectionsCount =
    lang === 'ar'
      ? `${termsData.length} قسم`
      : `${termsData.length} sections`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#fffbff] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#f8931f] to-[#db8200] p-6 sm:p-8 text-white flex-shrink-0">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl">{title}</h2>
                  </div>
                  <p className="text-white/80 text-sm sm:text-base">{subtitle}</p>
                  <div className="mt-3 inline-flex items-center gap-2 bg-white/15 px-3 py-1 rounded-full text-sm">
                    <Shield size={14} />
                    <span>{sectionsCount}</span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Search */}
              <div className="mt-5">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={searchPlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40 text-sm sm:text-base"
                  dir={isRTL ? 'rtl' : 'ltr'}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
              {filteredSections.length > 0 ? (
                filteredSections.map((section, index) => (
                  <SectionAccordion key={index} section={section} index={index} />
                ))
              ) : (
                <div className="text-center py-16 text-[#713d00]">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-[#f8931f]/40" />
                  <p className="text-lg">{noResults}</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-[#f8931f]/10 p-4 sm:p-5 bg-[#fff8ef] flex-shrink-0">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-sm text-[#713d00]" dir="ltr">
                  {lang === 'ar'
                    ? 'للتواصل: 15260 | cs@fathallamarket.com.eg | واتساب: 01050215260'
                    : 'Contact: 15260 | cs@fathallamarket.com.eg | WhatsApp: 01050215260'}
                </p>
                <button
                  onClick={onClose}
                  className="bg-[#f8931f] hover:bg-[#db8200] text-white px-6 py-2 rounded-lg transition-colors text-sm whitespace-nowrap"
                >
                  {lang === 'ar' ? 'فهمت وأوافق' : 'I Understand & Agree'}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
