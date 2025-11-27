import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { CourseModule, ModuleStatus, VideoStatus, CourseVideo } from "@/hooks/useCourseProgress";
import { VideoLessonItem } from "./VideoLessonItem";
import { GradientFillButton } from "../GradientFillButton";
import bgLinesCard from "@/assets/bg_lines_card.svg";
import completedFilledCheck from "@/assets/completed_filled_check.svg";
import { motion, AnimatePresence } from "framer-motion";

interface CourseModuleCardProps {
  module: CourseModule;
  status: ModuleStatus;
  isExpanded: boolean;
  onToggle: () => void;
  progress: { completed: number; total: number };
  getVideoStatus: (videoId: string, allVideos: CourseVideo[]) => VideoStatus;
  onVideoClick: (video: CourseVideo) => void;
  onContinueLearning: () => void;
}

export const CourseModuleCard = ({
  module,
  status,
  isExpanded,
  onToggle,
  progress,
  getVideoStatus,
  onVideoClick,
  onContinueLearning
}: CourseModuleCardProps) => {
  const isCompleted = status === 'completed';
  const isCurrent = status === 'current';

  // Calculate total duration
  const totalMinutes = module.videos.reduce((acc, v) => {
    if (v.duration) {
      const match = v.duration.match(/(\d+)/);
      return acc + (match ? parseInt(match[1]) : 0);
    }
    return acc;
  }, 0);

  const cardContent = (
    <div
      className={cn(
        "rounded-2xl overflow-hidden transition-all duration-300",
        isCompleted && "border border-[#38C26A]",
        !isCompleted && !isCurrent && "border border-[#6F767E]/10",
        isCurrent && "border-0"
      )}
    >
      {/* Card Header */}
      <div
        className="p-4 sm:p-5 cursor-pointer"
        onClick={onToggle}
      >
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
            {/* Title with checkmark */}
            <div className="flex items-center gap-2">
              <h3 className="text-white font-semibold text-lg sm:text-xl">{module.title}</h3>
              {isCompleted && (
                <img src={completedFilledCheck} alt="" className="w-5 h-5 flex-shrink-0" />
              )}
            </div>
            
            {/* Description */}
            {module.description && (
              <p className="text-white/50 text-sm mt-2 line-clamp-2 sm:line-clamp-1">{module.description}</p>
            )}
            
            {/* Duration */}
            <div className="flex items-center gap-1.5 text-white/50 text-sm mt-2">
              <Clock className="w-4 h-4" />
              <span>{totalMinutes} min</span>
            </div>
          </div>

          {/* Continue Learning Button - hidden on mobile, shown on desktop */}
          {isCurrent && (
            <div className="hidden sm:block flex-shrink-0">
              <GradientFillButton
                as="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onContinueLearning();
                }}
              >
                Continue Learning
              </GradientFillButton>
            </div>
          )}
        </div>

        {/* Continue Learning Button - mobile only */}
        {isCurrent && (
          <div className="sm:hidden mt-4">
            <GradientFillButton
              as="button"
              className="w-full"
              onClick={(e) => {
                e.stopPropagation();
                onContinueLearning();
              }}
            >
              Continue Learning
            </GradientFillButton>
          </div>
        )}
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className="px-5 pb-5 relative"
              style={{
                backgroundImage: isCurrent ? `url(${bgLinesCard})` : undefined,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            >
              {/* Video List */}
              <div className="space-y-2">
                {module.videos.map(video => (
                  <VideoLessonItem
                    key={video.id}
                    video={video}
                    status={getVideoStatus(video.id, module.videos)}
                    onClick={() => onVideoClick(video)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  // Wrap with gradient border and "Current Level" text for current module
  if (isCurrent) {
    return (
      <div
        className="rounded-2xl p-[1px]"
        style={{
          background: 'linear-gradient(90deg, rgb(158, 103, 250), rgb(254, 106, 187) 45%, rgb(255, 156, 101))'
        }}
      >
        {/* Current Level text inside gradient area */}
        <div className="text-center py-2">
          <span className="text-sm font-medium text-white">Current Level</span>
        </div>
        
        <div className="rounded-2xl bg-[#1A1D1F]">
          {cardContent}
        </div>
      </div>
    );
  }

  return cardContent;
};
