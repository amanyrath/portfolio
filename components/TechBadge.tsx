interface TechBadgeProps {
  tech: string;
}

export default function TechBadge({ tech }: TechBadgeProps) {
  return (
    <span className="text-[0.625rem] sm:text-[0.7rem] font-semibold tracking-wider uppercase px-3 sm:px-4 py-1.5 sm:py-2 bg-bg-card border border-white/5 text-text-muted transition-all duration-300 hover:border-accent-rust hover:text-accent-rust whitespace-nowrap">
      {tech}
    </span>
  );
}

