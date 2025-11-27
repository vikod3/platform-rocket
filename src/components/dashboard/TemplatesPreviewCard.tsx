import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { TemplateCard } from "../TemplateCard";

export const TemplatesPreviewCard = () => {
  const { data: templates, isLoading } = useQuery({
    queryKey: ['templates-preview'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('lovable_templates')
        .select('*')
        .order('created_at', { ascending: true })
        .limit(2);
      
      if (error) throw error;
      return data;
    }
  });

  return (
    <div className="bg-[#1A1D1F] rounded-2xl p-4 md:p-5 lg:p-6 h-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 md:mb-5">
        <h3 className="text-white font-semibold text-base md:text-lg">New Templates</h3>
        <Link 
          to="/templates"
          className="px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20 text-white/80 text-xs md:text-sm hover:bg-white/5 transition-colors"
        >
          See All
        </Link>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        {isLoading ? (
          <>
            <div className="animate-pulse bg-white/5 rounded-xl aspect-[4/3]" />
            <div className="animate-pulse bg-white/5 rounded-xl aspect-[4/3]" />
          </>
        ) : templates?.map((template) => (
          <TemplateCard
            key={template.id}
            title={template.title}
            imageUrl={template.image_url}
            remixLink={template.remix_link}
          />
        ))}
      </div>
    </div>
  );
};
