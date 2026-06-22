import SectionBanner from './SectionBanner';
import MenuItem from './MenuItem';

export default function CategoryCard({ section, onItemClick }) {
  return (
    <div className="bg-cream rounded-[4px] overflow-hidden border border-dark-brown/20
                    shadow-[2px_2px_0_rgba(61,43,31,0.12)]">
      <SectionBanner number={section.id} title={section.category} />
      <div className="px-3.5 pb-2.5 pt-1">
        {section.items.map((item) => (
          <MenuItem key={item.name} item={item} onClick={onItemClick} />
        ))}
      </div>
    </div>
  );
}
