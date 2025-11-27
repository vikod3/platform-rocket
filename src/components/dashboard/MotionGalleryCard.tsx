import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

// Static preview data since motion_videos table may be empty
const motionPreviews = [
  {
    id: "1",
    title: "Green Wave",
    thumbnail: "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/964cb3eddff1a67e3772aac9a7aceea2/thumbnails/thumbnail.jpg",
    videoUrl: "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/964cb3eddff1a67e3772aac9a7aceea2/manifest/video.m3u8"
  },
  {
    id: "2",
    title: "Puffy",
    thumbnail: "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/0f2f7fe2f6a205894f4e9747e26a7341/thumbnails/thumbnail.jpg",
    videoUrl: "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/0f2f7fe2f6a205894f4e9747e26a7341/manifest/video.m3u8"
  },
  {
    id: "3",
    title: "Purple Neon",
    thumbnail: "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/74cb72d57c6a6d6d7807693d02e6707b/thumbnails/thumbnail.jpg",
    videoUrl: "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/74cb72d57c6a6d6d7807693d02e6707b/manifest/video.m3u8"
  }
];

export const MotionGalleryCard = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleCopy = async (videoUrl: string, id: string) => {
    try {
      await navigator.clipboard.writeText(videoUrl);
      setCopiedId(id);
      toast.success("URL copied to clipboard");
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      toast.error("Failed to copy URL");
    }
  };

  return (
    <div className="bg-[#1A1D1F] rounded-2xl p-4 md:p-5 lg:p-6 h-full flex flex-col overflow-hidden">
      {/* Header */}
      <h3 className="text-white font-semibold text-base md:text-lg mb-4 md:mb-5">Motion Gallery</h3>

      {/* Motion Items List */}
      <div className="space-y-2 md:space-y-3 flex-1">
        {motionPreviews.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 md:gap-4 p-2 -mx-2 rounded-xl transition-colors cursor-pointer"
            style={{ backgroundColor: hoveredId === item.id ? '#272B30' : 'transparent' }}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => handleCopy(item.videoUrl, item.id)}
          >
            {/* Thumbnail */}
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden flex-shrink-0 bg-white/5">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <span className="flex-1 text-white/80 font-medium text-sm md:text-base truncate">{item.title}</span>

            {/* Copy Icon - shows on hover */}
            <div className={`transition-opacity flex-shrink-0 ${hoveredId === item.id ? 'opacity-100' : 'opacity-0'}`}>
              {copiedId === item.id ? (
                <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
              ) : (
                <Copy className="w-4 h-4 md:w-5 md:h-5 text-white/60" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <Link 
        to="/video-backgrounds"
        className="mt-4 md:mt-5 w-full py-2 md:py-2.5 rounded-full border border-white/20 text-white/80 text-xs md:text-sm hover:bg-white/5 transition-colors flex items-center justify-center"
      >
        View all
      </Link>
    </div>
  );
};
