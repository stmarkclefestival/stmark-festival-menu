export default function ComingSoon() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-8 py-16 text-center">
      <div className="mb-6 text-[56px]">🌟</div>

      <h1 className="font-display font-black text-dark-brown text-[clamp(26px,6vw,34px)] leading-tight mb-4">
        Festival Menu
        <span className="block text-gold">Coming Soon</span>
      </h1>

      <div className="flex items-center gap-2.5 my-6 w-full max-w-[260px]">
        <div className="flex-1 h-px bg-gold opacity-50" />
        <span className="text-gold text-[10px]">◆</span>
        <div className="flex-1 h-px bg-gold opacity-50" />
      </div>

      <p className="font-body italic text-mid-brown text-[15px] leading-relaxed max-w-[280px]">
        We're putting the finishing touches on our menu. Check back soon for authentic Egyptian cuisine!
      </p>

      <p className="mt-10 font-display text-[10px] tracking-[3px] text-gold uppercase opacity-70">
        ✦ &nbsp; St. Mark Coptic Orthodox Church &nbsp; ✦
      </p>
    </div>
  );
}
