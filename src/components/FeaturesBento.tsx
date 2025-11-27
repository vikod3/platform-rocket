import { BentoCard } from "./BentoCard";
import { FadeInUp } from "./FadeInUp";
import featureIcon from "@/assets/icon_4.svg";
import bento1 from "@/assets/bento_card_1.png";
import bento2 from "@/assets/bento_card_2.png";
import bento3 from "@/assets/bento_card_3.png";
import bento4 from "@/assets/bento_card_4.png";
import topLines from "@/assets/section_top_lines.png";

export const FeaturesBento = () => {
  const features = [
    {
      title: "Progress & Unlock",
      description: "Master each module. Unlock new templates as you level up. Track your journey from beginner to expert.",
      image: bento1,
      imagePosition: "bottom" as const,
      colSpan: 2 as const,
      gradientPosition: "both" as const,
      imageAnimation: "slideLeft" as const,
      bottomImageWidth: "90%",
      bottomImageAlign: "right" as const
    },
    {
      title: "The Playbook",
      description: "Everything you need to go from zero to launch— no fluff, just action.",
      image: bento2,
      imagePosition: "top" as const,
      colSpan: 1 as const,
      gradientPosition: "right" as const,
      imageWidth: "60%",
      imageAnimation: "slideRight" as const
    },
    {
      title: "Motion Backgrounds",
      description: "Stunning animated backgrounds. Instant visual impact that stops scrolling.",
      image: bento3,
      imagePosition: "top" as const,
      colSpan: 1 as const,
      gradientPosition: "both" as const,
      imageWidth: "90%",
      imageTopSpacing: false,
      imageAnimation: "scale" as const
    },
    {
      title: "Lovable Templates Ultimate Access",
      description: "Grab remixable templates built for conversion. SaaS, startup, agency—every style covered. One click to customize.",
      image: bento4,
      imagePosition: "top" as const,
      colSpan: 2 as const,
      gradientPosition: "right" as const,
      imageAnimation: "slideLeft" as const
    }
  ];

  return (
    <section className="py-16 px-8 bg-background relative">
      {/* Fading border at top */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1px] z-10"
        style={{
          background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%)'
        }}
      />
      <div 
        className="absolute top-0 left-0 right-0 h-48 z-0"
        style={{
          backgroundImage: `url(${topLines})`,
          backgroundRepeat: 'repeat-x',
          backgroundPosition: 'top center',
          backgroundSize: 'contain'
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center">
          {/* Header */}
          <div className="flex flex-col items-center justify-start text-center gap-6 mb-12">
            <FadeInUp delay={0}>
              <div className="items-center bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-orange justify-center flex rounded-xl p-4 shadow-inner-glow">
                <img 
                  className="object-contain align-middle inline-block w-12 h-12" 
                  src={featureIcon} 
                  alt="Features icon" 
                />
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <h2 className="text-violet-100 text-5xl lg:text-6xl font-semibold max-w-4xl">
                Build like never before.
              </h2>
            </FadeInUp>
          </div>

          {/* Bento Grid - Row 1 */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 auto-rows-auto lg:auto-rows-fr mb-8">
            {features.slice(0, 2).map((feature, index) => (
              <BentoCard key={index} {...feature} />
            ))}
          </div>
          
          {/* Bento Grid - Row 2 */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 auto-rows-auto lg:auto-rows-fr">
            {features.slice(2, 4).map((feature, index) => (
              <BentoCard key={index + 2} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
