const brands = [
  { name: "Volkswagen", svg: (
    <svg viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10">
      <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M24 6 L17 24 L24 20 L31 24 L24 6Z M24 42 L17 24 L24 28 L31 24 L24 42Z" />
    </svg>
  )},
  { name: "Fiat", svg: (
    <svg viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10">
      <rect x="4" y="14" width="40" height="20" rx="10" fill="none" stroke="currentColor" strokeWidth="2.5"/>
      <text x="24" y="29" textAnchor="middle" fontSize="13" fontWeight="700" fontFamily="sans-serif" fill="currentColor">FIAT</text>
    </svg>
  )},
  { name: "GM", svg: (
    <svg viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10">
      <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2.5"/>
      <text x="24" y="30" textAnchor="middle" fontSize="14" fontWeight="700" fontFamily="sans-serif" fill="currentColor">GM</text>
    </svg>
  )},
  { name: "Ford", svg: (
    <svg viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10">
      <ellipse cx="24" cy="24" rx="22" ry="14" fill="none" stroke="currentColor" strokeWidth="2.5"/>
      <text x="24" y="29" textAnchor="middle" fontSize="14" fontWeight="600" fontStyle="italic" fontFamily="serif" fill="currentColor">Ford</text>
    </svg>
  )},
  { name: "Honda", svg: (
    <svg viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10">
      <rect x="4" y="12" width="40" height="24" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5"/>
      <text x="24" y="29" textAnchor="middle" fontSize="12" fontWeight="700" fontFamily="sans-serif" fill="currentColor">HONDA</text>
    </svg>
  )},
  { name: "Toyota", svg: (
    <svg viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10">
      <ellipse cx="24" cy="24" rx="22" ry="16" fill="none" stroke="currentColor" strokeWidth="2.5"/>
      <ellipse cx="24" cy="24" rx="14" ry="9" fill="none" stroke="currentColor" strokeWidth="2"/>
      <ellipse cx="24" cy="24" rx="6" ry="16" fill="none" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )},
  { name: "Chevrolet", svg: (
    <svg viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10">
      <rect x="4" y="16" width="40" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5"/>
      <rect x="10" y="20" width="28" height="8" rx="1" fill="currentColor" opacity="0.3"/>
      <line x1="18" y1="16" x2="14" y2="32" stroke="currentColor" strokeWidth="2"/>
      <line x1="30" y1="16" x2="34" y2="32" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )},
  { name: "Hyundai", svg: (
    <svg viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10">
      <ellipse cx="24" cy="24" rx="22" ry="16" fill="none" stroke="currentColor" strokeWidth="2.5"/>
      <text x="24" y="29" textAnchor="middle" fontSize="11" fontWeight="700" fontStyle="italic" fontFamily="sans-serif" fill="currentColor">H</text>
    </svg>
  )},
  { name: "Renault", svg: (
    <svg viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10">
      <path d="M24 4 L42 24 L24 44 L6 24 Z" fill="none" stroke="currentColor" strokeWidth="2.5"/>
      <path d="M24 12 L34 24 L24 36 L14 24 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )},
  { name: "Nissan", svg: (
    <svg viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10">
      <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="2.5"/>
      <rect x="6" y="19" width="36" height="10" rx="5" fill="currentColor" opacity="0.15"/>
      <text x="24" y="28" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="sans-serif" fill="currentColor">NISSAN</text>
    </svg>
  )},
];

const BrandLogos = () => {
  return (
    <section className="py-16 border-t border-border">
      <div className="container px-4">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-10">
          Trabalhamos com as principais marcas
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors duration-300"
              title={brand.name}
            >
              {brand.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
