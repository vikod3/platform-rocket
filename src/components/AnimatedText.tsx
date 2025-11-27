import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
}

export const AnimatedText = ({ children, className = "" }: AnimatedTextProps) => {
  return (
    <motion.div
      className="relative overflow-hidden"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.span
        className={`block ${className}`}
        variants={{
          rest: { y: 0 },
          hover: { y: -40 }
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {children}
      </motion.span>
      <motion.span
        className={`absolute inset-0 flex items-center justify-center ${className}`}
        variants={{
          rest: { y: 40 },
          hover: { y: 0 }
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
};
