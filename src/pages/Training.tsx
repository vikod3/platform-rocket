import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { CourseModuleCard } from "@/components/course/CourseModuleCard";
import { ComingSoonModuleCard } from "@/components/course/ComingSoonModuleCard";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { Loader2 } from "lucide-react";

const Training = () => {
  const navigate = useNavigate();
  const {
    modules,
    isLoading,
    getVideoStatus,
    getModuleStatus,
    getModuleProgress,
    getNextVideo,
    getCurrentModuleIndex
  } = useCourseProgress();

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Auto-expand current module on load
  useEffect(() => {
    if (modules && modules.length > 0 && expandedIndex === null) {
      setExpandedIndex(getCurrentModuleIndex());
    }
  }, [modules, getCurrentModuleIndex, expandedIndex]);

  const handleToggle = (index: number) => {
    setExpandedIndex(prev => prev === index ? null : index);
  };

  const handleVideoClick = (video: { id: string; video_url: string }) => {
    navigate(`/lesson/${video.id}`);
  };

  const handleContinueLearning = () => {
    const nextVideo = getNextVideo();
    if (nextVideo) {
      navigate(`/lesson/${nextVideo.id}`);
    }
  };

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="space-y-4">
          {modules?.map((module, index) => {
            if (module.is_coming_soon) {
              return <ComingSoonModuleCard key={module.id} module={module} />;
            }
            
            const allVideos = modules.filter(m => !m.is_coming_soon).flatMap(m => m.videos);
            return (
              <CourseModuleCard
                key={module.id}
                module={module}
                status={getModuleStatus(module)}
                isExpanded={expandedIndex === index}
                onToggle={() => handleToggle(index)}
                progress={getModuleProgress(module)}
                getVideoStatus={(videoId) => getVideoStatus(videoId, allVideos)}
                onVideoClick={handleVideoClick}
                onContinueLearning={handleContinueLearning}
              />
            );
          })}
        </div>

        {(!modules || modules.length === 0) && (
          <div className="text-center py-12">
            <p className="text-white/50">No training modules available yet.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Training;
