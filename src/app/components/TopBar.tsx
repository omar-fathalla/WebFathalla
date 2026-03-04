import { Phone, MapPin } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export function TopBar() {
  const { lang } = useLanguage();

  return (
    <div className="bg-[#f8931f] text-white py-2 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between text-sm">
          {/* Hotline - Always visible and prominent */}
          <a
            href="tel:15260"
            className="flex items-center gap-2 hover:text-[#2d1600] transition-colors group"
          >
            <div className="w-7 h-7 bg-white/20 group-hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
              <Phone size={14} className="fill-current" />
            </div>
            <span className="tracking-wider">
              {lang === 'ar' ? 'الخط الساخن:' : 'Hotline:'}{' '}
            </span>
            <span className="tracking-[0.15em]" dir="ltr">
              15260
            </span>
          </a>

          {/* Location - Hidden on tablet and below */}
          <div className="hidden lg:flex items-center gap-2">
            <MapPin size={14} />
            <span>
              {lang === 'ar'
                ? 'السوق التجاري، سموحة، الإسكندرية، مصر'
                : 'Commercial Market, Smouha, Alexandria, Egypt'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}