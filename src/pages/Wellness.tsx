// src/pages/Wellness.tsx
//import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
      <section className="relative bg-linear-to-r from-green-900 via-emerald-800 to-teal-900 text-white py-16 lg:py-20">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="/src/assets/wellness/nature.png" 
          alt="background Nature Wellness"
          className="w-full h-full object-cover absolute inset-0 blur-[1px]"
        />
        <div className="container mx-auto px-4 relative z-20">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Badge variant="secondary" className="mb-4 bg-special-1/80 backdrop-blur-sm text-white border-none">
              Authenticité Malagasy
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Nature Wellness
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-100 leading-relaxed">
              L'essence malgache, votre bien-être authentique 
            </p>
            </motion.div>
        </div>
        </section>

      {/* Section NW */}
      <section className="py-10 bg-linear-to-br from-white to-gray-50/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Colonne de gauche - Logo et texte principal */}
            <motion.div 
              className="order-1 lg:order-1 flex flex-col items-center lg:items-start space-y-6 lg:space-y-8"
              variants={fadeInScale}
            >
              <div className="text-center flex flex-col items-center space-y-4 lg:space-y-6">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-special-1">Découvrez notre programme phare</span>
                </h2>

                <div className="relative group flex justify-center">
                <div className="absolute -inset-2 lg:-inset-4 bg-linear-to-r from-special-1/20 to-special-2/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src="/src/assets/logos/Nature Wellness.png" 
                    alt="Logo Nature Wellness"
                    className="relative h-32 lg:h-48 xl:h-64 w-auto transform group-hover:scale-105 transition-transform duration-500 mx-auto rounded-ss-3xl rounded-ee-3xl"
                  />
                </div>
                
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  conçu pour révéler l'essence et optimiser la performance de votre centre de bien-être.
                  En puisant dans les plantes médicinales malgaches et les savoirs traditionnels durables,
                  nous transformons votre espace en une expérience sensorielle immersive et régénérante,
                  parfaitement alignée avec les tendances holistiques internationales.
                </p>
              </div>
            </motion.div>

            {/* Colonne de droite - Cartes valeurs */}
            <motion.div 
              className="order-2 lg:order-2"
              variants={fadeInUp}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                <Card className="hover:shadow-xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-4 lg:p-6 text-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-linear-to-br from-special-1 to-special-2 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">Pour les CDB et Spa existants</h3>
                    <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                    Nous modernisons vos services en intégrant des soins naturels
                    à base de plantes malgaches (Ravintsara, Ylang-Ylang), 
                    une ambiance cocooning et des produits écoresponsables. 
                    Notre audit identifie vos atouts distinctifs pour booster rentabilité et 
                    attirer une clientèle en quête d'authenticité.
                    <br />
                    <br />
                    <strong className="underline decoration-2 decoration-special-1">Livrables :</strong> Plan de modernisation, kits de soins naturels, formations équipe, rapports d'impact performance/satisfaction.
                    </p>
                  </CardContent>
                </Card>

                <Card className=" border-0 shadow-none bg-transparent group backdrop-blur-sm  flex items-center justify-center">
                  <CardContent className="p-4 lg:p-6 text-center">
                    <div className=" from-special-3 to-special-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                      <img 
                        src="/src/assets/wellness/Spa1.png" 
                        alt="spa"
                        className=" object-cover"
                      />
                    </div>
                  </CardContent>
                </Card> 

                <Card className=" border-0 shadow-none bg-transparent group backdrop-blur-sm  flex items-center justify-center">
                  <CardContent className="p-4 lg:p-6 text-center">
                    <div className=" from-special-3 to-special-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                      <img 
                        src="/src/assets/wellness/Spa2.png" 
                        alt="spa"
                        className=" object-cover"
                      />
                    </div>
                  </CardContent>
                </Card> 

                <Card className="hover:shadow-xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-4 lg:p-6 text-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 bg-linear-to-br from-special-4 to-special-5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">Pour les nouveaux CDB et Spa :</h3>
                    <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                    Nous créons des espaces bien-être différenciants et rentables, 
                    intégrant soins innovants aux plantes malgaches, ambiances apaisantes et marketing expérientiel. 
                    Positionnez Madagascar comme référence régionale en tourisme de santé et luxe éthique.
                    <br/>
                    <br />
                    <strong className="underline decoration-2 decoration-special-1">Livrables :</strong> Plan stratégique de création, offre immersive complète, certifications durables pour visibilité internationale.
                    </p>
                  </CardContent>
                </Card> 
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="relative group flex justify-center">                
        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
          <strong className="underline decoration-2 decoration-special-1">Bénéfices globaux: </strong>Promouvoir une santé holistique, 
            réduire l'impact environnemental via des chaînes de valeur locales et créer des partenariats avec 
            les producteurs pour un développement durable. 
        </p>
      </div>


      {/* Produits et Services */}
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
              Nos <span className="text-special-1">Produits</span> et <span className="text-special-1">Services</span>
            </h2>
          </motion.div>
        </div>

      <section className="py-10 bg-linear-to-br from-white to-gray-50/30">
        <div className="container mx-auto px-4">

