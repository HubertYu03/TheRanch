import Logo from "@/components/Logo";
import { motion } from "motion/react";

const duration: number = 0.3;

const ComingSoon = () => {
  return (
    <div
      className="min-h-svh flex 
      flex-col items-center justify-center"
    >
      <Logo />
      <div className="flex flex-col items-center gap-5">
        <motion.div
          className="text-6xl font-buenard sm:text-9xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: duration }}
        >
          Coming Soon
        </motion.div>
        <motion.div
          className="text-xl text-gray-500 sm:text-3xl"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: duration + 0.5 }}
        >
          Online store in development
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoon;
