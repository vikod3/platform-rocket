import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CoreValues } from "@/components/CoreValues";
import { Features } from "@/components/Features";
import { FeaturesList } from "@/components/FeaturesList";
import { Timeline } from "@/components/Timeline";
import { MotionSites } from "@/components/MotionSites";
import { MotionSitesList } from "@/components/MotionSitesList";
import { FeaturesBento } from "@/components/FeaturesBento";
import { Pricing } from "@/components/Pricing";
import { SimpleFooter } from "@/components/SimpleFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CoreValues />
      <Features />
      <FeaturesList />
      <Timeline />
      <MotionSites />
      <MotionSitesList />
      <FeaturesBento />
      <Pricing />
      <SimpleFooter />
    </div>
  );
};

export default Index;
