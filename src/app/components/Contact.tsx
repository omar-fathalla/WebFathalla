import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';
import { AnimatedSection, AnimatedSlideLeft, AnimatedSlideRight } from './AnimationWrappers';
import { useLanguage } from './LanguageContext';
import { translations, t } from './translations';

export function Contact() {
  const { lang } = useLanguage();
  const ct = translations.contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-[#fffbff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-[#502800]">{t(ct.title, lang)}</h2>
          <p className="text-xl text-[#713d00] max-w-3xl mx-auto">
            {t(ct.subtitle, lang)}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimatedSlideLeft>
            <div>
              <h3 className="text-2xl mb-8 text-[#502800]">{t(ct.getInTouch, lang)}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#f8931f] p-3 rounded-lg text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-[#502800]">{t(ct.address, lang)}</h4>
                    <p className="text-[#713d00]">{t(ct.addressValue, lang)}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#f8931f] p-3 rounded-lg text-white">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-[#502800]">{t(ct.phone, lang)}</h4>
                    <a href="tel:15260" className="text-[#f8931f] text-2xl tracking-[0.15em] hover:text-[#db8200] transition-colors inline-block" dir="ltr">
                      15260
                    </a>
                    <p className="text-[#713d00] text-sm mt-1">
                      {lang === 'ar' ? 'الخط الساخن - متاح على مدار الساعة' : 'Hotline - Available 24/7'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#f8931f] p-3 rounded-lg text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-[#502800]">{t(ct.email, lang)}</h4>
                    <a href="mailto:cs@fathallamarket.com.eg" className="text-[#713d00] hover:text-[#f8931f] transition-colors" dir="ltr">cs@fathallamarket.com.eg</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#f8931f] p-3 rounded-lg text-white">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1 text-[#502800]">{t(ct.workingHours, lang)}</h4>
                    <p className="text-[#713d00]">{t(ct.workingHoursValue1, lang)}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSlideLeft>

          {/* Contact Form */}
          <AnimatedSlideRight>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl mb-6 text-[#502800]">{t(ct.sendMessage, lang)}</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[#502800] mb-2">{t(ct.name, lang)}</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f8931f] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#502800] mb-2">{t(ct.emailLabel, lang)}</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f8931f] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#502800] mb-2">{t(ct.phoneLabel, lang)}</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f8931f] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-[#502800] mb-2">{t(ct.message, lang)}</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f8931f] focus:border-transparent resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f8931f] hover:bg-[#db8200] text-white py-3 rounded-lg transition-colors"
                >
                  {t(ct.send, lang)}
                </button>
              </form>
            </div>
          </AnimatedSlideRight>
        </div>
      </div>
    </section>
  );
}