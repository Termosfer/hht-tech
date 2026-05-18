import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiUser } from "react-icons/fi"; // FiUser ikonunu əlavə etdik
import main_image from "../../public/single-img-5-1.png";

interface Review {
  id: number;
  text: string;
  name: string;
  imgLarge: string;
}

const reviews: Review[] = [
  {
    id: 1,
    text: "HHT komandası çox peşəkardır. Texniki dəstək xidməti olduqca operativdir və yarana biləcək hər bir problemi qısa zamanda həll edirlər. Mühəndislik həlləri üzrə 10/10 xidmət göstərirlər.",
    name: "Vüsal Həsənov",
    imgLarge: main_image,
  },
  {
    id: 2,
    text: "Sənaye nasos sistemlərinin quraşdırılmasında HHT-yə güvəndik və yanılmadıq. Enerji səmərəliliyi sayəsində operativ xərclərimiz 30% azaldı. Yüksək keyfiyyətli xidmət üçün təşəkkür edirik!",
    name: "Elnur Quliyev",
    imgLarge: main_image,
  },
  {
    id: 3,
    text: "Keyfiyyət və təhlükəsizlik standartları bizim üçün önəmlidir. Onların təqdim etdiyi yanğın sistemləri və texniki servis gözləntilərimizi tam qarşıladı. Sənaye obyektləri üçün mütləq tövsiyə edirəm.",
    name: "Anar Məmmədov",
    imgLarge: main_image,
  },
];

const SectionReviews = () => {
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((prev) => (prev + 1 === reviews.length ? 0 : prev + 1));
  };

  const prevReview = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section className="relative bg-[#141416] py-16 md:py-24 lg:py-32 px-6 overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-80 h-80 md:w-150 md:h-150 bg-[#CAFB42]/10 blur-2xl lg:blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-16">
       
        <div className="relative shrink-0">
          <div className="w-64 h-64 sm:w-80 sm:h-80 xl:w-100 xl:h-100 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl relative z-10">
            <img
              src={reviews[index].imgLarge}
              alt="Work Context"
              className="w-full h-full object-cover grayscale-20"
            />
          </div>
          <div className="absolute -inset-4 border border-[#CAFB42]/20 rounded-full pointer-events-none"></div>
        </div>

        <div className="flex flex-col items-center shrink-0 z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[index].id + "avatar"}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#1c1c1f] border-4 border-[#141416] shadow-xl flex items-center justify-center relative -mt-10 lg:mt-0 overflow-hidden group">
                <div className="absolute inset-0 bg-linear-to-tr from-[#CAFB42]/10 to-transparent opacity-50"></div>

                <FiUser className="text-6xl md:text-7xl text-gray-600 group-hover:text-[#CAFB42] transition-colors duration-500 relative z-10" />
              </div>

              <div className="mt-6 text-center">
                <h4 className="text-white text-xl font-bold tracking-tight">
                  {reviews[index].name}
                </h4>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="hidden lg:block h-64 w-px bg-white/10 mx-4"></div>

        <div className="flex-1 max-w-xl text-center lg:text-left flex flex-col justify-center">
          <div className="relative h-64 sm:h-52 md:h-48 lg:h-44 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={reviews[index].id + "text"}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <p className="text-white text-base md:text-lg xl:text-xl italic font-medium leading-relaxed opacity-90">
                  "{reviews[index].text}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4 mt-8 h-12">
            <button
             aria-label="evvelki rəyə qayıtmaq üçün"
              onClick={prevReview}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#CAFB42] hover:text-black hover:border-[#CAFB42] transition-all duration-300 cursor-pointer shrink-0 group"
            >
              <FiArrowLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />
            </button>
            <button
              aria-label="sonrakı rəyə keçmək üçün"
              onClick={nextReview}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#CAFB42] hover:text-black hover:border-[#CAFB42] transition-all duration-300 cursor-pointer shrink-0 group"
            >
              <FiArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionReviews;
