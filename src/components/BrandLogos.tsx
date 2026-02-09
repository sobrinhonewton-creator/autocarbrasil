import { motion } from "framer-motion";

const brands = [
  {
    name: "Volkswagen",
    color: "#001E50",
    svg: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="8"/>
        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="4"/>
        <path d="M62 45 L100 135 L138 45" fill="none" stroke="currentColor" strokeWidth="8" strokeLinejoin="round"/>
        <path d="M72 155 L100 85 L128 155" fill="none" stroke="currentColor" strokeWidth="8" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Fiat",
    color: "#8B1A1A",
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect x="5" y="5" width="190" height="110" rx="55" fill="none" stroke="currentColor" strokeWidth="7"/>
        <text x="100" y="78" textAnchor="middle" fontSize="52" fontWeight="700" fontFamily="serif" fill="currentColor" letterSpacing="6">FIAT</text>
      </svg>
    ),
  },
  {
    name: "Chevrolet",
    color: "#D4AF37",
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect x="5" y="20" width="190" height="80" rx="4" fill="none" stroke="currentColor" strokeWidth="6"/>
        <path d="M50 38 L30 82 L80 82 L100 38 Z" fill="currentColor" opacity="0.3"/>
        <path d="M100 38 L80 82 L150 82 L170 38 Z" fill="currentColor" opacity="0.15"/>
        <line x1="50" y1="20" x2="30" y2="100" stroke="currentColor" strokeWidth="6"/>
        <line x1="100" y1="20" x2="80" y2="100" stroke="currentColor" strokeWidth="6"/>
        <line x1="150" y1="20" x2="170" y2="100" stroke="currentColor" strokeWidth="6"/>
      </svg>
    ),
  },
  {
    name: "Ford",
    color: "#003478",
    svg: (
      <svg viewBox="0 0 220 140" className="w-full h-full">
        <ellipse cx="110" cy="70" rx="105" ry="65" fill="currentColor" opacity="0.1"/>
        <ellipse cx="110" cy="70" rx="105" ry="65" fill="none" stroke="currentColor" strokeWidth="6"/>
        <text x="110" y="88" textAnchor="middle" fontSize="56" fontWeight="500" fontStyle="italic" fontFamily="'Times New Roman', serif" fill="currentColor">Ford</text>
      </svg>
    ),
  },
  {
    name: "Honda",
    color: "#CC0000",
    svg: (
      <svg viewBox="0 0 200 140" className="w-full h-full">
        <path d="M50 20 L55 5 L145 5 L150 20 L150 120 L145 135 L55 135 L50 120 Z" fill="none" stroke="currentColor" strokeWidth="6"/>
        <text x="100" y="85" textAnchor="middle" fontSize="32" fontWeight="700" fontFamily="sans-serif" fill="currentColor" letterSpacing="1">HONDA</text>
      </svg>
    ),
  },
  {
    name: "Toyota",
    color: "#EB0A1E",
    svg: (
      <svg viewBox="0 0 200 140" className="w-full h-full">
        <ellipse cx="100" cy="70" rx="95" ry="65" fill="none" stroke="currentColor" strokeWidth="5"/>
        <ellipse cx="100" cy="70" rx="60" ry="38" fill="none" stroke="currentColor" strokeWidth="5"/>
        <ellipse cx="100" cy="70" rx="25" ry="65" fill="none" stroke="currentColor" strokeWidth="5"/>
      </svg>
    ),
  },
  {
    name: "Hyundai",
    color: "#002C5F",
    svg: (
      <svg viewBox="0 0 200 140" className="w-full h-full">
        <ellipse cx="100" cy="70" rx="95" ry="65" fill="none" stroke="currentColor" strokeWidth="5"/>
        <path d="M55 105 C65 70, 85 45, 100 40 C115 45, 135 70, 145 105" fill="none" stroke="currentColor" strokeWidth="7"/>
        <path d="M55 35 C65 70, 85 95, 100 100 C115 95, 135 70, 145 35" fill="none" stroke="currentColor" strokeWidth="7"/>
      </svg>
    ),
  },
  {
    name: "Renault",
    color: "#FFCC00",
    svg: (
      <svg viewBox="0 0 160 200" className="w-full h-full">
        <path d="M80 5 L155 55 L155 145 L80 195 L5 145 L5 55 Z" fill="none" stroke="currentColor" strokeWidth="7"/>
        <path d="M80 35 L130 70 L130 130 L80 165 L30 130 L30 70 Z" fill="none" stroke="currentColor" strokeWidth="4"/>
      </svg>
    ),
  },
  {
    name: "Nissan",
    color: "#C3002F",
    svg: (
      <svg viewBox="0 0 200 140" className="w-full h-full">
        <circle cx="100" cy="70" r="65" fill="none" stroke="currentColor" strokeWidth="5"/>
        <rect x="30" y="52" width="140" height="36" rx="18" fill="currentColor" opacity="0.12"/>
        <text x="100" y="80" textAnchor="middle" fontSize="24" fontWeight="700" fontFamily="sans-serif" fill="currentColor" letterSpacing="4">NISSAN</text>
      </svg>
    ),
  },
  {
    name: "GM",
    color: "#0170CE",
    svg: (
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <rect x="10" y="10" width="180" height="180" rx="20" fill="none" stroke="currentColor" strokeWidth="6"/>
        <text x="100" y="125" textAnchor="middle" fontSize="72" fontWeight="300" fontFamily="sans-serif" fill="currentColor" letterSpacing="2">gm</text>
        <line x1="10" y1="135" x2="190" y2="135" stroke="currentColor" strokeWidth="3"/>
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 200, damping: 20 },
  },
};

const BrandLogos = () => {
  return (
    <section className="py-12 md:py-16 border-t border-border overflow-hidden">
      <div className="container px-4">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8 md:mb-10"
        >
          Trabalhamos com as principais marcas
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-5 md:flex md:flex-wrap md:justify-center items-center gap-6 md:gap-x-10 md:gap-y-6"
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.15,
                transition: { type: "spring", stiffness: 400, damping: 15 },
              }}
              className="flex items-center justify-center cursor-pointer"
              style={{ color: brand.color }}
              title={brand.name}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 opacity-60 hover:opacity-100 transition-opacity duration-300">
                {brand.svg}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandLogos;
