import { SimpleBadge } from "./SimpleBadge";
import { PricingCard } from "./PricingCard";
import { FadeInUp } from "./FadeInUp";

export const Pricing = () => {
  const pricingPlans = [
    {
      planName: "FREE",
      price: "0",
      description: "Free for forever",
      features: [
        "Module 1 access",
        "1 Lovable Template",
        "1 Motion Video"
      ],
      href: "#",
      featured: false
    },
    {
      planName: "BLACK FRIDAY SPECIAL",
      price: "47",
      originalPrice: "197",
      description: "Once. Lifetime. 76% off.",
      features: [
        "All modules. Lifetime access.",
        "Unlimited Templates",
        "Unlimited Motion Videos",
        "The Playbook"
      ],
      href: "#",
      featured: true
    }
  ];

  return (
    <section className="py-16 px-8 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        {/* Card-style gradient background with padding */}
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-3xl z-0"
          style={{
            width: '90vw',
            height: '50%',
            backgroundImage: 'url("https://cdn.prod.website-files.com/68183b9a4ae6fd3a832afd7d/686e619250dd2cc1b0191449_rectangel%20shape.png"), linear-gradient(90deg, rgb(158, 103, 250), rgb(254, 106, 187) 50%, rgb(255, 156, 101))',
            backgroundClip: 'border-box, border-box'
          }}
        />

        {/* Circular blur layer - covers everything except bottom corners */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 rounded-full blur-[50px] z-10 pointer-events-none"
          style={{
            top: '-35%',
            width: '110vw',
            height: '95%',
            background: 'rgba(8, 2, 14, 1)'
          }}
        />

        {/* Circle background overlay - above blur */}
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-3xl z-[15] overflow-hidden pointer-events-none"
          style={{
            width: '90vw',
            height: '50%'
          }}
        >
          <div
            className="absolute inset-0 bg-no-repeat opacity-100"
            style={{
              backgroundImage: 'url("/circle_bg.png")',
              backgroundSize: 'cover',
              transform: 'translateY(30%)'
            }}
          />
        </div>


        {/* Content layer */}
        <div className="relative z-20">
          <div className="items-center flex-col justify-start text-center flex gap-6 mb-12">
            <FadeInUp delay={0}>
              <div className="mt-12">
                <SimpleBadge label="Black Friday" />
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <h2 className="text-violet-100 text-7xl font-semibold italic">50% Off</h2>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <p className="text-muted-foreground text-lg">Supercharge your web AI skills with our best deal of the year!</p>
            </FadeInUp>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FadeInUp key={index} delay={0.6 + index * 0.15}>
                <PricingCard {...plan} />
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
