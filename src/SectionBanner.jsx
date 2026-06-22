export default function SectionBanner({ number, title }) {
  return (
    <div className="mb-[18px]">
      <div className="bg-dark-brown clip-banner flex items-center justify-center gap-3 px-5 py-[10px]">
        <div className="w-1.5 h-1.5 bg-gold rotate-45 flex-shrink-0" />
        <span className="font-display font-bold text-cream uppercase tracking-[2px]
                         text-[clamp(13px,4vw,16px)] text-center">
          ({number}) {title}
        </span>
        <div className="w-1.5 h-1.5 bg-gold rotate-45 flex-shrink-0" />
      </div>
    </div>
  );
}
