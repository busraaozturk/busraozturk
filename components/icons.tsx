import type { SVGProps } from "react";

/** Shared stroke-icon defaults matching the design's 1.6px sage strokes. */
function Icon({ children, ...props }: SVGProps<SVGSVGElement> & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

export function CodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M9 6L4 12l5 6" />
      <path d="M15 6l5 6-5 6" />
    </Icon>
  );
}

export function PaletteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M12 3a9 9 0 1 0 0 18c1.4 0 1.9-.7 1.9-1.8 0-1-.9-1.3-.9-2.6 0-1 .8-1.6 2-1.6h1.6A4.4 4.4 0 0 0 21 10.9 9 9 0 0 0 12 3Z" />
      <circle cx="8" cy="10.5" r="1" />
      <circle cx="12" cy="8" r="1" />
      <circle cx="16" cy="10.5" r="1" />
    </Icon>
  );
}

export function DatabaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </Icon>
  );
}

export function WrenchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M14.7 9.3 19 5l1 1-1.5 1.5" />
      <path d="M9.3 14.7 5 19l-1-1 1.5-1.5" />
      <path d="M14 6l4 4" />
      <rect x="4.5" y="13.5" width="6" height="6" rx="1" transform="rotate(-45 7.5 16.5)" />
    </Icon>
  );
}

export function EnvelopeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </Icon>
  );
}

export function NetworkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <circle cx="6" cy="12" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
      <circle cx="18" cy="18" r="2.2" />
      <path d="M8 11l8-4" />
      <path d="M8 13l8 4" />
    </Icon>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
      <path d="M4 7h16" strokeLinecap="round" />
      <path d="M4 12h16" strokeLinecap="round" />
      <path d="M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
      <path d="M6 6l12 12" strokeLinecap="round" />
      <path d="M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export function FileIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 56 64" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 4h30l14 14v42a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
        fill="currentColor"
      />
      <path d="M36 4v14h14" fill="none" stroke="var(--color-primary)" strokeWidth={1.5} />
      <line x1="12" y1="34" x2="40" y2="34" stroke="var(--color-primary)" strokeWidth={2} />
      <line x1="12" y1="42" x2="40" y2="42" stroke="var(--color-primary)" strokeWidth={2} />
      <line x1="12" y1="50" x2="32" y2="50" stroke="var(--color-primary)" strokeWidth={2} />
    </svg>
  );
}
