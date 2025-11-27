interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
}

export const TimelineItem = ({ date, title, description }: TimelineItemProps) => {
  return (
    <div className="flex-col pl-16 relative flex gap-4">
      <p className="text-muted-foreground opacity-50">{date}</p>
      <h3 className="text-violet-100 text-3xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      
      {/* Timeline dot positioned on the vertical line */}
      <div className="absolute left-[-19px] top-[54px] w-4 h-4">
        <div 
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle at 16% 17%, rgb(255, 255, 255), rgb(254, 106, 187) 54%, rgb(158, 103, 250))'
          }}
        />
        {/* Vertical gradient line going up with fade */}
        <div 
          className="absolute left-[7px] bottom-full"
          style={{
            backgroundImage: 'linear-gradient(0deg, #fe6abb, #fff0 80%)',
            width: '2px',
            height: '40px'
          }}
        />
        {/* Vertical gradient line going down with fade */}
        <div 
          className="absolute left-[7px] top-full"
          style={{
            backgroundImage: 'linear-gradient(180deg, #fe6abb, #fff0 80%)',
            width: '2px',
            height: '40px'
          }}
        />
        {/* Horizontal gradient line to the right with fade */}
        <div 
          className="absolute left-4 top-[6px] w-12 h-[2px]"
          style={{
            background: 'linear-gradient(90deg, hsl(var(--gradient-purple)), hsl(var(--gradient-pink)) 50%, hsl(var(--gradient-orange)), rgba(255, 156, 101, 0))'
          }}
        />
      </div>
    </div>
  );
};
