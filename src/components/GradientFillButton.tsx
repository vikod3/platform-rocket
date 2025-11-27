import { cn } from "@/lib/utils";
import { AnimatedText } from "./AnimatedText";
import { forwardRef } from "react";

interface GradientFillButtonBaseProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

interface GradientFillButtonAsLink extends GradientFillButtonBaseProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children' | 'className'> {
  as?: 'a';
}

interface GradientFillButtonAsButton extends GradientFillButtonBaseProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> {
  as: 'button';
}

type GradientFillButtonProps = GradientFillButtonAsLink | GradientFillButtonAsButton;

export const GradientFillButton = forwardRef<HTMLAnchorElement | HTMLButtonElement, GradientFillButtonProps>(
  ({ children, className, fullWidth, disabled, loading, as = 'a', ...props }, ref) => {
    const content = (
      <>
        {/* Top shimmer */}
        <div 
          className="absolute left-0 right-0 top-0 h-[1px]"
          style={{
            background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.2) 90%)'
          }}
        />
        
        {/* Main gradient button */}
        <div 
          className="text-white flex items-center justify-center py-3 px-8 rounded-full relative cursor-pointer"
          style={{
            background: disabled 
              ? 'linear-gradient(90deg, rgb(120, 80, 180), rgb(180, 80, 140) 45%, rgb(180, 120, 80))'
              : 'linear-gradient(90deg, rgb(158, 103, 250), rgb(254, 106, 187) 45%, rgb(255, 156, 101))',
            boxShadow: disabled 
              ? 'none'
              : 'rgba(255, 255, 255, 0.4) 0px -4px 8px inset, rgba(255, 255, 255, 0.8) 0px 0px 4px inset'
          }}
        >
          {loading ? (
            <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <AnimatedText className="font-medium text-base">
              {children}
            </AnimatedText>
          )}
        </div>
        
        {/* Bottom shimmer */}
        <div 
          className="absolute left-0 right-0 bottom-0 h-[1px]"
          style={{
            background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.2) 10%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.2) 90%)'
          }}
        />
      </>
    );

    const sharedClassName = cn(
      "relative border-2 border-white/20 rounded-full p-1 inline-block overflow-hidden transition-opacity",
      fullWidth && "w-full",
      disabled && "opacity-70 cursor-not-allowed",
      className
    );

    if (as === 'button') {
      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          className={sharedClassName}
          disabled={disabled || loading}
          {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
          {content}
        </button>
      );
    }

    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={sharedClassName}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }
);

GradientFillButton.displayName = "GradientFillButton";
