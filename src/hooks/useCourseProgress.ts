import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";

export interface CourseVideo {
  id: string;
  title: string;
  duration: string | null;
  video_url: string;
  order_index: number;
  module_id: string | null;
  description: string | null;
  key_points: string[] | null;
}

export interface CourseModule {
  id: string;
  title: string;
  description: string | null;
  thumbnail_url: string | null;
  order_index: number;
  is_coming_soon: boolean;
  videos: CourseVideo[];
}

export interface VideoProgress {
  video_id: string;
  completed: boolean;
}

export type ModuleStatus = 'completed' | 'current' | 'upcoming';
export type VideoStatus = 'completed' | 'current' | 'upcoming';

export const useCourseModules = () => {
  return useQuery({
    queryKey: ['course-modules'],
    queryFn: async () => {
      const { data: modules, error: modulesError } = await supabase
        .from('course_modules')
        .select('*')
        .order('order_index');

      if (modulesError) throw modulesError;

      const { data: videos, error: videosError } = await supabase
        .from('course_videos')
        .select('*')
        .order('order_index');

      if (videosError) throw videosError;

      const modulesWithVideos: CourseModule[] = modules.map(module => ({
        ...module,
        is_coming_soon: module.is_coming_soon ?? false,
        videos: videos.filter(v => v.module_id === module.id)
      }));

      return modulesWithVideos;
    }
  });
};

export const useUserProgress = () => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['user-progress', user?.id],
    queryFn: async () => {
      if (!user) return [];

      const { data, error } = await supabase
        .from('user_video_progress')
        .select('video_id, completed')
        .eq('user_id', user.id)
        .eq('completed', true);

      if (error) throw error;
      return data as VideoProgress[];
    },
    enabled: !!user
  });
};

export const useCourseProgress = () => {
  const { data: modules, isLoading: modulesLoading } = useCourseModules();
  const { data: progress, isLoading: progressLoading } = useUserProgress();

  const completedVideoIds = new Set(progress?.map(p => p.video_id) || []);

  const getVideoStatus = (videoId: string, allVideos: CourseVideo[]): VideoStatus => {
    if (completedVideoIds.has(videoId)) return 'completed';
    
    // Find first incomplete video
    for (const video of allVideos) {
      if (!completedVideoIds.has(video.id)) {
        return video.id === videoId ? 'current' : 'upcoming';
      }
    }
    return 'upcoming';
  };

  const getModuleStatus = (module: CourseModule): ModuleStatus => {
    // Coming soon modules are always "upcoming"
    if (module.is_coming_soon) return 'upcoming';
    
    if (module.videos.length === 0) return 'upcoming';
    
    const completedInModule = module.videos.filter(v => completedVideoIds.has(v.id)).length;
    
    if (completedInModule === module.videos.length) return 'completed';
    if (completedInModule > 0) return 'current';
    
    // Check if any previous module is incomplete (excluding coming soon)
    const allModules = modules || [];
    for (const m of allModules) {
      if (m.is_coming_soon) continue;
      if (m.order_index >= module.order_index) break;
      const mCompleted = m.videos.filter(v => completedVideoIds.has(v.id)).length;
      if (mCompleted < m.videos.length) return 'upcoming';
    }
    
    // This is the first incomplete module
    return 'current';
  };

  const getModuleProgress = (module: CourseModule) => {
    const completed = module.videos.filter(v => completedVideoIds.has(v.id)).length;
    return { completed, total: module.videos.length };
  };

  const getNextVideo = (): CourseVideo | null => {
    if (!modules) return null;
    
    const allVideos = modules.flatMap(m => m.videos);
    for (const video of allVideos) {
      if (!completedVideoIds.has(video.id)) {
        return video;
      }
    }
    return null;
  };

  const getCurrentModuleIndex = (): number => {
    if (!modules) return 0;
    
    for (let i = 0; i < modules.length; i++) {
      if (getModuleStatus(modules[i]) === 'current') {
        return i;
      }
    }
    return 0;
  };

  return {
    modules,
    isLoading: modulesLoading || progressLoading,
    getVideoStatus,
    getModuleStatus,
    getModuleProgress,
    getNextVideo,
    getCurrentModuleIndex,
    completedVideoIds
  };
};
