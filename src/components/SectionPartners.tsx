import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiX } from "react-icons/fi";
import img1 from "../assets/brendlər/ebara.png"
import img2 from "../assets/brendlər/grundfos.png"
import img3 from "../assets/brendlər/wilo.png"
import img4 from "../assets/brendlər/calpeda1.png"
import img5 from "../assets/brendlər/lowara1.png"
import img6 from "../assets/brendlər/pedrollo1.png"
import img7 from "../assets/brendlər/zenit1.png"
import img8 from "../assets/brendlər/flygt1.png"
import img9 from "../assets/brendlər/sumak1.png"
import img10 from "../assets/brendlər/standart.png"
import img11 from "../assets/brendlər/sealand1.png"
import img12 from "../assets/brendlər/sep1.png"


const brandsData = [
  {
    name: "Ebara",
    logo: img1,
    origin: "Yaponiya texnologiyası",
    desc: "Paslanmaz polad sənaye nasosları üzrə dünya lideri.",
  },
  {
    name: "Grundfos",
    logo: img2,
    origin: "Danimarka brendi",
    desc: "Dünyanın ən böyük nasos istehsalçısı, ağıllı su həlləri.",
  },
  {
    name: "Wilo",
    logo: img3,
    origin: "Almaniya mühəndisliyi",
    desc: "Su idarəetməsi və sənaye üçün yüksək səmərəli sistemlər.",
  },
  {
    name: "Calpeda",
    logo: img4,
    origin: "İtaliya istehsalı",
    desc: "Kənd təsərrüfatı və sənaye üçün geniş çeşidli nasoslar.",
  },
  {
    name: "Lowara",
    logo: img5,
    origin: "İtaliya/ABŞ",
    desc: "Yaşayış və kommersiya binaları üçün enerji qənaətli nasoslar.",
  },
  {
    name: "Pedrollo",
    logo: img6,
    origin: "İtaliya brendi",
    desc: "Suvarma və məişət su təchizatı üçün etibarlı həllər.",
  },
  {
    name: "Zenit",
    logo: img7,
    origin: "İtaliya ixtisası",
    desc: "Çirkab suların təmizlənməsi üçün peşəkar dalğıc nasoslar.",
  },
  {
    name: "Flygt",
    logo: img8,
    origin: "İsveç brendi",
    desc: "Ağır sənaye və kanalizasiya üçün dalğıc nasos sistemləri.",
  },
  {
    name: "Sumak",
    logo: img9,
    origin: "Türkiyə istehsalı",
    desc: "Suvarma və yanğın sistemləri üçün keyfiyyətli nasoslar.",
  },
  {
    name: "Standart",
    logo: img10,
    origin: "Türkiyə brendi",
    desc: "Ağır sənaye, enerji və yanğın nasosları sahəsində mütəxəssis.",
  },
  {
    name: "SeaLand",
    logo: img11,
    origin: "İtaliya mənşəli",
    desc: "Məişət və kənd təsərrüfatı üçün effektiv su nasosları.",
  },
  {
    name: "SEP",
    logo: img12,
    origin: "Türkiyə brendi",
    desc: "İstilik dövriyyəsi və mərkəzi su təchizatı sistemləri.",
  },
];
const SectionPartners = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const getBorderClass = (index: number) => {
    let classes = "border-gray-800 ";
    
    if ((index + 1) % 4 !== 0) classes += "border-r ";
   
    if (index < 12) classes += "border-b ";
    return classes;
  };

  return (
    <div className="relative bg-[#141416] py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-10 overflow-hidden">
       <div className="absolute bottom-1/2 left-0  w-50 h-50 bg-[#CAFB42]/20 blur-2xl lg:blur-[120px] rounded-full pointer-events-none"></div>
       <div className="absolute top-1/2 right-0  w-50 h-50 bg-[#CAFB42]/20 blur-2xl lg:blur-[120px] rounded-full pointer-events-none"></div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          
          <div
            className={`flex items-center justify-start p-10 min-h-40 ${getBorderClass(0)}`}
          >
            <h2 className="text-white  md:text-xl font-bold leading-tight uppercase">
              Dünyanın aparıcı <span className="text-[#CAFB42]">brendləri</span>{" "}
              ilə əməkdaşlıq
            </h2>
          </div>

          
          {brandsData.map((brand, index) => (
            <motion.div
              key={index}
              className={`flex items-center justify-center p-10 min-h-40 group transition-all duration-500 hover:bg-[#1a1a1c] ${getBorderClass(index + 1)}`}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                
                className="max-h-12 w-auto object-contain filter  brightness-100 opacity-100  group-hover:brightness-100  transition-all duration-500 transform group-hover:scale-110"
              />
            </motion.div>
          ))}

          
          <div
            onClick={() => setIsModalOpen(true)}
            className={`flex items-center justify-center p-10 min-h-40 cursor-pointer group hover:bg-[#CAFB42] transition-all duration-500 ${getBorderClass(13)}`}
          >
            <div className="flex items-center gap-3 text-white group-hover:text-black font-bold text-xs tracking-[0.2em]">
              BRENDLƏRƏ BAXIN <FiArrowRight className="text-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* BREND DETALLARI MODAL (Pop-up) */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-[#1a1a1c] w-full max-w-5xl max-h-[80vh] overflow-y-auto rounded-2xl border border-gray-800 p-8 md:p-12 relative"
            >
              <button
               aria-label="modalu baglamaq uchun"
                onClick={() => setIsModalOpen(false)}
                className="cursor-pointer absolute top-6 right-6 text-white text-3xl hover:text-[#CAFB42]"
              >
                <FiX />
              </button>

              <h3 className="text-[#CAFB42] text-3xl font-bold mb-10 uppercase tracking-tighter">
                Brendlərimiz və İxtisaslaşma
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {brandsData.map((b, i) => (
                  <div
                    key={i}
                    className="border-l-2 border-[#CAFB42] pl-6 py-2"
                  >
                    <h4 className="text-white text-xl font-bold">{b.name}</h4>
                    <p className="text-[#CAFB42] text-xs font-semibold mb-2">
                      {b.origin}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-black/50 rounded-xl border border-white/5">
                <h4 className="text-white text-xl font-bold mb-6 italic">
                  Niyə Bu Brendləri Seçirik?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                  <div className="flex gap-3 text-gray-300">
                    {" "}
                    <span className="text-[#CAFB42]">●</span> Beynəlxalq
                    Sertifikatlaşdırma (ISO, CE, NFPA)
                  </div>
                  <div className="flex gap-3 text-gray-300">
                    {" "}
                    <span className="text-[#CAFB42]">●</span> Maksimum Enerji
                    Səmərəliliyi
                  </div>
                  <div className="flex gap-3 text-gray-300">
                    {" "}
                    <span className="text-[#CAFB42]">●</span> Korroziyaya
                    Davamlılıq və Uzunömürlülük
                  </div>
                  <div className="flex gap-3 text-gray-300">
                    {" "}
                    <span className="text-[#CAFB42]">●</span> Rəsmi Zəmanət və
                    7/24 Servis Dəstəyi
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionPartners;
