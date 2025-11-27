import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

interface TiltCardProps {
  children: ReactNode;
  tiltAmount?: number;
  className?: string;
}

export const TiltCard = ({ 
  children, 
  tiltAmount = 15,
  className = ""
}: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -tiltAmount;
    const rotateYValue = ((x - centerX) / centerX) * tiltAmount;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
