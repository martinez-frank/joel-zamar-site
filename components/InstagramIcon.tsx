type InstagramIconProps = {
  className?: string;
};

export default function InstagramIcon({
  className = "h-5 w-5",
}: InstagramIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.6" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
