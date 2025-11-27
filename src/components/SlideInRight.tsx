import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideInRightProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const SlideInRight = ({ 
  children, 
  delay = 0, 
  duration = 0.6,
  className = ""
}: SlideInRightProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={`w-full ${className}`}
      style={{ display: 'contents' }}
    >
      {children}
    </motion.div>
  );
};
