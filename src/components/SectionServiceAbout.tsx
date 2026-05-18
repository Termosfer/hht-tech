import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import workerImg from "../assets/group-engineers-are-having-planning-meeting_35150-3466.avif";

const SectionServiceAbout = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const accordionData = [
    {
      title: "3+ ildən çox peşəkar təcrübə",
      content:
        "2015-ci ildən bəri sənaye və kommersiya obyektləri üçün nasos, istilik, su təchizatı və yanğın sistemləri sahəsində yüksək keyfiyyətli mühəndislik xidmətləri göstəririk.",
    },
    {
      title: "Maksimum müştəri məmnuniyyəti",
      content:
        "Əsas devizimiz müştəri yönümlülükdür. Layihələndirmədən montaj və texniki xidmətə qədər bütün prosesi öz üzərimizə götürərək, sizi təkrar xərclərdən xilas edir və etibarlı həllər təqdim edirik.",
    },
    {
      title: "24/7 texniki dəstək",
      content:
        "Biz hər zaman əlçatanıq. Texniki problemləriniz və sistemlərinizin fasiləsiz işləməsi üçün peşəkar dəstək komandamız günün istənilən vaxtı xidmətinizdədir.",
    },
  ];

  return (
    <section className="relative bg-[#141416] py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-10 overflow-hidden">
      <div className="absolute top-1/4 left-[10%] w-96 h-96 bg-[#CAFB42] opacity-5 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full lg:w-1/2">
          <div className="mb-10">
            <h3 className="text-[#CAFB42] text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Biz kimik?
            </h3>
            <h2 className="text-white text-3xl sm:text-4xl md:text-4xl  lg:text-4xl xl:text-5xlfont-bold leading-[1.1]">
              Kompleks mühəndislik həlləri
            </h2>
          </div>

          <div className="flex flex-col border-t border-white/10">
            {accordionData.map((item, index) => (
              <div key={index} className="border-b border-white/10">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full py-6 flex items-center justify-between text-left group transition-all cursor-pointer"
                >
                  <span
                    className={`text-lg font-bold transition-colors duration-300 ${openIndex === index ? "text-[#CAFB42]" : "text-white hover:text-[#CAFB42]"}`}
                  >
                    {item.title}
                  </span>

                  <span className="text-[#CAFB42] text-2xl font-light">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 text-base  leading-relaxed pb-8 pr-4">
                        {item.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 h-100 md:h-150 rounded-sm overflow-hidden shadow-2xl"
        >
          <img
            src={workerImg}
            alt="Handyman Professional"
            className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-700 hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionServiceAbout;
