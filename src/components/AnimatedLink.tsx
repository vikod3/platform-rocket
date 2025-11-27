import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export const AnimatedLink = ({ href, children, className = "" }: AnimatedLinkProps) => {
  return (
    <a href={href} className={`inline-block cursor-pointer ${className}`}>
      <motion.div
        className="relative overflow-hidden"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.span
          className="block text-muted-foreground"
          variants={{
            rest: { y: 0 },
            hover: { y: -40 }
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {children}
        </motion.span>
        <motion.span
          className="block absolute left-0 top-0 text-violet-100"
          variants={{
            rest: { y: 40 },
            hover: { y: 0 }
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {children}
        </motion.span>
      </motion.div>
    </a>
  );
};
