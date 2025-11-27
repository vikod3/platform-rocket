import { Flag, Trophy } from "lucide-react";
import { GradientFillButton } from "../GradientFillButton";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { useNavigate } from "react-router-dom";

export const CurrentLessonCard = () => {
  const navigate = useNavigate();
  const { 
    modules, 
    isLoading, 
    getModuleStatus, 
    completedVideoIds,
    getNextVideo 
  } = useCourseProgress();

  if (isLoading || !modules) return null;

  // Find current module
  const currentModule = modules.find(m => getModuleStatus(m) === 'current') || modules[0];
  if (!currentModule) return null;

  // Calculate overall progress
  const totalVideos = modules.reduce((acc, m) => acc + m.videos.length, 0);
  const completedVideos = completedVideoIds.size;
  const progressPercent = totalVideos > 0 ? Math.round((completedVideos / totalVideos) * 100) : 0;

  // Get current module number
  const currentModuleIndex = modules.findIndex(m => m.id === currentModule.id) + 1;

  const handleStartLearning = () => {
    const nextVideo = getNextVideo();
    if (nextVideo) {
      navigate(`/lesson/${nextVideo.id}`);
    } else {
      navigate('/training');
    }
  };

  return (
    <div
      className="rounded-2xl p-[1px] overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, rgb(158, 103, 250), rgb(254, 106, 187) 45%, rgb(255, 156, 101))'
      }}
    >
      {/* Label at top */}
      <div className="text-center py-2">
        <span className="text-sm font-medium text-white">Current Level</span>
      </div>
      
      <div className="rounded-2xl bg-[#1A1D1F] p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          {/* Thumbnail */}
          <div className="w-full md:w-32 lg:w-36 h-32 md:h-20 lg:h-24 rounded-xl overflow-hidden flex-shrink-0 bg-white/5">
            {currentModule.thumbnail_url ? (
              <img
                src={currentModule.thumbnail_url}
                alt={currentModule.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold text-base md:text-lg lg:text-xl mb-1 line-clamp-2">
              {currentModule.title}
            </h3>
            <p className="text-white/50 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
              {currentModule.description || "Progress through all levels to unlock new templates"}
            </p>
            
            {/* Progress Section */}
            <div className="flex flex-wrap items-center gap-2 md:gap-4 lg:gap-6">
              {/* Progress Bar */}
              <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-[80px] max-w-[150px] lg:max-w-xs">
                <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full"
                    style={{
                      width: `${progressPercent}%`,
                      background: 'linear-gradient(90deg, rgb(158, 103, 250), rgb(254, 106, 187))'
                    }}
                  />
                </div>
              </div>

              {/* Progress Percent */}
              <div className="flex items-center gap-1 md:gap-1.5 text-white/60 text-xs md:text-sm">
                <Flag className="w-3 h-3 md:w-4 md:h-4" />
                <span>{progressPercent}%</span>
              </div>

              {/* Module Number */}
              <div className="flex items-center gap-1 md:gap-1.5 text-white/60 text-xs md:text-sm">
                <Trophy className="w-3 h-3 md:w-4 md:h-4" />
                <span>Module {currentModuleIndex}</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0 w-full md:w-auto mt-2 md:mt-0">
            <GradientFillButton as="button" onClick={handleStartLearning} fullWidth className="md:w-auto text-sm md:text-base">
              Start Learning
            </GradientFillButton>
          </div>
        </div>
      </div>
    </div>
  );
};
