import { Button, ButtonProps } from "./ui/button";
import { cn } from "@/lib/utils";
import { AnimatedText } from "./AnimatedText";

interface GradientButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const GradientButton = ({ children, className, ...props }: GradientButtonProps) => {
  return (
    <Button
      variant="outline"
      className={cn(
        "relative border-2 border-white/20 rounded-full bg-card hover:bg-card/80 transition-colors p-1 h-auto",
        className
      )}
      {...props}
    >
      <div className="py-3 px-8 rounded-full">
        <AnimatedText className="gradient-text font-medium text-base">
          {children}
        </AnimatedText>
      </div>
    </Button>
  );
};
