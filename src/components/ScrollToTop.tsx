import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi"; 

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

 
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
             aria-label="scrollu yuxari aparmaq uchun"
            className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#CAFB42] text-black rounded-full shadow-[0_0_20px_rgba(202,251,66,0.3)] cursor-pointer overflow-hidden transition-colors hover:bg-white"
          >
          
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity 
              }}
              className="absolute inset-0 bg-white rounded-full pointer-events-none"
            />
            
            <HiArrowUp className="relative z-10 text-xl md:text-2xl transition-transform duration-300 group-hover:-translate-y-1" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollToTop;