import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  target: string;
  duration?: number;
}

const RandomOutlineCounter = ({ target, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState<number>(0);
  const finalValue = parseInt(target.replace(/\D/g, "")) || 0;
  const suffix = target.replace(/[0-9]/g, "");

  useEffect(() => {
    const startTime = Date.now();
    const frameRate = 80; // Sürəti bir az artırdıq ki, daha canlı görünsün

    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime < duration) {
        // Hədəf rəqəmə yaxın random rəqəmlər
        setCount(Math.floor(Math.random() * (finalValue * 1.1)));
      } else {
        setCount(finalValue);
        clearInterval(interval);
      }
    }, frameRate);

    return () => clearInterval(interval);
  }, [finalValue, duration]);

  return (
    <span
      className="inline-block"
      style={{
        color: "transparent",
        WebkitTextStroke: "1px rgba(255, 255, 255, 0.12)",
      }}
    >
      {count}
      {suffix}
    </span>
  );
};

const SectionCounterExperience = () => {
  const stats = [
    { number: "148+", label: "Tamamlanmış Layihə" },
    { number: "12+", label: "Premium Brend" },
    { number: "3+", label: "İllik Təcrübə" },
    { number: "1", label: "Rəsmi Nümayəndəlik" },
  ];

  return (
    <section className="bg-[#141416] py-16 lg:py-24 px-6 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-4 xl:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex items-center h-32 md:h-40 group"
            >
              <div className="text-7xl sm:text-8xl md:text-9xl lg:text-7xl xl:text-[110px] 2xl:text-[130px] font-black leading-none select-none transition-transform duration-500 group-hover:scale-105 origin-left">
                <RandomOutlineCounter target={stat.number} />
              </div>

              <div className="absolute left-12 sm:left-16 md:left-20 lg:left-14 xl:left-20 2xl:left-24 z-10">
                <p className="text-white text-base md:text-lg xl:text-xl font-bold leading-tight max-w-30 md:max-w-37.5 uppercase tracking-tighter drop-shadow-2xl transition-colors group-hover:text-[#CAFB42]">
                  {stat.label}
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "30px" }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="h-1 bg-[#CAFB42] mt-2 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionCounterExperience;
