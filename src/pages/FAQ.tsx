import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "../components/PageHeader";
import SectionExperience from "../components/SectionExperience";

const faqData = [
  {
    question: "Hydro Heat Tech tam olaraq hansı xidmətləri göstərir?",
    answer:
      "Biz sənaye və kommersiya obyektləri üçün nasos sistemləri, istilik təchizatı, su təminatı və yanğın söndürmə sistemlərinin layihələndirilməsi, satışı, quraşdırılması və texniki xidmətini həyata keçiririk. Prosesi 'A-dan Z-yə' tam mühəndislik həlli kimi təhvil veririk.",
  },
  {
    question: "Hansı dünya brendləri ilə əməkdaşlıq edirsiniz?",
    answer:
      "HHT olaraq Ebara, Grundfos, Wilo, Calpeda, Lowara və Zenit kimi qlobal liderlərin rəsmi distribütoru və servis tərəfdaşıyıq. Həmçinin sənaye su təmizləmə sistemləri üzrə CHUNKE HB markasının Azərbaycandakı rəsmi nümayəndəsiyik.",
  },
  {
    question: "Avadanlıqlara zəmanət və texniki servis verilirmi?",
    answer:
      "Bəli, təqdim etdiyimiz bütün məhsullara rəsmi istehsalçı zəmanəti verilir. Bundan əlavə, peşəkar mühəndis heyətimiz sistemlərin kəsintisiz işləməsini təmin etmək üçün 7/24 operativ texniki servis və profilaktik baxış xidməti göstərir.",
  },
  {
    question:
      "Enerji səmərəliliyi sahəsində hansı yenilikləri təklif edirsiniz?",
    answer:
      "İnvertor (VFD) və PLC idarəetmə sistemlərinin inteqrasiyası vasitəsilə biz mühərriklərin iş rejimini optimallaşdırırıq. Bu texnologiya sistemin yükünə uyğun olaraq enerji sərfiyyatını tənzimləyir və elektrik enerjisində 30-50% arası qənaət təmin edir.",
  },
  {
    question: "CHUNKE HB su təmizləmə sistemləri hansı üstünlüklərə malikdir?",
    answer:
      "CHUNKE HB sistemləri qum filtrindən başlayaraq UV/Ozon dezinfeksiyasına qədər 6 mərhələli təmizləmə həyata keçirir. Bu sistemlər dəniz suyunun şirinləşdirilməsi, zavodlar üçün texniki su və xəstəxanalar üçün ultra-təmiz su istehsalında ən yüksək standartlara cavab verir.",
  },
  {
    question: "Layihə üçün ilkin qiymətləndirmə necə aparılır?",
    answer:
      "Müştərilərimizə ödənişsiz ilkin texniki konsultasiya və spesifikasiyaların hazırlanması xidmətini təklif edirik. Sahə mühəndisimiz obyekti yerində müayinə etdikdən sonra ən effektiv və büdcəyə qənaət edən həll yolunu sizə təqdim edir.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-[#141416] min-h-screen">
      <PageHeader title="Sual-Cavab" currentPage="Sual-Cavab" />

      <section className="relative py-16 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#CAFB42] font-bold tracking-[0.3em] uppercase text-sm mb-4"
            >
              Kömək Lazımdır?
            </motion.h4>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-4xl  lg:text-4xl xl:text-5xl font-bold leading-tight text-white mb-6"
            >
              Tez-tez verilən suallar
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-base max-w-2xl leading-relaxed"
            >
              Mühəndislik sistemləri, brendlərimiz və texniki dəstək
              xidmətlərimiz barədə ən çox soruşulan məlumatları burada topladıq.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="w-full border border-gray-800 transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`w-full p-6 md:p-8 flex items-center justify-between text-left cursor-pointer transition-all duration-500 group
                      ${isOpen ? "bg-[#CAFB42]" : "bg-transparent hover:bg-[#CAFB42]"}
                    `}
                  >
                    <span
                      className={`text-base md:text-lg font-bold transition-colors duration-300 uppercase tracking-tight
                      ${isOpen ? "text-black" : "text-white group-hover:text-black"}
                    `}
                    >
                      {item.question}
                    </span>
                    <span
                      className={` text-sm md:text-base font-bold ml-4 transition-colors duration-300
                      ${isOpen ? "text-black" : "text-[#CAFB42] group-hover:text-black"}
                    `}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="bg-[#0d0d0f]" // Cavab hissəsi tünd qara
                      >
                        <div className="px-6 md:px-8 py-8 text-sm md:text-base leading-relaxed text-gray-400">
                          <div className="w-full h-px bg-white/5 mb-6" />
                          {item.answer}
                          <div className="mt-6 flex items-center gap-2 text-[#CAFB42] text-xs font-bold uppercase tracking-widest">
                            <div className="w-2 h-2 rounded-full bg-[#CAFB42]" />
                            HHT Mühəndislik Həlləri
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionExperience />
    </div>
  );
};

export default FAQ;
