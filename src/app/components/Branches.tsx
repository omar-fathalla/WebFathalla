import { useState, useMemo } from 'react';
import { MapPin, Search, Navigation, Store, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedSection } from './AnimationWrappers';
import { useLanguage } from './LanguageContext';
import { translations, t } from './translations';
import { branches, getAreas } from './branchesData';

export function Branches() {
  const { lang } = useLanguage();
  const br = translations.branches;
  const [activeArea, setActiveArea] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const areas = useMemo(() => getAreas(lang), [lang]);

  const filteredBranches = useMemo(() => {
    return branches.filter((branch) => {
      const matchesArea = !activeArea || branch.area[lang] === activeArea;
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        !query ||
        branch.name[lang].toLowerCase().includes(query) ||
        branch.address[lang].toLowerCase().includes(query) ||
        branch.area[lang].toLowerCase().includes(query);
      return matchesArea && matchesSearch;
    });
  }, [activeArea, searchQuery, lang]);

  return (
    <section id="branches" className="py-20 bg-[#fff0d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#502800]">
            {t(br.title1, lang)}{' '}
            <span className="text-[#f8931f]">{t(br.titleHighlight, lang)}</span>
          </h2>
          <p className="text-xl text-[#713d00] max-w-3xl mx-auto mb-6" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            {/* @ts-ignore */}
            {t(br.history, lang)}
          </p>
          <p className="text-[#713d00]/80 max-w-2xl mx-auto" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            {t(br.subtitle, lang)}
          </p>
        </AnimatedSection>

        {/* Search Bar */}
        <AnimatedSection className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute top-1/2 -translate-y-1/2 w-5 h-5 text-[#f8931f] ltr:left-4 rtl:right-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t(br.searchPlaceholder, lang)}
              className="w-full py-3 px-12 rounded-xl border-2 border-[#f8931f]/30 bg-white focus:border-[#f8931f] focus:outline-none transition-colors text-[#502800] placeholder:text-[#713d00]/50"
            />
          </div>
        </AnimatedSection>

        {/* Area Filter Tabs */}
        <AnimatedSection className="mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveArea(null)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                !activeArea
                  ? 'bg-[#f8931f] text-white shadow-md'
                  : 'bg-white text-[#713d00] hover:bg-[#f8931f]/10 border border-[#f8931f]/20'
              }`}
            >
              {t(br.allAreas, lang)} ({branches.length})
            </button>
            {areas.map((area) => {
              const count = branches.filter((b) => b.area[lang] === area).length;
              return (
                <button
                  key={area}
                  onClick={() => setActiveArea(activeArea === area ? null : area)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    activeArea === area
                      ? 'bg-[#f8931f] text-white shadow-md'
                      : 'bg-white text-[#713d00] hover:bg-[#f8931f]/10 border border-[#f8931f]/20'
                  }`}
                >
                  {area} ({count})
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Results Count */}
        <div className="text-center mb-6">
          <span className="text-[#713d00] text-sm">
            {filteredBranches.length} {t(br.branchesCount, lang)}
          </span>
        </div>

        {/* Branches Grid */}
        <AnimatePresence mode="wait">
          {filteredBranches.length > 0 ? (
            <motion.div
              key={activeArea || 'all' + searchQuery}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredBranches.map((branch, index) => (
                <motion.div
                  key={branch.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <div
                    className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all h-full flex flex-col relative overflow-hidden ${
                      branch.isMain ? 'ring-2 ring-[#f8931f]' : ''
                    }`}
                  >
                    {/* Main Branch Badge */}
                    {branch.isMain && (
                      <div className="absolute top-0 ltr:right-0 rtl:left-0 bg-[#f8931f] text-white px-3 py-1 rounded-bl-lg rtl:rounded-br-lg rtl:rounded-bl-none flex items-center gap-1 text-xs">
                        <Star className="w-3 h-3 fill-current" />
                        {lang === 'ar' ? 'الفرع الرئيسي' : 'Main Branch'}
                      </div>
                    )}

                    {/* Branch Icon & Name */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#f8931f]/10 flex items-center justify-center flex-shrink-0">
                        <Store className="w-5 h-5 text-[#f8931f]" />
                      </div>
                      <div>
                        <h3 className="text-[#502800] group-hover:text-[#f8931f] transition-colors">
                          {t(branch.name, lang)}
                        </h3>
                        <span className="text-xs text-[#f8931f] bg-[#f8931f]/10 px-2 py-0.5 rounded-full">
                          {t(branch.area, lang)}
                        </span>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-3 text-[#713d00] flex-grow mb-4">
                      <MapPin className="w-4 h-4 text-[#f8931f] flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{t(branch.address, lang)}</p>
                    </div>

                    {/* Get Directions Button */}
                    {branch.mapUrl ? (
                      <a
                        href={branch.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto w-full bg-[#f8931f] hover:bg-[#db8200] text-white py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                      >
                        <Navigation className="w-4 h-4" />
                        {t(br.getDirections, lang)}
                      </a>
                    ) : (
                      <div className="mt-auto w-full bg-gray-100 text-[#713d00]/50 py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm cursor-default">
                        <MapPin className="w-4 h-4" />
                        {t(br.getDirections, lang)}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Search className="w-12 h-12 text-[#f8931f]/30 mx-auto mb-4" />
              <p className="text-[#713d00] text-lg">{t(br.noBranches, lang)}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
