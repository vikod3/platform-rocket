import { Clock } from "lucide-react";
import { CourseModule } from "@/hooks/useCourseProgress";

interface ComingSoonModuleCardProps {
  module: CourseModule;
}

export const ComingSoonModuleCard = ({ module }: ComingSoonModuleCardProps) => {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 opacity-60 bg-[#1A1D1F]">
      {/* Card Header */}
      <div className="p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
          {/* Thumbnail */}
          <div className="w-full sm:w-40 h-40 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 bg-white/5">
            {module.thumbnail_url ? (
              <img
                src={module.thumbnail_url}
                alt={module.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Title */}
            <h3 className="text-white/70 font-semibold text-lg sm:text-xl">{module.title}</h3>
            
            {/* Description */}
            {module.description && (
              <p className="text-white/40 text-sm mt-2 line-clamp-2 sm:line-clamp-1">{module.description}</p>
            )}
            
            {/* Duration placeholder */}
            <div className="flex items-center gap-1.5 text-white/40 text-sm mt-2">
              <Clock className="w-4 h-4" />
              <span>TBD</span>
            </div>
          </div>

          {/* Coming Soon Badge - hidden on mobile */}
          <div className="hidden sm:block flex-shrink-0">
            <span className="px-3 py-2 rounded-[12px] text-sm font-medium bg-transparent text-white/50 border border-white/10 flex items-center gap-2">
              <span className="w-4 h-4 rounded-[4px] bg-[#FBA94B]" />
              Coming Soon
            </span>
          </div>
        </div>

        {/* Coming Soon Badge - mobile only */}
        <div className="sm:hidden mt-4">
          <span className="px-3 py-2 rounded-[12px] text-sm font-medium bg-transparent text-white/50 border border-white/10 inline-flex items-center gap-2">
            <span className="w-4 h-4 rounded-[4px] bg-[#FBA94B]" />
            Coming Soon
          </span>
        </div>
      </div>
    </div>
  );
};
