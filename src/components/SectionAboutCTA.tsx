import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import serviceImg from "../../public/service_img1-1024x729.jpg"; // Şəkil yolunu düzəldin

const SectionAboutCTA = () => {
  return (
    <section className="relative bg-[#141416] py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-100 h-100 bg-[#CAFB42] opacity-[0.02] blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="w-full h-75 md:h-112.5 overflow-hidden rounded-sm">
            <img
              src={serviceImg}
              alt="Our Service"
              className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

        <div className="hidden lg:block w-px bg-white/10 mx-10"></div>

        <div className="w-full lg:w-1/2 flex flex-col justify-between py-10 lg:py-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#CAFB42] font-bold text-sm tracking-[0.2em] uppercase mb-6">
              BİZİM XİDMƏTLƏR
            </span>
            <h2 className="text-white text-3xl sm:text-4xl md:text-4xl  lg:text-4xl xl:text-5xl font-bold leading-[1.1] mb-12">
              Bizdən nə əldə <br /> edəcəksiniz?
            </h2>
          </motion.div>

          <div className="w-full h-px bg-white/10 mb-10"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-6 group cursor-pointer"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500 group-hover:border-[#CAFB42] shrink-0">
              <BsArrowUpRight className="text-[#CAFB42] text-3xl md:text-4xl transition-transform duration-500 group-hover:rotate-45" />
            </div>

            <div className="flex flex-col">
              <span className="text-white text-xs md:text-sm font-bold tracking-[0.15em] uppercase mb-1">
                XİDMƏTLƏRİMİZ HAQQINDA
              </span>
              <span className="text-white text-xs md:text-sm font-bold tracking-[0.15em] uppercase opacity-70">
                DAHA ƏTRAFLI MƏLUMAT
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionAboutCTA;
