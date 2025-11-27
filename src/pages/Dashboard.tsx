import { useAuth } from '@/hooks/useAuth';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { PageHeader } from '@/components/PageHeader';
import playIcon from '@/assets/play_icon.svg';
import { CurrentLessonCard } from '@/components/dashboard/CurrentLessonCard';
import { TemplatesPreviewCard } from '@/components/dashboard/TemplatesPreviewCard';
import { MotionGalleryCard } from '@/components/dashboard/MotionGalleryCard';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="w-full space-y-6 sm:space-y-8">
        {/* Header Section */}
        <PageHeader
          videoUrl="https://www.loom.com/share/example-video"
          videoTitle="Welcome to Design Rocket"
          videoDuration="10:47"
        >
          {/* Play Icon */}
          <img src={playIcon} alt="Play" className="w-[42px] h-[42px] mb-4 sm:mb-6" />
          
          {/* Headings */}
          <div className="space-y-2 font-semibold text-lg sm:text-[22px] mb-3">
            <h1 className="gradient-text">
              Pre-Program: Before You Start
            </h1>
            <h2 className="text-foreground">
              Welcome! Here's what to do first
            </h2>
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground text-sm sm:text-base max-w-md">
            How Design Rocket works & what to expect in our program.
          </p>
        </PageHeader>

        {/* Current Lesson Card - Full Width */}
        <CurrentLessonCard />

        {/* Templates and Motion Gallery Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Templates Card - Takes 2 columns */}
          <div className="lg:col-span-2">
            <TemplatesPreviewCard />
          </div>
          
          {/* Motion Gallery Card - Takes 1 column */}
          <div className="lg:col-span-1">
            <MotionGalleryCard />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
