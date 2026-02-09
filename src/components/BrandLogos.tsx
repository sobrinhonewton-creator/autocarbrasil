const brands = [
  { name: "Volkswagen", logo: "/brands/volkswagen.svg" },
  { name: "Fiat", logo: "/brands/fiat.svg" },
  { name: "GM", logo: "/brands/gm.svg" },
  { name: "Ford", logo: "/brands/ford.svg" },
  { name: "Honda", logo: "/brands/honda.svg" },
  { name: "Toyota", logo: "/brands/toyota.svg" },
  { name: "Chevrolet", logo: "/brands/chevrolet.svg" },
  { name: "Hyundai", logo: "/brands/hyundai.svg" },
  { name: "Renault", logo: "/brands/renault.svg" },
  { name: "Nissan", logo: "/brands/nissan.svg" },
];

const BrandLogos = () => {
  return (
    <section className="py-12 md:py-16 border-t border-border">
      <div className="container px-4">
        <p className="text-center text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8 md:mb-10">
          Trabalhamos com as principais marcas
        </p>
        <div className="grid grid-cols-5 md:flex md:flex-wrap md:justify-center items-center gap-6 md:gap-x-10 md:gap-y-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center opacity-40 hover:opacity-70 transition-opacity duration-300 grayscale brightness-200"
              title={brand.name}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-8 md:h-10 w-auto max-w-[60px] md:max-w-[80px] object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
