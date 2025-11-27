import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useCourseProgress, CourseVideo } from "@/hooks/useCourseProgress";
import { GradientFillButton } from "@/components/GradientFillButton";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Loader2 } from "lucide-react";
import whiteFilledCheck from "@/assets/white_filled_check.svg";

const Lesson = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { modules, getNextVideo, completedVideoIds } = useCourseProgress();
  const [video, setVideo] = useState<CourseVideo | null>(null);
  const [lessonNumber, setLessonNumber] = useState<number>(1);
  const [isCompleting, setIsCompleting] = useState(false);

  useEffect(() => {
    if (modules && videoId) {
      let count = 0;
      for (const module of modules) {
        for (const v of module.videos) {
          count++;
          if (v.id === videoId) {
            setVideo(v);
            setLessonNumber(count);
            return;
          }
        }
      }
    }
  }, [modules, videoId]);

  const getNextVideoInQueue = (): CourseVideo | null => {
    if (!modules || !videoId) return null;
    
    let foundCurrent = false;
    for (const module of modules) {
      for (const v of module.videos) {
        if (foundCurrent) {
          return v;
        }
        if (v.id === videoId) {
          foundCurrent = true;
        }
      }
    }
    return null;
  };

  const handleNextLesson = async () => {
    if (!user || !videoId) return;
    
    setIsCompleting(true);
    
    try {
      // Check if progress record exists
      const { data: existing } = await supabase
        .from('user_video_progress')
        .select('id')
        .eq('user_id', user.id)
        .eq('video_id', videoId)
        .maybeSingle();

      if (existing) {
        // Update existing record
        await supabase
          .from('user_video_progress')
          .update({
            completed: true,
            completed_at: new Date().toISOString()
          })
          .eq('id', existing.id);
      } else {
        // Insert new record
        await supabase
          .from('user_video_progress')
          .insert({
            user_id: user.id,
            video_id: videoId,
            completed: true,
            completed_at: new Date().toISOString()
          });
      }

      // Navigate to next video
      const nextVideo = getNextVideoInQueue();
      if (nextVideo) {
        navigate(`/lesson/${nextVideo.id}`);
      } else {
        // All lessons complete, go back to training
        navigate('/training');
      }
    } catch (error) {
      console.error('Error completing lesson:', error);
    } finally {
      setIsCompleting(false);
    }
  };

  if (!video) {
    return (
      <DashboardLayout title="Loading...">
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="w-8 h-8 animate-spin text-[#7A7CF3]" />
        </div>
      </DashboardLayout>
    );
  }

  // Parse key_points if it's a string array
  const keyPoints = video.key_points || [];

  return (
    <DashboardLayout 
      title={`Lesson ${lessonNumber}`}
      subtitle={video.title}
      duration={video.duration || undefined}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Video Column - 3/5 width */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden bg-[#1a1c1e]">
              {/* Video Embed */}
              <div className="aspect-video w-full">
                <iframe
                  src={video.video_url}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {/* Divider */}
              <div className="h-0.5 bg-[#272B30]" />
              {/* Video Title Bar */}
              <div className="px-4 py-3">
                <h2 className="text-white font-medium">{video.title}</h2>
                {video.duration && (
                  <p className="text-white/40 text-sm mt-1">{video.duration}</p>
                )}
              </div>
            </div>
          </div>

          {/* Notes Column - 2/5 width */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-[#1a1c1e] p-6">
              {/* Lesson Notes */}
              <h3 className="text-white font-semibold text-lg mb-4">Lesson Notes</h3>
              
              {video.description ? (
                <p className="text-[#6F767E] text-sm leading-relaxed mb-6">
                  {video.description}
                </p>
              ) : (
                <p className="text-[#6F767E] text-sm leading-relaxed mb-6">
                  Watch this lesson to learn the key concepts and techniques covered in this module.
                </p>
              )}

              {/* Key Steps */}
              {keyPoints.length > 0 && (
                <>
                  <h4 className="text-white font-semibold mb-4">Key Steps:</h4>
                  <div className="mb-6 divide-y-2 divide-[#272B30]">
                    {keyPoints.map((point, index) => (
                      <div key={index} className="flex items-center gap-3 py-4 first:pt-0">
                        <img src={whiteFilledCheck} alt="" className="w-5 h-5 flex-shrink-0" />
                        <p className="text-[#6F767E] text-sm leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Next Lesson Button */}
              <GradientFillButton
                as="button"
                onClick={handleNextLesson}
                disabled={isCompleting}
                fullWidth
              >
                {isCompleting ? (
                  <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                ) : (
                  'Next Lesson'
                )}
              </GradientFillButton>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Lesson;
