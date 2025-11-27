import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { CourseModuleCard } from "@/components/course/CourseModuleCard";
import { ComingSoonModuleCard } from "@/components/course/ComingSoonModuleCard";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const Training = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
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

  // Auto-mark Levels 1 & 2 as complete to make Level 3 current
  useEffect(() => {
    const markLevelsComplete = async () => {
      if (!user || !modules) return;
      
      // Get all videos from levels 1 and 2
      const level1Module = modules.find(m => m.title.includes('Level 1'));
      const level2Module = modules.find(m => m.title.includes('Level 2'));
      
      if (level1Module && level2Module) {
        const videosToComplete = [
          ...level1Module.videos.map(v => v.id),
          ...level2Module.videos.map(v => v.id)
        ];
        
        // Insert completion records for each video
        for (const videoId of videosToComplete) {
          const { data: existing } = await supabase
            .from('user_video_progress')
            .select('id')
            .eq('user_id', user.id)
            .eq('video_id', videoId)
            .maybeSingle();
          
          if (!existing) {
            await supabase
              .from('user_video_progress')
              .insert({
                user_id: user.id,
                video_id: videoId,
                completed: true,
                completed_at: new Date().toISOString()
              });
          }
        }
      }
    };
    
    markLevelsComplete();
  }, [user, modules]);

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

  const currentModuleIndex = getCurrentModuleIndex();
  const currentModule = modules?.[currentModuleIndex];
  const allModules = modules?.filter(m => !m.is_coming_soon) || [];

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Current Level Section */}
        {currentModule && (
          <div className="mb-8">
            <div className="space-y-4">
              {modules?.map((module, index) => {
                if (module.is_coming_soon) {
                  return null;
                }
                
                const allVideos = modules.filter(m => !m.is_coming_soon).flatMap(m => m.videos);
                const status = getModuleStatus(module);
                
                // Only show current module here
                if (status !== 'current') {
                  return null;
                }
                
                return (
                  <CourseModuleCard
                    key={module.id}
                    module={module}
                    status={status}
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
          </div>
        )}

        {/* All Levels Section */}
        <h2 className="text-white text-2xl font-bold mb-6">All Levels</h2>
        <div className="space-y-4">
          {modules?.map((module, index) => {
            if (module.is_coming_soon) {
              return <ComingSoonModuleCard key={module.id} module={module} />;
            }
            
            const allVideos = modules.filter(m => !m.is_coming_soon).flatMap(m => m.videos);
            const status = getModuleStatus(module);
            
            // Show all modules in All Levels section
            return (
              <CourseModuleCard
                key={module.id}
                module={module}
                status={status}
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
