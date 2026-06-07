import logoUnilever from '../../imports/unilever.svg';
import logoPepsi from '../../imports/pepsi.svg';
import logoNescafe from '../../imports/nescafe.svg';
import logoNivea from '../../imports/nivea.svg';
import logoHeinz from '../../imports/heinz.svg';
import logoGillette from '../../imports/gillette.svg';
import logoJuhayna from '../../imports/juhayna.svg';
import logoPG from '../../imports/pg.svg';
import { AnimatedSection, AnimatedCard } from './AnimationWrappers';
import { useLanguage } from './LanguageContext';
import { translations, t } from './translations';

export function Partners() {
  const { lang } = useLanguage();
  const pt = translations.partners;

  return (
    <section className="py-20 bg-[#fff0d5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#502800]">{t(pt.title, lang)}</h2>
          <p className="text-xl text-[#713d00] max-w-3xl mx-auto leading-relaxed">
            {t(pt.subtitle, lang)}
          </p>
        </AnimatedSection>

        {/* Partners Grid - Each partner is now independent for easier editing */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {/* Partner 1 */}
          <AnimatedCard index={0}>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-105 h-32">
              <img
                src={logoUnilever}
                alt="Unilever"
                className="max-h-20 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
          </AnimatedCard>

          {/* Partner 2 */}
          <AnimatedCard index={1}>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-105 h-32">
              <img
                src={logoPepsi}
                alt="Pepsi"
                className="max-h-20 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
          </AnimatedCard>

          {/* Partner 3 */}
          <AnimatedCard index={2}>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-105 h-32">
              <img
                src={logoNescafe}
                alt="Nescafe"
                className="max-h-20 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
          </AnimatedCard>

          {/* Partner 4 */}
          <AnimatedCard index={3}>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-105 h-32">
              <img
                src={logoNivea}
                alt="Nivea"
                className="max-h-20 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
          </AnimatedCard>

          {/* Partner 5 */}
          <AnimatedCard index={4}>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-105 h-32">
              <img
                src={logoHeinz}
                alt="Heinz"
                className="max-h-20 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
          </AnimatedCard>

          {/* Partner 6 */}
          <AnimatedCard index={5}>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-105 h-32">
              <img
                src={logoGillette}
                alt="Gillette"
                className="max-h-20 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
          </AnimatedCard>

          {/* Partner 7 */}
          <AnimatedCard index={6}>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-105 h-32">
              <img
                src={logoJuhayna}
                alt="Juhayna"
                className="max-h-20 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
          </AnimatedCard>

          {/* Partner 8 */}
          <AnimatedCard index={7}>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-105 h-32">
              <img
                src={logoPG}
                alt="P&G"
                className="max-h-20 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}

