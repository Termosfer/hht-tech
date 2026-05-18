import { motion } from "framer-motion";

interface SkillBarProps {
  title: string;
  percentage: number;
}

const SkillBar = ({ title, percentage }: SkillBarProps) => {
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white text-sm font-bold tracking-widest uppercase">
          {title}
        </span>
        <span className="text-white text-sm font-bold">{percentage}%</span>
      </div>
      <div className="relative w-full h-0.5 bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 left-0 h-full bg-white"
        />
      </div>
    </div>
  );
};

export default SkillBar;