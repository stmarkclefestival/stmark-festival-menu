import { useState } from "react";
import SectionBanner from "./SectionBanner";

const CATEGORY_EMOJI = {
  Beverages: "🧃",
  "Signature Platters": "🍽️",
  "Salads & Sides": "🥗",
  "À La Carte": "🫓",
  Desserts: "🍮",
  "Egyptian Specials": "🌟",
  "Sandwiches & Feteer": "🥙",
};

export default function DetailView({ item, categoryName, categoryId }) {
  const emoji = CATEGORY_EMOJI[categoryName] || "🍴";

  return (
    <div className="animate-slide-up">
      {/* Hero */}
      {/* <div className="bg-dark-brown h-[180px] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 hatch-pattern" aria-hidden="true" />
        <div className="w-[100px] h-[100px] rounded-full bg-parchment-light flex items-center
                        justify-center text-[50px] border-4 border-gold relative z-10
                        shadow-[0_0_0_8px_rgba(184,146,42,0.2)]">
          {emoji}
        </div>
      </div> */}
      {item.img && (
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-[240px] object-cover"
        />
      )}

      {/* Body */}
      <div className="bg-cream px-5 pt-[22px] pb-10">
        <div className="mb-[18px]">
          <SectionBanner number={categoryId} title={categoryName} />
        </div>

        {/* Item name */}
        <h2
          className="font-display font-bold text-text-dark text-center leading-tight mb-3.5
                       text-[clamp(20px,5vw,26px)]"
        >
          {item.name}
          {item.suffix && (
            <span className="font-body font-normal text-[14px] text-mid-brown block mt-1">
              {item.suffix}
            </span>
          )}
        </h2>

        {/* Price badge */}
        <div className="flex justify-center mb-5">
          <span
            className="font-display font-black text-[28px] text-cream bg-dark-brown
                           px-7 py-1.5 rounded border-b-[3px] border-gold tracking-wide"
          >
            ${item.price.toFixed(2)}
          </span>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="flex-1 h-px bg-gold opacity-50" />
          <span className="text-gold text-[10px]">◆</span>
          <div className="flex-1 h-px bg-gold opacity-50" />
        </div>

        {/* Description */}
        {item.desc ? (
          <p className="font-body italic text-[15px] text-text-body leading-[1.75] text-center">
            {item.desc}
          </p>
        ) : (
          <p className="font-body italic text-[14px] text-mid-brown text-center opacity-70">
            Fresh, authentic, and made with care.
          </p>
        )}

        {/* Footer ornament */}
        <p
          className="mt-9 text-center font-display text-[10px] tracking-[3px] text-gold
                      uppercase opacity-80"
        >
          ✦ &nbsp; Authentic Egyptian Cuisine &nbsp; ✦
        </p>
      </div>
    </div>
  );
}
