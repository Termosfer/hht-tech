import { motion, type Variants } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import img1 from "../assets/14...png";
import { Link } from "react-router";

const SectionExcellent = () => {
  
  const paperUnfoldVariants: Variants = {
    hidden: {
      opacity: 0,
      rotateY: -90, 
      transformOrigin: "left", 
      perspective: 1000,
    },
    visible: {
      opacity: 1,
      rotateY: 0, 
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="relative bg-[#141416] py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-10 overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-60 h-60 md:w-100 md:h-100 bg-[#CAFB42] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        <motion.div
          className="w-full md:w-full lg:w-[45%] h-full"
          style={{ perspective: "1500px" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={paperUnfoldVariants}
        >
          <img
            src={img1}
            alt="Engineering Expert"
            className="w-full h-auto lg:h-137.5 object-cover rounded-sm shadow-[20px_20px_60px_rgba(0,0,0,0.5)] border-l border-white/10"
          />
        </motion.div>

        <motion.div
          className="w-full lg:w-[55%] text-left flex flex-col justify-center items-start gap-2 text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textContainerVariants}
        >
          <motion.span
            variants={itemVariants}
            className="text-[#CAFB42] font-bold tracking-[0.2em] text-sm uppercase"
          >
            PEŞƏKAR MÜHƏNDİSLİK TƏCRÜBƏSİ
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-4xl  lg:text-4xl xl:text-5xl font-bold leading-[1.1]"
          >
            İxtisaslaşmış mütəxəssislərdən ibarət peşəkar komanda
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl"
          >
            Sənaye və kommersiya obyektlərinin mühəndislik sistemlərində
            maksimum səmərəliliyi təmin etmək üçün qabaqcıl texnologiyalar və
            illərin təcrübəsi ilə xidmətinizdəyik.
          </motion.p>

          <motion.ul variants={itemVariants} className="space-y-4 w-full">
            {[
              "Etibarlı və peşəkar mühəndislik xidmətləri",
              "Sənaye nasos sistemlərinin quraşdırılması və servisi",
              "Avtomatika və intellektual idarəetmə həlləri",
            ].map((text, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-gray-400 group text-sm sm:text-base"
              >
                <span className="w-2 h-2 rounded-full bg-[#CAFB42] shrink-0" />
                <span className="group-hover:text-white transition-all cursor-default">
                  {text}
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={itemVariants} className="mt-6">
            <Link to="/haqqimizda" className="group w-24 h-24 sm:w-30 sm:h-30 rounded-full border border-gray-700 hover:border-[#CAFB42] text-3xl sm:text-4xl lg:text-5xl flex items-center justify-center transition-all duration-500 cursor-pointer bg-transparent hover:bg-[#CAFB42]/5">
              <BsArrowUpRight className="text-[#CAFB42] transition-transform duration-500 group-hover:rotate-45" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionExcellent;
