import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PurpleButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const PurpleButton = ({ 
  children, 
  onClick, 
  className,
  disabled = false,
  type = "button"
}: PurpleButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "bg-[#7A7CF3] hover:bg-[#6B6DE0] text-white font-medium rounded-full px-6 py-3 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
};
