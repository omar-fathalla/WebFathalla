export interface Branch {
  id: string;
  name: { ar: string; en: string };
  address: { ar: string; en: string };
  area: { ar: string; en: string };
  mapUrl: string | null;
  isMain?: boolean;
}

export const branches: Branch[] = [
  // Alexandria
  {
    id: 'smouha-1',
    name: { ar: 'سموحة 1', en: 'Smouha 1' },
    address: { ar: 'خلف مديرية الأمن، سموحة', en: 'Behind Security Directorate, Smouha' },
    area: { ar: 'الإسكندرية', en: 'Alexandria' },
    mapUrl: 'https://maps.app.goo.gl/A2Jv7pFML9627bhK6',
    isMain: true,
  },
  {
    id: 'smouha-2',
    name: { ar: 'سموحة 2', en: 'Smouha 2' },
    address: { ar: 'شارع أدمون فريمون، سموحة', en: 'Edmon Fremont St., Smouha' },
    area: { ar: 'الإسكندرية', en: 'Alexandria' },
    mapUrl: 'https://maps.app.goo.gl/VnTj7GrzUKvf98Fw8',
  },
  {
    id: 'smouha-3',
    name: { ar: 'سموحة 3', en: 'Smouha 3' },
    address: { ar: 'شارع النصر، سموحة', en: 'Al-Nasr St., Smouha' },
    area: { ar: 'الإسكندرية', en: 'Alexandria' },
    mapUrl: 'https://maps.app.goo.gl/EVaYGrX4YZwEDzVC8',
  },
  {
    id: 'ibrahimiya-1',
    name: { ar: 'الإبراهيمية 1', en: 'Ibrahimia 1' },
    address: { ar: 'ش محمود حسن فهمى مع ش الكريم خطابى برج سينما ريفيرا، الإبراهيمية', en: 'Mahmoud Hassan Fahmy St. & Al-Karim Khattaby St., Riviera Cinema Tower, Ibrahimia' },
    area: { ar: 'الإسكندرية', en: 'Alexandria' },
    mapUrl: 'https://maps.app.goo.gl/zpAvZrWVL6TuBqna8',
  },
  {
    id: 'ibrahimiya-2',
    name: { ar: 'الإبراهيمية 2', en: 'Ibrahimia 2' },
    address: { ar: 'شارع زكي رجب، الإبراهيمية', en: 'Zaki Ragab St., Ibrahimia' },
    area: { ar: 'الإسكندرية', en: 'Alexandria' },
    mapUrl: 'https://maps.app.goo.gl/Aji4T1GgbE5uQueA6',
  },
  {
    id: 'sidi-gaber-1',
    name: { ar: 'سيدي جابر 1', en: 'Sidi Gaber 1' },
    address: { ar: 'مول محطة قطار سيدي جابر', en: 'Sidi Gaber Train Station Mall' },
    area: { ar: 'الإسكندرية', en: 'Alexandria' },
    mapUrl: 'https://maps.app.goo.gl/7VgGEAwwgketpebP8',
  },
  {
    id: 'sidi-gaber-2',
    name: { ar: 'سيدي جابر 2', en: 'Sidi Gaber 2' },
    address: { ar: 'خلف محطة سيدي جابر', en: 'Behind Sidi Gaber Station' },
    area: { ar: 'الإسكندرية', en: 'Alexandria' },
    mapUrl: null,
  },
  {
    id: 'sidi-gaber-3',
    name: { ar: 'سيدي جابر 3', en: 'Sidi Gaber 3' },
    address: { ar: 'مول سيتي سكوير، سيدي جابر', en: 'City Square Mall, Sidi Gaber' },
    area: { ar: 'الإسكندرية', en: 'Alexandria' },
    mapUrl: 'https://maps.app.goo.gl/cJqFJ6KTdnWv2NdC8',
  },
  {
    id: 'stanley',
    name: { ar: 'ستانلي', en: 'Stanley' },
    address: { ar: 'شارع عبد الحميد العبادي، ستانلي', en: 'Abdel Hamid El-Abadi St., Stanley' },
    area: { ar: 'الإسكندرية', en: 'Alexandria' },
    mapUrl: 'https://maps.app.goo.gl/Fc1BFvhdSws8EWxi8',
  },
  {
    id: 'fleming',
    name: { ar: 'فلمنج', en: 'Fleming' },
    address: { ar: 'شارع مصطفى كامل، فلمنج', en: 'Mostafa Kamel St., Fleming' },
    area: { ar: 'الإسكندرية', en: 'Alexandria' },
    mapUrl: 'https://maps.app.goo.gl/JeWrUfqfsTqakfXA9',
  },
  {
    id: 'gardenia',
    name: { ar: 'جاردينيا', en: 'Gardenia' },
    address: { ar: 'مدينة جاردينيا السيوف', en: 'Gardenia City, El-Seyouf' },
    area: { ar: 'الإسكندرية', en: 'Alexandria' },
    mapUrl: 'https://maps.app.goo.gl/TKsY22brNPEGXeY9A',
  },
  {
    id: 'sidi-bishr-35',
    name: { ar: 'سيدي بشر 35', en: 'Sidi Bishr 35' },
    address: { ar: '35 ش الصاغ عبد السلام، سيدي بشر', en: '35 El-Sagh Abdel Salam St., Sidi Bishr' },
    area: { ar: 'الإسكندرية', en: 'Alexandria' },
    mapUrl: 'https://maps.app.goo.gl/gxKDuznrVB5FvKXr6',
  },
  {
    id: 'sidi-bishr-malak',
    name: { ar: 'سيدي بشر ملك حفني', en: 'Sidi Bishr Malak Hefny' },
    address: { ar: 'شارع ملك حفني، سيدي بشر', en: 'Malek Hefny St., Sidi Bishr' },
    area: { ar: 'الإسكندرية', en: 'Alexandria' },
    mapUrl: 'https://maps.app.goo.gl/G4BsdmHvWiHvBT4P6',
  },
  {
    id: 'tosson',
    name: { ar: 'طوسون', en: 'Tosson' },
    address: { ar: 'أبراج المستشارين، طوسون', en: 'Consultants Towers, Tosson' },
    area: { ar: 'الإسكندرية', en: 'Alexandria' },
    mapUrl: 'https://maps.app.goo.gl/t5vjuXFRwLDMGR5m9',
  },
  {
    id: 'anfoushi',
    name: { ar: 'الأنفوشي', en: 'Anfoushi' },
    address: { ar: '38 ش قصر التين، الجمرك، الأنفوشي', en: '38 Qasr El-Tin St., El-Gomrok, Anfoushi' },
    area: { ar: 'الإسكندرية', en: 'Alexandria' },
    mapUrl: 'https://maps.app.goo.gl/YU5FVwBnYaiGSDXX8',
  },
  {
    id: 'matrouh',
    name: { ar: 'مطروح', en: 'Matrouh' },
    address: { ar: 'فندق سميراميس مطروح (نيو رويال سابقاً)، ش الكورنيش', en: 'Semiramis Hotel Matrouh (formerly New Royal), Corniche St.' },
    area: { ar: 'الإسكندرية', en: 'Alexandria' },
    mapUrl: 'https://maps.app.goo.gl/e3ipcfcgWtLP7q296',
  },
  {
    id: 'agami',
    name: { ar: 'العجمي', en: 'Agami' },
    address: { ar: 'مول العجمي ستار، العجمي', en: 'Agami Star Mall, Agami' },
    area: { ar: 'الإسكندرية', en: 'Alexandria' },
    mapUrl: 'https://maps.app.goo.gl/qUxfMFDVMKqyrjEy9',
  },
  {
    id: 'october',
    name: { ar: 'أكتوبر النخيل', en: 'October El-Nakheel' },
    address: { ar: 'محل رقم 1 بالعقار 27، ش جلال الدين سرى، أكتوبر النخيل', en: 'Shop No. 1, Bldg 27, Galal El-Din Serry St., October El-Nakheel' },
    area: { ar: 'الإسكندرية', en: 'Alexandria' },
    mapUrl: 'https://maps.app.goo.gl/8mKPYePXipH2JH9r6',
  },
  {
    id: 'hanoville',
    name: { ar: 'الهانوفيل', en: 'Hanoville' },
    address: { ar: 'قطعة رقم 187، مشروع زهرة العجمى، الهانوفيل', en: 'Plot No. 187, Zahrat El-Agami Project, Hanoville' },
    area: { ar: 'الإسكندرية', en: 'Alexandria' },
    mapUrl: 'https://maps.app.goo.gl/mCrt5Dq68M59hNALA',
  },
  {
    id: 'dekheila-1',
    name: { ar: 'الدخيلة 1', en: 'Dekheila 1' },
    address: { ar: 'كورنيش الدخيلة، برج المنى', en: 'Dekheila Corniche, El-Mona Tower' },
    area: { ar: 'الإسكندرية', en: 'Alexandria' },
    mapUrl: 'https://maps.app.goo.gl/HERLHNizPP5PXfDH9',
  },
  {
    id: 'dekheila-2',
    name: { ar: 'الدخيلة 2', en: 'Dekheila 2' },
    address: { ar: 'الدخيلة القبلية، برج الهادي بجوار البوسطة القديمة', en: 'Dekheila Qebli, El-Hadi Tower, next to Old Post Office' },
    area: { ar: 'الإسكندرية', en: 'Alexandria' },
    mapUrl: 'https://maps.app.goo.gl/GjqSFyY5VgfjWo5b8',
  },

  // North Coast
  {
    id: 'rosana',
    name: { ar: 'روزانا', en: 'Rosana' },
    address: { ar: 'قرية روزانا، الساحل الشمالى الكيلو 54', en: 'Rosana Village, North Coast KM 54' },
    area: { ar: 'الساحل الشمالي', en: 'North Coast' },
    mapUrl: 'https://maps.app.goo.gl/uvznXHtPmqoduYq37',
  },
  {
    id: 'nice-1',
    name: { ar: 'نيس 1', en: 'Nice 1' },
    address: { ar: 'قرية نيس، الساحل الشمالى الكيلو 65', en: 'Nice Village, North Coast KM 65' },
    area: { ar: 'الساحل الشمالي', en: 'North Coast' },
    mapUrl: 'https://maps.app.goo.gl/1cFdMnGRkN49ZNB8A',
  },
  {
    id: 'nice-2',
    name: { ar: 'نيس 2', en: 'Nice 2' },
    address: { ar: 'الساحل الشمالي الكيلو 65', en: 'North Coast KM 65' },
    area: { ar: 'الساحل الشمالي', en: 'North Coast' },
    mapUrl: 'https://maps.app.goo.gl/oHGpgBhZErXBkUWQ9',
  },
  {
    id: 'amwaj',
    name: { ar: 'أمواج', en: 'Amwaj' },
    address: { ar: 'قرية أمواج، بوابة 2، الكيلو 136', en: 'Amwaj Village, Gate 2, KM 136' },
    area: { ar: 'الساحل الشمالي', en: 'North Coast' },
    mapUrl: 'https://maps.app.goo.gl/DdRXwTvmRzx8QhAv8',
  },

  // Delta
  {
    id: 'kafr-el-dawar-1',
    name: { ar: 'كفر الدوار 1', en: 'Kafr El-Dawar 1' },
    address: { ar: 'مدخل الكوبرى الجديد، بمدخل كفر الدوار الجديد', en: 'New Bridge Entrance, New Kafr El-Dawar Entrance' },
    area: { ar: 'محافظات الدلتا', en: 'Delta Provinces' },
    mapUrl: 'https://maps.app.goo.gl/QZWtWhEWgqJssjze9',
  },
  {
    id: 'damanhur-1',
    name: { ar: 'دمنهور 1', en: 'Damanhur 1' },
    address: { ar: 'عقار رقم 1، أبراج الأندلس، ش الجيش، ميدان النافورة', en: 'Building 1, Al-Andalus Towers, El-Geish St., Fountain Square' },
    area: { ar: 'محافظات الدلتا', en: 'Delta Provinces' },
    mapUrl: 'https://maps.app.goo.gl/e2AfbBy9SnC3QqSv6',
  },
  {
    id: 'damanhur-2',
    name: { ar: 'دمنهور 2', en: 'Damanhur 2' },
    address: { ar: 'مول ساج بلازا أمام النادي الاجتماعي', en: 'Sag Plaza Mall, in front of Social Club' },
    area: { ar: 'محافظات الدلتا', en: 'Delta Provinces' },
    mapUrl: 'https://maps.app.goo.gl/xkuVPzJWSTCvAbvj7',
  },
  {
    id: 'tanta-1',
    name: { ar: 'طنطا 1', en: 'Tanta 1' },
    address: { ar: 'شارع سعيد، طنطا', en: 'Saeed St., Tanta' },
    area: { ar: 'محافظات الدلتا', en: 'Delta Provinces' },
    mapUrl: 'https://maps.app.goo.gl/3KhkaUzuWo9g9e458',
  },
  {
    id: 'tanta-2',
    name: { ar: 'طنطا 2', en: 'Tanta 2' },
    address: { ar: 'مول أوت ليت، شارع الأشرف', en: 'Outlet Mall, Al-Ashraf St.' },
    area: { ar: 'محافظات الدلتا', en: 'Delta Provinces' },
    mapUrl: 'https://maps.app.goo.gl/hdynhosV9sRwqiZn8',
  },
  {
    id: 'mahalla',
    name: { ar: 'المحلة', en: 'El-Mahalla' },
    address: { ar: 'أبراج النصر، عمارة رقم 4، بلوك 2', en: 'Al-Nasr Towers, Bldg 4, Block 2' },
    area: { ar: 'محافظات الدلتا', en: 'Delta Provinces' },
    mapUrl: null,
  },
  {
    id: 'kafr-el-dawar-2',
    name: { ar: 'كفر الدوار 2', en: 'Kafr El-Dawar 2' },
    address: { ar: 'شارع المحكمة، كفر الدوار', en: 'Mahkama St., Kafr El-Dawar' },
    area: { ar: 'محافظات الدلتا', en: 'Delta Provinces' },
    mapUrl: 'https://maps.app.goo.gl/Yi3f96pKFzafY6by6',
  },

  // Damietta
  {
    id: 'new-damietta',
    name: { ar: 'دمياط الجديدة', en: 'New Damietta' },
    address: { ar: 'بجوار مسجد الروضة ومركز القواس للتسوق، شارع المحجوب، مدينة دمياط الجديدة', en: 'Next to Al-Rawda Mosque & Al-Qawas Shopping Center, Al-Mahjoub St., New Damietta' },
    area: { ar: 'دمياط الجديدة', en: 'New Damietta' },
    mapUrl: 'https://maps.app.goo.gl/Xi9J8FbJXWmj122D8',
  },
];

export function getAreas(lang: 'ar' | 'en'): string[] {
  const areaSet = new Set<string>();
  branches.forEach((b) => areaSet.add(b.area[lang]));
  return Array.from(areaSet);
}
