import image_42faab0c6669490037b7f6549f9a617275106a3b from 'figma:asset/42faab0c6669490037b7f6549f9a617275106a3b.png';
import imgPG1 from "figma:asset/4dd6a01cfdab161bdcf0118f48f08fedbcab088d.png";
import imgNescafeLogo from "figma:asset/ba1be3179bbd2fe1cc0ee691f8abfc70cd42051b.png";
import imgNiva1 from "figma:asset/586b629eb1cfc64b7b0dbee6df3bba86b4860816.png";
import imgHeinzLogo1 from "figma:asset/f31212953d8a1e668bcad7908d9d7c75934fab02.png";
import imgGilletteLogo1 from "figma:asset/d5b7a1837dd5c364c77db384948ede81d674d01f.png";
import { AnimatedSection, AnimatedCard } from './AnimationWrappers';
import { useLanguage } from './LanguageContext';
import { translations, t } from './translations';

export function Partners() {
  const { lang } = useLanguage();
  const pt = translations.partners;

  const partners = [
    { name: 'Unilever', logo: image_42faab0c6669490037b7f6549f9a617275106a3b },
    { name: 'P&G', logo: imgPG1 },
    { name: 'Nescafe', logo: imgNescafeLogo },
    { name: 'Nivea', logo: imgNiva1 },
    { name: 'Heinz', logo: imgHeinzLogo1 },
    { name: 'Gillette', logo: imgGilletteLogo1 },
    { name: 'Pepsi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Pepsi_logo_2014.svg/200px-Pepsi_logo_2014.svg.png' },
    { name: 'Coca Cola', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/200px-Coca-Cola_logo.svg.png' }
  ];

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

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <AnimatedCard key={index} index={index}>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center group hover:scale-105 h-32">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-20 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
