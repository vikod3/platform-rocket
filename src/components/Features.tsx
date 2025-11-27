import dashboardImage from "@/assets/dashboard.webp";
import topLines from "@/assets/section_top_lines.png";
import logo from "@/assets/emotionsites_logo.png";
import { FadeInUp } from "./FadeInUp";
import { TiltCard } from "./TiltCard";
import { SimpleBadge } from "./SimpleBadge";

export const Features = () => {
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
        <div className="items-center flex-col">
          <div className="items-center flex-col justify-start text-center flex gap-6 mb-12">
            <FadeInUp delay={0}>
              <SimpleBadge label="Introducing" />
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <img 
                className="h-12 w-auto object-contain" 
                src={logo} 
                alt="Motion Sites logo" 
              />
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <h2 className="text-violet-100 text-5xl lg:text-6xl font-semibold max-w-4xl">
                AI Landing Page Design with AI. Full Course
              </h2>
            </FadeInUp>
          </div>
          <FadeInUp delay={0.4}>
            <TiltCard className="relative rounded-2xl shadow-inner-glow border border-white/20">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  className="object-cover align-middle inline-block w-full h-auto" 
                  src={dashboardImage} 
                  alt="Dashboard preview" 
                />
              </div>
              <div className="bottom-0 left-0 absolute top-0 right-0 z-[-1] pointer-events-none">
                <div className="items-start bottom-0 justify-start left-0 absolute top-0 z-[3] flex">
                  <div className="bg-[linear-gradient(hsl(var(--gradient-orange)),_hsl(var(--gradient-pink))_26%,_hsl(var(--gradient-purple))_83%,_rgba(0,_0,_0,_0))] left-0 opacity-50 absolute right-0 top-0 rounded-2xl" />
                </div>
              </div>
            </TiltCard>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};
