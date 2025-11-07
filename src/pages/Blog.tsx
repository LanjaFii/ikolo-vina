// src/pages/Blog.tsx
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, X, ChevronLeft, ChevronRight, Target, Puzzle, Megaphone, Handshake, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
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

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0
  })
};

// Durées des intervalles (en millisecondes)
const HOVER_INTERVAL_MS = 3500; // délai sur hover avant de passer à la photo suivante
const MODAL_INTERVAL_MS = 6000; // délai d'auto-scroll dans la modal

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
      "/assets/blog/SIAE 1.jpg",
      "/assets/blog/SIAE 2.jpg",
      "/assets/blog/SIAE 3.jpg",
      "/assets/blog/SIAE 4.jpg",
      "/assets/blog/SIAE 5.jpg",
      "/assets/blog/SIAE 6.jpg",
      "/assets/blog/SIAE 7.jpg",
      "/assets/blog/SIAE 8.jpg"
    ],
    content: `
      Depuis sa création, le Salon International des Acteurs Économiques (SIAE) s'est imposé comme une plateforme incontournable de rencontres, de réflexion et de collaboration entre les forces vives de l'économie malgache. Lors de ses deux premières éditions — en 2022 et en 2023 — Holiniaina Rakotomalala Norohariliva, fondatrice d'IKOLO, a joué un rôle central dans la conception, la coordination et le rayonnement de cet événement d'envergure, au niveau national comme au niveau international.

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
      "/assets/blog/inim1.jpeg.jpg",
      "/assets/blog/inim2.JPG",
      "/assets/blog/inim3.JPG"
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
      "/assets/blog/DT1.jpg",
      "/assets/blog/DT2.jpg",
      "/assets/blog/DT3.jpg",
      "/assets/blog/DT4.jpg"
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
      "/assets/blog/kengo1.jpeg",
      "/assets/blog/kengo2.jpeg",
      "/assets/blog/kengo3.jpeg",
      "/assets/blog/kengo4.jpeg",
      "/assets/blog/kengo5.jpeg",
      "/assets/blog/kengo6.jpeg",
      "/assets/blog/kengo7.jpg"
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
  const [direction, setDirection] = useState<number>(0);
  const [hoverImageIndex, setHoverImageIndex] = useState<{ [key: number]: number }>({});
  const hoverIntervalRef = useRef<{ [key: number]: number }>({});

  const openModal = (article: Article) => {
    // Clear any hover intervals for this article to avoid continued background cycling
    if (hoverIntervalRef.current[article.id]) {
      clearInterval(hoverIntervalRef.current[article.id]);
      delete hoverIntervalRef.current[article.id];
    }
    // Also defensively clear any other lingering intervals
    Object.values(hoverIntervalRef.current).forEach(intervalId => {
      if (intervalId) clearInterval(intervalId);
    });
    hoverIntervalRef.current = {};

    setSelectedArticle(article);
    setCurrentImageIndex(0);
    setDirection(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (!selectedArticle) return;
    setDirection(1);
    setCurrentImageIndex((prev) => 
      prev === selectedArticle.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedArticle) return;
    setDirection(-1);
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedArticle.images.length - 1 : prev - 1
    );
  };

  // Gestion du survol des articles
  const handleArticleHover = (articleId: number, article: Article) => {
    if (article.images.length > 1) {
      // Si un interval existe déjà pour cet article, ne pas en créer un autre.
      // Cela évite la multiplication des intervalles lorsque on entre plusieurs fois
      // (ou que des re-renders provoquent des créations supplémentaires).
      if (hoverIntervalRef.current[articleId]) return;

      // Démarrer le défilement automatique pour cet article
      hoverIntervalRef.current[articleId] = window.setInterval(() => {
        setHoverImageIndex(prev => ({
          ...prev,
          [articleId]: ((prev[articleId] || 0) + 1) % article.images.length
        }));
      }, HOVER_INTERVAL_MS); // Change d'image toutes les X ms
    }
  };

  const handleArticleLeave = (articleId: number) => {
    // Clear the interval(s) related to this article.
    const intervalId = hoverIntervalRef.current[articleId];
    if (intervalId) {
      clearInterval(intervalId);
      delete hoverIntervalRef.current[articleId];
    }
    // Defensive: if for any reason other intervals linger, clear them too.
    Object.keys(hoverIntervalRef.current).forEach(key => {
      const id = hoverIntervalRef.current[Number(key)];
      if (id) {
        clearInterval(id);
        delete hoverIntervalRef.current[Number(key)];
      }
    });
  };

  // Auto-scroll des images dans la modal
  useEffect(() => {
    if (!selectedArticle) return;
    const interval = window.setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prev) =>
        prev === selectedArticle.images.length - 1 ? 0 : prev + 1
      );
    }, MODAL_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [selectedArticle]);

  // Nettoyer les intervalles à la destruction
  useEffect(() => {
    return () => {
      Object.values(hoverIntervalRef.current).forEach(interval => clearInterval(interval));
    };
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-gray-50/50 to-special-4/10">
      {/* Section Hero */}
      <section className="relative bg-linear-to-r from-special-1 via-special-4 to-special-2 text-white py-16 lg:py-20">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent z-20"></div>
        <img
          src="/assets/blog/banniere.png"
          alt="Blog Ikolo Vina"
          className="w-full h-full object-cover absolute inset-0 blur-[1px]"
        />
        <div className="container mx-auto px-4 relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Nos <span className="text-special-3 drop-shadow-lg">Articles</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-100 leading-relaxed font-light max-w-3xl mx-auto">
              Découvrez les événements marquants qui ont façonné notre expertise 
              en organisation et coordination d'événements d'exception.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Articles */}
      <section className="py-5 lg:pt-5 pb-15 relative">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-gray-50/20 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {articlesData.map((article) => (
              <motion.div 
                key={article.id} 
                variants={fadeInUp}
                className="group"
                onMouseEnter={() => handleArticleHover(article.id, article)}
                onMouseLeave={() => handleArticleLeave(article.id)}
              >
                <Card 
                  className="hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white/80 backdrop-blur-sm border border-gray-100/50 overflow-hidden hover:border-special-1/20 h-full flex flex-col"
                  onClick={() => openModal(article)}
                >
                  <div className="relative overflow-hidden h-64 lg:h-80">
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.img 
                        key={hoverImageIndex[article.id] || 0}
                        src={article.images[hoverImageIndex[article.id] || 0]}
                        alt={article.title}
                        className="w-full h-full object-cover absolute inset-0"
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                      />
                    </AnimatePresence>
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <Badge className="bg-special-1/95 backdrop-blur-sm text-white border-none shadow-lg px-3 py-1.5 text-xs font-semibold">
                        {article.category}
                      </Badge>
                    </div>

                    {/* Image counter */}
                    {article.images.length > 1 && (
                      <div className="absolute top-4 right-4 z-20">
                        <div className="bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                          {((hoverImageIndex[article.id] || 0) + 1)} / {article.images.length}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-6 lg:p-8 flex-1 flex flex-col">
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <Calendar className="h-4 w-4 mr-2 text-special-1" />
                      <span className="mr-4 font-medium">{article.date}</span>
                      <Clock className="h-4 w-4 mr-2 text-special-1" />
                      <span className="font-medium">{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-special-1 transition-colors duration-300 leading-tight min-h-14 flex items-start">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-2 text-base font-light min-h-12 flex items-start">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-special-1/30 transition-colors duration-300 mt-auto">
                      <span className="text-special-1 font-semibold group-hover:translate-x-2 transition-transform duration-300 flex items-center">
                        Lire la suite
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                      <div className="flex space-x-1">
                        {article.images.slice(0, 3).map((_, index) => (
                          <div 
                            key={index}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              (hoverImageIndex[article.id] || 0) === index 
                                ? 'bg-special-1' 
                                : 'bg-gray-300'
                            }`}
                          />
                        ))}
                        {article.images.length > 3 && (
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                        )}
                      </div>
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
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-2xl max-w-4xl max-h-[95vh] overflow-hidden flex flex-col w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-linear-to-r from-white to-gray-50/50">
                <div className="flex items-center space-x-4">
                  <Badge className="bg-special-1 text-white border-none shadow-lg px-4 py-2">
                    {selectedArticle.category}
                  </Badge>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{selectedArticle.date}</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeModal}
                  className="hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                {/* Carousel d'images */}
                <div className="relative h-80 lg:h-96 bg-linear-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.img
                      key={currentImageIndex}
                      src={selectedArticle.images[currentImageIndex]}
                      alt={`${selectedArticle.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover absolute inset-0"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>

                  {/* Navigation arrows */}
                  {selectedArticle.images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </Button>
                    </>
                  )}

                  {/* Indicators */}
                  {selectedArticle.images.length > 1 && (
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                      {selectedArticle.images.map((_, index) => (
                        <button
                          key={index}
                          className={`w-3 h-3 rounded-full transition-all duration-300 shadow-lg ${
                            index === currentImageIndex 
                              ? 'bg-white scale-125' 
                              : 'bg-white/50 hover:bg-white/80'
                          }`}
                          onClick={() => {
                            setDirection(index > currentImageIndex ? 1 : -1);
                            setCurrentImageIndex(index);
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Image counter */}
                  <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full">
                    {currentImageIndex + 1} / {selectedArticle.images.length}
                  </div>
                </div>

                {/* Contenu de l'article */}
                <div className="p-8 lg:p-12">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
                      {selectedArticle.title}
                    </h2>

                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                      {selectedArticle.content.split('\n\n').map((paragraph, pIndex) => (
                        <motion.p 
                          key={pIndex} 
                          className="mb-6 text-lg leading-8"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: pIndex * 0.1 }}
                        >
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
                                  return <Icon key={`${keyBase}-icon-${idx}`} className="inline mr-3 h-5 w-5 text-special-1 align-text-bottom" />;
                                }
                                return part;
                              });
                            };

                            return i % 2 === 1 ? (
                              <strong key={i} className="text-special-1 font-semibold bg-linear-to-r from-special-1 to-special-2 bg-clip-text text-transparent">
                                {renderTextWithIcons(text, `${pIndex}-${i}`)}
                              </strong>
                            ) : (
                              <span key={i}>{renderTextWithIcons(text, `${pIndex}-${i}`)}</span>
                            );
                          })}
                        </motion.p>
                      ))}
                    </div>
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