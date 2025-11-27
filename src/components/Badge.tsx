import { ArrowRight } from "lucide-react";

interface BadgeProps {
  label: string;
  text: string;
  showArrow?: boolean;
}

export const Badge = ({ label, text, showArrow = false }: BadgeProps) => {
  return (
    <div className="inline-flex items-center gap-2 py-1 pl-1 pr-2 border-2 border-white/20 rounded-full shadow-inner-glow">
      <div className="bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-orange text-violet-100 text-sm font-medium px-2 rounded-full py-px flex items-center justify-center">
        {label}
      </div>
      <div className="flex items-center gap-1">
        <p className="text-violet-100 text-sm">
          {text}
        </p>
        {showArrow && <ArrowRight className="w-3 h-3 text-violet-100" />}
      </div>
    </div>
  );
};
