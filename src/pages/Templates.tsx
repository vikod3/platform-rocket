import { useQuery } from "@tanstack/react-query";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { TemplateCard } from "@/components/TemplateCard";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { PageHeader } from "@/components/PageHeader";
import lovableLogo from "@/assets/lovable_full_logo.png";

const Templates = () => {
  const { data: templates, isLoading } = useQuery({
    queryKey: ["lovable-templates"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("lovable_templates")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) throw error;
      return data;
    },
  });

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="mb-5 md:mb-6 lg:mb-10">
          <img src={lovableLogo} alt="Lovable" className="h-10 mb-4" />
          <p className="text-[#6F767E] text-lg">Premium AI Web Design Systems</p>
        </div>

        {/* Templates Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-[#1A1D1F] border border-[#272B30] rounded-xl overflow-hidden">
                <Skeleton className="aspect-video bg-[#272B30]" />
                <div className="p-4 space-y-4">
                  <Skeleton className="h-6 w-3/4 bg-[#272B30]" />
                  <Skeleton className="h-10 w-full bg-[#272B30]" />
                </div>
              </div>
            ))}
          </div>
        ) : templates && templates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <TemplateCard
                key={template.id}
                title={template.title}
                imageUrl={template.image_url}
                remixLink={template.remix_link}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-[#6F767E]">No templates available yet.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Templates;
