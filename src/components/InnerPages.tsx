import { SimpleBadge } from "./SimpleBadge";
import { PageCard } from "./PageCard";
import { FadeInUp } from "./FadeInUp";
import topLines from "@/assets/section_top_lines.png";
import page1 from "@/assets/pages_1.webp";
import page2 from "@/assets/pages_2.webp";
import page3 from "@/assets/pages_3.webp";

export const InnerPages = () => {
  const pages = [
    {
      title: "Home",
      image: page1,
      href: "#",
      hasGradientOverlay: false
    },
    {
      title: "About",
      image: page2,
      href: "#",
      hasGradientOverlay: false
    },
    {
      title: "Feature",
      image: page3,
      href: "#",
      hasGradientOverlay: true
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
        <div className="items-center flex-col justify-start text-center flex gap-6 mb-12">
          <FadeInUp delay={0}>
            <SimpleBadge label="Inner Pages" />
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <h2 className="text-violet-100 text-6xl font-semibold">Main Pages of Design Rocket</h2>
          </FadeInUp>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pages.map((page, index) => (
            <FadeInUp key={index} delay={0.4 + index * 0.2}>
              <PageCard {...page} />
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};
