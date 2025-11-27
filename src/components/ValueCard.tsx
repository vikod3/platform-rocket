interface ValueCardProps {
  title: string;
  description: string;
  iconSrc: string;
  gradientPosition: "left" | "center" | "right";
}

import bgLines from "@/assets/bg_lines_card.svg";

export const ValueCard = ({ title, description, iconSrc, gradientPosition }: ValueCardProps) => {
  const getGradientClass = () => {
    switch (gradientPosition) {
      case "left":
        return "bg-[linear-gradient(90deg,_hsl(var(--gradient-orange)),_hsl(var(--gradient-pink))_26%,_hsl(var(--gradient-purple))_83%,_rgba(0,_0,_0,_0))]";
      case "center":
        return "bg-[linear-gradient(rgba(0,_0,_0,_0),_hsl(var(--gradient-purple))_17%,_hsl(var(--gradient-pink))_74%,_hsl(var(--gradient-orange)))]";
      case "right":
        return "bg-[linear-gradient(rgba(0,_0,_0,_0),_hsl(var(--gradient-purple))_17%,_hsl(var(--gradient-pink))_74%,_hsl(var(--gradient-orange)))]";
    }
  };

  return (
    <div className="bg-background rounded-lg p-8 relative shadow-inner-glow h-auto md:h-full flex flex-col">
      <div
        className="bg-[#0f0915] items-center bg-no-repeat justify-center py-16 flex rounded-lg"
        style={{
          backgroundImage: `url(${bgLines})`,
          backgroundPosition: "100% 100%",
        }}>
        <img className="object-cover align-middle inline-block w-20 h-20" src={iconSrc} alt={title} />
      </div>
      <div className="flex-col flex gap-2 mt-4 flex-grow">
        <h3 className="text-violet-100 text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="bottom-0 left-0 absolute top-0 right-0 z-[-1] pointer-events-none">
        <div className={`${getGradientClass()} opacity-50 absolute inset-0 rounded-lg`} />
      </div>
    </div>
  );
};
