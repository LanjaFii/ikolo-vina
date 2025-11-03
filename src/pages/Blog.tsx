// src/pages/Blog.tsx
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, X, ChevronLeft, ChevronRight, Target, Puzzle, Megaphone, Handshake, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import type { ComponentType, SVGProps } from 'react';

// Animations
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  images: string[];
  content: string;
}

// Données des articles
const articlesData: Article[] = [
  {
    id: 1,
    title: "HOLINIAINA RAKOTOMALALA NOROHARILIVA : UNE ARCHITECTE DE SYNERGIES AU CŒUR DU SALON INTERNATIONAL DES ACTEURS ÉCONOMIQUES",
    excerpt: "Rôle central dans la conception, coordination et rayonnement du SIAE 2022-2023 en tant que Directrice des relations extérieures et Coordinatrice générale.",
    category: "Leadership Événementiel",
    date: "2022-2023",
    readTime: "5 min",
    images: [
      "/src/assets/blog/SIAE 1.jpg",
      "/src/assets/blog/SIAE 2.jpg",
      "/src/assets/blog/SIAE 3.jpg",
      "/src/assets/blog/SIAE 4.jpg",
      "/src/assets/blog/SIAE 5.jpg",
      "/src/assets/blog/SIAE 6.jpg",
      "/src/assets/blog/SIAE 7.jpg",
      "/src/assets/blog/SIAE 8.jpg"
    ],
    content: `
      Depuis sa création, le Salon International des Acteurs Économiques (SIAE) s'est imposé comme une plateforme incontournable de rencontres, de réflexion et de collaboration entre les forces vives de l'économie malgache. Lors de ses deux premières éditions — en 2022 et 2023 — Holiniaina Rakotomalala Norohariliva, fondatrice d'IKOLO, a joué un rôle central dans la conception, la coordination et le rayonnement de cet événement d'envergure, au niveau national comme au niveau international.

      🎯 **Une direction stratégique au service de l'ouverture**
      En tant que Directrice des relations extérieures du SIAE sur les deux éditions, Holiniaina a orchestré les liens institutionnels, diplomatiques et sectoriels qui ont permis au salon de s'ancrer dans les dynamiques nationales et régionales. Grâce à son sens aigu de la diplomatie et sa capacité à valoriser les talents locaux, elle a su positionner le SIAE comme un espace de convergence entre acteurs publics, privés et internationaux.

      🧩 **Une coordination rigoureuse et inclusive**
      En parallèle, elle a assumé la fonction de Coordinatrice générale de l'organisation, veillant à la cohérence logistique, à la fluidité des plannings et à l'implication active des partenaires. Son approche inclusive a permis de mobiliser une diversité d'acteurs économiques — entrepreneurs, institutions, coopératives, bailleurs — autour d'une vision partagée : celle d'une économie malgache refondée par ses propres forces.

      📣 **Une stratégie de communication à fort impact**
      Holiniaina a également supervisé la stratégie de communication du salon, en mettant en avant les valeurs d'innovation, de collaboration et de valorisation des initiatives locales. Grâce à une narration sensible et stratégique, elle a su faire rayonner le SIAE bien au-delà des murs du salon, dans les médias, les réseaux sociaux et les cercles d'influence.

      🤝 **Une ambassadrice du réseautage économique**
      Enfin, en tant qu'organisatrice des rencontres B to B, des ateliers et ambassadrice du SIAE, elle a créé des ponts entre les entrepreneurs, les investisseurs et les institutions. Ces rencontres ont permis de générer des opportunités concrètes de partenariat, de financement et de croissance pour de nombreux porteurs de projets.
    `
  },
  {
    id: 2,
    title: "INIM : CONGRES SUR LA VALORISATION DES MATIERES PREMIERES VEGETALES",
    excerpt: "Coordination du Congrès INIM 2022-2023 pour valoriser les ingrédients naturels malgaches dans les filières santé, cosmétique et alimentation.",
    category: "Innovation Naturelle",
    date: "2022-2023",
    readTime: "6 min",
    images: [
      "/src/assets/blog/inim1.jpeg.jpg",
      "/src/assets/blog/inim2.JPG",
      "/src/assets/blog/inim3.JPG"
    ],
    content: `
      🌿 **INIM : CONGRES SUR LA VALORISATION DES MATIERES PREMIERES VEGETALES ISSUES DES TERRES MALGACHES ET LA VALORISATION DE LEURS ECHANGES COMMERCIAUX NATIONAUX ET INTERNATIONAUX**

      Le Congrès INIM – Innovative Natural Ingredients Madagascar s'est imposé, dès ses deux premières éditions en 2022 et en 2023, comme un rendez-vous incontournable pour les acteurs de la valorisation des ingrédients naturels malgaches (dans la filière santé, aromathérapie, cosmétique, alimentation et bio-construction). À la croisée de la biodiversité, de la recherche, de l'entrepreneuriat et du développement durable, cet événement a réuni opérateurs économiques, institutions, bailleurs et experts autour d'une ambition commune : faire de Madagascar un leader régional en innovation botanique et en transformation responsable.

      🤝 **Une coordination féminine au service de l'impact**
      Au cœur de cette dynamique, Anna et Holy, deux entrepreneures visionnaires ont eu l'opportunité de porter le congrès avec rigueur, créativité et engagement :

      • **Anna**, fondatrice de Vina Consulting, a assuré la coordination globale du projet, en pilotant la stratégie de communication multi-canal auprès des partenaires institutionnels, des PTF et des opérateurs économiques. De la préparation logistique à la mobilisation des équipes techniques, en passant par l'organisation de webinaires, la gestion des prestataires et l'élaboration du rapport final, elle a su orchestrer chaque édition avec une précision remarquable.

      • **Holy Rakotomalala**, fondatrice d'IKOLO, étant experte dans la valorisation des ressources naturelles, a quant à elle assumé le rôle de responsable innovation et de responsable des panélistes. Elle a conçu les contenus thématiques, sélectionné les intervenants, assuré le suivi-évaluation des panels, et veillé à ce que chaque prise de parole contribue à une vision cohérente et inspirante de l'innovation naturelle à Madagascar.

      🌱 **Un congrès au service de la transformation**
      Les deux éditions du Congrès INIM ont permis :
      • De valoriser les filières locales : huiles essentielles, extraits végétaux, actifs cosmétiques et nutraceutiques
      • De connecter les producteurs aux marchés internationaux
      • De favoriser les partenariats public-privé pour structurer les chaînes de valeur
      • De sensibiliser à la traçabilité, à la qualité et à l'éthique dans l'exploitation des ressources naturelles

      Grâce à une programmation riche en panels, ateliers, expositions et rencontres B2B, le congrès a posé les bases d'un écosystème d'innovation enraciné dans la biodiversité malgache et ouvert sur le monde.
    `
  },
  {
    id: 3,
    title: "DESIGN THINKING : IMMERSION COLLABORATIVE ENTRE 2M CONSULTING, IKOLO ET VINA",
    excerpt: "Atelier collaboratif du 8 février 2025 réunissant entrepreneurs pour concevoir des produits innovants adaptés aux besoins clients.",
    category: "Innovation Collaborative",
    date: "8 Février 2025",
    readTime: "4 min",
    images: [
      "/src/assets/blog/DT1.jpg",
      "/src/assets/blog/DT2.jpg",
      "/src/assets/blog/DT3.jpg",
      "/src/assets/blog/DT4.jpg"
    ],
    content: `
      🌿 **Atelier Design Thinking : une immersion collaborative entre 2M Consulting, IKOLO et VINA**

      Le 8 février dernier, une vingtaine d'entrepreneurs se sont réunis pour une journée d'immersion au Design Thinking produit, organisée par 2M Consulting en partenariat avec le Département Appui aux Entreprises de la CCIA. Cet atelier, placé sous le signe de l'innovation collaborative, a permis aux participants de s'approprier les outils du Design Thinking pour concevoir ou améliorer leurs produits en phase avec les besoins réels de leurs clients.

      Pour **Holy Rakotomalala**, fondatrice d'IKOLO, cette journée a eu une résonance particulière. Après plus d'un an de consultance active au sein de 2M Consulting, elle a contribué à la conception et à l'animation de plusieurs ateliers stratégiques, dont celui-ci. Cette expérience lui a permis de renforcer ses compétences en facilitation, en accompagnement entrepreneurial et en structuration de parcours d'innovation.

      L'atelier a également été marqué par la participation de **VINA**, représentée par sa fondatrice **Anna**. Cette synergie entre IKOLO et VINA illustre parfaitement l'esprit de co-création et de sororité entrepreneuriale que nous défendons : des femmes leaders qui s'unissent pour faire émerger des solutions durables et adaptées aux réalités locales.

      Dans la continuité de cette dynamique, IKOLO-VINA s'engage à promouvoir des espaces d'apprentissage et de collaboration où les entrepreneures peuvent expérimenter, échanger et grandir ensemble.
    `
  },
  {
    id: 4,
    title: "KENGO KUMA DAY : UNE JOURNEE DEDIEE AU CELEBRE ARCHITECTE JAPONAIS",
    excerpt: "Événement exceptionnel du 24 juin 2025 pour présenter le projet d'aménagement durable du site d'Ambalakalanoro.",
    category: "Architecture Durable",
    date: "24 Juin 2025",
    readTime: "5 min",
    images: [
      "/src/assets/blog/kengo1.jpeg",
      "/src/assets/blog/kengo2.jpeg",
      "/src/assets/blog/kengo3.jpeg",
      "/src/assets/blog/kengo4.jpeg",
      "/src/assets/blog/kengo5.jpeg",
      "/src/assets/blog/kengo6.jpeg",
      "/src/assets/blog/kengo7.jpg"
    ],
    content: `
      **KENGO KUMA DAY : UNE JOURNEE DEDIEE AU CELEBRE ARCHITECTE JAPONAIS KENGO KUMA**

      Le 24 juin 2025 dernier, le Bois Vert Antananarivo a accueilli un événement d'exception : le Kengo Kuma Day, une journée dédiée à la présentation officielle du projet d'aménagement durable du site d'Ambalakalanoro, en présence du célèbre architecte japonais Kengo Kuma. Ce moment fort a réuni des représentants d'ambassades, du Ministère du Tourisme et de l'Artisanat, d'associations, d'acteurs privés et de défenseurs de l'environnement, tous mobilisés autour d'une même ambition : poser les fondations d'un tourisme plus vertueux à Madagascar.

      Ce projet, porté par l'ONG L'Homme et L'Environnement Madagascar et coordonné par Label CBD Consulting a rassemblé encore une fois les deux entrepreneures engagées : **Anna**, Fondatrice de Vina Consulting et **Holy Rakotomalala**, fondatrice d'IKOLO.

      🤝 **Une coordination féminine au service d'une vision partagée**

      **Anna** a assuré la co-coordination générale de l'événement avec le Label CBD, de la logistique à la communication, en passant par la mobilisation des équipes et la gestion des prestataires. Sa rigueur et sa capacité à fédérer ont permis de relever ce défi en un temps record.

      **Holy**, quant à elle, a pris en charge la coordination technique, la gestion de l'accueil des invités VIP et les relations presse. Son sens du détail, son énergie fédératrice et son expertise en gestion d'événements ont largement contribué à la fluidité et à la visibilité de cette journée.

      🌱 **Ambalakalanoro : un joyau à préserver**
      Le site d'Ambalakalanoro, porté par l'ONG L'Homme et l'Environnement, a été au cœur des échanges. Véritable écrin de biodiversité, il incarne le potentiel d'un tourisme responsable, enraciné dans la nature et respectueux des communautés locales. Le Kengo Kuma Day a permis d'initier une réflexion collective sur son aménagement, en lien avec les principes de durabilité, d'architecture bioclimatique et de valorisation du patrimoine naturel malgache.
    `
  }
];