{/* Colonne de gauche */}
<motion.div 
  className="order-2 lg:order-1"
  variants={fadeInUp}
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
    {/* Carte 1 - DIAGNOSTIC INITIAL */}
    <Card className="hover:shadow-2xl hover:scale-100 transition-all duration-500 group bg-white/80 backdrop-blur-sm overflow-hidden p-0 border border-gray-100">
      <div className="relative bg-linear-to-r from-green-900 via-emerald-800 to-teal-900 text-white h-32">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="/src/assets/wellness/Diagnostique.png" 
          alt="Diagnostic centre bien-être"
          className="w-full h-full object-cover blur-[0.5px] group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h3 className="text-xl font-bold leading-tight">DIAGNOSTIC INITIAL</h3>
            <div className="mb-2 bg-special-1/80 backdrop-blur-sm text-white border-none inline-block px-3 py-1 rounded-full text-xs">
              de votre centre de bien-être
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-4 lg:p-6 text-center group-hover:bg-white/90 transition-colors duration-500">
        <h5 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">
          On vous dit proposer le programme d'accompagnement adéquat
        </h5>
        <ul className="text-gray-600 text-xs lg:text-sm leading-relaxed text-left space-y-3">
          <li className="flex items-start">
            <span className="text-special-1 mr-2 mt-1">•</span>
            <span>Visite sur site pour inventorier l'existant (lieu, agencement, décoration, thérapies)</span>
          </li>
          <li className="flex items-start">
            <span className="text-special-1 mr-2 mt-1">•</span>
            <span>Entretien avec les responsables et thérapeutes pour définir la vision, les objectifs et les besoins</span>
          </li>
        </ul>
      </CardContent>
    </Card>

    {/* Carte 2 - OPTIMISATION ARCHITECTURALE */}
    <Card className="hover:shadow-2xl hover:scale-100 transition-all duration-500 group bg-white/80 backdrop-blur-sm overflow-hidden p-0 border border-gray-100">
      <div className="relative bg-linear-to-r from-green-900 via-emerald-800 to-teal-900 text-white h-32">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="/src/assets/wellness/Optimisation.png" 
          alt="Optimisation architecturale"
          className="w-full h-full object-cover blur-[0.5px] group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h3 className="text-xl font-bold leading-tight">OPTIMISATION ARCHITECTURALE</h3>
            <div className="mb-2 bg-special-1/80 backdrop-blur-sm text-white border-none inline-block px-3 py-1 rounded-full text-xs">
              ambiance « signature » intérieur et extérieur
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-4 lg:p-6 text-center group-hover:bg-white/90 transition-colors duration-500">
        <h5 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">
          Création d'espaces harmonieux et fonctionnels
        </h5>
        <ul className="text-gray-600 text-xs lg:text-sm leading-relaxed text-left space-y-3">
          <li className="flex items-start">
            <span className="text-special-1 mr-2 mt-1">•</span>
            <span>Conception et architecture des espaces – agencement des lieux de soins et d'attente</span>
          </li>
          <li className="flex items-start">
            <span className="text-special-1 mr-2 mt-1">•</span>
            <span>Décoration : design et ambiance</span>
          </li>
        </ul>
      </CardContent>
    </Card>

    {/* Carte 3 - FORMATION & ATELIERS */}
    <Card className="hover:shadow-2xl hover:scale-100 transition-all duration-500 group bg-white/80 backdrop-blur-sm overflow-hidden p-0 border border-gray-100">
      <div className="relative bg-linear-to-r from-green-900 via-emerald-800 to-teal-900 text-white h-32">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="/src/assets/wellness/FormationAtelier.png" 
          alt="Formation et ateliers"
          className="w-full h-full object-cover blur-[0.5px] group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h3 className="text-xl font-bold leading-tight">FORMATION & ATELIERS</h3>
            <div className="mb-2 bg-special-1/80 backdrop-blur-sm text-white border-none inline-block px-3 py-1 rounded-full text-xs">
              Formations individuels ou groupés
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-4 lg:p-6 text-center group-hover:bg-white/90 transition-colors duration-500">
        <ul className="text-gray-600 text-xs lg:text-sm leading-relaxed text-left space-y-3">
          <li className="flex items-start">
            <span className="text-special-1 mr-2 mt-1">•</span>
            <span>Accueil de qualité et expérience client – éthique de soins</span>
          </li>
          <li className="flex items-start">
            <span className="text-special-1 mr-2 mt-1">•</span>
            <span>Perfectionnement en Thérapies classiques : techniques de massage – rituels – langage du soin</span>
          </li>
          <li className="flex items-start">
            <span className="text-special-1 mr-2 mt-1">•</span>
            <span>Soins tendance, innovants et communion avec la nature</span>
          </li>
          <li className="flex items-start">
            <span className="text-special-1 mr-2 mt-1">•</span>
            <span>Produits dérivés issus des plantes, vente et conseils</span>
          </li>
        </ul>
      </CardContent>
    </Card>

    {/* Carte 4 - MARKETING & COMMUNICATION */}
    <Card className="hover:shadow-2xl hover:scale-100 transition-all duration-500 group bg-white/80 backdrop-blur-sm overflow-hidden p-0 border border-gray-100">
      <div className="relative bg-linear-to-r from-green-900 via-emerald-800 to-teal-900 text-white h-32">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="/src/assets/wellness/Mark&Comm1.png" 
          alt="Marketing et communication"
          className="w-full h-full object-cover blur-[0.5px] group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h3 className="text-xl font-bold leading-tight">MARKETING & COMMUNICATION</h3>
            <div className="mb-2 bg-special-1/80 backdrop-blur-sm text-white border-none inline-block px-3 py-1 rounded-full text-xs">
              communication ciblés
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-4 lg:p-6 text-center group-hover:bg-white/90 transition-colors duration-500">
        <ul className="text-gray-600 text-xs lg:text-sm leading-relaxed text-left space-y-3">
          <li className="flex items-start">
            <span className="text-special-1 mr-2 mt-1">•</span>
            <span>Identité visuelle, image de marqué « signature », positionnement</span>
          </li>
          <li className="flex items-start">
            <span className="text-special-1 mr-2 mt-1">•</span>
            <span>Conception d'offres exclusives – axée sur la préservation environnementale, l'orientation commerciale et les projets RSE</span>
          </li>
          <li className="flex items-start">
            <span className="text-special-1 mr-2 mt-1">•</span>
            <span>Stratégie de communication, canaux de distribution prioritaires et supports de promotion</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  </div>
