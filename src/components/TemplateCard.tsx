import { PurpleButton } from "./PurpleButton";

interface TemplateCardProps {
  title: string;
  imageUrl: string | null;
  remixLink: string;
}

export const TemplateCard = ({ title, imageUrl, remixLink }: TemplateCardProps) => {
  const handleRemix = () => {
    window.open(remixLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="border border-[#6F767E1A] rounded-2xl overflow-hidden p-3">
      {/* Image Preview */}
      <div className="rounded-xl overflow-hidden bg-[#1A1D1F]">
        <div className="aspect-[4/3]">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-[#272B30] flex items-center justify-center text-[#6F767E] text-sm">
              Preview
            </div>
          )}
        </div>
      </div>
      
      {/* Card Content */}
      <div className="pt-5 pb-2 space-y-4">
        <h3 className="text-white font-semibold text-xl">{title}</h3>
        
        <PurpleButton 
          onClick={handleRemix}
          className="w-full py-3.5"
        >
          Get the Remix Link
        </PurpleButton>
      </div>
    </div>
  );
};
