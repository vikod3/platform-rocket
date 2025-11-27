import featureIcon1 from "@/assets/feature_icon_1.png";
import featureIcon2 from "@/assets/feature_icon_2.png";
import featureIcon3 from "@/assets/feature_icon_3.png";
import { FadeInUp } from "./FadeInUp";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const FeaturesList = () => {
  const features: Feature[] = [
    {
      title: "Master using AI design tools",
      description: "Learn to design with AI. Full training included.",
      icon: featureIcon1
    },
    {
      title: "Design beautiful Websites with AI",
      description: "Create stunning sites. No coding required.",
      icon: featureIcon2
    },
    {
      title: "Design exercises",
      description: "Hands-on practice. Build real projects.",
      icon: featureIcon3
    },
    {
      title: "BONUS: Free Videos Gallery",
      description: "Premium motion backgrounds. Unlimited use.",
      icon: featureIcon1
    },
    {
      title: "BONUS: Access to Motionsites",
      description: "Exclusive templates. Members only.",
      icon: featureIcon2
    },
    {
      title: "Lifetime Updates",
      description: "All future content. No extra cost. Forever.",
      icon: featureIcon3
    }
  ];

  return (
    <section className="py-16 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
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
