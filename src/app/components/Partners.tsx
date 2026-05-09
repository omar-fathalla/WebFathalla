import image_42faab0c6669490037b7f6549f9a617275106a3b from 'figma:asset/42faab0c6669490037b7f6549f9a617275106a3b.png';
import imgPG1 from "figma:asset/4dd6a01cfdab161bdcf0118f48f08fedbcab088d.png";
import imgNescafeLogo from "figma:asset/ba1be3179bbd2fe1cc0ee691f8abfc70cd42051b.png";
import imgNiva1 from "figma:asset/586b629eb1cfc64b7b0dbee6df3bba86b4860816.png";
import imgHeinzLogo1 from "figma:asset/f31212953d8a1e668bcad7908d9d7c75934fab02.png";
import imgGilletteLogo1 from "figma:asset/d5b7a1837dd5c364c77db384948ede81d674d01f.png";
import newPartnerLogo from "../../imports/image-4.png";
import secondPartnerLogo from "../../imports/image-5.png";
import juhaynaLogo from "../../imports/juhayna_arabic.png";
import partner8Logo from "../../imports/image-6.png";
import partner9Logo from "../../imports/image-7.png";
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
                src={newPartnerLogo}
                alt="Unilever"
                className="max-h-20 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
          </AnimatedCard>

          {/* Partner 2 */}
          <AnimatedCard index={1}>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-105 h-32">
              <img
                src={partner9Logo}
                alt="Partner Logo"
                className="max-h-20 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
          </AnimatedCard>

          {/* Partner 3 */}
          <AnimatedCard index={2}>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-105 h-32">
              <img
                src={imgNescafeLogo}
                alt="Nescafe"
                className="max-h-20 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
          </AnimatedCard>

          {/* Partner 4 */}
          <AnimatedCard index={3}>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-105 h-32">
              <img
                src={imgNiva1}
                alt="Nivea"
                className="max-h-20 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
          </AnimatedCard>

          {/* Partner 5 */}
          <AnimatedCard index={4}>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-105 h-32">
              <img
                src={imgHeinzLogo1}
                alt="Heinz"
                className="max-h-20 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
          </AnimatedCard>

          {/* Partner 6 */}
          <AnimatedCard index={5}>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-105 h-32">
              <img
                src={imgGilletteLogo1}
                alt="Gillette"
                className="max-h-20 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
          </AnimatedCard>

          {/* Partner 7 */}
          <AnimatedCard index={6}>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-105 h-32">
              <img
                src={juhaynaLogo}
                alt="Juhayna"
                className="max-h-20 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
          </AnimatedCard>

          {/* Partner 8 */}
          <AnimatedCard index={7}>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-105 h-32">
              <img
                src={partner8Logo}
                alt="Partner"
                className="max-h-20 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all"
              />
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
