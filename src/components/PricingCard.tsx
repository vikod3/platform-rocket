import { AnimatedText } from "./AnimatedText";
import { GradientFillButton } from "./GradientFillButton";
import { GradientButton } from "./GradientButton";
import { ArrowRight } from "lucide-react";
import checkIcon from "@/assets/check_icon.svg";
import pricingBg from "@/assets/pricing_bg.png";

interface PricingCardProps {
  planName: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  href: string;
  featured?: boolean;
}

export const PricingCard = ({ 
  planName, 
  price, 
  originalPrice,
  description, 
  features, 
  href, 
  featured = false 
}: PricingCardProps) => {
  return (
    <div 
      className="relative border-2 border-white/5 rounded-lg p-10 h-full flex flex-col shadow-inner-glow"
      style={{
        backgroundColor: '#08020e'
      }}
    >
      <div className="relative flex-1 flex flex-col z-10">
        <div className="uppercase text-violet-100 text-sm mb-4">{planName}</div>
        <div className="text-[2.5rem] leading-none font-semibold text-violet-100 flex items-baseline mb-2">
          $<span>{price}</span><span className="text-base font-normal ml-2">USD</span>
          {originalPrice && (
            <span className="text-muted-foreground line-through ml-3 text-2xl">${originalPrice}</span>
          )}
        </div>
        <div className="text-muted-foreground mb-6">{description}</div>
        
        <div className="h-px bg-violet-100/10 mb-6" />
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-violet-100 mb-4">What's included</h3>
          <ul className="flex flex-col gap-4 list-none mb-8">
            {features.map((feature, index) => (
              <li 
                key={index}
                className="flex items-start gap-3 text-violet-100"
              >
                <img src={checkIcon} alt="" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {featured ? (
          <GradientFillButton href={href} className="w-full">
            Get Started Now
          </GradientFillButton>
        ) : (
          <GradientButton asChild className="w-full">
            <a href={href} className="flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </a>
          </GradientButton>
        )}
      </div>
      
      {featured && (
        <div
          className="absolute inset-0 bg-no-repeat pointer-events-none rounded-lg z-0"
          style={{
            backgroundImage: `url(${pricingBg})`,
            backgroundPosition: '100% 0px'
          }}
        />
      )}
    </div>
  );
};
