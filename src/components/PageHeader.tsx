import { ReactNode } from "react";

interface PageHeaderProps {
  children: ReactNode;
  videoUrl: string;
  videoTitle: string;
  videoDuration: string;
}

export function PageHeader({ children, videoUrl, videoTitle, videoDuration }: PageHeaderProps) {
  // Extract Loom video ID from share URL
  const getLoomEmbedUrl = (url: string) => {
    const loomMatch = url.match(/loom\.com\/share\/([a-zA-Z0-9]+)/);
    if (loomMatch) {
      return `https://www.loom.com/embed/${loomMatch[1]}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true`;
    }
    return url;
  };

  const isLoomVideo = videoUrl.includes('loom.com');
  const embedUrl = isLoomVideo ? getLoomEmbedUrl(videoUrl) : videoUrl;

  return (
    <div className="flex flex-col lg:flex-row gap-5 md:gap-6 lg:gap-12 items-start lg:items-center mb-5 md:mb-6 lg:mb-10">
      {/* Left Column - Children */}
      <div className="flex-1 min-w-0">
        {children}
      </div>

      {/* Right Column - Video Card */}
      <div className="w-full lg:w-[420px] flex-shrink-0">
        <div className="bg-[#1A1D1F] rounded-2xl overflow-hidden">
          {/* Video Container */}
          <div className="relative">
            {isLoomVideo ? (
              <iframe
                src={embedUrl}
                className="w-full aspect-video rounded-t-2xl"
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            ) : (
              <video
                src={videoUrl}
                className="w-full aspect-video object-cover rounded-t-2xl"
                loop
                muted
                playsInline
                controls
              />
            )}
          </div>

          {/* Video Info Section */}
          <div className="p-5">
            <h3 className="text-white font-semibold text-lg">{videoTitle}</h3>
            <p className="text-[#6F767E] text-sm mt-1">{videoDuration}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
