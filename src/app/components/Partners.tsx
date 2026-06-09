import logoArma from '../../imports/arma.jpg';
import logoDanone from '../../imports/danone.png';
import logoDowntown from '../../imports/downtown.jpg';
import logoOvo from '../../imports/ovo.jpg';
import logoJuhayna from '../../imports/juhayna_partner.png';
import logoRedBull from '../../imports/red_bull.jpg';
import logoGalaxy from '../../imports/galaxy.jpg';
import logoAbuAuf from '../../imports/abu_auf.png';
import logoAlBawadi from '../../imports/al_bawadi.png';
import logoElMizan from '../../imports/el_mizan.png';
import { AnimatedSection, AnimatedCard } from './AnimationWrappers';
import { useLanguage } from './LanguageContext';
import { translations, t } from './translations';

const partnersData = [
  { name: 'Arma', logo: logoArma },
  { name: 'Danone', logo: logoDanone },
  { name: 'Downtown Badr City', logo: logoDowntown },
  { name: 'Ovo Naturelle', logo: logoOvo },
  { name: 'Juhayna', logo: logoJuhayna },
  { name: 'Red Bull', logo: logoRedBull },
  { name: 'Galaxy', logo: logoGalaxy },
  { name: 'Abu Auf', logo: logoAbuAuf },
  { name: 'Al Bawadi', logo: logoAlBawadi },
  { name: 'El Rashidi El Mizan', logo: logoElMizan },
];

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

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partnersData.map((partner, index) => (
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

