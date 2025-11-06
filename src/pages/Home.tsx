// src/pages/Home.tsx
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Handshake, Globe2, Briefcase, FlaskConical } from "lucide-react";
import { OffersCarousel } from "@/components/offers/OffersCarousel";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { partnersData } from "@/data/partnersData";

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

const fadeInScale = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Section Hero avec Bannière */}
      <section className="relative bg-linear-to-r from-green-900 via-emerald-800 to-teal-900 text-white">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="/assets/ikoloVina/banniere.png" 
          alt="Bannière Ikolo Vina"
          className="w-full h-[70vh] object-cover blur-[1px]"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.div 
            className="text-center max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Badge variant="secondary" className="mb-6 bg-special-1/80 backdrop-blur-sm text-white border-none">
              Excellence & Innovation
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Bienvenue chez Ikolo-Vina
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-100 leading-relaxed">
              Bienvenue sur IKOLO-VINA, votre partenaire pour un développement 
              harmonieux alliant nature, bien-être et innovation. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="px-6 py-3 lg:px-8 lg:py-3 transition-all duration-300 text-sm lg:text-base"
                style={{
                  backgroundColor: 'var(--color-special-1)',
                  color: 'white'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-special-2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-special-1)';
                }}
                onClick={() => {
                  const section = document.getElementById('offres');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Découvrir nos services
                <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
              </Button>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-6 py-3 lg:px-8 lg:py-3 transition-all duration-300 border-white text-white text-sm lg:text-base"
                  style={{
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-special-2)';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'white';
                  }}
                >
                  Nous contacter
                </Button>
              </Link>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Le Consortium */}
      <section className="py-10 bg-linear-to-br from-white to-gray-50/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Colonne de gauche - Cartes valeurs */}
            <motion.div 
              className="order-2 lg:order-1"
              variants={fadeInUp}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">

                <Card className="hover:shadow-xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-4 lg:p-6 text-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-linear-to-br from-special-1 to-special-2 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FlaskConical className="h-5 w-5 lg:h-8 lg:w-8 text-black" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">Expertise Scientifique</h3>
                    <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                      Une maîtrise reconnue en génie des procédés, formulation cosmétique et 
                      gestion durable des ressources naturelles.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-4 lg:p-6 text-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-linear-to-br from-special-3 to-special-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Briefcase className="h-5 w-5 lg:h-8 lg:w-8 text-black" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">Leadership Stratégique</h3>
                    <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                      Une expertise en organisation, communication et coordination 
                      de partenariats entre secteurs public et privé.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-4 lg:p-6 text-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-linear-to-br from-special-2 to-special-3 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Globe2 className="h-5 w-5 lg:h-8 lg:w-8 text-black" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">Vision Durable</h3>
                    <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                      Nos actions favorisent la biodiversité, la durabilité environnementale 
                      et une économie verte résiliente.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-4 lg:p-6 text-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-linear-to-br from-special-4 to-special-5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Handshake className="h-5 w-5 lg:h-8 lg:w-8 text-black" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">Partenariats Inclusifs</h3>
                    <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                      Nous créons des ponts entre acteurs économiques et sociaux 
                      pour des impacts positifs et partagés.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Colonne de droite - Logo et texte principal */}
            <motion.div 
              className="order-1 lg:order-2 flex flex-col items-center lg:items-start space-y-6 lg:space-y-8"
              variants={fadeInScale}
            >
              <div className="text-center flex flex-col items-center space-y-4 lg:space-y-6">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-special-1">Le consortium</span>
                </h2>

                <div className="relative group flex justify-center">
                  <div className="absolute -inset-2 lg:-inset-4 bg-linear-to-r from-special-1/20 to-special-2/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src="/assets/logos/ikolo-vina.png" 
                    alt="Consortium Ikolo-Vina"
                    className="relative h-32 lg:h-48 xl:h-64 w-auto transform group-hover:scale-105 transition-transform duration-500 mx-auto"
                  />
                </div>
                
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                  Une Alliance <span className="text-special-1">Visionnaire</span> et Durable
                </h2>
                
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Le consortium Ikolo-Vina unit deux fondatrices aux expertises 
                  complémentaires — l’une scientifique et technique, l’autre 
                  stratégique et organisationnelle. Ensemble, elles conçoivent 
                  des solutions intégrant biodiversité, durabilité et bien-être 
                  humain, au service d’une économie verte et inclusive.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Section Les Fondatrices */}
      <section className="pt-5 pb-0 bg-linear-to-br from-white to-gray-50/30">
        <div className="container mx-auto px-4">
          {/* Titre de section */}
          <motion.div 
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
              Les <span className="text-special-1">Visionnaires</span> derrière le Consortium
            </h2>
          </motion.div>

          {/* Version Desktop - 3 colonnes */}
          <motion.div 
            className="hidden lg:grid grid-cols-3 gap-6 lg:gap-2 items-end" 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Colonne 1 - Felana Anna RAMAHANDRISON */}
            <motion.div className="relative text-center flex flex-col justify-end" variants={fadeInUp}>
              {/* Logo Vina flottant en arrière-plan */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <img 
                  src="/assets/logos/vina.png" 
                  alt="Vina Consulting"
                  className="h-32 lg:h-40 opacity-10 animate-float"
                  style={{
                    animation: 'float 6s ease-in-out infinite'
                  }}
                />
              </div>
              
              <div className="relative z-10 space-y-4">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                  Felana Anna<br />RAMAHANDRISON
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  Avec une solide expérience en organisation d’événements et communication institutionnelle, elle excelle dans la mise en relation de partenaires publics et privés. Diplômée en Management du Tourisme Durable et en Communication & Marketing, elle a piloté plus de 15 événements majeurs, favorisant des collaborations efficaces. Spécialiste des campagnes hybrides, elle met l’accent sur l’inclusion, l’impact social et la promotion du développement durable.
                </p>
                <div className="flex justify-center">
                  <img 
                    src="/assets/logos/vina.png" 
                    alt="Vina Consulting"
                    className="h-10 lg:h-12 opacity-80"
                  />
                </div>
              </div>
            </motion.div>

            {/* Colonne 2 - Photo centrale */}
            <motion.div className="flex justify-center items-end" variants={fadeInScale}>
              <img 
                src="/assets/ikoloVina/AnnaHoly.png" 
                alt="Felana Anna et Holiniaina Norohariliva"
                className="max-h-96 w-auto object-contain" // <-- max-h pour pas étirer, object-contain pour garder proportions
              />
            </motion.div>

            {/* Colonne 3 - Holiniaina Norohariliva RAKOTOMALALA */}
            <motion.div className="relative text-center flex flex-col justify-end" variants={fadeInUp}>
              {/* Logo Ikolo flottant en arrière-plan */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <img 
                  src="/assets/logos/ikolo.png" 
                  alt="Ikolo"
                  className="h-32 lg:h-40 opacity-10 animate-float"
                  style={{
                    animation: 'float 6s ease-in-out infinite 2s'
                  }}
                />
              </div>
              
              <div className="relative z-10 space-y-4">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">Holiniaina Norohariliva<br />RAKOTOMALALA</h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  Elle valorise la biodiversité malgache grâce à son expertise en procédés chimiques, formulation cosmétique et gestion durable des ressources naturelles. Forte de plus de 15 ans d’expérience et d’une formation en chimie appliquée, elle conçoit des conférences adaptées aux enjeux locaux et internationaux. Appuyée par un réseau d’experts, elle développe des formulations éco-responsables à base d'actifs biothérapeutiques et d’huiles essentielles, alliant protection des écosystèmes et création de valeur pour les communautés.
                </p>
                <div className="flex justify-center">
                  <img 
                    src="/assets/logos/ikolo.png" 
                    alt="Ikolo"
                    className="h-10 lg:h-12 opacity-80"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Version Mobile */}
          <div className="lg:hidden space-y-8">
            {/* Photo en premier */}
            <div className="flex justify-center">
              <img 
                src="/assets/ikoloVina/AnnaHoly.png" 
                alt="Felana Anna et Holiniaina Norohariliva"
                className="h-64 w-auto rounded-lg shadow-xl"
              />
            </div>

            {/* Textes des fondatrices */}
            <div className="grid grid-cols-1 gap-8">
              {/* Felana Anna RAMAHANDRISON */}
              <div className="text-center space-y-4">
                <div className="flex justify-center items-center gap-3 mb-3">
                  <Star className="h-5 w-5 text-special-1" />
                  <h3 className="text-lg font-bold text-gray-900">Felana Anna<br />RAMAHANDRISON</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-xs">
                  Entrepreneuse visionnaire et fondatrice de Vina Consulting, 
                  Felana Anna apporte son expertise en stratégie d'entreprise 
                  et innovation digitale. Passionnée par le développement 
                  économique durable, elle transforme les défis en opportunités.
                </p>
                <div className="flex justify-center mt-3">
                  <img 
                    src="/assets/logos/vina.png" 
                    alt="Vina Consulting"
                    className="h-8 opacity-80"
                  />
                </div>
              </div>

              {/* Holiniaina Norohariliva RAKOTOMALALA */}
              <div className="text-center space-y-4">
                <div className="flex justify-center items-center gap-3 mb-3">
                  <Star className="h-5 w-5 text-special-2" />
                  <h3 className="text-lg font-bold text-gray-900">Holiniaina Norohariliva<br />RAKOTOMALALA</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-xs">
                  Fondatrice d'Ikolo, entreprise spécialisée dans les produits 
                  cosmétiques et médicinaux à base de plantes malgaches. 
                  Entrepreneuse engagée pour la valorisation des ressources 
                  naturelles et le bien-être par les plantes.
                </p>
                <div className="flex justify-center mt-3">
                  <img 
                    src="/assets/logos/ikolo.png" 
                    alt="Ikolo"
                    className="h-8 opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-0 border-t border-black w-3/4 mx-auto opacity-50" />

      {/* Section Les Offres */}
      <section id="offres" className="pb-0 pt-5 bg-linear-to-br from-white to-gray-50/30">
        <div className="container mx-auto px-4">
          {/* En-tête de section */}
          <motion.div 
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
              Nos <span className="text-special-1">Offres</span> sur Mesure
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de services conçus pour répondre 
              à tous vos besoins en matière de développement d'entreprise et d'innovation.
            </p>
          </motion.div>

          {/* Carrousel des offres */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <OffersCarousel />
          </motion.div>

          {/* Section Partenaires */}
          <section className="pt-10 pb-4 bg-linear-to-br from-white to-gray-50/30">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* En-tête de section */}
                <div className="text-center mb-4 mt-2 lg:mb-4">
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
                    Ils nous ont <span className="text-special-1">fait confiance</span>
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Découvrez les entreprises et organisations qui nous ont collaboré avec nous
                  </p>
                </div>

                {/* Carrousel automatique */}
                <div className="relative overflow-hidden">
                  <div className="flex animate-marquee space-x-4 lg:space-x-6 py-4">
                    {[...partnersData, ...partnersData, ...partnersData].map((partner, index) => (
                      <motion.a
                        key={`${partner.id}-${index}`}
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 bg-white rounded-xl p-4 lg:p-6 border border-gray-200 hover:border-special-1/30 hover:shadow-lg transition-all duration-300 flex items-center justify-center w-32 h-32 lg:w-40 lg:h-40"
                        whileHover={{ scale: 1.05, y: -5 }}
                      >
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="w-24 h-12 lg:w-32 lg:h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-2 pt-2 border-t border-gray-200/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-linear-to-r from-special-1/15 via-special-3/10 to-special-2/15 rounded-3xl p-6 lg:p-8 max-w-5xl mx-auto relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                  Prêt à <span className="text-special-1">transformer</span> votre vision en <span className="text-special-2">réalité</span> ?
                </h3>
                
                <p className="text-base lg:text-lg xl:text-xl text-gray-600 mb-6 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
                  Contactez-nous dès aujourd'hui pour discuter de votre projet 
                  et découvrir comment notre expertise peut vous accompagner vers le succès.
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

export default Home;