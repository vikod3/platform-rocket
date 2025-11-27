import { SlideInLeft } from "./SlideInLeft";
import { SlideInRight } from "./SlideInRight";
import { ScaleIn } from "./ScaleIn";

interface BentoCardProps {
  title: string;
  description: string;
  image: string;
  imagePosition?: "top" | "bottom";
  colSpan?: 1 | 2;
  backgroundPattern?: boolean;
  gradientPosition?: "left" | "right" | "both";
  imageWidth?: string;
  imageTopSpacing?: boolean;
  imageAnimation?: "slideLeft" | "slideRight" | "scale" | "none";
  bottomImageWidth?: string;
  bottomImageAlign?: "left" | "center" | "right";
}

export const BentoCard = ({ 
  title, 
  description, 
  image, 
  imagePosition = "bottom",
  colSpan = 1,
  backgroundPattern = false,
  gradientPosition = "right",
  imageWidth,
  imageTopSpacing = true,
  imageAnimation = "none",
  bottomImageWidth,
  bottomImageAlign = "right"
}: BentoCardProps) => {
  
  const renderImage = (img: string, alt: string, className: string, style?: React.CSSProperties) => {
    const imageElement = (
      <img 
        className={className}
        style={style}
        src={img} 
        alt={alt} 
      />
    );

    if (imageAnimation === "slideLeft") {
      return <SlideInLeft>{imageElement}</SlideInLeft>;
    }
    if (imageAnimation === "slideRight") {
      return <SlideInRight>{imageElement}</SlideInRight>;
    }
    if (imageAnimation === "scale") {
      return <ScaleIn>{imageElement}</ScaleIn>;
    }
    return imageElement;
  };

  return (
    <div className={`relative h-full overflow-hidden ${colSpan === 2 ? 'lg:col-span-2' : ''}`}>
      <div 
        className={`shadow-inner-glow flex-col flex rounded-xl h-full ${
          imageWidth ? 'justify-between' : ''
        } ${
          backgroundPattern 
            ? 'items-center justify-between gap-5 p-10 bg-[url("/circle_bg.png")] bg-no-repeat bg-[length:100%] bg-[position:50%_0px]'
            : ''
        }`}
      >
        {imagePosition === "top" && (
          <div className={`${backgroundPattern ? '' : 'w-full'} ${imageWidth ? `flex justify-center ${imageTopSpacing ? 'mt-8' : ''}` : ''}`}>
            {renderImage(
              image,
              title,
              `object-cover align-middle inline-block h-auto ${!imageWidth ? 'rounded-t-xl' : ''}`,
              { width: imageWidth || '100%' }
            )}
          </div>
        )}
        
        <div className={backgroundPattern ? '' : imagePosition === "top" ? 'p-10' : 'px-10 pt-10 pb-0'}>
          <h3 className="text-violet-100 text-2xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
        
        {imagePosition === "bottom" && (
          <div className={`${backgroundPattern ? '' : 'w-full mt-auto'} ${bottomImageWidth ? `flex ${bottomImageAlign === 'right' ? 'justify-end' : bottomImageAlign === 'center' ? 'justify-center' : 'justify-start'} pt-8` : ''}`}>
            {renderImage(
              image,
              title,
              `object-cover align-middle inline-block h-auto block ${!bottomImageWidth ? 'w-full' : ''} rounded-b-xl`,
              bottomImageWidth ? { width: bottomImageWidth } : undefined
            )}
          </div>
        )}
      </div>
    </div>
  );
};
