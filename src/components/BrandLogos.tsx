import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const brands = [
  { name: "Volkswagen", logo: "/brands/volkswagen.png" },
  { name: "Fiat", logo: "/brands/fiat.webp" },
  { name: "GM", logo: "/brands/gm.jpg" },
  { name: "Ford", logo: "/brands/ford.svg" },
  { name: "Honda", logo: "/brands/honda.jpg" },
  { name: "Toyota", logo: "/brands/toyota.png" },
  { name: "Chevrolet", logo: "/brands/chevrolet.png" },
  { name: "Hyundai", logo: "/brands/hyundai.jpg" },
  { name: "Renault", logo: "/brands/renault.png" },
  { name: "Nissan", logo: "/brands/nissan.svg" },
];

const BrandLogos = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section ref={ref} className="py-10 md:py-14 border-t border-border/50">
      <div className="container px-4">
        <p className="text-center text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground/60 mb-8 md:mb-10 font-medium">
          Trabalhamos com as principais marcas
        </p>
        <div className="grid grid-cols-5 md:flex md:flex-wrap md:justify-center items-center gap-6 md:gap-x-12 md:gap-y-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 0.5, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ opacity: 1, scale: 1.08 }}
              className="flex items-center justify-center transition-all duration-300"
              title={brand.name}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-8 md:h-10 w-auto max-w-[60px] md:max-w-[80px] object-contain brightness-200 contrast-50"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
