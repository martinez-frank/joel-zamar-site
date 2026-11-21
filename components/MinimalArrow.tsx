type MinimalArrowProps = {
  className?: string;
};

// Stroke-based arrow avoids emoji substitution on iOS and stays minimal on every platform.
export default function MinimalArrow({
  className = "h-5 w-5 shrink-0",
}: MinimalArrowProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.5 12h16" />
      <path d="m13.5 6 6 6-6 6" />
    </svg>
  );
}
