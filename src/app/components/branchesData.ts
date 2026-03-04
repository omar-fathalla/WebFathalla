export interface Branch {
  id: string;
  name: { ar: string; en: string };
  address: { ar: string; en: string };
  area: { ar: string; en: string };
  mapUrl: string | null;
  isMain?: boolean;
}

export const branches: Branch[] = [
  {
    id: 'main',
    name: { ar: 'السوق التجاري الرئيسي', en: 'Main Commercial Market' },
    address: { ar: 'السوق التجاري، سموحة، الإسكندرية', en: 'Commercial Market, Smouha, Alexandria' },
    area: { ar: 'سموحة', en: 'Smouha' },
    mapUrl: 'https://maps.app.goo.gl/A2Jv7pFML9627bhK6',
    isMain: true,
  },
  {
    id: 'amen',
    name: { ar: 'الأمن', en: 'Al-Amen' },
    address: { ar: 'شارع مسجد حاتم', en: 'Masjid Hatem Street' },
    area: { ar: 'الأمن', en: 'Al-Amen' },
    mapUrl: 'https://maps.app.goo.gl/A2Jv7pFML9627bhK6',
  },
  {
    id: 'smouha-2',
    name: { ar: 'سموحة 2', en: 'Smouha 2' },
    address: { ar: 'شارع أدمون فريمون', en: 'Edmon Fremont Street' },
    area: { ar: 'سموحة', en: 'Smouha' },
    mapUrl: 'https://maps.app.goo.gl/VnTj7GrzUKvf98Fw8',
  },
  {
    id: 'smouha-3',
    name: { ar: 'سموحة 3', en: 'Smouha 3' },
    address: { ar: 'شارع النصر', en: 'Al-Nasr Street' },
    area: { ar: 'سموحة', en: 'Smouha' },
    mapUrl: 'https://maps.app.goo.gl/EVaYGrX4YZwEDzVC8',
  },
  {
    id: 'ibrahimiya-1',
    name: { ar: 'الإبراهيمية 1', en: 'Ibrahimiya 1' },
    address: { ar: 'ش محمود حسن فهمى مع ش الكريم خطابى - برج سينما ريفيرا', en: 'Mahmoud Hassan Fahmy St. & Al-Karim Khataby St. - Cinema Rivera Tower' },
    area: { ar: 'الإبراهيمية', en: 'Ibrahimiya' },
    mapUrl: 'https://maps.app.goo.gl/zpAvZrWVL6TuBqna8',
  },
  {
    id: 'ibrahimiya-2',
    name: { ar: 'الإبراهيمية 2', en: 'Ibrahimiya 2' },
    address: { ar: 'شارع زكي رجب', en: 'Zaki Ragab Street' },
    area: { ar: 'الإبراهيمية', en: 'Ibrahimiya' },
    mapUrl: 'https://maps.app.goo.gl/Aji4T1GgbE5uQueA6',
  },
  {
    id: 'sidi-gaber-1',
    name: { ar: 'سيدي جابر 1', en: 'Sidi Gaber 1' },
    address: { ar: 'محطة قطار سيدي جابر', en: 'Sidi Gaber Train Station' },
    area: { ar: 'سيدي جابر', en: 'Sidi Gaber' },
    mapUrl: null,
  },
  {
    id: 'sidi-gaber-2',
    name: { ar: 'سيدي جابر 2', en: 'Sidi Gaber 2' },
    address: { ar: 'خلف محطة سيدي جابر', en: 'Behind Sidi Gaber Station' },
    area: { ar: 'سيدي جابر', en: 'Sidi Gaber' },
    mapUrl: null,
  },
  {
    id: 'sidi-gaber-3',
    name: { ar: 'سيدي جابر 3', en: 'Sidi Gaber 3' },
    address: { ar: 'مول سيتي سكوير', en: 'City Square Mall' },
    area: { ar: 'سيدي جابر', en: 'Sidi Gaber' },
    mapUrl: 'https://maps.app.goo.gl/cJqFJ6KTdnWv2NdC8',
  },
  {
    id: 'stanley',
    name: { ar: 'ستانلي', en: 'Stanley' },
    address: { ar: 'شارع عبد الحميد العبادي', en: 'Abdel Hamid Al-Abadi Street' },
    area: { ar: 'ستانلي', en: 'Stanley' },
    mapUrl: 'https://maps.app.goo.gl/Fc1BFvhdSws8EWxi8',
  },
  {
    id: 'fleming',
    name: { ar: 'فلمنج', en: 'Fleming' },
    address: { ar: 'شارع مصطفى كامل', en: 'Mostafa Kamel Street' },
    area: { ar: 'فلمنج', en: 'Fleming' },
    mapUrl: 'https://maps.app.goo.gl/JeWrUfqfsTqakfXA9',
  },
  {
    id: 'gardenia',
    name: { ar: 'جاردينيا', en: 'Gardenia' },
    address: { ar: 'مدينة جاردينيا السيوف', en: 'Gardenia City, Al-Soyof' },
    area: { ar: 'السيوف', en: 'Al-Soyof' },
    mapUrl: 'https://maps.app.goo.gl/TKsY22brNPEGXeY9A',
  },
  {
    id: 'sidi-bishr-1',
    name: { ar: 'سيدي بشر 1', en: 'Sidi Bishr 1' },
    address: { ar: '35 شارع الصاغ عبد السلام', en: '35 Al-Sagh Abdel Salam Street' },
    area: { ar: 'سيدي بشر', en: 'Sidi Bishr' },
    mapUrl: 'https://maps.app.goo.gl/gxKDuznrVB5FvKXr6',
  },
  {
    id: 'sidi-bishr-2',
    name: { ar: 'سيدي بشر 2', en: 'Sidi Bishr 2' },
    address: { ar: 'شارع ملك حفني', en: 'Malek Hefny Street' },
    area: { ar: 'سيدي بشر', en: 'Sidi Bishr' },
    mapUrl: 'https://maps.app.goo.gl/G4BsdmHvWiHvBT4P6',
  },
  {
    id: 'tosson',
    name: { ar: 'طوسون', en: 'Tosson' },
    address: { ar: 'أبراج المستشارين', en: 'Al-Mostasharin Towers' },
    area: { ar: 'طوسون', en: 'Tosson' },
    mapUrl: 'https://maps.app.goo.gl/t5vjuXFRwLDMGR5m9',
  },
  {
    id: 'anfushi',
    name: { ar: 'الأنفوشي', en: 'Anfushi' },
    address: { ar: '8 شارع قصر التين، الجمرك', en: '8 Qasr Al-Tin Street, Al-Gomrok' },
    area: { ar: 'الأنفوشي', en: 'Anfushi' },
    mapUrl: null,
  },
];

export function getAreas(lang: 'ar' | 'en'): string[] {
  const areaSet = new Set<string>();
  branches.forEach((b) => areaSet.add(b.area[lang]));
  return Array.from(areaSet);
}
