import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tabData } from "../data/servicesData";

const SectionWhatWeDo = () => {
  const [activeTab, setActiveTab] = useState(tabData[0]);

  return (
    <section className="bg-[#141416] py-20 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* ÜST HİSSƏ: BAŞLIQ VƏ İZAH */}
        <div className="mb-16">
          <h2 className="text-white text-5xl md:text-7xl font-bold mb-8">What we do</h2>
          <p className="text-gray-400 text-base md:text-lg max-w-4xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices 
            gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
          </p>
        </div>

        {/* TAB MENYU (Navigation) */}
        <div className="flex gap-8 md:gap-16 border-b border-white/10 mb-12">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className="relative pb-4 text-xl md:text-2xl font-bold uppercase tracking-tight cursor-pointer transition-colors duration-300"
            >
              <span className={activeTab.id === tab.id ? "text-white" : "text-gray-500 hover:text-white"}>
                {tab.label}
              </span>
              
              {/* Aktiv tabın altındakı yaşıl xətt animasiyası */}
              {activeTab.id === tab.id && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 w-full h-[4px] bg-[#CAFB42]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* MƏZMUN SAHƏSİ (Content Area) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16"
          >
            {/* SOL: ŞƏKİL */}
            <div className="w-full lg:w-1/3">
              <div className="h-[250px] md:h-[300px] w-full overflow-hidden rounded-sm">
                <img 
                  src={activeTab.image} 
                  alt={activeTab.title} 
                  className="w-full h-full object-cover grayscale-20"
                />
              </div>
            </div>

            {/* SAĞ: MƏTN */}
            <div className="w-full lg:w-2/3">
              <h3 className="text-white text-3xl md:text-4xl font-bold mb-6 uppercase">
                {activeTab.title}
              </h3>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                {activeTab.text}
              </p>
              
              {/* Alt tərəfdə təkrar edilən kiçik izah (Şəkildəki kimi) */}
              <p className="text-gray-500 mt-6 text-sm md:text-base leading-relaxed italic">
                Hydro Heat Tech olaraq mühəndislik həllərimizlə müəssisələrin 
                təhlükəsizliyini və effektivliyini təmin edirik.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default SectionWhatWeDo;