import { motion } from "framer-motion";
import { FiBriefcase, FiHome, FiActivity, FiShield } from "react-icons/fi";

const SectionClients = () => {
  const clientCategories = [
    {
      title: "Dövlət Qurumları",
      icon: <FiShield className="text-[#CAFB42]" />,
      list: [
        "Nazirlər Kabinetinin Aparatı",
        "Azərbaycan Kosmik Agentliyi (Azərkosmos)",
        "Azərbaycan Dəmir Yolları QSC",
        "Dövlət Gömrük Komitəsi (AzərTerminalKompleks)",
        "Dövlət Dəniz və Liman Agentliyi",
        "Bakı, Lənkəran və Xəzər Gənclər Evləri",
        "Şabran Rayon Mərkəzi Xəstəxanası",
        "Naxçıvan Beynəlxalq Hava Limanı",
      ],
    },
    {
      title: "Holdinqlər və Sənaye",
      icon: <FiBriefcase className="text-[#CAFB42]" />,
      list: [
        "Azərsun Holdinq MMC",
        "PAŞA Property Management",
        "Baku Steel Company QSC",
        "Grand Motors Company QSC",
        "Alutech Baku MMC",
        "Args Holdinq MMC",
        "Hidrotermik MMC",
      ],
    },
    {
      title: "Otellər və Ticarət Mərkəzləri",
      icon: <FiHome className="text-[#CAFB42]" />,
      list: [
        "Excelsior Hotel MMC",
        "Baku Boulevard Hotel",
        "Baku Winter Park Hotel",
        "Nobel Plaza MMC",
        "Bakıkhanov Mall",
      ],
    },
    {
      title: "İdman, Tikinti və Mühəndislik",
      icon: <FiActivity className="text-[#CAFB42]" />,
      list: [
        "Azərbaycan Boks Federasiyası",
        "Neftçi PFK MMC",
        "Qəbələ İdman Klubu",
        "Tekfen İnşaat (Nümayəndəlik)",
        "DKT İnşaat (Filial)",
        "GL Mühəndislik MMC",
        "AzTechno Engineering MMC",
        "Hightechnic Systems MMC",
      ],
    },
  ];

  return (
    <section className="relative bg-[#141416] py-20 lg:py-32 px-6 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-[#CAFB42]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#CAFB42] font-bold tracking-[0.3em] uppercase text-sm"
          >
            REFERANSLARIMIZ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-3xl sm:text-4xl md:text-4xl  lg:text-4xl xl:text-5xl font-black mt-4 mb-6 uppercase tracking-tighter"
          >
            Etibarlı Tərəfdaşlarımız
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto text-lg"
          >
            2023–2026-cı illər ərzində infrastruktur layihələrini bizə həvalə
            edən dövlət qurumları və özəl sənaye nəhəngləri.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#141416] p-8 rounded-2xl border border-white/5 hover:border-[#CAFB42]/30 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#0d0d0f] rounded-lg border border-white/10 group-hover:bg-[#CAFB42] group-hover:text-black transition-all">
                  {cat.icon}
                </div>
                <h3 className="text-white text-xl font-bold uppercase tracking-tight">
                  {cat.title}
                </h3>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {cat.list.map((client, i) => (
                  <li
                    key={i}
                    className="text-gray-500 text-sm flex items-start gap-2 hover:text-white transition-colors cursor-default"
                  >
                    <span className="text-[#CAFB42] mt-1.5 w-1.5 h-1.5 rounded-full bg-[#CAFB42] shrink-0" />
                    {client}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-10 md:gap-20 text-center">
          <div>
            <p className="text-[#CAFB42] text-3xl font-black italic">148+</p>
            <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
              Ümumi Müştəri
            </p>
          </div>
          <div>
            <p className="text-white text-3xl font-black italic text-opacity-80">
              12+
            </p>
            <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
              Dövlət Qurumu
            </p>
          </div>
          <div>
            <p className="text-white text-3xl font-black italic text-opacity-80">
              80+
            </p>
            <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
              Kommersiya Obyekti
            </p>
          </div>
          <div>
            <p className="text-white text-3xl font-black italic text-opacity-80">
              30+
            </p>
            <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
              Sənaye Müəssisəsi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionClients;
