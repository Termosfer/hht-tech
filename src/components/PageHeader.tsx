import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi"; // React-icons quraşdırılmalıdır

interface PageHeaderProps {
  title: string;
  currentPage: string;
}

const PageHeader = ({ title, currentPage }: PageHeaderProps) => {
  return (
    <section className="relative bg-[url('/titlebar.jpg')] py-20 md:pt-58 text-center overflow-hidden border-b border-white/5">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-[#CAFB42] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-4">
       
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-5xl md:text-7xl font-extrabold uppercase tracking-tight mb-8"
        >
          {title}
        </motion.h1>

       
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 text-sm md:text-base font-bold tracking-wide"
        >
          <Link 
            to="/" 
            className="text-white hover:text-[#CAFB42] transition-colors duration-300"
          >
            Hydro Heat Tech
          </Link>

          <span className="text-gray-600">/</span>

          <Link 
            to="/" 
            className="text-white hover:text-[#CAFB42] transition-colors duration-300"
          >
            <HiHome className="text-xl" />
          </Link>

          <span className="text-gray-600">/</span>

          <span className="text-[#CAFB42] uppercase">{currentPage}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;