import { AnimatedText } from "./AnimatedText";

interface PageCardProps {
  title: string;
  image: string;
  href: string;
  hasGradientOverlay?: boolean;
}

export const PageCard = ({ title, image, href, hasGradientOverlay = false }: PageCardProps) => {
  return (
    <a
      href={href}
      className="group bg-[url('https://cdn.prod.website-files.com/68183b9a4ae6fd3a832afd7d/6864b88376a432b3ff5cc416_Pricing%20Card%20Bg%20(1).png')] bg-no-repeat bg-[length:100%] bg-[position:100%_0px] pt-5 pb-0 relative border-2 border-white/5 rounded-xl hover:border-white/10 transition-all duration-500 block overflow-hidden"
    >
      {/* Static gradient overlay */}
      {hasGradientOverlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-orange opacity-[0.075] pointer-events-none rounded-xl" />
      )}
      
      {/* Hover gradient overlay - covers entire card */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
        style={{
          background: 'linear-gradient(90deg, rgb(158, 103, 250), rgb(254, 106, 187) 45%, rgb(255, 156, 101))'
        }}
      />
      
      {/* Image container wrapper with padding */}
      <div className="px-5 relative z-10">
        {/* Fixed image container with overflow hidden */}
        <div className="h-96 overflow-hidden rounded-t-lg">
          <img 
            className="object-cover align-middle inline-block w-full h-full transition-transform duration-500 group-hover:scale-110" 
            src={image}
            alt={title}
          />
        </div>
      </div>
      
      <div className="bg-background shadow-inner-glow py-9 px-4 z-10 relative w-full group-hover:bg-transparent transition-colors duration-500">
        <div className="items-center flex-col justify-center text-center flex">
          <h3 className="text-2xl text-violet-100 font-bold">
            <AnimatedText>{title}</AnimatedText>
          </h3>
        </div>
      </div>
    </a>
  );
};
