import { motion, type Variants } from "framer-motion";
import img1 from "../assets/Vertical-Multistage-Centrifugal-Pumps.webp";
import img2 from "../assets/3.jpg";
import img3 from "../assets/rephile-water-8mpHMUsrYDo-unsplash.jpg";

const SectionProjects = () => {
  // SOL TƏRƏF ÜÇÜN: Soldan sağa açılma animasiyası
  const revealFromLeft: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      x: -100, // Soldan gəlir
      clipPath: "inset(0% 100% 0% 0%)", // Maska solda bağlanır
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
    },
  };

  // SAĞ TƏRƏF ÜÇÜN: Sağdan sola açılma animasiyası (Olduğu kimi qaldı)
  const revealFromRight: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      x: 100,
      clipPath: "inset(0% 0% 0% 100%)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
    },
  };

  // YAZILAR VƏ DÜYMƏ ÜÇÜN: Aşağıdan yuxarı animasiya
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative bg-[#141416] py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-10 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-16">
        <div className="flex flex-col gap-10 w-full lg:w-[60%]">
          <div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="font-bold text-[#CAFB42] text-sm "
            >
              SON LAYİHƏLƏRİMİZ
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-white text-3xl sm:text-4xl md:text-4xl  lg:text-4xl xl:text-5xl font-bold mb-6"
            >
              Uğurla tamamladığımız <br /> mühəndislik işləri
            </motion.p>

            <motion.div
              className="relative w-full group overflow-hidden rounded-xl"
              initial="hidden"
              whileInView="visible"
              variants={revealFromLeft}
            >
              <img
                src={img1}
                alt="Project"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex bg-[#1a1a1c]/90 backdrop-blur-md p-4 sm:p-6 w-[90%] sm:w-80 md:w-96 justify-between items-center rounded-2xl border border-white/10 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div>
                  <p className="text-white text-xl font-semibold">
                    Sənaye Nasos Stansiyası
                  </p>
                  <p className="text-gray-300 font-semibold">
                    Su Təchizatı və Mexanika
                  </p>
                </div>
                <div className="w-10 h-10 bg-[#cafb42]"></div>
              </div>
            </motion.div>
          </div>

          {/* <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="cursor-pointer bg-[#cafb42] text-sm text-[#141416] font-bold w-20 h-20 p-2 rounded-full hover:bg-white transition-colors duration-300"
          >
            BÜTÜN İŞLƏR
          </motion.button> */}
        </div>

        <div className="flex flex-col gap-10 w-full lg:w-[40%] ">
          <motion.div
            className="w-full group relative overflow-hidden rounded-xl"
            initial="hidden"
            whileInView="visible"
            variants={revealFromRight}
          >
            <img
              src={img2}
              alt="Project"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex bg-[#1a1a1c]/90 backdrop-blur-md p-4 sm:p-6 w-[90%] sm:w-80 md:w-96 justify-between items-center rounded-2xl border border-white/10 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div>
                <p className="text-white text-xl font-semibold">
                  Yanğın Təhlükəsizliyi
                </p>
                <p className="text-gray-300 font-semibold">NFPA Standartları</p>
              </div>
              <div className="w-10 h-10 bg-[#cafb42]"></div>
            </div>
          </motion.div>

          <motion.div
            className="w-full group relative overflow-hidden rounded-xl"
            initial="hidden"
            whileInView="visible"
            variants={revealFromRight}
          >
            <img
              src={img3}
              alt="Project"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex bg-[#1a1a1c]/90 backdrop-blur-md p-4 sm:p-6 w-[90%] sm:w-80 md:w-96 justify-between items-center rounded-2xl border border-white/10 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div>
                <p className="text-white text-xl font-semibold">
                  Tərs Osmos (RO)
                </p>
                <p className="text-gray-300 font-semibold">
                  Sənaye Su Təmizləmə
                </p>
              </div>
              <div className="w-10 h-10 bg-[#cafb42]"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionProjects;
