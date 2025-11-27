import { ReactNode, useState } from "react";
import playIcon from "@/assets/play_icon.svg";

interface PageHeaderProps {
  children: ReactNode;
  videoUrl: string;
  videoTitle: string;
  videoDuration: string;
  thumbnailUrl?: string;
}

export function PageHeader({ children, videoUrl, videoTitle, videoDuration, thumbnailUrl }: PageHeaderProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  
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
            {!isPlaying ? (
              /* Preview with Play Button */
              <div 
                className="relative w-full aspect-video rounded-t-2xl cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                {thumbnailUrl ? (
                  <img 
                    src={thumbnailUrl} 
                    alt={videoTitle}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-violet-600/20 to-purple-600/20 rounded-t-2xl flex items-center justify-center">
                    <div className="text-white/40 text-sm">Video Preview</div>
                  </div>
                )}
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors rounded-t-2xl">
                  <img 
                    src={playIcon} 
                    alt="Play" 
                    className="w-16 h-16 group-hover:scale-110 transition-transform"
                  />
                </div>
              </div>
            ) : (
              /* Actual Video */
              isLoomVideo ? (
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
                  autoPlay
                />
              )
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
