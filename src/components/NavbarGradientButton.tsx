import { Button, ButtonProps } from "./ui/button";
import { cn } from "@/lib/utils";
import { AnimatedText } from "./AnimatedText";

interface NavbarGradientButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const NavbarGradientButton = ({ children, className, ...props }: NavbarGradientButtonProps) => {
  return (
    <Button
      variant="outline"
      className={cn(
        "relative border-2 border-white/20 rounded-full bg-transparent hover:bg-white/5 transition-colors px-8 py-3",
        className
      )}
      {...props}
    >
      <AnimatedText className="gradient-text font-medium">
        {children}
      </AnimatedText>
    </Button>
  );
};
