import { ValueCard } from "./ValueCard";
import { FadeInUp } from "./FadeInUp";
import icon1 from "@/assets/icon_1.svg";
import icon2 from "@/assets/icon_2.svg";
import icon3 from "@/assets/icon_3.svg";
import featureIcon from "@/assets/icon_4.svg";
export const CoreValues = () => {
  const values = [{
    title: "Ship in Hours, Not Weeks",
    description: "AI handles the heavy lifting. You focus on the vision.",
    iconSrc: icon1,
    gradientPosition: "right" as const
  }, {
    title: "No Code Barriers",
    description: "Perfect for founders, designers, and marketers. Build without limits.",
    iconSrc: icon2,
    gradientPosition: "left" as const
  }, {
    title: "Iterate at Light Speed",
    description: "Test ideas instantly. Pivot without pain. Launch with confidence.",
    iconSrc: icon3,
    gradientPosition: "right" as const
  }];
  return <section className="py-16 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="items-center flex-col justify-start text-center flex gap-6 mb-12">
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
            <h2 className="text-violet-100 text-6xl font-semibold">AI is the Future of Web Design. Here's Why...</h2>
          </FadeInUp>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {values.map((value, index) => <FadeInUp key={index} delay={0.4 + index * 0.2} className="h-auto md:h-full">
              <ValueCard {...value} />
            </FadeInUp>)}
        </div>
      </div>
    </section>;
};