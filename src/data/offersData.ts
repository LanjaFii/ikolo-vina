// src/data/offersData.ts
export interface Offer {
  id: number;
  title: string;
  shortDescription: string;
  icon: string;
  image: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
}

export const offersData: Offer[] = [
  {
    id: 1,
    title: "Nature Wellness",
    shortDescription: "Expériences de bien-être inspirées de la nature malgache pour les hôtels et centres SPA",
    icon: "🌿",
    image: "/src/assets/offers/natureWellness.png",
    fullDescription:
      "Nous concevons des expériences de bien-être sur mesure pour les hôtels, resorts et centres SPA, en valorisant les plantes médicinales et les huiles essentielles typiquement malgaches. Une alliance entre nature, tradition et détente pour offrir à vos clients un moment d’exception.",
    features: [
      "Formulation de soins à base de plantes endémiques (ravintsara, katrafay, gingembre, ylang-ylang…)",
      "Création de rituels SPA sur mesure",
      "Fourniture d’huiles essentielles et produits naturels locaux",
      "Formation du personnel hôtelier aux soins bien-être",
      "Design d’espace détente et ambiance sensorielle"
    ],
    benefits: [
      "Valorisation du patrimoine botanique malgache",
      "Offre touristique haut de gamme et différenciante",
      "Approche 100% naturelle et écoresponsable",
      "Partenariat avec des producteurs locaux",
      "Fidélisation et satisfaction client renforcées"
    ]
  },
  {
    id: 2,
    title: "Communication Digitale",
    shortDescription: "Développement de la visibilité en ligne adaptée au marché malgache et international",
    icon: "💻",
    image: "/src/assets/offers/online.png",
    fullDescription:
      "Nous aidons les entreprises et organisations à se démarquer sur le web à travers des stratégies digitales percutantes et adaptées au contexte local, tout en visant une audience nationale et internationale.",
    features: [
      "Gestion de réseaux sociaux (Facebook, Instagram, LinkedIn, TikTok…)",
      "Création de contenus visuels et vidéos engageants",
      "Référencement naturel (SEO) pour sites en français et malgache",
      "Campagnes publicitaires locales et Google Ads",
      "Analyse des performances et reporting"
    ],
    benefits: [
      "Meilleure notoriété en ligne",
      "Visibilité accrue sur le marché local et régional",
      "Contenus alignés à la culture malgache",
      "Stratégies mesurables et efficaces",
      "Croissance de la communauté digitale"
    ]
  },
  {
    id: 3,
    title: "Organisation d'Événements",
    shortDescription: "Création d’événements professionnels et promotionnels à fort impact",
    icon: "🎯",
    image: "/src/assets/offers/events.png",
    fullDescription:
      "Nous concevons et réalisons des événements institutionnels, corporatifs et promotionnels qui reflètent l’identité de votre marque, tout en valorisant le savoir-faire local.",
    features: [
      "Événements institutionnels (forums, conférences, séminaires)",
      "Lancements de produits et expositions commerciales",
      "Événements culturels et promotionnels",
      "Logistique complète et coordination terrain",
      "Décoration et scénographie sur mesure"
    ],
    benefits: [
      "Renforcement de la notoriété de la marque",
      "Expérience immersive et mémorable",
      "Mise en valeur de l’identité malgache",
      "Réseautage professionnel facilité",
      "Organisation clé en main"
    ]
  },
  {
    id: 4,
    title: "Appui à l’Entrepreneuriat",
    shortDescription: "Accompagnement des jeunes entreprises et porteurs de projets à Madagascar",
    icon: "🚀",
    image: "/src/assets/offers/enterprise.png",
    fullDescription:
      "Nous accompagnons les entrepreneurs, coopératives et startups malgaches dans la structuration, le financement et le développement durable de leurs activités.",
    features: [
      "Étude de faisabilité et business model",
      "Formation en gestion et marketing",
      "Mise en relation avec investisseurs et bailleurs",
      "Appui à la digitalisation et à la formalisation",
      "Mentorat et suivi continu"
    ],
    benefits: [
      "Renforcement des capacités entrepreneuriales",
      "Accès facilité au financement",
      "Réseau d’experts et de partenaires",
      "Croissance durable et inclusive",
      "Création d’emplois locaux"
    ]
  },
  {
    id: 5,
    title: "Accompagnement RSE",
    shortDescription: "Intégration de pratiques responsables adaptées au contexte malgache",
    icon: "🌍",
    image: "/src/assets/offers/rse.png",
    fullDescription:
      "Nous aidons les entreprises à concevoir et mettre en œuvre des stratégies RSE ancrées dans la réalité du territoire, conciliant performance économique, impact social et respect de l’environnement.",
    features: [
      "Diagnostic et stratégie RSE adaptée au secteur",
      "Appui à la mise en place de programmes sociaux et environnementaux",
      "Formation et sensibilisation des équipes",
      "Partenariats avec ONG et acteurs locaux",
      "Suivi et communication des impacts"
    ],
    benefits: [
      "Réputation responsable et crédible",
      "Engagement concret pour les communautés locales",
      "Conformité aux standards internationaux",
      "Fidélisation des employés et partenaires",
      "Contribution au développement durable de Madagascar"
    ]
  }
];
