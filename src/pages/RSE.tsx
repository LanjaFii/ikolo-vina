// src/pages/AccompagnementRSE.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Recycle,
  Heart,
  Users,
  CheckCircle,
  Zap,
  Building,
  Coins,
  Target,
  Award,
  TrendingUp,
  ArrowRight,
  Globe,
  Shield,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const Rse = () => {
  const solutions = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Optimisation Énergétique",
      description: "Audits énergétiques et solutions renouvelables pour réduire votre empreinte carbone et vos coûts.",
      benefits: ["Audit énergétique complet", "Solutions solaires et renouvelables", "Réduction empreinte carbone", "Économies durables"],
      image: "/assets/rse/service-energie.png",
      alt: "Installation de panneaux solaires sur le toit d'une entreprise malgache"
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Gestion des Déchets",
      description: "Stratégie zéro déchet et valorisation des ressources dans une logique d'économie circulaire.",
      benefits: ["Stratégie zéro déchet", "Recyclage et valorisation", "Réduction des plastiques", "Économie circulaire"],
      image: "/assets/rse/service-dechets.png",
      alt: "Système de tri et recyclage des déchets dans une entreprise malgache"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Bien-Être au Travail",
      description: "Programmes de wellness et amélioration de la qualité de vie pour vos collaborateurs.",
      benefits: ["Programmes de wellness", "Qualité de vie au travail", "Équilibre vie pro/perso", "Environnement de travail sain"],
      image: "/assets/rse/service-bienetre.png",
      alt: "Espace de bien-être et détente pour employés dans une entreprise"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Développement Local",
      description: "Soutien aux AGR et création de partenariats inclusifs avec les communautés malgaches.",
      benefits: ["Soutien aux petits producteurs", "Circuits courts et équitables", "Développement communautaire", "Partenariats inclusifs"],
      image: "/assets/rse/service-agriculture.png",
      alt: "Projet d'agriculture durable avec communauté locale malgache"
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Ressources Locales",
      description: "Intégration des ressources naturelles malgaches dans votre chaîne de valeur durable.",
      benefits: ["Chaînes d'approvisionnement durables", "Produits locaux et bio", "Préservation biodiversité", "Innovation éco-responsable"],
      image: "/assets/rse/service-ressources.png",
      alt: "Valorisation des produits locaux malgaches dans une chaîne de valeur durable"
    }
  ];

  const valeurs = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Impact Concret",
      description: "Des résultats mesurables qui transforment votre entreprise et son environnement",
      image: "/assets/rse/valeur-impact.png",
      alt: "Projet RSE montrant des résultats concrets de transformation",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Excellence Durable",
      description: "Une approche qualité qui garantit la pérennité de vos initiatives RSE",
      image: "/assets/rse/valeur-excellence.png",
      alt: "Certification et reconnaissance de l'excellence durable",
      color: "from-emerald-500 to-green-400"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Croissance Responsable",
      description: "Allier performance économique et responsabilité sociétale pour un développement harmonieux",
      image: "/assets/rse/valeur-croissance.png",
      alt: "Graphique montrant une croissance économique responsable",
      color: "from-amber-500 to-orange-400"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Engagement Communautaire",
      description: "Créer de la valeur partagée avec les communautés locales malgaches",
      image: "/assets/rse/valeur-communautaire.png",
      alt: "Communauté locale collaborant sur un projet RSE",
      color: "from-purple-500 to-pink-400"
    }
  ];

  const engagements = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Vision Globale",
      description: "Une approche intégrée qui considère l'ensemble des impacts environnementaux, sociaux et économiques de votre entreprise.",
      stat: "360°",
      statLabel: "Analyse complète"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Innovation Continue",
      description: "Des solutions créatives et adaptées aux spécificités du marché malgache pour une RSE véritablement transformative.",
      stat: "15+",
      statLabel: "Projets innovants"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Accompagnement Sur-Mesure",
      description: "Un suivi personnalisé tout au long de votre transformation RSE pour garantir des résultats durables et pérennes.",
      stat: "100%",
      statLabel: "Satisfaction client"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-special-1 via-special-4 to-special-2 text-white py-16 lg:py-20">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="/assets/rse/hero-rse.png"
          alt="Équipe IKOLO-VINA en projet RSE de reforestation avec communauté locale malgache"
          className="w-full h-full object-cover absolute inset-0 blur-[1px]"
        />
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4 bg-special-2/80 backdrop-blur-sm text-white border-none">
              Accompagnement RSE
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Responsabilité Sociétale des Entreprises
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-6 text-gray-100 leading-relaxed">
              Donnez du sens à votre entreprise avec une stratégie RSE qui crée de la valeur
              durable pour votre business, vos collaborateurs et Madagascar
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Notre Vision RSE */}
      <section className="py-16 bg-linear-to-br from-white to-gray-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                La RSE, une <span className="text-special-2">vision transformative</span>
              </h2>
              <p className="text-base text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Chez IKOLO-VINA, nous voyons la RSE comme une opportunité stratégique de réinventer
                votre entreprise. Notre approche unique combine innovation durable, expertise locale
                et création de valeur partagée.
              </p>
            </div>

            {/* Section Valeurs - Grille Interactive */}
            <section className="py-10">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {valeurs.map((valeur, index) => (
                    <motion.div
                      key={valeur.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
                    >
                      {/* Image de fond */}
                      <img
                        src={valeur.image}
                        alt={valeur.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

                      {/* Contenu */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex items-center mb-3">
                          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3">
                            {valeur.icon}
                          </div>
                          <h3 className="text-xl font-bold">{valeur.title}</h3>
                        </div>
                        <p className="text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                          {valeur.description}
                        </p>
                      </div>

                      {/* Indicateur de survol */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-special-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>


          </motion.div>
        </div>
      </section>

      {/* Section Solutions */}
      <section className="py-16 bg-gradient-to-br from-special-2/5 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-special-2">Domaines</span> d'Expertise RSE
            </h2>
            <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Une approche complète couvrant tous les aspects de la responsabilité sociétale
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`group ${
                    // Tous les éléments prennent 50% sauf le dernier si impair
                    index === solutions.length - 1 && solutions.length % 2 !== 0
                      ? 'md:w-full flex justify-center'
                      : 'md:w-[calc(50%-12px)]' // 50% moins la moitié du gap (24px/2 = 12px)
                    }`}
                >
                  <div className={
                    index === solutions.length - 1 && solutions.length % 2 !== 0
                      ? 'w-full max-w-2xl'
                      : 'w-full'
                  }>
                    <Card className="h-full border-0 bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden group-hover:shadow-xl transition-all duration-500 border border-special-2/20">
                      <div className="flex flex-col md:flex-row h-full">
                        <div className="md:w-2/5">
                          <div className="relative h-48 md:h-full">
                            <img
                              src={solution.image}
                              alt={solution.alt}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-r from-special-2 to-special-1 flex items-center justify-center shadow-lg">
                              <div className="text-white">
                                {solution.icon}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="md:w-3/5">
                          <CardContent className="p-6 h-full flex flex-col">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                              {solution.title}
                            </h3>

                            <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                              {solution.description}
                            </p>

                            <div className="space-y-2">
                              {solution.benefits.map((benefit, idx) => (
                                <div key={idx} className="flex items-start space-x-2">
                                  <CheckCircle className="w-4 h-4 text-special-2 mt-0.5 shrink-0" />
                                  <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Engagements - Design amélioré */}
      <section className="pt-10 pb-2 bg-linear-to-br from-white to-gray-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Notre <span className="text-special-2">Engagement</span>
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Une approche responsable et durable au service de votre transformation RSE
            </p>
          </motion.div>

          {/* Section Engagements - Steps Vertical */}
          <section className="py-10 bg-linear-to-br from-white to-gray-50/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                  {engagements.map((engagement, index) => (
                    <motion.div
                      key={engagement.title}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="flex items-start space-x-6 group cursor-pointer"
                    >
                      {/* Numéro d'étape */}
                      <div className="shrink-0 w-16 h-16 bg-linear-to-r from-special-2 to-special-1 rounded-2xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>

                      {/* Ligne de connexion (sauf pour le dernier) */}
                      {index < engagements.length - 1 && (
                        <div className="absolute left-8 top-16 w-0.5 h-16 bg-linear-to-b from-special-2 to-special-1 transform translate-y-16"></div>
                      )}

                      {/* Contenu */}
                      <div className="grow">
                        <div className="flex items-center mb-3">
                          <div className="text-special-2 mr-3">
                            {engagement.icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {engagement.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {engagement.description}
                        </p>

                        {/* Statistique en badge */}
                        <div className="inline-flex items-center space-x-2 bg-special-2/10 px-4 py-2 rounded-full border border-special-2/20">
                          <span className="text-special-2 font-bold text-lg">
                            {engagement.stat}
                          </span>
                          <span className="text-gray-700 text-sm">
                            {engagement.statLabel}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Message de conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <div className="bg-linear-to-r from-special-2/10 to-special-1/10 rounded-2xl p-8 border border-special-2/20 max-w-3xl mx-auto">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Notre mission
              </h4>
              <p className="text-gray-700 text-base leading-relaxed">
                Accompagner les entreprises malgaches dans leur transformation RSE pour créer
                un impact positif durable sur l'environnement, la société et l'économie locale,
                en construisant ensemble un avenir plus responsable et prospère pour Madagascar.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section CTA Finale - Accompagnement RSE */}
      <section className="py-5 bg-linear-to-br from-white to-gray-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-linear-to-r from-special-1/15 via-special-3/10 to-special-2/15 rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                  Prêt à <span className="text-special-1">agir</span> pour un impact{" "}
                  <span className="text-special-2">durable</span> ?
                </h3>

                <p className="text-base lg:text-lg xl:text-xl text-gray-600 mb-6 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
                  Ensemble, faisons de votre stratégie RSE un levier concret de
                  performance, d'engagement et de sens.
                  Contactez notre équipe pour un accompagnement adapté à vos enjeux.
                </p>

                {/* Phrase clignotante */}
                <motion.p
                  className="text-special-3 font-bold text-lg lg:text-xl mb-6"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity, repeatType: "loop" }}
                >
                  Premier rendez-vous offert !
                </motion.p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    to="/contact"
                    className="bg-linear-to-r from-special-1 to-special-2 hover:from-special-2 hover:to-special-3 text-black px-8 py-3 lg:px-10 lg:py-4 text-base lg:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center border border-black"
                  >
                    Nous contacter
                    <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                  </Link>
                </div>

                <p className="text-gray-500 text-xs lg:text-sm mt-4 lg:mt-6">
                  Diagnostic RSE • Conseils stratégiques • Solutions durables sur mesure
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Rse;