import { ShoppingBag, Clock, Shield, Truck, Heart, Eye, Target } from 'lucide-react';
import { AnimatedSection, AnimatedCard, AnimatedStagger, AnimatedStaggerItem } from './AnimationWrappers';
import { useLanguage } from './LanguageContext';
import { translations, t } from './translations';
import { ImageWithFallback } from './figma/ImageWithFallback';
import aboutImage from '../../imports/DSC06636.jpg';

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

        {/* Who We Are Section */}
        <AnimatedSection className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6 text-[#502800]">
                {t(about.whoWeAreTitle as any, lang)}
              </h3>
              <p className="text-[#713d00] text-lg leading-relaxed text-justify">
                {t(about.whoWeAreDesc as any, lang)}
              </p>
            </div>
            <div className="lg:w-1/2 relative h-64 lg:h-auto min-h-[300px]">
              <ImageWithFallback 
                src={aboutImage}
                alt={t(about.whoWeAreTitle as any, lang)}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Core Values / MVV */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <AnimatedCard index={0}>
            <div className="bg-[#fffbff] border border-[#f8931f]/20 p-8 rounded-xl shadow-md hover:shadow-lg transition-all h-full flex flex-col items-center text-center group">
              <div className="bg-[#f8931f]/10 p-4 rounded-full text-[#f8931f] mb-6 group-hover:scale-110 group-hover:bg-[#f8931f] group-hover:text-white transition-all">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#502800]">
                {t(about.messageTitle as any, lang)}
              </h3>
              <p className="text-[#713d00] leading-relaxed">
                {t(about.messageDesc as any, lang)}
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard index={1}>
            <div className="bg-[#fffbff] border border-[#f8931f]/20 p-8 rounded-xl shadow-md hover:shadow-lg transition-all h-full flex flex-col items-center text-center group">
              <div className="bg-[#f8931f]/10 p-4 rounded-full text-[#f8931f] mb-6 group-hover:scale-110 group-hover:bg-[#f8931f] group-hover:text-white transition-all">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#502800]">
                {t(about.visionTitle as any, lang)}
              </h3>
              <p className="text-[#713d00] leading-relaxed">
                {t(about.visionDesc as any, lang)}
              </p>
            </div>
          </AnimatedCard>

          <AnimatedCard index={2}>
            <div className="bg-[#fffbff] border border-[#f8931f]/20 p-8 rounded-xl shadow-md hover:shadow-lg transition-all h-full flex flex-col items-center text-center group">
              <div className="bg-[#f8931f]/10 p-4 rounded-full text-[#f8931f] mb-6 group-hover:scale-110 group-hover:bg-[#f8931f] group-hover:text-white transition-all">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#502800]">
                {t(about.missionTitle as any, lang)}
              </h3>
              <p className="text-[#713d00] leading-relaxed">
                {t(about.missionDesc as any, lang)}
              </p>
            </div>
          </AnimatedCard>
        </div>

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
            <div className="text-4xl md:text-5xl text-[#f8931f] mb-2">30+</div>
            <div className="text-[#713d00]">{t(about.stats.stores, lang)}</div>
          </AnimatedStaggerItem>
          <AnimatedStaggerItem className="text-center">
            <div className="text-4xl md:text-5xl text-[#f8931f] mb-2">10K+</div>
            <div className="text-[#713d00]">{t(about.stats.products, lang)}</div>
          </AnimatedStaggerItem>
          <AnimatedStaggerItem className="text-center">
            <div className="text-4xl md:text-5xl text-[#f8931f] mb-2">3M+</div>
            <div className="text-[#713d00]">{t(about.stats.customers, lang)}</div>
          </AnimatedStaggerItem>
        </AnimatedStagger>
      </div>
    </section>
  );
}
