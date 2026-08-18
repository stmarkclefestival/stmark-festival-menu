export default function MapCard({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-cream rounded-[4px] overflow-hidden border border-dark-brown/20
                shadow-[2px_2px_0_rgba(61,43,31,0.12)] cursor-pointer
                active:opacity-90 transition-opacity"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <div className="bg-dark-brown clip-banner flex items-center justify-center gap-3 px-5 py-[10px]">
        <div className="w-1.5 h-1.5 bg-gold rotate-45 flex-shrink-0" />
        <span className="font-display font-bold text-cream uppercase tracking-[2px]
                         text-[clamp(13px,4vw,16px)] text-center">
          Festival Map
        </span>
        <div className="w-1.5 h-1.5 bg-gold rotate-45 flex-shrink-0" />
      </div>

      <div className="relative">
        <img
          src="/stmark-festival-menu/images/Festival Map 2026.png"
          alt="Festival grounds map"
          className="w-full h-[130px] object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/80 via-dark-brown/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-1.5 pb-2.5">
          <span className="font-body text-[12px] tracking-wide text-parchment-light">
            Tap to view full map
          </span>
          <svg
            className="w-3.5 h-3.5 text-parchment-light"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
