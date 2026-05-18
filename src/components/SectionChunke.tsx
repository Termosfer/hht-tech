import { motion, type Variants } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import img from "../assets/water-treatment-solutions-company-3-1024x585.jpg";

const SectionChunke = () => {
  const fadeInUp: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.1 },
    },
  };

  const revealFromRight: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      x: 100,
      clipPath: "inset(0% 0% 0% 100%)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
    },
  };

  const usageAreas = [
    "Zavod və fabriklər",
    "Otel və yaşayış kompleksləri",
    "Qazanxana sistemləri",
    "Qida və içki sənayesi",
    "Xəstəxanalar",
    "Kənd təsərrüfatı",
  ];

  const processSteps = [
    { id: 1, title: "Qum Filteri", desc: "Qum, palçıq, iri hissəciklər" },
    { id: 2, title: "Karbon Filteri", desc: "Xlor, qoxu, rəng" },
    { id: 3, title: "Softener", desc: "Su sərtliyinin azaldılması" },
    { id: 4, title: "Mikron Kartuş", desc: "Xırda hissəciklər" },
    { id: 5, title: "RO Membran", desc: "Duz, bakteriya, ağır metallar" },
    { id: 6, title: "UV/Ozon", desc: "Mikrobların məhv edilməsi" },
  ];

  return (
    <section className="relative bg-[#141416] py-20 lg:py-32 px-6 overflow-hidden border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#CAFB42]/10 blur-2xl lg:blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <span className="text-[#CAFB42] font-bold tracking-[0.3em] uppercase text-sm">
              RƏSMİ NÜMAYƏNDƏLİK
            </span>
            <h2 className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-black mt-4 mb-8">
              CHUNKE <span className="text-blue-500">HB</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Sənaye tipli su təmizləmə və **Reverse Osmosis (RO)** sistemləri
              istehsal edən Avropa markasının Azərbaycandakı rəsmi
              nümayəndəsiyik. Keyfiyyətli su təminatı istehsalatın və
              infrastrukturun uzunömürlülüyünün təməlidir.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {usageAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-400 group"
                >
                  <FiCheckCircle className="text-[#CAFB42] shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            variants={revealFromRight}
          >
            <div className="relative group overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
              <img
                src={img}
                alt="Chunke RO System"
                className="w-full h-auto object-cover grayscale-20 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-transparent transition-colors" />
            </div>
          </motion.div>
        </div>

        <div className="pt-16 border-t border-white/5">
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-16 text-center uppercase tracking-widest">
            Su Təmizləmə <span className="text-[#CAFB42]">Prosesi</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative mt-20">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-[#CAFB42]/20 to-transparent z-0"></div>

            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: index % 2 === 0 ? 0 : 40,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className={`relative z-10 flex flex-col items-center text-center group`}
              >
                <div className="w-20 h-20 rounded-full bg-[#141416] border-2 border-[#CAFB42]/30 flex items-center justify-center mb-6 group-hover:border-[#CAFB42] group-hover:bg-[#CAFB42] transition-all duration-500 shadow-xl group-hover:shadow-[#CAFB42]/20">
                  <span className="text-white group-hover:text-black text-2xl font-black">
                    {step.id}
                  </span>
                </div>

                <div className="bg-[#141416]/50 p-2 rounded-lg backdrop-blur-sm">
                  <h4 className="text-white font-bold text-lg mb-2 group-hover:text-[#CAFB42] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-gray-300 text-xs leading-relaxed max-w-37.5">
                    {step.desc}
                  </p>
                </div>

                {index !== processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 opacity-20">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#CAFB42"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionChunke;
