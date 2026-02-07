import modulosEcu from "@/assets/modulos-ecu.png";
import painelAutomotivo from "@/assets/painel-automotivo.png";
import imobilizador from "@/assets/imobilizador.png";

export type ProductStatus = "Novo" | "Recondicionado" | "Programado";
export type ProductAvailability = "Disponível" | "Sob consulta" | "Indisponível";
export type ProductCategory = "ecu" | "paineis" | "imobilizadores";

export interface Product {
  id: string;
  category: ProductCategory;
  image: string;
  name: string;
  description: string;
  compatibility: string;
  brand: string;
  yearRange: string;
  status: ProductStatus;
  availability: ProductAvailability;
}

export interface CategoryInfo {
  slug: ProductCategory;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export const categories: CategoryInfo[] = [
  {
    slug: "ecu",
    title: "Módulos ECU",
    subtitle: "Injeção Eletrônica",
    description: "Unidades de controle do motor para todas as marcas e modelos. Programação e codificação por chassi inclusa.",
    image: modulosEcu,
  },
  {
    slug: "paineis",
    title: "Painéis Automotivos",
    subtitle: "Instrumentação Eletrônica",
    description: "Painéis de instrumentos digitais e analógicos. Reprogramação de hodômetro e calibração de sensores.",
    image: painelAutomotivo,
  },
  {
    slug: "imobilizadores",
    title: "Imobilizadores",
    subtitle: "Sistemas Anti-Furto",
    description: "Sistemas de imobilização e antifurto. Programação de chaves, transponders e módulos de conforto.",
    image: imobilizador,
  },
];

export const products: Product[] = [
  // === MÓDULOS ECU ===
  {
    id: "ecu-001",
    category: "ecu",
    image: modulosEcu,
    name: "Módulo ECU Bosch ME7.5.30",
    description: "Unidade de controle eletrônico para motor flex. Programação por chassi inclusa.",
    compatibility: "Gol G5 1.6 Flex",
    brand: "Volkswagen",
    yearRange: "2008-2012",
    status: "Recondicionado",
    availability: "Disponível",
  },
  {
    id: "ecu-002",
    category: "ecu",
    image: modulosEcu,
    name: "Módulo ECU IAW 4GF",
    description: "Módulo de injeção eletrônica Magneti Marelli. Testado em bancada.",
    compatibility: "Palio 1.0 Fire Flex",
    brand: "Fiat",
    yearRange: "2010-2015",
    status: "Novo",
    availability: "Disponível",
  },
  {
    id: "ecu-003",
    category: "ecu",
    image: modulosEcu,
    name: "Módulo ECU Delphi MT80",
    description: "ECU Delphi para motores 1.0 e 1.4. Codificação por chassi.",
    compatibility: "Corsa Classic 1.0 VHC",
    brand: "GM",
    yearRange: "2005-2013",
    status: "Programado",
    availability: "Disponível",
  },
  {
    id: "ecu-004",
    category: "ecu",
    image: modulosEcu,
    name: "Módulo ECU Bosch ME7.9.7",
    description: "Módulo para motor AP com injeção eletrônica. Revisado e testado.",
    compatibility: "Saveiro G4 1.6 Total Flex",
    brand: "Volkswagen",
    yearRange: "2006-2010",
    status: "Recondicionado",
    availability: "Sob consulta",
  },
  {
    id: "ecu-005",
    category: "ecu",
    image: modulosEcu,
    name: "Módulo ECU Continental SIM 32",
    description: "Unidade de controle para motor EtorQ. Programação e codificação.",
    compatibility: "Siena 1.6 16V E.torQ",
    brand: "Fiat",
    yearRange: "2010-2014",
    status: "Novo",
    availability: "Disponível",
  },
  {
    id: "ecu-006",
    category: "ecu",
    image: modulosEcu,
    name: "Módulo ECU Denso 275800",
    description: "ECU para motor i-VTEC Honda. Testado com garantia de funcionamento.",
    compatibility: "Honda Civic 1.8 Flex",
    brand: "Honda",
    yearRange: "2012-2016",
    status: "Recondicionado",
    availability: "Disponível",
  },

  // === PAINÉIS AUTOMOTIVOS ===
  {
    id: "painel-001",
    category: "paineis",
    image: painelAutomotivo,
    name: "Painel Gol G5 VDO",
    description: "Painel de instrumentos completo com hodômetro digital. Reset e calibração.",
    compatibility: "Gol G5 / Voyage G5",
    brand: "Volkswagen",
    yearRange: "2008-2013",
    status: "Recondicionado",
    availability: "Disponível",
  },
  {
    id: "painel-002",
    category: "paineis",
    image: painelAutomotivo,
    name: "Painel Palio Fire Siemens",
    description: "Painel analógico com display digital. Reprogramação de quilometragem.",
    compatibility: "Palio Fire / Siena Fire",
    brand: "Fiat",
    yearRange: "2004-2014",
    status: "Novo",
    availability: "Disponível",
  },
  {
    id: "painel-003",
    category: "paineis",
    image: painelAutomotivo,
    name: "Painel Corsa Classic",
    description: "Painel de instrumentos VDO para Corsa Classic. Revisão completa.",
    compatibility: "Corsa Classic / Celta",
    brand: "GM",
    yearRange: "2003-2012",
    status: "Recondicionado",
    availability: "Sob consulta",
  },
  {
    id: "painel-004",
    category: "paineis",
    image: painelAutomotivo,
    name: "Painel Uno Vivace",
    description: "Painel digital Magneti Marelli. Calibração de sensores inclusa.",
    compatibility: "Uno Vivace / Attractive",
    brand: "Fiat",
    yearRange: "2010-2016",
    status: "Programado",
    availability: "Disponível",
  },

  // === IMOBILIZADORES ===
  {
    id: "imob-001",
    category: "imobilizadores",
    image: imobilizador,
    name: "BSI Palio / Siena Delphi",
    description: "Body Computer (BSI) Delphi. Programação de chaves e transponders.",
    compatibility: "Palio / Siena / Strada",
    brand: "Fiat",
    yearRange: "2008-2016",
    status: "Programado",
    availability: "Disponível",
  },
  {
    id: "imob-002",
    category: "imobilizadores",
    image: imobilizador,
    name: "Imobilizador Gol G4/G5",
    description: "Módulo imobilizador com programação de chave. Sincronização com ECU.",
    compatibility: "Gol G4 / Gol G5 / Fox",
    brand: "Volkswagen",
    yearRange: "2006-2013",
    status: "Recondicionado",
    availability: "Disponível",
  },
  {
    id: "imob-003",
    category: "imobilizadores",
    image: imobilizador,
    name: "BCM Corsa / Celta",
    description: "Body Control Module GM. Desbloqueio e reprogramação de chaves.",
    compatibility: "Corsa / Celta / Prisma",
    brand: "GM",
    yearRange: "2005-2014",
    status: "Novo",
    availability: "Disponível",
  },
  {
    id: "imob-004",
    category: "imobilizadores",
    image: imobilizador,
    name: "Imobilizador Ford Ka / Fiesta",
    description: "Sistema PATS Ford. Programação de transponder e sincronização.",
    compatibility: "Ka / Fiesta / EcoSport",
    brand: "Ford",
    yearRange: "2008-2014",
    status: "Programado",
    availability: "Sob consulta",
  },
];

export const brands = [...new Set(products.map((p) => p.brand))].sort();
export const years = [...new Set(products.map((p) => p.yearRange))].sort();
