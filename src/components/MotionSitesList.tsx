import featureIcon1 from "@/assets/feature_icon_1.png";
import featureIcon2 from "@/assets/feature_icon_2.png";
import featureIcon3 from "@/assets/feature_icon_3.png";
import { FadeInUp } from "./FadeInUp";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const MotionSitesList = () => {
  const features: Feature[] = [
    {
      title: "Page Blueprints",
      description: "Proven layouts for every page type. Home. Landing. Sales. Start with structure that converts.",
      icon: featureIcon1
    },
    {
      title: "AI-Ready Templates",
      description: "Designer-crafted templates built for AI. Your pages look intentional. Not random.",
      icon: featureIcon2
    },
    {
      title: "Launch Checklists",
      description: "From idea to live. Every step. No guessing.",
      icon: featureIcon3
    }
  ];

  return (
    <section className="py-16 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <FadeInUp key={index} delay={index * 0.15}>
              <div className="flex items-start gap-4">
                <img 
                  className="object-contain align-middle inline-block w-8 h-8 flex-shrink-0" 
                  src={feature.icon} 
                  alt="Feature icon" 
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-violet-100 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};
