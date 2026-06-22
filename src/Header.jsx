export default function Header({ selected, onBack }) {
  return (
    <header className="bg-dark-brown text-center px-5 pb-5">
      {/* Striped top border */}
      <div className="stripe-top h-[5px] mb-[18px]" />

      {selected && (
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 bg-white/10 border border-gold/40
                     text-parchment-light font-body text-[13px] px-4 py-1.5 rounded-full
                     mb-3 transition-colors active:bg-white/20 cursor-pointer"
        >
          <span className="text-base leading-none">◂</span>
          Back to Menu
        </button>
      )}

      <p className="font-body text-[11px] tracking-[4px] uppercase text-gold-light mb-1.5">
        Egyptian Food Festival
      </p>
      <h1 className="font-display font-black text-cream uppercase tracking-wider leading-tight
                     text-[clamp(22px,6vw,32px)]">
        {selected ? selected.category : 'Our Menu'}
      </h1>

      <div className="text-gold text-[10px] tracking-[8px] my-2 opacity-80">✦ ✦ ✦</div>

      {/* Gold bottom line */}
      <div className="h-[3px] bg-gold opacity-60 mt-[18px]" />
    </header>
  );
}
