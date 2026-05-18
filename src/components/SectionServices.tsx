import { motion, type Variants } from "framer-motion";
import img2 from "../assets/vdf.png";
import img3 from "../assets/5.webp";
import img4 from "../assets/service.jpg";
import { Link } from "react-router-dom";

const services = [
  {
    img: img2,
    title: "Avtomatika və VFD",
    text: "VFD (Tezlik çeviricilər) və PLC idarəetmə sistemlərinin quraşdırılması ilə enerji istehlakına 30-50% qənaət təmin edirik.",
  },
  {
    img: img3,
    title: "Nasos və Su Sistemləri",
    text: "Sənaye nasoslarının montajı, təzyiq artırma (booster) sistemləri və su təchizatı infrastrukturunun qurulması.",
  },
  {
    img: img4,
    title: "Texniki Servis 7/24",
    text: "Mühəndislik sistemlərinizin kəsilməz işləməsi üçün operativ texniki dəstək və profilaktik servis xidməti göstəririk.",
  },
];

const SectionServices = () => {
  const MotionLink = motion(Link);
  const leftSideVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative bg-[#141416] py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-10 overflow-hidden">
      
      <div className="absolute top-1/2 left-[30%] w-72 h-72 bg-[#CAFB42] opacity-5 blur-[60px] lg:blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16">
        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start will-change-transform"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={leftSideVariants}
        >
          <motion.h3
            variants={leftSideVariants}
            className="text-[#CAFB42] text-sm font-bold tracking-widest uppercase"
          >
            BİZİM XİDMƏTLƏR
          </motion.h3>
          <motion.p
            variants={leftSideVariants}
            className="text-white text-3xl sm:text-4xl md:text-4xl  lg:text-4xl xl:text-5xl font-bold leading-[1.1]"
          >
            Sizə təqdim etdiyimiz peşəkar həllər.
          </motion.p>
          <MotionLink
            to="/xidmətlərimiz"
            variants={leftSideVariants}
            className="rounded-full px-10 py-4 font-bold bg-[#CAFB42] text-black hover:bg-white transition-all duration-300 cursor-pointer uppercase text-xs tracking-wider mt-4 transform-gpu"
          >
            BÜTÜN XİDMƏTLƏRƏ BAXIN
          </MotionLink>
        </motion.div>

        <div className="w-full lg:w-1/2 flex flex-col gap-6 will-change-transform">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
              className="flex flex-col sm:flex-row items-center sm:items-start bg-[#1a1a1c] p-6 sm:p-8 rounded-2xl gap-6 hover:bg-[#222225] transition-colors duration-300 border border-white/5 group transform-gpu will-change-transform"
            >
              <div className="shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#CAFB42] transition-all duration-500 transform-gpu">
                <img
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 will-change-transform"
                />
              </div>

              <div className="flex flex-col gap-3 text-center sm:text-left">
                <h4 className="text-white font-bold text-xl  lg:text-xl group-hover:text-[#CAFB42] transition-colors duration-300 cursor-pointer">
                  {service.title}
                </h4>
                <p className="text-white/70 leading-relaxed text-sm  xl:text-base">
                  {service.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionServices;
