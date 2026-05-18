import { motion } from "framer-motion";
import SkillBar from "./SkillBar";

const SectionTrusted = () => {
  return (
    <section className="relative bg-[#141416] py-20 lg:py-32 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-125 h-125 bg-[#CAFB42] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-between gap-16">
        <div className="w-full lg:w-1/2">
          <motion.h4
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#CAFB42] font-bold text-sm tracking-[0.2em] uppercase mb-6"
          >
            Etibarlı Təcrübə
          </motion.h4>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white text-3xl sm:text-4xl md:text-4xl  lg:text-4xl xl:text-5xl font-bold leading-[1.1] mb-10"
          >
            Biz peşəkar və <br />
            <span className="text-white ">
              yüksək ixtisaslı <br />
              komandayıq
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl"
          >
            Sənaye və kommersiya obyektlərində mühəndislik sistemlərinin
            kəsintisiz işləməsini təmin edirik. Müştərilərimizə ən müasir
            texnologiyalar və illərin təcrübəsi ilə effektiv, operativ və
            büdcəyə qənaət edən kompleks mühəndislik həlləri təqdim edirik.
          </motion.p>
        </div>

        <div className="w-full lg:w-[40%] pt-10">
          <SkillBar title="Peşəkarlıq dərəcəsi" percentage={87} />
          <SkillBar title="Premium Brendlər" percentage={90} />
          <SkillBar title="Müasir Texnologiyalar" percentage={95} />
        </div>
      </div>
    </section>
  );
};

export default SectionTrusted;
