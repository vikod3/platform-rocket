import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DashboardPricingCard } from "@/components/DashboardPricingCard";

const Premium = () => {
  // For now, assume all users are on free plan
  // This can be updated later when subscription tracking is added
  const isPro = false;

  const handleUpgrade = () => {
    // TODO: Implement Stripe checkout
    console.log("Upgrade to Pro clicked");
  };

  return (
    <DashboardLayout title="Premium">
      <div className="flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-xl md:text-2xl font-semibold mb-2"
            style={{
              background: 'linear-gradient(90deg, rgb(158, 103, 250), rgb(254, 106, 187) 45%, rgb(255, 156, 101))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Lifetime access. All devices. One subscription.
          </h2>
          <p className="text-white text-xl md:text-2xl font-semibold">Supercharge your design skills</p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <DashboardPricingCard
            planName="FREE"
            price="0"
            description="Free for forever"
            features={[
              "Module 1 access",
              "1 Lovable Template",
              "1 Motion Video"
            ]}
            isActive={!isPro}
          />
          <DashboardPricingCard
            planName="PRO"
            price="47"
            originalPrice="197"
            description="Once. Lifetime. 76% off."
            features={[
              "All modules. Lifetime access.",
              "Unlimited Templates",
              "Unlimited Motion Videos",
              "The Playbook"
            ]}
            featured
            isActive={isPro}
            onUpgrade={handleUpgrade}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Premium;
