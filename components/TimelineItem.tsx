import { TimelineItem as TimelineItemType } from '@/lib/timeline';

interface TimelineItemProps {
  item: TimelineItemType;
}

export default function TimelineItem({ item }: TimelineItemProps) {
  const { id, years, title, description, isActive } = item;

  return (
    <div id={`timeline-${id}`} className="relative scroll-mt-24">
      <div
        className={`absolute left-[-2.5rem] md:left-[-2.75rem] lg:left-[-3rem] top-2 w-3 h-3 rounded-full -translate-x-1/2 ${
          isActive
            ? 'bg-accent-gold border-2 border-accent-gold'
            : 'bg-bg-dark border-2 border-accent-rust'
        }`}
      />
      <div className="text-xs md:text-sm font-bold tracking-[0.2em] text-accent-gold mb-1.5 md:mb-2">
        {years}
      </div>
      <h4 className="text-base md:text-lg font-bold mb-1.5 md:mb-2">{title}</h4>
      <p className="font-serif text-sm md:text-base text-text-muted leading-[1.6]">
        {description}
      </p>
    </div>
  );
}

