import { SimpleBadge } from "./SimpleBadge";
import { TimelineItem } from "./TimelineItem";
import { FadeInUp } from "./FadeInUp";
import topLines from "@/assets/section_top_lines.png";

export const Timeline = () => {
  const timelineEvents = [
    {
      date: "Module 1",
      title: "Introduction: The Worlds First AI Design Operating System",
      description: "You'll see where we're going and how AI fits into each step"
    },
    {
      date: "Module 2",
      title: "Zero To Your First AI Website In 25 Minutes (no code)",
      description: "Start from a blank screen. Finish with a complete landing page."
    },
    {
      date: "Module 3",
      title: "Build Beautiful Sites Fast with AI",
      description: "Turn your first draft into a beautiful design that gets attention."
    },
    {
      date: "Module 4",
      title: "What is Copywriting? (Copywriting 101 For Designers)",
      description: "AI writes the draft. You make it honest."
    },
    {
      date: "Module 5",
      title: "How to Make Animated Websites With AI",
      description: "Add clean, purposeful motion and animation to your landing page"
    },
    {
      date: "Bonus",
      title: "Design Twitter Accounts: Do THIS and the Algorithm Will LOVE You!",
      description: "Build a simple, sustainable social routine that uses your landing pages as content"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left Column - Sticky */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-24">
            <FadeInUp delay={0}>
              <div className="self-start">
                <SimpleBadge label="Course Curriculum" />
              </div>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <h2 className="text-violet-100 text-6xl font-semibold">
                What You'll Learn
              </h2>
            </FadeInUp>
          </div>

          {/* Right Column - Timeline */}
          <div className="pl-3 relative">
            {/* Vertical gradient line */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-[1px]"
              style={{
                background: 'linear-gradient(rgba(174, 118, 246, 0.12), rgba(174, 118, 246, 0.5) 13%, rgba(255, 134, 197, 0.55) 87%, rgba(255, 134, 197, 0.06) 101%)'
              }}
            />
            
            <div className="flex flex-col gap-16">
              {timelineEvents.map((event, index) => (
                <FadeInUp key={index} delay={0.6 + index * 0.2}>
                  <TimelineItem {...event} />
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
