import { Check } from "lucide-react";
import { GradientFillButton } from "./GradientFillButton";
import purpleFilledCheck from "@/assets/purple_filled_check.svg";

interface DashboardPricingCardProps {
  planName: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  isActive?: boolean;
  featured?: boolean;
  onUpgrade?: () => void;
}

export const DashboardPricingCard = ({ 
  planName, 
  price, 
  originalPrice,
  description, 
  features, 
  isActive = false,
  featured = false,
  onUpgrade
}: DashboardPricingCardProps) => {
  return (
    <div 
      className={`relative border rounded-2xl p-8 flex flex-col bg-[#1A1D1F] w-[320px] ${featured ? 'border-[#EBF0FF0D]' : 'border-[#272B30]'}`}
      style={featured ? { boxShadow: '0px 0px 12px 1px #FFFFFF1A inset' } : undefined}
    >
      <div className="flex-1 flex flex-col">
        <div className="uppercase text-[#6F767E] text-xs tracking-wider mb-4">{planName}</div>
        <div className="text-[2.5rem] leading-none font-semibold text-white flex items-baseline mb-2">
          $<span>{price}</span><span className="text-base font-normal ml-2 text-white/80">USD</span>
          {originalPrice && (
            <span className="text-[#6F767E] line-through ml-3 text-2xl">${originalPrice}</span>
          )}
        </div>
        <div className="text-[#6F767E] text-sm mb-6">{description}</div>
        
        <div className="h-px bg-[#272B30] mb-6" />
        
        <div className="flex-1">
          <h3 className="text-white font-semibold mb-4">What's included</h3>
          <ul className="flex flex-col gap-4 list-none mb-8">
            {features.map((feature, index) => (
              <li 
                key={index}
                className="flex items-center gap-3 text-[#6F767E]"
              >
                <img src={purpleFilledCheck} alt="" className="w-5 h-5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {isActive ? (
          <button 
            className="w-full py-3 px-6 rounded-full bg-[#6F767E] text-white font-medium flex items-center justify-between cursor-default"
            disabled
          >
            <span>Active</span>
            <Check className="w-5 h-5" />
          </button>
        ) : (
          <GradientFillButton 
            as="button" 
            onClick={onUpgrade}
            fullWidth
          >
            Upgrade to Pro
          </GradientFillButton>
        )}
      </div>
    </div>
  );
};
