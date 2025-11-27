import { PurpleButton } from "./PurpleButton";
import { useToast } from "@/hooks/use-toast";

interface VideoBackgroundCardProps {
  videoUrl: string;
  thumbnail?: string | null;
}

export const VideoBackgroundCard = ({ videoUrl, thumbnail }: VideoBackgroundCardProps) => {
  const { toast } = useToast();

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(videoUrl);
      toast({
        title: "URL Copied!",
        description: "Video URL has been copied to clipboard.",
      });
    } catch {
      toast({
        title: "Failed to copy",
        description: "Could not copy the URL to clipboard.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="border border-[#6F767E1A] rounded-2xl overflow-hidden p-3">
      {/* Thumbnail Preview */}
      <div className="rounded-xl overflow-hidden bg-[#1A1D1F]">
        <div className="aspect-[4/3] relative">
          {thumbnail ? (
            <img 
              src={thumbnail} 
              alt="Motion background thumbnail" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#1A1D1F]">
              <span className="text-muted-foreground text-sm">No thumbnail</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Button */}
      <div className="pt-4 pb-1">
        <PurpleButton 
          onClick={handleCopyUrl}
          className="w-full py-3.5"
        >
          Copy URL
        </PurpleButton>
      </div>
    </div>
  );
};
