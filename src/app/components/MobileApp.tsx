import { Smartphone, Star, Download } from 'lucide-react';
import { AnimatedSlideLeft, AnimatedSlideRight } from './AnimationWrappers';
import { useLanguage } from './LanguageContext';
import { translations, t } from './translations';
import { images } from './images';

interface MobileAppProps {
  appImage: string;
}

export function MobileApp({ appImage }: MobileAppProps) {
  const { lang, isRTL } = useLanguage();
  const ma = translations.mobileApp;

  return (
    <section className="py-20 bg-gradient-to-br from-[#f8931f] to-[#db8200]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <AnimatedSlideLeft className="text-white">
            <h2 className="text-4xl md:text-5xl mb-6">
              {t(ma.title, lang)}
            </h2>
            <p className="text-xl mb-8 text-white/90">
              {t(ma.subtitle, lang)}
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">{t(ma.easyToUse, lang)}</h3>
                  <p className="text-white/80">{t(ma.easyToUseDesc, lang)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">{t(ma.exclusiveOffers, lang)}</h3>
                  <p className="text-white/80">{t(ma.exclusiveOffersDesc, lang)}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">{t(ma.fastDelivery, lang)}</h3>
                  <p className="text-white/80">{t(ma.fastDeliveryDesc, lang)}</p>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black hover:bg-black/80 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <div className="text-xs">{t(ma.downloadOn, lang)}</div>
                  <div className="text-sm">{t(ma.appStore, lang)}</div>
                </div>
              </button>
              <button className="bg-black hover:bg-black/80 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-3">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <div className="text-xs">{t(ma.getItOn, lang)}</div>
                  <div className="text-sm">{t(ma.googlePlay, lang)}</div>
                </div>
              </button>
            </div>
          </AnimatedSlideLeft>

          {/* Image */}
          <AnimatedSlideRight className="relative">
            <div className="relative z-10">
              <img
                src={appImage}
                alt="Mobile App"
                className="rounded-3xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl">
              <img
                src={images.mobileAppDecor}
                alt="Mobile shopping experience"
                className="w-full h-full object-cover rounded-full opacity-20"
              />
            </div>
          </AnimatedSlideRight>
        </div>
      </div>
    </section>
  );
}