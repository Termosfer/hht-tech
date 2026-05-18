import { motion, type Variants } from "framer-motion";
import SectionExcellent from "../components/SectionExcellent ";
import SectionServices from "../components/SectionServices";
import SectionStats from "../components/SectionStats";
import SectionProjects from "../components/SectionProjects";
import SectionPartners from "../components/SectionPartners";
import SectionExperience from "../components/SectionExperience";
import SectionReviews from "../components/SectionReviews";
import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.webp";
import { Link } from "react-router";
import SectionChunke from "../components/SectionChunke";
import SectionClients from "../components/SectionClients";
const Home = () => {
 const rhombClip = { clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" };

  const textFadeIn: Variants = {
    hidden: { opacity: 0, y: 20 }, 
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: delay, ease: "easeOut" },
    }),
  };

  const anim = {
    top: { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } },
    bottom: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
  };

  return (
    <div className="overflow-hidden">
      <div className="relative min-h-screen w-full bg-[url('/section1-bg.jpg')] bg-cover bg-center overflow-hidden flex items-center">
        <motion.div
          animate={{
            x: [0, 15, -10, 0],
            y: [0, -20, 10, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[url('/round-shape-bg.png')] bg-no-repeat bg-center opacity-20 lg:opacity-40 z-0 transform-gpu will-change-transform"
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full w-full px-6 md:px-12 lg:px-16 xl:px-20 pt-20 lg:pt-30">
          <div className="flex flex-col items-center lg:items-start justify-center gap-4 w-full lg:w-[65%] xl:w-[55%] text-center lg:text-left">
            <motion.h1
              variants={textFadeIn}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="text-white text-4xl sm:text-6xl  lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold uppercase tracking-tighter leading-tight"
            >
               Sistemlərinizin
            </motion.h1>

            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 xl:gap-8 font-bold text-white mt-2 w-full justify-center lg:justify-start">
              <motion.span
                variants={textFadeIn}
                initial="hidden"
                animate="visible"
                custom={0.4}
                className="text-xs sm:text-sm md:text-base lg:text-xs xl:text-base text-center lg:text-right max-w-60 font-normal opacity-70 leading-tight order-2 lg:order-1"
              >
                 Sənaye və kommersiya müəssisələri üçün nasos, istilik və yanğın sistemləri üzrə ixtisaslaşmış mühəndislik xidmətləri.
              </motion.span>

              <motion.h2
                variants={textFadeIn}
                initial="hidden"
                animate="visible"
                custom={0.6}
                className="text-5xl sm:text-7xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold uppercase italic text-[#CAFB42] tracking-tighter order-1 lg:order-2 leading-none"
              >
                 Texnoloji
              </motion.h2>
            </div>

            <motion.p
              variants={textFadeIn}
              initial="hidden"
              animate="visible"
              custom={0.8}
              className="text-white text-4xl sm:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold uppercase tracking-tighter"
            >
               Keyfiyyətini artirin
            </motion.p>

            <motion.div
              variants={textFadeIn}
              initial="hidden"
              animate="visible"
              custom={1.0}
              className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto"
            >
              <Link to="/xidmətlərimiz" className="bg-[#CAFB42] border-2 border-[#CAFB42] hover:bg-white hover:border-white text-black font-black py-3 xl:py-4 px-8 xl:px-10 rounded-full transition duration-500 uppercase text-xs tracking-widest w-full sm:w-auto cursor-pointer">
               Xidmətlərimiz
              </Link>
              <Link to="/əlaqə" className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-black py-3 xl:py-4 px-8 xl:px-10 rounded-full transition duration-500 uppercase text-xs tracking-widest w-full sm:w-auto cursor-pointer">
                 Bizimlə Əlaqə
              </Link>
            </motion.div>
          </div>

          <div className="hidden lg:flex w-[35%] xl:w-[45%] justify-end items-center origin-right">
            <div className="relative w-75 h-75 xl:w-100 xl:h-100 2xl:w-112.5 2xl:h-112.5">
              <motion.div
               initial={anim.top.initial}
                animate={anim.top.animate}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 xl:w-40 xl:h-40 2xl:w-48 2xl:h-48 bg-zinc-800 border border-[#CAFB42]/40 overflow-hidden shadow-2xl  will-change-transform"
               style={{ ...rhombClip, translateZ: 0 }}
              >
                <img
                  src={img1}
                  className="w-full h-full object-contain scale-125"
                  alt="1"
                />
              </motion.div>

              <motion.div
                initial={anim.left.initial}
                animate={anim.left.animate}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute top-1/4 left-0 w-32 h-32 xl:w-40 xl:h-40 2xl:w-48 2xl:h-48 bg-zinc-800 border border-[#CAFB42]/40 overflow-hidden shadow-2xl will-change-transform"
                style={rhombClip}
              >
                <img
                  src={img3}
                  className="w-full h-full object-contain scale-125"
                  alt="2"
                />
              </motion.div>

              <motion.div
                initial={anim.right.initial}
                animate={anim.right.animate}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="absolute top-1/4 right-0 w-32 h-32 xl:w-40 xl:h-40 2xl:w-48 2xl:h-48 bg-zinc-800 border border-[#CAFB42]/40 overflow-hidden shadow-2xl will-change-transform"
                style={{ ...rhombClip, translateZ: 0 }}
              >
                <img
                  src={img4}
                  className="w-full h-full object-contain scale-125"
                  alt="3"
                />
              </motion.div>

              <motion.div
                initial={anim.bottom.initial}
                animate={anim.bottom.animate}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-32 xl:w-40 xl:h-40 2xl:w-48 2xl:h-48 bg-zinc-800 border border-[#CAFB42]/40 overflow-hidden shadow-2xl will-change-transform"
                style={{ ...rhombClip, translateZ: 0 }}
              >
                <img
                  src={img2}
                  className="w-full h-full object-contain scale-125"
                  alt="4"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <SectionExcellent />
      <SectionServices />
      <SectionStats />
      <SectionProjects />
      <SectionPartners />
      <SectionChunke/>
      <SectionClients/>
      <SectionExperience />
      <SectionReviews />
    </div>
  );
};

export default Home;
