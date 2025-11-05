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
    shortDescription: "Programme phare pour révéler l'essence et la performance de votre centre de bien-être ou spa",
    icon: "🌿",
    image: "/assets/offers/natureWellness.png",
    fullDescription:
      "Découvrez notre programme phare 'Nature & Wellness Consulting', conçu pour révéler l'essence et la performance de votre centre de bien-être ou spa à travers les plantes médicinales et aromatiques et les savoirs durables de Madagascar. Inspiré par la biodiversité exceptionnelle de l'île, ce programme transforme les espaces wellness en expériences immersives, sensorielles et régénérantes, alignées sur les tendances holistiques mondiales.",
    features: [
      "Diagnostic initial et audit de vos installations",
      "Optimisation architecturale des lieux - ambiance signature",
      "Formation & ateliers pour thérapeutes",
      "Marketing & communication - études et mise en œuvre",
      "Leadership & management d'équipe",
      "Recherche & développement de produits de soins",
      "Suivi & évaluation des performances"
    ],
    benefits: [
      "Modernisation innovante de vos services avec des soins naturels",
      "Environnement rassurant et attractif pour votre clientèle",
      "Intégration de thérapies régénérantes et produits naturels",
      "Boost de la rentabilité et attraction de nouvelles niches",
      "Promotion d'une santé holistique et réduction d'impact environnemental"
    ]
  },
  {
    id: 2,
    title: "Communication Digitale",
    shortDescription: "Renforcement de la présence web et réseaux sociaux pour une visibilité accrue",
    icon: "💻",
    image: "/assets/offers/online.png",
    fullDescription:
      "Objectif : Renforcer la présence des PME sur le web et les réseaux sociaux pour une visibilité accrue et un engagement durable. Nous proposons des stratégies digitales complètes incluant audit, création de contenu, campagnes ciblées et formation pour autonomiser vos équipes.",
    features: [
      "Audit de communication numérique pour identifier forces et faiblesses",
      "Création et animation de pages professionnelles (Facebook, LinkedIn, Instagram, TikTok, YouTube)",
      "Campagnes de notoriété et d'engagement avec storytelling inspiré de la nature malgache",
      "Création de site web clé en main adapté à vos besoins",
      "Formation interne à la gestion des réseaux sociaux et marketing digital",
      "Reporting mensuel avec métriques (reach, engagement)"
    ],
    benefits: [
      "Augmentation de l'audience de 30-50% en 6 mois",
      "Stratégie digitale personnalisée et calendrier éditorial",
      "Kits graphiques professionnels (templates, visuels)",
      "Promotion de messages éco-responsables",
      "Autonomisation de vos équipes en gestion digitale"
    ]
  },
  {
    id: 3,
    title: "Événementiel",
    shortDescription: "Organisation d'événements sur mesure pour développer votre réseau et crédibilité",
    icon: "🎯",
    image: "/assets/offers/events.png",
    fullDescription:
      "Objectif : Permettre aux PME de se faire connaître, de développer leur réseau et de renforcer leur crédibilité via des événements sur mesure. Nous concevons et organisons des événements adaptés à vos besoins avec gestion complète de la logistique à la communication.",
    features: [
      "Conception et organisation d'événements adaptés : foires, forums, portes ouvertes, conférences",
      "Gestion complète : logistique, scénographie inspirée de la nature, animation",
      "Communication presse et digitale intégrée",
      "Option hybride : retransmission en ligne et webinaires interactifs",
      "Plan événementiel détaillé et suivi post-événement"
    ],
    benefits: [
      "Visibilité média accrue (articles, posts)",
      "Rapport d'impact post-événement avec feedback et leads générés",
      "Portée internationale grâce aux options hybrides",
      "Événements clé en main sans stress",
      "Renforcement de la notoriété et crédibilité"
    ]
  },
  {
    id: 4,
    title: "Appui à l'Entrepreneuriat",
    shortDescription: "Soutien aux entrepreneurs malgaches à chaque étape de leur parcours",
    icon: "🚀",
    image: "/assets/offers/enterprise.png",
    fullDescription:
      "Nous soutenons les entrepreneurs malgaches à chaque étape de leur parcours pour une croissance inclusive et durable. De la création à la gestion en passant par la digitalisation, nous accompagnons votre développement avec des outils adaptés au contexte local.",
    features: [
      "Appui et Formation en Création d'Entreprise : business plan viable focus secteurs verts",
      "Accompagnement et Formation à la Gestion d'Entreprise : optimisation finances, RH et opérations",
      "Modules sur la résilience climatique intégrés",
      "Accompagnement à la Digitalisation d'Entreprise : e-commerce, CRM",
      "Mentoring personnalisé et suivi continu"
    ],
    benefits: [
      "Réduction des risques d'échec de 40% grâce au mentoring personnalisé",
      "Structuration de votre idée en business plan viable",
      "Optimisation de la gestion financière et opérationnelle",
      "Transition digitale réussie vers l'e-commerce",
      "Développement de compétences en gestion d'entreprise"
    ]
  },
  {
    id: 5,
    title: "Accompagnement RSE",
    shortDescription: "Intégration de la RSE pour un impact positif sur l'environnement et la société",
    icon: "🌍",
    image: "/assets/offers/rse.png",
    fullDescription:
      "Intégrez la Responsabilité Sociétale des Entreprises (RSE) pour un impact positif sur l'environnement et la société. Nous vous accompagnons dans la mise en place de stratégies RSE concrètes adaptées au contexte malgache, de l'optimisation énergétique au développement communautaire.",
    features: [
      "Optimisation Énergétique : audits et solutions (panneaux solaires, efficacité)",
      "Gestion des Déchets : stratégies de recyclage et zéro déchets adaptées",
      "Bien-Être au Travail : programmes de wellness pour employés",
      "Développement des AGR Locales : soutien aux activités génératrices de revenus",
      "Valorisation des Ressources Locales : chaînes d'approvisionnement durables"
    ],
    benefits: [
      "Certifications RSE reconnues internationalement",
      "Rapports annuels d'impact détaillés",
      "Réduction des coûts énergétiques et gestion optimisée des déchets",
      "Amélioration du bien-être et motivation des employés",
      "Contribution au développement durable des communautés locales"
    ]
  }
];