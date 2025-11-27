import { GradientFillButton } from "./GradientFillButton";
import { GradientButton } from "./GradientButton";
import { FadeInUp } from "./FadeInUp";
import icon6 from "@/assets/icon_6.svg";

export const CTA = () => {
  return (
    <section className="relative py-24 px-8 overflow-hidden bg-background">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        style={{ zIndex: 0 }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      
      {/* Circle Gradient Background */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 w-[1200px] h-[1200px]" 
        style={{
          top: '30%',
          backgroundImage: 'url(/circle_bg.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          zIndex: 5
        }} 
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="items-center flex-col justify-start text-center flex gap-6 mb-12">
          {/* Icon Badge */}
          <FadeInUp delay={0}>
            <div className="items-center bg-gradient-to-r from-gradient-purple via-gradient-pink to-gradient-orange justify-center flex rounded-xl p-3 shadow-inner-glow">
              <img className="object-contain align-middle inline-block w-12 h-12" src={icon6} alt="CTA icon" />
            </div>
          </FadeInUp>
          
          {/* Heading */}
          <FadeInUp delay={0.2}>
            <h2 className="text-violet-100 text-6xl font-semibold max-w-3xl">
              Build the perfect site for your business
            </h2>
          </FadeInUp>
        </div>
        
        {/* Buttons */}
        <FadeInUp delay={0.4}>
          <div className="items-center flex-wrap justify-center flex gap-4">
            <GradientFillButton href="/contact">
              Get Started Now
            </GradientFillButton>
            <GradientButton asChild>
              <a href="/about">Learn More</a>
            </GradientButton>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};
