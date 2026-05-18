import { motion, type Variants } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import toolsImg from "../../public/About1_img1.jpg";

const SectionVision = () => {
  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const textContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative bg-[#141416] py-16 lg:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          className="relative w-full lg:w-1/2 h-100 md:h-137.5 lg:h-150"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
        >
          <div className="w-full h-full overflow-hidden rounded-sm">
            <img
              src={toolsImg}
              alt="HHT Mühəndislik"
              className="w-full h-full object-cover grayscale-30 hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <div className="absolute top-6 right-4 sm:right-6 md:right-0 lg:-right-20 xl:-right-32 z-20 max-w-65 sm:max-w-sm md:max-w-md pointer-events-none text-right lg:text-left">
            <span className="text-[#CAFB42] font-bold text-sm  tracking-[0.3em] uppercase block mb-2 md:mb-4 drop-shadow-md">
              MİSSİYAMIZ
            </span>
            <h2 className="text-white text-3xl sm:text-4xl md:text-4xl  lg:text-4xl xl:text-5xl font-bold leading-tight drop-shadow-lg">
              Maksimum müştəri məmnuniyyəti.
            </h2>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:bottom-10 lg:left-10 lg:translate-x-0 z-20">
            <div className="group w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/20 flex items-center justify-center cursor-pointer bg-black/20 backdrop-blur-sm transition-all duration-300 hover:border-[#CAFB42]">
              <BsArrowUpRight className="text-[#CAFB42] text-3xl md:text-4xl transition-transform duration-500 group-hover:rotate-45" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 lg:pl-10 mt-10 lg:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textContainer}
        >
          <motion.div
            variants={itemVariants}
            className="w-full h-px bg-white/10 mb-12"
          />

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-base md:text-lg leading-relaxed mb-6"
          >
            <strong className="text-white">Hydro Heat Tech (HHT)</strong> —
            Azərbaycan Respublikasında sənaye və kommersiya obyektləri üçün
            nasos, istilik, su təchizatı və yanğın sistemləri sahəsində kompleks
            mühəndislik xidmətləri göstərən ixtisaslaşmış şirkətdir. Satışdan
            tutmuş layihələndirməyə, montajdan texniki xidmətə qədər bütün
            prosesləri öz üzərimizə götürürük.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-base md:text-lg leading-relaxed"
          >
            Müştərilərimizə enerji qənaətcil, etibarlı və müasir mühəndislik
            sistemləri təqdim edərək sahədəki boşluqları doldurmaq və
            müştərilərimizi təkrar xərclərdən xilas etmək bizim əsas
            fərqimizdir. Bizim geniş əməkdaşlıq prinsipimizə əsasən, hər bir
            layihəyə fərdi texniki həll və xidmət göstəririk.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionVision;
