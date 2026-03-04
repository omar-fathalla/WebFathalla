import { Star, Quote } from 'lucide-react';
import { AnimatedSection, AnimatedCard } from './AnimationWrappers';
import { useLanguage } from './LanguageContext';
import { translations, t } from './translations';

const ratings = [5, 5, 5, 4, 5, 5];

export function Testimonials() {
  const { lang } = useLanguage();
  const test = translations.testimonials;

  return (
    <section className="py-20 bg-[#fffbff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#502800]">
            {t(test.title1, lang)} <span className="text-[#f8931f]">{t(test.titleHighlight, lang)}</span> {t(test.title2, lang)}
          </h2>
          <p className="text-xl text-[#713d00] max-w-3xl mx-auto">
            {t(test.subtitle, lang)}
          </p>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {test.reviews.map((review, index) => (
            <AnimatedCard key={index} index={index}>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
                <Quote className="w-10 h-10 text-[#f8931f] mb-4" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < ratings[index] ? 'fill-[#f8931f] text-[#f8931f]' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-[#713d00] mb-6 leading-relaxed flex-grow">{t(review.comment, lang)}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#f8931f]/15 flex items-center justify-center text-[#f8931f] text-lg">
                    {t(review.name, lang).charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-[#502800]">{t(review.name, lang)}</h4>
                    <p className="text-sm text-[#713d00]">{t(review.location, lang)}</p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}