import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AnimatedSection, AnimatedCard } from './AnimationWrappers';
import { useLanguage } from './LanguageContext';
import { translations, t } from './translations';

// Import generated images
import imgTunisi1 from "../../imports/tunisi_1.jpg";
import imgTunisi2 from "../../imports/tunisi_2.jpg";
import imgTunisi3 from "../../imports/tunisi_3.jpg";
import imgTunisi4 from "../../imports/tunisi_4.jpg";
import imgHospital1 from "../../imports/hospital_1.jpg";
import imgHospital2 from "../../imports/hospital_2.jpg";
import imgHospital3 from "../../imports/hospital_3.jpg";

const articleImages = [
  [
    imgTunisi1,
    imgTunisi2,
    imgTunisi3,
    imgTunisi4,
  ],
  [
    imgHospital1,
    imgHospital2,
    imgHospital3,
  ],
];

interface NewsCardProps {
  articleIndex: number;
  cardIndex: number;
}

function NewsCard({ articleIndex, cardIndex }: NewsCardProps) {
  const { lang, isRTL } = useLanguage();
  const newsT = translations.news;
  const article = newsT.articles[articleIndex];
  const images = articleImages[articleIndex];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    rtl: isRTL,
    className: 'news-slider',
  };

  return (
    <AnimatedCard index={cardIndex}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group h-full flex flex-col">
        {/* Image Slider */}
        <div className="relative h-80 overflow-hidden">
          <Slider {...sliderSettings}>
            {images.map((image, index) => (
              <div key={index} className="relative h-80">
                <img
                  src={image}
                  alt={`${t(article.title, lang)} - ${index + 1}`}
                  className="w-full h-80 object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-12 bg-[#f8931f] rounded-full"></div>
            <span className="text-sm text-[#713d00] uppercase tracking-wider">{t(newsT.newsLabel, lang)}</span>
          </div>
          
          <h3 className="text-2xl mb-4 text-[#502800] group-hover:text-[#f8931f] transition-colors">
            {t(article.title, lang)}
          </h3>
          
          <p className="text-[#713d00] leading-relaxed flex-grow">
            {t(article.description, lang)}
          </p>
        </div>
      </div>
    </AnimatedCard>
  );
}

export function News() {
  const { lang } = useLanguage();
  const newsT = translations.news;

  return (
    <AnimatedSection>
      <section id="news" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 text-[#502800]">
              {t(newsT.title1, lang)} <span className="text-[#f8931f]">{t(newsT.titleHighlight, lang)}</span>
            </h2>
            <p className="text-xl text-[#713d00] max-w-3xl mx-auto">
              {t(newsT.subtitle, lang)}
            </p>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {newsT.articles.map((_, index) => (
              <NewsCard key={index} articleIndex={index} cardIndex={index} />
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
