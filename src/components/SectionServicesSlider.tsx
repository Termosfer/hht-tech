import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Sənaye Nasos Sistemləri",
    desc: "Ağır sənaye şəraitləri və yüksək təzyiq tələb edən proseslər üçün peşəkar nasos həlləri. Müxtəlif təyinatlı avadanlıqların satışı, montajı və 7/24 operativ texniki servis xidməti ilə istehsalatınızın kəsilməzliyini təmin edirik.",
  },
  {
    id: 2,
    title: "Booster (Təzyiq Artırma) Sistemləri",
    desc: "Yüksəkmərtəbəli binalarda və sənaye obyektlərində sabit su təzyiqinin intellektual idarəedilməsi. Tam avtomatlaşdırılmış sistemlərin layihələndirilməsi və qurulması ilə su təchizatında maksimum komfort.",
  },
  {
    id: 3,
    title: "Yanğınla Mübarizə Sistemləri",
    desc: "Beynəlxalq NFPA standartlarına tam uyğun, avtomatik idarəetmə panelləri ilə təchiz olunmuş yanğın nasos stansiyaları. Obyektlərinizin təhlükəsizlik infrastrukturunu yüksək etibarlılıq zəmanəti ilə formalaşdırırıq.",
  },
  {
    id: 4,
    title: "İnnovativ İstilik Sistemləri",
    desc: "Qazanxana və istilik dövriyyəsi şəbəkələrinin müasir mühəndislik yanaşması ilə qurulması. Yüksək enerji səmərəliliyi sayəsində minimum xərclə maksimum istilik performansı əldə etməyinizə dəstək oluruq.",
  },
  {
    id: 5,
    title: "Kompleks Su Təchizatı",
    desc: "Yaşayış kompleksləri, otellər, klinikalar və sənaye müəssisələri üçün 'A-dan Z-yə' su təminatı infrastrukturunun qurulması. Hər bir layihənin spesifik tələblərinə uyğun fərdiləşdirilmiş həllər.",
  },
  {
    id: 6,
    title: "Kanalizasiya və Drenaj Həlləri",
    desc: "Çirkab suların uzaqlaşdırılması üçün submersible (dalğıc) və quru tip nasos sistemlərinin qurulması. Ən çətin landşaftlarda belə effektiv drenaj və tullantı su idarəçiliyi.",
  },
  {
    id: 7,
    title: "İnvertor və İntellektual Avtomatika",
    desc: "VFD, PLC, HMI və SCADA sistemlərinin inteqrasiyası ilə proseslərin rəqəmsal idarə olunması. Bu texnologiyalar vasitəsilə enerji istehlakında 30–50% qənaət və avadanlıqların ömrünün uzadılmasını təmin edirik.",
  },
  {
    id: 8,
    title: "Enerji Effektivliyi və Konsultasiya",
    desc: "Mövcud sistemlərin auditi və enerji xərclərinin optimallaşdırılması üzrə peşəkar məsləhət xidməti. 'Yaşıl texnologiyalar' vasitəsilə həm büdcənizi, həm də ətraf mühiti qoruyuruq.",
  },
  {
    id: 9,
    title: "Peşəkar Qazanxana Həlləri",
    desc: "Sənaye tipli və fərdi qazanxana sistemlərinin, kollektor qovşaqlarının və istilik məntəqələrinin quraşdırılması. Tam avtomatlaşdırılmış iş rejimi ilə insan amilindən asılı olmayan idarəetmə.",
  },
  {
    id: 10,
    title: "Müasir Suvarma Sistemləri",
    desc: "Kənd təsərrüfatı, geniş park zonaları və landşaft sahələri üçün intellektual nasos suvarma infrastrukturunun yaradılması. Su resurslarından səmərəli istifadə və bol məhsuldarlıq üçün mühəndislik dəstəyi.",
  },
  {
    id: 11,
    title: "Hidrofor və Su Təzyiq Qurğuları",
    desc: "Kommersiya və yaşayış binaları üçün membranlı və membransız modern hidrofor sistemləri. Uzunömürlü, səssiz və stabil su təzyiqi təmin edən texnoloji avadanlıqlar.",
  },
  {
    id: 12,
    title: "Aqressiv Mühit və Dəniz Nasosları",
    desc: "Dəniz suyu, kimyəvi mühit və korroziyaya meyilli çirkab suları üçün paslanmaz polad korpuslu, ağır rejimli xüsusi nasos sistemləri. Ən çətin mühitlərdə dayanıqlı performans.",
  },
  {
    id: 13,
    title: "Orijinal Ehtiyat Hissələri",
    desc: "Dünyanın aparıcı brendlərinin nasos, mühərrik və armatur hissələrinin birbaşa təminatı. Yalnız sertifikatlı və orijinal komponentlərlə avadanlıqlarınızın ilkin keyfiyyətini bərpa edirik.",
  },
  {
    id: 14,
    title: "Strateji Texniki Konsultasiya",
    desc: "Layihə seçimi, texniki spesifikasiyaların hazırlanması, tender dəstəyi və sahə mühəndisliyi xidmətləri. Pulsuz ilkin qiymətləndirmə ilə düzgün investisiya qərarları verməyinizə kömək edirik.",
  },
];

const SectionServicesSlider = () => {
  const [selectedId, setSelectedId] = useState<number>(1);
  const activeService = services.find((s) => s.id === selectedId);


  const leftSide = services.slice(0, 7);
  const rightSide = services.slice(7, 14);

  const renderButton = (item: (typeof services)[0]) => (
    <button
     aria-label="Əvvəlki xidmətə keçmək üçün"
      key={item.id}
      onClick={() => setSelectedId(item.id)}
      className={`w-full text-left p-3 mb-2 rounded-lg transition-all duration-300 border border-white/5 
        ${selectedId === item.id ? "bg-[#CAFB42] text-black font-bold" : "text-white hover:bg-[#1c1c1f] hover:border-white/20"}`}
    >
      <div className="text-sm md:text-base">{item.title}</div>
    </button>
  );

  return (
    <section className="relative bg-[#141416] py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-10 overflow-hidden">
      <div className="absolute top-40 right-0 w-100 h-100 bg-[#CAFB42] opacity-[0.10] blur-2xl lg:blur-[120px] rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-center text-4xl font-bold mb-16">
          Bütün Xidmətlərimiz
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">{leftSide.map(renderButton)}</div>

          <div className="lg:col-span-2 bg-[#1c1c1f] p-8 rounded-2xl border border-white/10 flex flex-col justify-center min-h-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
                  {activeService?.title}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {activeService?.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-1">{rightSide.map(renderButton)}</div>
        </div>
      </div>
    </section>
  );
};

export default SectionServicesSlider;