</motion.div>

            {/* Colonne de droite*/}
            <motion.div 
              className="order-2 lg:order-1"
              variants={fadeInUp}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">

              <Card className="hover:shadow-2xl hover:scale-100 transition-all duration-500 group bg-white/80 backdrop-blur-sm overflow-hidden p-0 border border-gray-100 mt-8 lg:mt-12">
                  {/* Section Hero miniature dans la carte */}
                  <div className="relative bg-linear-to-r from-green-900 via-emerald-800 to-teal-900 text-white h-32">
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <img 
                      src="/src/assets/wellness/LeadMan.png" 
                      alt="background Nature Wellness"
                      className="w-full h-full object-cover blur-[0.5px] group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                      <div className="text-center max-w-4xl mx-auto px-4">
                        <h3 className="text-xl font-bold leading-tight">LEADERSHIP & MANAGEMENT </h3>
                        <div className="mb-2 bg-special-1/80 backdrop-blur-sm text-white border-none inline-block px-3 py-1 rounded-full text-xs">
                          Développement des compétences managériales.
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-4 lg:p-6 text-center group-hover:bg-white/90 transition-colors duration-500">
                    <h5 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">
                      Contenu du diagnostic :
                    </h5>
                    <ul className="text-gray-600 text-xs lg:text-sm leading-relaxed text-left space-y-3">
                      <li className="flex items-start">
                        <span className="text-special-1 mr-2 mt-1">•</span>
                        <span>Leadership du bien-être - Management d’équipe - conduite du changement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-special-1 mr-2 mt-1">•</span>
                        <span>Formation en Gestion opérationnelle et financière </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-special-1 mr-2 mt-1">•</span>
                        <span>Coaching professionnel du Responsable et des thérapeutes</span>
                      </li>
                      </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-2xl hover:scale-100 transition-all duration-500 group bg-white/80 backdrop-blur-sm overflow-hidden p-0 border border-gray-100 mt-8 lg:mt-12">
                  {/* Section Hero miniature dans la carte */}
                  <div className="relative bg-linear-to-r from-green-900 via-emerald-800 to-teal-900 text-white h-32">
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <img 
                      src="/src/assets/wellness/Recherche.png" 
                      alt="background Nature Wellness"
                      className="w-full h-full object-cover blur-[0.5px] group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                      <div className="text-center max-w-4xl mx-auto px-4">
                        <h3 className="text-xl font-bold leading-tight">RECHERCHE & DEVELOPPEMENT</h3>
                        <div className="mb-2 bg-special-1/80 backdrop-blur-sm text-white border-none inline-block px-3 py-1 rounded-full text-xs">
                          Offre de gamme de produits de soins thérapeutiques et adapté à l’offre du centre, sa nouvelle image, répondant aux normes actuelles (environnementales et autres) :
                          <ul className="text-gray-400 text-xs lg:text-sm leading-relaxed text-center space-y-3">
                            <li className=" items-center">
                        <span>Formats professionnels et clients</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-4 lg:p-6 text-center group-hover:bg-white/90 transition-colors duration-500">
                    <h5 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">
                      Quelques produits proposés : 
                    </h5>
                    <ul className="text-gray-600 text-xs lg:text-sm leading-relaxed text-left space-y-3">
                      <li className="flex items-start">
                        <span className="text-special-1 mr-2 mt-1">•</span>
                        <span>Huiles essentielles, sérums et huiles de massage pour soins aromatiques</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-special-1 mr-2 mt-1">•</span>
                        <span>Baumes et crèmes pour soins corporels</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-special-1 mr-2 mt-1">•</span>
                        <span>Savons et sels de bain pour rituels bien-être</span>
                      </li>
                      </ul>
                      <p className="text-lg lg:text-base font-bold text-gray-600 mb-4 text-start">Ateliers de partages entre acteurs de la chaine de valeurs « plantes » qui sans se connaitre, 
                        travaillent de près et devraient être connectés : thérapeutes, producteurs, chercheurs, ...
                      </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-2xl hover:scale-100 transition-all duration-500 group bg-white/80 backdrop-blur-sm overflow-hidden p-0 border border-gray-100">
                  {/* Section Hero miniature dans la carte */}
                  <div className="relative bg-linear-to-r from-green-900 via-emerald-800 to-teal-900 text-white h-32">
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <img 
                      src="/src/assets/wellness/Suivi.png" 
                      alt="background Nature Wellness"
                      className="w-full h-full object-cover blur-[0.5px] group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                      <div className="text-center max-w-4xl mx-auto px-4">
                        <h3 className="text-xl font-bold leading-tight">SUIVI & EVALUATION </h3>
                        <div className="mb-2 bg-special-1/80 backdrop-blur-sm text-white border-none inline-block px-3 py-1 rounded-full text-xs">
                          
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-4 lg:p-6 text-center group-hover:bg-white/90 transition-colors duration-500">
                    <h5 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
                      Restitution – suivi et analyse des indicateurs de performance – ajustements stratégiques
                    </h5>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-2xl hover:scale-100 transition-all duration-500 group bg-white/80 backdrop-blur-sm overflow-hidden p-0 border border-gray-100">
                {/* Section Hero miniature dans la carte */}
                <div className="relative bg-linear-to-r from-green-900 via-emerald-800 to-teal-900 text-white h-32">
                  <div className="absolute inset-0 bg-black/40 z-10"></div>
                  <img 
                    src="/src/assets/wellness/Pack.png" 
                    alt="background Nature Wellness"
                    className="w-full h-full object-cover blur-[0.5px] group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="text-center max-w-4xl mx-auto px-4">
                      <h3 className="text-xl font-bold leading-tight">PACK ESSENTIEL </h3>
                      <div className="mb-2 bg-special-1/80 backdrop-blur-sm text-white border-none inline-block px-3 py-1 rounded-full text-xs">
                        
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4 lg:p-6 text-center group-hover:bg-white/90 transition-colors duration-500">
                    <h5 className="text-lg lg:text-xl font-bold text-gray-900 mb-4">
                      DIAGNOSTIC – OPTIMISATION ARCHITECTURALE – FORMATION ET ATELIERS – SUIVI ET EVALUATION
                    </h5>
                  </CardContent>
              </Card>
              </div>
            </motion.div>
        </div>
      </section>
    </section>


























      <hr className="my-0 border-t border-black w-3/4 mx-auto opacity-50" />



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
  );
};

export default Home;