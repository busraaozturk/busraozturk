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

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

export function FolderIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M3 6.5a1 1 0 0 1 1-1h4l1.6 1.8H20a1 1 0 0 1 1 1V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6.5Z" />
    </Icon>
  );
}

export function BookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M12 6.5c-1.6-1.1-4-1.6-6-1.2V17c2 -.4 4.4.1 6 1.2" />
      <path d="M12 6.5c1.6-1.1 4-1.6 6-1.2V17c-2-.4-4.4.1-6 1.2" />
      <path d="M12 6.5V18.2" />
    </Icon>
  );
}

export function BranchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <line x1="6" y1="4" x2="6" y2="14.5" />
      <circle cx="6" cy="18" r="2.2" />
      <circle cx="18" cy="6" r="2.2" />
      <path d="M18 8.2a6 6 0 0 1-6 6h-2" />
    </Icon>
  );
}

export function BracesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M8 4.5c-1.7 0-2.6.9-2.6 2.6v2.4c0 1-.5 1.5-1.4 1.5.9 0 1.4.5 1.4 1.5v2.4c0 1.7.9 2.6 2.6 2.6" />
      <path d="M16 4.5c1.7 0 2.6.9 2.6 2.6v2.4c0 1 .5 1.5 1.4 1.5-.9 0-1.4.5-1.4 1.5v2.4c0 1.7-.9 2.6-2.6 2.6" />
    </Icon>
  );
}

export function SeedlingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M12 21v-8.5" />
      <path d="M12 13c0-4.2 3-6.5 7.5-6.5 0 4.2-3.3 7-7.5 6.5Z" />
      <path d="M12 14c0-3.2-2.4-5.5-5.5-5.5-.3 3.1 2.1 5.8 5.5 5.5Z" />
    </Icon>
  );
}

export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M12 4.2 14 8.7l5 .6-3.7 3.4.9 4.9L12 15.2l-4.2 2.4.9-4.9-3.7-3.4 5-.6Z" />
    </Icon>
  );
}

export function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M12 19.5s-6.6-4.1-8.9-8.2C1.5 8.2 2.6 5.3 5.3 4.6c1.9-.5 3.6.4 4.7 2 1.1-1.6 2.8-2.5 4.7-2 2.7.7 3.8 3.6 2.2 6.7-2.3 4.1-8.9 8.2-8.9 8.2Z" />
    </Icon>
  );
}

export function RingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="7" />
    </Icon>
  );
}

export function MountainIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <circle cx="8" cy="8" r="1.6" />
      <path d="M3 18l5.5-7 3.7 4.6 2.3-3 6.5 5.4" />
    </Icon>
  );
}

export function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="8.2" r="3.2" />
      <path d="M5 19.5c1.2-3.6 3.9-5.5 7-5.5s5.8 1.9 7 5.5" />
    </Icon>
  );
}

export function CurvedArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M4 17c3-7.5 9-11.5 15.5-9.5" />
      <path d="M14 6.7l5.5.8-1.3 5.4" />
    </Icon>
  );
}

export function NoteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
      <path d="M14 3.5v4h4" />
      <path d="M9 12.5h6" />
      <path d="M9 16h6" />
    </Icon>
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
