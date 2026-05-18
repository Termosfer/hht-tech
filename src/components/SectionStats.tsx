import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { MdArrowForwardIos } from "react-icons/md";
import img2 from "../assets/14...png";

const RandomCounter = ({
  target,
  duration = 2000,
}: {
  target: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const finalValue = parseInt(target.replace(/\D/g, ""));
  const suffix = target.replace(/[0-9]/g, "");

  useEffect(() => {
    const startTime = Date.now();
    const frameRate = 120;
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < duration) {
        setCount(Math.floor(Math.random() * (finalValue * 1.5)));
      } else {
        setCount(finalValue);
        clearInterval(interval);
      }
    }, frameRate);
    return () => clearInterval(interval);
  }, [finalValue, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const SectionStats = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const leftSideVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const toggleTab = (index: number) => {
    setActiveTab(activeTab === index ? null : index);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const dropdownData = [
    {
      title: "Geniş xidmət spektri",
      content:
        "Nasos sistemlərindən yanğın təhlükəsizliyinə qədər bütün mühəndislik ehtiyaclarını tək mərkəzdən qarşılayırıq.",
    },
    {
      title: "Peşəkar təcrübə",
      content:
        "Sənaye və kommersiya obyektlərində 3 ildən artıq ixtisaslaşmış mühəndislik təcrübəsi ilə xidmətinizdəyik.",
    },
    {
      title: "Razı qalan müştərilər",
      content:
        "Müştəri məmnuniyyəti bizim ali məqsədimizdir. Hər bir layihəyə fərdi və peşəkar yanaşma təmin edirik.",
    },
  ];

  return (
    <section className="relative bg-[#141416] py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-10 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16 pb-12">
        <motion.div
          className="w-full lg:w-[60%] flex flex-col gap-2 text-center lg:text-left items-center lg:items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={leftSideVariants}
        >
          <motion.h3
            variants={leftSideVariants}
            className="text-[#CAFB42] text-sm font-bold tracking-widest uppercase"
          >
            KOMPLEKS MÜHƏNDİSLİK XİDMƏTLƏRİ
          </motion.h3>
          <motion.p
            variants={leftSideVariants}
            className="text-white text-3xl sm:text-4xl md:text-4xl  lg:text-4xl xl:text-5xl font-bold leading-[1.1]"
          >
            Biz sizə professional həllər təqdim edirik.
          </motion.p>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-350 mx-auto">
        <div
          className="flex flex-col lg:flex-row items-center justify-center 
                        lg:-space-x-20 xl:-space-x-32 space-y-10 lg:space-y-0"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative bg-[#141416] rounded-full border border-[#CAFB42]/30 flex flex-col justify-center z-10 shrink-0
                       w-80 h-80 px-8
                       md:w-105 md:h-105 md:px-12
                       lg:w-95 lg:h-95 lg:pl-8 lg:pr-20
                       xl:w-130 xl:h-130 xl:pl-16 xl:pr-36"
          >
            <div className="flex flex-col gap-2 xl:gap-3">
              {dropdownData.map((item, index) => (
                <div key={index} className="border-b border-white/10 pb-2">
                  <div
                    onClick={() => toggleTab(index)}
                    className="flex items-center justify-between group cursor-pointer py-1.5 md:py-2"
                  >
                    <span className="text-[10px] md:text-xs xl:text-sm font-bold text-white transition-colors group-hover:text-[#CAFB42]">
                      {item.title}
                    </span>
                    <motion.div
                      animate={{ rotate: activeTab === index ? 90 : 0 }}
                    >
                      <MdArrowForwardIos className="text-[#CAFB42] text-[10px]" />
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {activeTab === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-400 text-[9px] md:text-[10px] xl:text-xs py-1 xl:py-2 leading-relaxed">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden border-[#141416] z-30 shadow-[0_0_60px_rgba(0,0,0,0.9)] rounded-full shrink-0
                       w-85 h-85 border-8
                       md:w-110 md:h-110
                       lg:w-95 lg:h-95
                       xl:w-130 xl:h-130 "
          >
            <img
              src={img2}
              alt="Handyman"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative bg-[#141416] rounded-full border border-white/10 flex flex-col justify-center z-10 shrink-0
                       w-80 h-80 px-8
                       md:w-105 md:h-105 md:px-12
                       lg:w-95 lg:h-95 lg:pl-20 lg:pr-8
                       xl:w-125 xl:h-125 xl:pl-36 xl:pr-16"
          >
            <div className="flex flex-col items-center lg:items-start gap-4 xl:gap-8">
              {[
                { label: "Tamamlanmış Layihə", target: "148+" },
                { label: "Premium Brend", target: "12+" },
                { label: "İllik Təcrübə", target: "3+" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3 xl:gap-5">
                  <h4 className="text-[#CAFB42] font-bold italic text-3xl md:text-4xl xl:text-6xl min-w-17.5 xl:min-w-30">
                    <RandomCounter target={stat.target} />
                  </h4>
                  <p className="text-white font-medium leading-tight text-[9px] md:text-[10px] xl:text-sm uppercase tracking-tighter">
                    {stat.label.split(" ")[0]} <br />
                    {stat.label.split(" ").slice(1).join(" ")}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionStats;
