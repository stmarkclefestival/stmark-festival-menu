export default function MenuItem({ item, onClick }) {
  return (
    <div
      onClick={() => onClick(item)}
      className="flex items-baseline gap-1.5 py-2.5 px-1 border-b border-dark-brown/15
                 last:border-b-0 cursor-pointer rounded active:bg-dark-brown/[0.06]
                 transition-colors"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      {/* Name + description */}
      <div className="flex-1 min-w-0">
        <span className="font-body font-semibold text-[15px] text-text-dark leading-snug">
          {item.name}
          {item.suffix && (
            <span className="font-normal text-[13px] text-mid-brown"> {item.suffix}</span>
          )}
          {item.img && (
            <svg
              className="inline-block w-[13px] h-[13px] ml-1 -mt-0.5 text-gold align-middle"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <title>Tap to view photo</title>
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          )}
        </span>
        {item.desc && (
          <p className="font-body italic text-[12px] text-mid-brown mt-0.5 leading-snug">
            {item.desc}
          </p>
        )}
      </div>

      {/* Dotted line */}
      <div className="dots-line" aria-hidden="true" />

      {/* Price */}
      <span className="font-display font-bold text-[14px] text-text-dark whitespace-nowrap flex-shrink-0">
        ${item.price.toFixed(2)}
      </span>

      {/* Chevron: signals the row is tappable */}
      <svg
        className="w-3.5 h-3.5 text-mid-brown/50 flex-shrink-0"
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
  );
}
