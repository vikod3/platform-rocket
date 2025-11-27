import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { PageHeader } from "@/components/PageHeader";
import { VideoBackgroundCard } from "@/components/VideoBackgroundCard";
import videoIcon from "@/assets/video_icon.svg";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const VideoBackgrounds = () => {
  const { data: videos, isLoading } = useQuery({
    queryKey: ['motion-videos'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('motion_videos')
        .select('*')
        .order('created_at', { ascending: true });
      
      if (error) throw error;
      return data;
    }
  });

  return (
    <DashboardLayout>
      <PageHeader 
        videoUrl="https://www.loom.com/share/2ac1d7b45c6c46cca3f6aa0e817e8d5f" 
        videoTitle="Watch this before using the library" 
        videoDuration="8 minutes"
      >
        <div className="space-y-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center">
            <img src={videoIcon} alt="Video" className="w-10 h-10" />
          </div>
          
          <div className="space-y-2 font-semibold text-[22px]">
            <h2 className="gradient-text">
              Ultimate Motion Background Gallery
            </h2>
            <p className="text-white/80">
              Included with your membership
            </p>
          </div>
        </div>
      </PageHeader>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="animate-pulse bg-white/5 rounded-xl aspect-video" />
          ))
        ) : (
          videos?.map((video) => (
            <VideoBackgroundCard 
              key={video.id} 
              videoUrl={video.video_url} 
              thumbnail={video.thumbnail_url || undefined}
            />
          ))
        )}
      </div>
    </DashboardLayout>
  );
};

export default VideoBackgrounds;
