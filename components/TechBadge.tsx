interface TechBadgeProps {
  tech: string;
}

export default function TechBadge({ tech }: TechBadgeProps) {
  return (
    <span className="text-[0.7rem] font-semibold tracking-wider uppercase px-4 py-2 bg-bg-card border border-white/5 text-text-muted transition-all duration-300 hover:border-[#b85c38] hover:text-[#b85c38]">
      {tech}
    </span>
  );
}

