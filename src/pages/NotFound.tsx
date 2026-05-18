import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const NotFound = () => {
  return (
    <div className="relative min-h-screen bg-[#0d0d0f] flex items-center justify-center overflow-hidden px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#CAFB42] opacity-[0.05] blur-2xl lg:blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-64 h-64 bg-[#CAFB42] opacity-[0.03] blur-2xl lg:blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block"
        >
          <h1
            className="text-[150px] sm:text-[200px] md:text-[250px] font-black leading-none select-none"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px rgba(202, 251, 66, 0.3)",
            }}
          >
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-white text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tighter"
            >
              Oops!
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-8"
        >
          <h2 className="text-[#CAFB42] text-xl md:text-2xl font-bold uppercase tracking-[0.2em] mb-4">
            Səhifə Tapılmadı
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto mb-12 leading-relaxed">
            Axtardığınız səhifə silinmiş, adı dəyişdirilmiş və ya müvəqqəti
            olaraq əlçatmaz ola bilər.
          </p>

          <Link to="/" className="group inline-flex items-center gap-4">
            <div className="w-14 h-14 rounded-full border border-[#CAFB42] flex items-center justify-center text-[#CAFB42] group-hover:bg-[#CAFB42] group-hover:text-black transition-all duration-300">
              <HiOutlineArrowNarrowLeft className="text-2xl" />
            </div>
            <span className="text-white font-bold tracking-widest text-sm uppercase group-hover:text-[#CAFB42] transition-colors">
              Ana Səhifəyə Qayıt
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
