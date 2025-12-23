import { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'outline';
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}

export default function Button({
  variant = 'outline',
  href,
  children,
  external = false,
  className = '',
}: ButtonProps) {
  const baseStyles =
    'text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.15em] px-6 sm:px-8 py-4 min-h-[44px] flex items-center justify-center transition-all duration-300 ease-in-out';

  const variants = {
    primary:
      'bg-accent-rust border border-accent-rust hover:bg-accent-gold hover:border-accent-gold hover:text-bg-dark',
    outline:
      'border border-white/10 hover:border-accent-gold hover:text-accent-gold',
  };

  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...externalProps}
    >
      {children}
    </a>
  );
}

