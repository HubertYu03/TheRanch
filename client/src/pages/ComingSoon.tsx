import Logo from "@/components/Logo";
import { motion } from "motion/react";

const ComingSoon = () => {
  return (
    <>
      <Logo />
      <motion.div
        className="flex flex-col items-center 
      justify-center min-h-svh text-9xl font-buenard"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Coming Soon
      </motion.div>
    </>
  );
};

export default ComingSoon;
