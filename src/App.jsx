import { useRef, useState } from 'react';
import { menu } from './menuData';
import Header from './Header';
import CategoryCard from './CategoryCard';
import DetailView from './DetailView';
import ComingSoon from './ComingSoon';
import MapCard from './MapCard';
import MapView from './MapView';

// ─── Toggle this to switch what users see ───────────────────────────────────
const SHOW_MENU = true; // false = coming soon page | true = full menu
// ────────────────────────────────────────────────────────────────────────────

export default function App() {
  const [selected, setSelected] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const savedScroll = useRef(0);

  function handleItemClick(item, section) {
    savedScroll.current = window.scrollY;
    setSelected({ item, categoryName: section.category, categoryId: section.id });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function handleMapClick() {
    savedScroll.current = window.scrollY;
    setShowMap(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function handleBack() {
    setSelected(null);
    setShowMap(false);
    requestAnimationFrame(() => window.scrollTo({ top: savedScroll.current, behavior: 'instant' }));
  }

  return (
    <div className="max-w-[480px] mx-auto min-h-screen flex flex-col bg-parchment-bg
                    shadow-[0_0_40px_rgba(0,0,0,0.3)]">
      <Header
        selected={
          selected ? { category: selected.categoryName }
          : showMap ? { category: 'Festival Map' }
          : null
        }
        onBack={handleBack}
      />

      <main className="flex-1 flex flex-col">
        {!SHOW_MENU ? <ComingSoon /> : selected ? (
          <DetailView
            item={selected.item}
            categoryName={selected.categoryName}
            categoryId={selected.categoryId}
          />
        ) : showMap ? (
          <MapView />
        ) : (
          <div className="flex flex-col gap-3.5 px-3.5 pt-[18px] pb-8 animate-fade-in">
            <div className="flex items-center justify-center gap-1.5 -mb-1 text-mid-brown">
              <svg
                className="w-3.5 h-3.5 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
              <span className="font-body italic text-[12px]">Tap an item to view photo</span>
            </div>
            <MapCard onClick={handleMapClick} />
            {menu.map((section) => (
              <CategoryCard
                key={section.id}
                section={section}
                onItemClick={(item) => handleItemClick(item, section)}
              />
            ))}
          </div>
        )}
      </main>

      {/* <footer className="bg-dark-brown text-center px-5 pt-0 pb-3.5">
        <div className="h-0.5 bg-gold opacity-50 mb-3" />
        <p className="font-display text-[10px] tracking-[2px] text-gold uppercase">
          ✦ &nbsp; All prices in USD &nbsp; ✦ &nbsp; Tax not included &nbsp; ✦
        </p>
      </footer> */}
    </div>
  );
}
