interface SimpleBadgeProps {
  label: string;
}

export const SimpleBadge = ({ label }: SimpleBadgeProps) => {
  return (
    <div className="inline-flex items-center py-2 px-4 border border-white/20 rounded-full shadow-inner-glow bg-background">
      <div className="text-sm font-medium gradient-text">
        {label}
      </div>
    </div>
  );
};
