import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

const PlaceholderIcon = ({
  children,
  ...props
}: IconProps & { children: React.ReactNode }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {children}
  </svg>
);

export const MoonIcon = (props: IconProps) => (
  <PlaceholderIcon {...props}>
    <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
  </PlaceholderIcon>
);

export const SunIcon = (props: IconProps) => (
  <PlaceholderIcon {...props}>
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
  </PlaceholderIcon>
);

export const LinkIcon = (props: IconProps) => (
  <PlaceholderIcon {...props}>
    <path d="M10 14a4 4 0 0 0 5.66 0l3-3A4 4 0 0 0 13 5.34l-1.5 1.5" />
    <path d="M14 10a4 4 0 0 0-5.66 0l-3 3A4 4 0 0 0 11 18.66l1.5-1.5" />
  </PlaceholderIcon>
);
