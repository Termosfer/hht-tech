import { motion } from "framer-motion";
const SectionExperience = () => {
    const phrases = [
  "3+ İllik Peşəkar Mühəndislik Təcrübəsi",
  "148+ Uğurla Tamamlanmış Sənaye Layihəsi",
  "7/24 Operativ Texniki Servis və Dəstək",
  "Beynəlxalq Standartlara Uyğun Nasos Sistemləri",
  "Enerji Effektivliyi və Texnoloji İnnovasiyalar",
  "Kompleks İstilik və Yanğın Söndürmə Həlləri",
  "CHUNKE HB — Rəsmi Nümayəndəlik və Zəmanət",
  "Maksimum Müştəri Məmnuniyyəti və Etibarlılıq"
];


    const duplicatedPhrases = [...phrases, ...phrases];
  return (
    <div className="relative w-full bg-[#CAFB42] py-4 md:py-6 overflow-hidden flex items-center">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, "-50%"],
        }}
        transition={{
          duration: 50, 
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedPhrases.map((text, index) => (
          <div key={index} className="flex items-center px-4 md:px-10">
            <span className="text-black text-lg md:text-2xl font-extrabold uppercase tracking-tight">
              {text}
            </span>
           
            <span className="ml-8 md:ml-20 text-black text-2xl md:text-4xl">
              ✱
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default SectionExperience