// src/pages/Events.tsx
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Events = () => {
  return (
    <div className="min-h-screen">
      {/* Section Hero - Événementiel */}
      <section className="relative bg-linear-to-r from-special-1 via-special-4 to-special-2 text-white py-16 lg:py-20">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="/assets/events/banniere.png"
          alt="Événementiel Ikolo Vina"
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
              Événementiel & Networking
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Événementiel Sur Mesure
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-6 text-gray-100 leading-relaxed">
              Développez votre réseau, renforcez votre crédibilité et faites connaître 
              votre PME grâce à nos événements professionnels adaptés à vos ambitions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Services Événementiels - Version 3 lignes */}
      <section id="services" className="py-0">
        {/* Ligne 1 - Background #005F7F */}
        <div className="bg-[#005F7F] text-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
              {/* Colonne Image */}
              <div className="relative">
                <img 
                  src="/assets/events/holy.png" 
                  alt="Conception & Organisation Événementielle"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Colonne Contenu */}
              <div className="p-8 lg:p-8 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Badge className="mb-4 bg-white/20 text-white border-none backdrop-blur-sm">
                    Service Premium
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                    Conception & Organisation
                  </h2>
                  <p className="text-lg mb-6 text-white/90 leading-relaxed">
                    Création d'événements sur mesure adaptés à vos objectifs spécifiques. 
                    Nous transformons vos idées en expériences mémorables.
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-white mr-3" />
                      <span>Foires et salons professionnels</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-white mr-3" />
                      <span>Forums sectoriels spécialisés</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-white mr-3" />
                      <span>Journées portes ouvertes</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-white mr-3" />
                      <span>Conférences et colloques</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-white mr-3" />
                      <span>Lancements de produits innovants</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Ligne 2 - Background #A65329 */}
        <div className="bg-[#A65329] text-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
              {/* Colonne Contenu */}
              <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Badge className="mb-4 bg-white/20 text-white border-none backdrop-blur-sm">
                    Gestion Complète
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                    Gestion Complète d'Événements
                  </h2>
                  <p className="text-lg mb-6 text-white/90 leading-relaxed">
                    Prise en charge totale de votre événement, de la logistique 
                    à l'animation, pour un résultat impeccable et sans stress.
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-white mr-3" />
                      <span>Logistique complète (lieux, équipements)</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-white mr-3" />
                      <span>Scénographie inspirée de la nature</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-white mr-3" />
                      <span>Animation dynamique et professionnelle</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-white mr-3" />
                      <span>Communication presse et digitale</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-white mr-3" />
                      <span>Coordination des intervenants</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Colonne Image */}
              <div className="relative order-1 lg:order-2">
                <img 
                  src="/assets/events/annah.png" 
                  alt="Gestion Complète d'Événements"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Ligne 3 - Background #00804B */}
        <div className="bg-[#00804B] text-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
              {/* Colonne Image */}
              <div className="relative">
                <img 
                  src="/assets/events/hasina.png" 
                  alt="Formats Hybrides et Internationaux"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Colonne Contenu */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Badge className="mb-4 bg-white/20 text-white border-none backdrop-blur-sm">
                    Innovation Digitale
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                    Formats Hybrides & Internationaux
                  </h2>
                  <p className="text-lg mb-6 text-white/90 leading-relaxed">
                    Étendez votre portée au-delà des frontières avec nos solutions 
                    hybrides innovantes pour une audience internationale.
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-white mr-3" />
                      <span>Retransmission en ligne en direct</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-white mr-3" />
                      <span>Webinaires interactifs</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-white mr-3" />
                      <span>Portée internationale étendue</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-white mr-3" />
                      <span>Plateformes digitales multilingues</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-white mr-3" />
                      <span>Analytics et rapports de performance</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre Approche Événementielle */}
      <section className="py-16 bg-linear-to-br from-white to-gray-50/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
              Notre <span className="text-special-1">Approche</span> Événementielle
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une méthodologie éprouvée en 4 étapes pour garantir le succès de vos événements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Colonne de gauche - Étapes */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Étape 1 */}
              <div className="flex items-start space-x-4 p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200/50">
                <div className="shrink-0 w-12 h-12 bg-special-1 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Diagnostic & Stratégie</h3>
                  <p className="text-gray-600">
                    Analyse approfondie de vos objectifs, cibles et contraintes pour 
                    définir une stratégie événementielle sur mesure.
                  </p>
                </div>
              </div>

              {/* Étape 2 */}
              <div className="flex items-start space-x-4 p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200/50">
                <div className="shrink-0 w-12 h-12 bg-special-2 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Conception Créative</h3>
                  <p className="text-gray-600">
                    Design d'expériences uniques intégrant scénographie naturelle, 
                    contenu engageant et solutions innovantes.
                  </p>
                </div>
              </div>

              {/* Étape 3 */}
              <div className="flex items-start space-x-4 p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200/50">
                <div className="shrink-0 w-12 h-12 bg-special-3 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Exécution Impeccable</h3>
                  <p className="text-gray-600">
                    Gestion opérationnelle complète avec une équipe dédiée pour 
                    garantir un déroulement fluide et professionnel.
                  </p>
                </div>
              </div>

              {/* Étape 4 */}
              <div className="flex items-start space-x-4 p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200/50">
                <div className="shrink-0 w-12 h-12 bg-special-4 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mesure d'Impact</h3>
                  <p className="text-gray-600">
                    Analyse post-événement et recommandations stratégiques pour 
                    maximiser le retour sur investissement.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Colonne de droite - Avantages */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-200/50">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
                  Pourquoi Choisir <span className="text-special-1">Ikolo-Vina</span> ?
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-special-1 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">Expertise Complémentaire</h4>
                      <p className="text-gray-600 text-sm">
                        Alliance unique entre expertise scientifique et compétences 
                        en communication événementielle.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-special-2 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">Approche Durable</h4>
                      <p className="text-gray-600 text-sm">
                        Événements éco-responsables intégrant les principes du 
                        développement durable et de la RSE.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-special-3 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">Réseau Étendu</h4>
                      <p className="text-gray-600 text-sm">
                        Accès à un réseau d'experts, partenaires et intervenants 
                        de qualité dans divers secteurs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-special-4 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">Solutions Hybrides</h4>
                      <p className="text-gray-600 text-sm">
                        Maîtrise des formats physiques et digitaux pour une portée 
                        locale et internationale.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-special-1 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">Sur-Mesure</h4>
                      <p className="text-gray-600 text-sm">
                        Solutions personnalisées adaptées à votre budget, vos objectifs 
                        et votre secteur d'activité.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-special-1/10 rounded-lg border border-special-1/20">
                  <p className="text-sm text-gray-700 text-center">
                    <strong>Notre engagement :</strong> Transformer vos idées en expériences 
                    mémorables qui renforcent votre marque et développent votre réseau.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Livrables */}
      <section className="py-5 bg-linear-to-br from-white to-gray-50/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
              Nos <span className="text-special-1">Livrables</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Des résultats concrets et mesurables pour chaque événement organisé
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Livrable 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-special-1">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Plan Événementiel Détaillé</h3>
                  <p className="text-gray-600">
                    Stratégie complète incluant objectifs, cibles, planning, 
                    budget et indicateurs de performance pour un succès garanti.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Livrable 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-special-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Visibilité Média</h3>
                  <p className="text-gray-600">
                    Couverture presse et digitale : articles, posts réseaux sociaux, 
                    reportages pour maximiser votre exposition.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Livrable 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-special-3">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Rapport d'Impact</h3>
                  <p className="text-gray-600">
                    Analyse post-événement avec feedback participants, 
                    leads générés et recommandations pour les futurs événements.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section CTA Finale */}
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
                  Prêt à <span className="text-special-1">organiser</span> un événement <span className="text-special-2">mémorable</span> ?
                </h3>
                
                <p className="text-base lg:text-lg xl:text-xl text-gray-600 mb-6 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
                  Contactez-nous pour discuter de votre projet événementiel et 
                  bénéficier d'un accompagnement sur mesure pour son succès.
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
                  Réponse sous 24h • Devis personnalisé • Accompagnement sur mesure
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;