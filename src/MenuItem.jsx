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
    </div>
  );
}
