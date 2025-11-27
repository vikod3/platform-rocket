import { Circle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { VideoStatus, CourseVideo } from "@/hooks/useCourseProgress";
import { PurpleButton } from "../PurpleButton";
import currentIcon from "@/assets/current_icon.svg";
import completedIcon from "@/assets/completed_check.svg";

interface VideoLessonItemProps {
  video: CourseVideo;
  status: VideoStatus;
  onClick?: () => void;
}

export const VideoLessonItem = ({ video, status, onClick }: VideoLessonItemProps) => {
  // Completed state
  if (status === 'completed') {
    return (
      <div 
        className="rounded-xl bg-[#222628] border border-[#6F767E4D] px-3 sm:px-4 py-3 sm:py-4 flex items-center gap-3 cursor-pointer hover:bg-[#2a2d2f] transition-colors"
        onClick={onClick}
      >
        {/* Green outlined check circle */}
        <img src={completedIcon} alt="" className="w-6 h-6 flex-shrink-0" />
        <div className="flex-1 min-w-0 flex flex-col">
          <span className="text-white font-medium text-sm sm:text-base">{video.title}</span>
          {video.duration && (
            <div className="flex items-center gap-1.5 text-white/40 text-xs sm:text-sm mt-1">
              <Clock className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
              <span>{video.duration}</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Current/In progress state
  if (status === 'current') {
    return (
      <div 
        className="rounded-xl bg-[#111315] border-2 border-[#7A7CF3] px-3 sm:px-4 py-3 sm:py-4 cursor-pointer hover:bg-[#1a1c1e] transition-colors"
        onClick={onClick}
      >
        <div className="flex items-center gap-3">
          {/* Purple circle with center dot icon */}
          <img src={currentIcon} alt="" className="w-6 h-6 flex-shrink-0" />
          <div className="flex-1 min-w-0 flex flex-col">
            <span className="text-[#7A7CF3] font-medium text-sm sm:text-base">{video.title}</span>
            {video.duration && (
              <div className="flex items-center gap-1.5 text-white/40 text-xs sm:text-sm mt-1">
                <Clock className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                <span>{video.duration}</span>
              </div>
            )}
          </div>
          {/* START button - hidden on mobile */}
          <PurpleButton 
            onClick={() => onClick?.()}
            className="hidden sm:flex px-5 py-2 text-sm"
          >
            START
          </PurpleButton>
        </div>
        {/* START button - mobile only */}
        <div className="sm:hidden mt-3">
          <PurpleButton 
            onClick={() => onClick?.()}
            className="w-full px-5 py-2 text-sm"
          >
            START
          </PurpleButton>
        </div>
      </div>
    );
  }

  // Not started state
  return (
    <div 
      className="rounded-xl bg-[#111315] border border-[#6F767E4D] px-3 sm:px-4 py-3 sm:py-4 flex items-center gap-3 cursor-pointer hover:bg-[#1a1c1e] transition-colors"
      onClick={onClick}
    >
      {/* Gray outlined circle */}
      <Circle className="w-6 h-6 text-[#6F767E] flex-shrink-0" />
      <div className="flex-1 min-w-0 flex flex-col">
        <span className="text-white/60 text-sm sm:text-base">{video.title}</span>
        {video.duration && (
          <div className="flex items-center gap-1.5 text-white/40 text-xs sm:text-sm mt-1">
            <Clock className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            <span>{video.duration}</span>
          </div>
        )}
      </div>
    </div>
  );
};