const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const openModal = (article: Article) => {
    setSelectedArticle(article);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (!selectedArticle) return;
    setCurrentImageIndex((prev) => 
      prev === selectedArticle.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedArticle) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedArticle.images.length - 1 : prev - 1
    );
  };

  // Auto-scroll des images
  useEffect(() => {
    if (!selectedArticle) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === selectedArticle.images.length - 1 ? 0 : prev + 1
      );
    }, 5000); // Change d'image toutes les 5 secondes
    return () => clearInterval(interval);
  }, [selectedArticle]);

  return (
    <div className="min-h-screen">
      {/* Section Hero */}
      <section className="relative bg-linear-to-r from-special-1 via-special-4 to-special-2 text-white py-16 lg:py-20">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="/src/assets/blog/banniere.png"
          alt="Blog Ikolo Vina"
          className="w-full h-full object-cover absolute inset-0 blur-[1px]"
        />
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4 bg-special-1/80 backdrop-blur-sm text-white border-none">
              Actualités & Réalisations
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Nos <span className="text-special-1">Articles</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-6 text-gray-100 leading-relaxed">
              Retour sur les événements marquants qui ont façonné notre expertise 
              en organisation et coordination d'événements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Articles */}
      <section className="py-16 bg-linear-to-br from-white to-gray-50/30">
        <div className="container mx-auto px-4">

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {articlesData.map((article) => (
              <motion.div key={article.id} variants={fadeInUp}>
                <Card 
                  className="hover:shadow-2xl transition-all duration-500 group cursor-pointer bg-white/70 backdrop-blur-sm border-0 overflow-hidden"
                  onClick={() => openModal(article)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.images[0]} 
                      alt={article.title}
                      className="w-full h-48 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                    <Badge className="absolute top-4 left-4 bg-special-1 text-white border-none">
                      {article.category}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">{article.date}</span>
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-special-1 transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center text-special-1 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Lire la suite
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal Article */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden flex flex-col w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-2 border-b border-gray-200">
                <div>
                  <Badge className="bg-special-1 text-white border-none">
                    {selectedArticle.category}
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeModal}
                  className="hover:bg-gray-100 rounded-full"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                {/* Carousel d'images */}
                <div className="relative h-80 lg:h-96 bg-gray-100">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={selectedArticle.images[currentImageIndex]}
                      alt={`${selectedArticle.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>

                  {/* Navigation arrows */}
                  {selectedArticle.images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </>
                  )}

                  {/* Indicators */}
                  {selectedArticle.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {selectedArticle.images.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Contenu de l'article */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{selectedArticle.date}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{selectedArticle.readTime}</span>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                    {selectedArticle.title}
                  </h2>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    {selectedArticle.content.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-4">
                        {paragraph.split('**').map((text, i) => {
                          const renderTextWithIcons = (input: string, keyBase: string | number) => {
                            const ICON_MAP: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
                              '🎯': Target,
                              '🧩': Puzzle,
                              '📣': Megaphone,
                              '🤝': Handshake,
                              '🌿': Leaf,
                              '🌱': Leaf
                            };
                            const escapeRegExp = (s: string) => s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
                            const keys = Object.keys(ICON_MAP).map(escapeRegExp);
                            const re = new RegExp(`(${keys.join('|')})`, 'g');
                            const parts = input.split(re);
                            return parts.map((part, idx) => {
                              if (ICON_MAP[part]) {
                                const Icon = ICON_MAP[part];
                                return <Icon key={`${keyBase}-icon-${idx}`} className="inline mr-2 h-4 w-4 text-special-1 align-text-bottom" />;
                              }
                              return part;
                            });
                          };

                          return i % 2 === 1 ? (
                            <strong key={i} className="text-special-1">{renderTextWithIcons(text, `${pIndex}-${i}`)}</strong>
                          ) : (
                            <span key={i}>{renderTextWithIcons(text, `${pIndex}-${i}`)}</span>
                          );
                        })}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;