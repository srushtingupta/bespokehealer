export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'bath-salts' | 'bracelets' | 'geodes-clusters' | 'wall-hangings';
  categoryLabel: string;
  subcategory?: string;
  image: string;
  gallery: string[];
  shortDescription: string;
  description: string;
  price?: string;
  availability: 'In Stock' | 'Pre-order' | 'Handcrafted Upon Request';
  featured: boolean;
  whatsappMessage?: string;
}

export const productCategories = [
  { id: 'all', label: 'All Creations' },
  { id: 'bath-salts', label: 'Bath Salts' },
  { id: 'bracelets', label: 'Bracelets' },
  { id: 'geodes-clusters', label: 'Geodes, Clusters & More' },
  { id: 'wall-hangings', label: 'Wall Hangings & Frames' },
] as const;

export const productsData: Product[] = [
  // --- FEATURED BRACELET ---
  {
    id: "bracelet-love-focus",
    name: "Love & Focus Bracelet",
    slug: "love-focus-bracelet",
    category: "bracelets",
    categoryLabel: "Bracelets",
    image: "/love-focus-bracelet.jpg",
    gallery: [
      "/love-focus-bracelet.jpg"
    ],
    shortDescription: "Rose quartz, Clear quartz & Amethyst",
    description: "Rose quartz, Clear quartz & Amethyst",
    price: "550/-",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Love & Focus Bracelet (550/-). Please share order and delivery details."
  },
  {
    id: "bracelet-love",
    name: "Love Bracelet",
    slug: "love-bracelet",
    category: "bracelets",
    categoryLabel: "Bracelets",
    image: "/love-bracelet.jpg",
    gallery: [
      "/love-bracelet.jpg"
    ],
    shortDescription: "Rose quartz",
    description: "Rose quartz",
    price: "800/-",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Love Bracelet (800/-). Please share order and delivery details."
  },
  {
    id: "bracelet-amethyst",
    name: "Amethyst Bracelet",
    slug: "amethyst-bracelet",
    category: "bracelets",
    categoryLabel: "Bracelets",
    image: "/amethyst-bracelet.jpg",
    gallery: [
      "/amethyst-bracelet.jpg"
    ],
    shortDescription: "Amethyst",
    description: "Amethyst",
    price: "450/-",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Amethyst Bracelet (450/-). Please share order and delivery details."
  },
  {
    id: "bracelet-clear-quartz",
    name: "Clear Quartz Bracelet",
    slug: "clear-quartz-bracelet",
    category: "bracelets",
    categoryLabel: "Bracelets",
    image: "/clear-quartz-bracelet.jpg",
    gallery: [
      "/clear-quartz-bracelet.jpg"
    ],
    shortDescription: "Clear quartz",
    description: "Clear quartz",
    price: "550/-",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Clear Quartz Bracelet (550/-). Please share order and delivery details."
  },
  {
    id: "bracelet-citrine",
    name: "Citrine Bracelet",
    slug: "citrine-bracelet",
    category: "bracelets",
    categoryLabel: "Bracelets",
    image: "/citrine-bracelet.jpg",
    gallery: [
      "/citrine-bracelet.jpg"
    ],
    shortDescription: "Citrine",
    description: "Citrine",
    price: "400/-",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Citrine Bracelet (400/-). Please share order and delivery details."
  },
  {
    id: "bracelet-sulemani-hakik",
    name: "Sulemani Hakik Bracelet",
    slug: "sulemani-hakik-bracelet",
    category: "bracelets",
    categoryLabel: "Bracelets",
    image: "/sulemani-hakik-bracelet.jpg",
    gallery: [
      "/sulemani-hakik-bracelet.jpg"
    ],
    shortDescription: "Protection",
    description: "Sulemani hakik bracelet for protection",
    price: "650/-",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Sulemani Hakik Bracelet (650/-). Please share order and delivery details."
  },
  {
    id: "bracelet-money-magnet",
    name: "Money Magnet Bracelet",
    slug: "money-magnet-bracelet",
    category: "bracelets",
    categoryLabel: "Bracelets",
    image: "/money-magnet-bracelet.jpg",
    gallery: [
      "/money-magnet-bracelet.jpg"
    ],
    shortDescription: "Garnet & Malachite",
    description: "Garnet & Malachite Bracelet",
    price: "1250/-",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Money Magnet Bracelet (1250/-). Please share order and delivery details."
  },

  // --- BATH SALTS ---
  {
    id: "salt-rose",
    name: "Rose Bath Salt",
    slug: "rose-bath-salt",
    category: "bath-salts",
    categoryLabel: "Bath Salts",
    image: "/rose-bath-salt.jpg",
    gallery: [
      "/rose-bath-salt.jpg"
    ],
    shortDescription: "Brings emotional peace • Infused with vitamin E",
    description: "Brings emotional peace • Infused with vitamin E",
    price: "200/- (250gms)",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Rose Bath Salt 200/- (250gms). Please share order and delivery details."
  },
  {
    id: "salt-peppermint-eucalyptus",
    name: "Peppermint & Eucalyptus Bath Salt",
    slug: "peppermint-eucalyptus-bath-salt",
    category: "bath-salts",
    categoryLabel: "Bath Salts",
    image: "/peppermint-eucalyptus-bath-salt.jpg",
    gallery: [
      "/peppermint-eucalyptus-bath-salt.jpg"
    ],
    shortDescription: "Enhances mental clarity & relieves stress",
    description: "Enhances mental clarity & relieves stress",
    price: "200/- (250gms)",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Peppermint & Eucalyptus Bath Salt 200/- (250gms). Please share order and delivery details."
  },

  // --- GEODES, CLUSTERS & MORE ---
  {
    id: "selenite-charging-plate",
    name: "Selenite Plate to Charge Crystals",
    slug: "selenite-plate-to-charge-crystals",
    category: "geodes-clusters",
    categoryLabel: "Geodes, Clusters & More",
    subcategory: "Charging Plate",
    image: "/selenite-charging-plate.jpg",
    gallery: [
      "/selenite-charging-plate.jpg"
    ],
    shortDescription: "Sacred Flower of Life engraved selenite plate to cleanse & charge crystals",
    description: "Crafted from genuine translucent Moroccan selenite engraved with the sacred Flower of Life geometry. Selenite is a powerful self-cleansing crystal that continuously clears stagnant vibrations and recharges your crystal bracelets, stones, and spiritual jewelry.",
    price: "350/-",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Selenite Plate to Charge Crystals (350/-). Please share order and delivery details."
  },
  {
    id: "geode-wish-cave",
    name: "Wish Cave",
    slug: "wish-cave",
    category: "geodes-clusters",
    categoryLabel: "Geodes, Clusters & More",
    image: "/wish-cave.jpg",
    gallery: [
      "/wish-cave.jpg"
    ],
    shortDescription: "Wish cave",
    description: "Wish cave",
    price: "1000/-",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Wish Cave (1000/-). Please share order and delivery details."
  },
  {
    id: "geode-amethyst",
    name: "Amethyst",
    slug: "amethyst-cluster",
    category: "geodes-clusters",
    categoryLabel: "Geodes, Clusters & More",
    image: "/amethyst-cluster.jpg",
    gallery: [
      "/amethyst-cluster.jpg"
    ],
    shortDescription: "Amethyst (305gms)",
    description: "Amethyst (305gms)",
    price: "1677/- (305gms)",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Amethyst 1677/- (305gms). Please share order and delivery details."
  },
  {
    id: "geode-citrine",
    name: "Citrine",
    slug: "citrine-cluster",
    category: "geodes-clusters",
    categoryLabel: "Geodes, Clusters & More",
    image: "/citrine-cluster.jpg",
    gallery: [
      "/citrine-cluster.jpg"
    ],
    shortDescription: "Citrine (168gms)",
    description: "Citrine (168gms)",
    price: "1176/- (168gms)",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Citrine 1176/- (168gms). Please share order and delivery details."
  },
  {
    id: "geode-amethyst-264g",
    name: "Amethyst",
    slug: "amethyst-geode-264g",
    category: "geodes-clusters",
    categoryLabel: "Geodes, Clusters & More",
    image: "/amethyst-geode-264g.jpg",
    gallery: [
      "/amethyst-geode-264g.jpg"
    ],
    shortDescription: "Amethyst (264gms)",
    description: "Amethyst (264gms)",
    price: "1056/- (264gms)",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Amethyst 1056/- (264gms). Please share order and delivery details."
  },
  {
    id: "geode-citrine-317g",
    name: "Citrine",
    slug: "citrine-cluster-317g",
    category: "geodes-clusters",
    categoryLabel: "Geodes, Clusters & More",
    image: "/citrine-cluster-317g.jpg",
    gallery: [
      "/citrine-cluster-317g.jpg"
    ],
    shortDescription: "Citrine (317gms)",
    description: "Citrine (317gms)",
    price: "2219/- (317gms)",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Citrine 2219/- (317gms). Please share order and delivery details."
  },
  {
    id: "geode-black-tourmaline-100g",
    name: "Black Tourmaline",
    slug: "black-tourmaline-100g",
    category: "geodes-clusters",
    categoryLabel: "Geodes, Clusters & More",
    image: "/black-tourmaline-100g.jpg",
    gallery: [
      "/black-tourmaline-100g.jpg"
    ],
    shortDescription: "Black Tourmaline (100gms)",
    description: "Black Tourmaline (100gms)",
    price: "300/- (100gms)",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Black Tourmaline 300/- (100gms). Please share order and delivery details."
  },
  {
    id: "geode-raw-rose-quartz-114g",
    name: "Raw Rose Quartz",
    slug: "raw-rose-quartz-114g",
    category: "geodes-clusters",
    categoryLabel: "Geodes, Clusters & More",
    image: "/raw-rose-quartz-114g.jpg",
    gallery: [
      "/raw-rose-quartz-114g.jpg"
    ],
    shortDescription: "Raw Rose Quartz (114gms)",
    description: "Raw Rose Quartz (114gms)",
    price: "565/- (114gms)",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Raw Rose Quartz 565/- (114gms). Please share order and delivery details."
  },
  {
    id: "geode-amethyst-250g",
    name: "Amethyst",
    slug: "amethyst-cluster-250g",
    category: "geodes-clusters",
    categoryLabel: "Geodes, Clusters & More",
    image: "/amethyst-cluster-250g.jpg",
    gallery: [
      "/amethyst-cluster-250g.jpg"
    ],
    shortDescription: "Amethyst (250gms)",
    description: "Amethyst (250gms)",
    price: "1375/- (250gms)",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Amethyst 1375/- (250gms). Please share order and delivery details."
  },
  {
    id: "geode-black-tourmaline-450g",
    name: "Black Tourmaline",
    slug: "black-tourmaline-450g",
    category: "geodes-clusters",
    categoryLabel: "Geodes, Clusters & More",
    image: "/black-tourmaline-450g.jpg",
    gallery: [
      "/black-tourmaline-450g.jpg"
    ],
    shortDescription: "Black Tourmaline (450gms)",
    description: "Black Tourmaline (450gms)",
    price: "1350/- (450gms)",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Black Tourmaline 1350/- (450gms). Please share order and delivery details."
  },
  {
    id: "geode-black-tourmaline-423g",
    name: "Black Tourmaline",
    slug: "black-tourmaline-423g",
    category: "geodes-clusters",
    categoryLabel: "Geodes, Clusters & More",
    image: "/black-tourmaline-423g.jpg",
    gallery: [
      "/black-tourmaline-423g.jpg"
    ],
    shortDescription: "Black Tourmaline (423gms)",
    description: "Black Tourmaline (423gms)",
    price: "1269/- (423gms)",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Black Tourmaline 1269/- (423gms). Please share order and delivery details."
  },

  // --- WALL HANGINGS & FRAMES ---
  {
    id: "frame-7-horses-pyrite",
    name: "7 Horses Pyrite Frame",
    slug: "7-horses-pyrite-frame",
    category: "wall-hangings",
    categoryLabel: "Frames & Hangings",
    subcategory: "Vastu & Prosperity Frame",
    image: "/7-horses-pyrite-frame.jpg",
    gallery: [
      "/7-horses-pyrite-frame.jpg"
    ],
    shortDescription: "Natural shimmering pyrite crystal base with 7 golden running horses",
    description: "Handcrafted with a genuine shimmering pyrite crystal base featuring 7 golden galloping horses under a radiant sun. In Vastu and crystal healing, pyrite is the ultimate stone of wealth and manifestation, while the 7 running horses symbolize rapid victory, relentless momentum, and unyielding career and financial breakthroughs.",
    price: "950/-",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the 7 Horses Pyrite Frame (950/-). Please share order and delivery details."
  }
];
