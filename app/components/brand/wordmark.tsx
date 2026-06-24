
/**
 * LeaderCRM brand wordmark + mark (part of the Leader family).
 *
 * The mark is three stacked chevrons climbing — brand green, navy, blue from
 * bottom to top. The wordmark sets "Leader" in navy and "CRM" in green using
 * a bold geometric system font stack. Colors are hard-coded brand hexes rather
 * than CSS variables so the SVG renders identically wherever it is embedded
 * (dashboard chrome, the public card footer, OG snapshots).
 */

const NAVY = '#06163E';
const GREEN = '#5CAC23';
const BLUE = '#1862EA';

const GEOMETRIC_STACK =
  '"Geist", "Inter", "Helvetica Neue", Arial, system-ui, sans-serif';


/**
 * Three stacked chevrons climbing (green / navy / blue, bottom to top).
 * Standalone mark used as the small glyph in the public card footer.
 */
export function LeaderMark({
  size = 24,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="LeaderCRM"
      className={className}
    >
      {/* bottom chevron — green */}
      <path d="M10 38 L24 27 L38 38 L38 44 L24 33 L10 44 Z" fill={GREEN} />
      {/* middle chevron — navy */}
      <path d="M10 26 L24 15 L38 26 L38 32 L24 21 L10 32 Z" fill={NAVY} />
      {/* top chevron — blue */}
      <path d="M10 14 L24 3 L38 14 L38 20 L24 9 L10 20 Z" fill={BLUE} />
    </svg>
  );
}


/**
 * Full lockup: the official LeaderCRM wordmark (chevron mark + two-tone
 * "LeaderCRM" in the brand font). Served as a transparent SVG asset so the
 * exact brand typography renders crisply at any size. Aspect ratio ~5.6:1.
 */
export function Wordmark({
  height,
  className,
}: {
  /** Fixed pixel height. Omit to size via `className` (e.g. responsive `h-8 sm:h-9`). */
  height?: number;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static brand SVG, no next/image needed
    <img
      src="/brand/LeaderCRM_wordmark.svg"
      alt="LeaderCRM"
      style={{ width: 'auto', display: 'block', ...(height ? { height } : {}) }}
      className={className}
    />
  );
}
