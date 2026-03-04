import { ShoppingBag, Clock, Shield, Truck } from 'lucide-react';
import { AnimatedSection, AnimatedCard, AnimatedStagger, AnimatedStaggerItem } from './AnimationWrappers';
import { useLanguage } from './LanguageContext';
import { translations, t } from './translations';

export function About() {
  const { lang } = useLanguage();
  const about = translations.about;

  const features = [
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: t(about.features.wideSelection.title, lang),
      description: t(about.features.wideSelection.desc, lang),
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t(about.features.extendedHours.title, lang),
      description: t(about.features.extendedHours.desc, lang),
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t(about.features.safety.title, lang),
      description: t(about.features.safety.desc, lang),
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: t(about.features.delivery.title, lang),
      description: t(about.features.delivery.desc, lang),
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#fffbff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#502800]">
            {t(about.title1, lang)} <span className="text-[#f8931f]">{t(about.titleBrand, lang)}</span> {t(about.title2, lang)}
          </h2>
          <p className="text-xl text-[#713d00] max-w-3xl mx-auto leading-relaxed">
            {t(about.description, lang)}
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard key={index} index={index}>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group h-full">
                <div className="text-[#f8931f] mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-3 text-[#502800]">{feature.title}</h3>
                <p className="text-[#713d00]">{feature.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Stats */}
        <AnimatedStagger className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedStaggerItem className="text-center">
            <div className="text-4xl md:text-5xl text-[#f8931f] mb-2">70+</div>
            <div className="text-[#713d00]">{t(about.stats.years, lang)}</div>
          </AnimatedStaggerItem>
          <AnimatedStaggerItem className="text-center">
            <div className="text-4xl md:text-5xl text-[#f8931f] mb-2">50+</div>
            <div className="text-[#713d00]">{t(about.stats.stores, lang)}</div>
          </AnimatedStaggerItem>
          <AnimatedStaggerItem className="text-center">
            <div className="text-4xl md:text-5xl text-[#f8931f] mb-2">10K+</div>
            <div className="text-[#713d00]">{t(about.stats.products, lang)}</div>
          </AnimatedStaggerItem>
          <AnimatedStaggerItem className="text-center">
            <div className="text-4xl md:text-5xl text-[#f8931f] mb-2">1M+</div>
            <div className="text-[#713d00]">{t(about.stats.customers, lang)}</div>
          </AnimatedStaggerItem>
        </AnimatedStagger>
      </div>
    </section>
  );
}
