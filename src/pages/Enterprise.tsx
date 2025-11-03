// src/pages/Entreprise.tsx
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Entreprise = () => { 

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-linear-to-r from-special-1 via-special-4 to-special-2 text-white py-16 lg:py-20">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img
                    src="/src/assets/appui/banniere1.png"
                    alt="Appui à l'entreprenariat"
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
                        Appui à l'entrepreneuriat
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                          Entrepreneuriat durable.
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl mb-6 text-gray-100 leading-relaxed">
                        Soutien complet aux entrepreneurs pour créer, gérer et digitaliser durablement leur activité.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section Nos Services Digitaux */}
            <section className="py-10 bg-linear-to-br from-white to-gray-50/30">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16 mt-5"
                    >
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4">
                          Nous soutenons <span className="text-special-1"> les entrepreneurs malgaches</span> à chaque étape de leur parcours pour une croissance inclusive et durable.
                        </h2>

                        <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                          De la création à la gestion, nous offrons un accompagnement stratégique, pratique et digital pour assurer leur réussite.
                        </p>
                    </motion.div>
                </div>

                <div className="max-w-6xl mx-auto space-y-16">
                    {/* Service 1 - Image à DROITE, Description à GAUCHE */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col lg:flex-row-reverse items-start gap-8" // ⬅️ flex-row-reverse
                    >
                        <div className="lg:w-2/5">
                            <div className="relative group">
                                <div className="relative rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                                    <img
                                        src="/src/assets/appui/AppuiFormation.png"
                                        alt="Appui et Formation en Création d'Entreprise"
                                        className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute top-3 right-3 w-12 h-12 rounded-xl bg-linear-to-r from-special-1 to-special-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-3/5 text-center lg:text-left lg:pt-4">
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                              Appui et Formation en Création d'Entreprise : 
                            </h3>
                            <p className="text-gray-600 text-base mb-4 leading-relaxed">
                              Guidance pour structurer votre idée en business plan viable, avec focus sur les secteurs verts
                            </p>
                        </div>
                    </motion.div>

                    {/* Service 2 - Image à GAUCHE, Description à DROITE */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col lg:flex-row items-start gap-8" // ⬅️ flex-row (normal)
                    >
                        <div className="lg:w-2/5">
                            <div className="relative group">
                                <div className="relative rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                                    <img
                                        src="/src/assets/appui/accompagnement.png"
                                        alt="Accompagnement et Formation à la Gestion d'Entreprise"
                                        className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute top-3 right-3 w-12 h-12 rounded-xl bg-linear-to-r from-special-2 to-special-1 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-3/5 text-center lg:text-left lg:pt-4">
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                              Accompagnement et Formation à la Gestion d'Entreprise :
                            </h3>
                            <p className="text-gray-600 text-base mb-4 leading-relaxed">
                              Outils pour optimiser finances, RH et opérations, incluant des modules sur la résilience climatique.
                            </p>
                        </div>
                    </motion.div>

                    {/* Service 3 - Image à DROITE, Description à GAUCHE */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col lg:flex-row-reverse items-start gap-8" // ⬅️ flex-row-reverse
                    >
                        <div className="lg:w-2/5">
                            <div className="relative group">
                                <div className="relative rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                                    <img
                                        src="/src/assets/appui/Digitalisation.png"
                                        alt="Accompagnement à la Digitalisation d'Entreprise"
                                        className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute top-3 right-3 w-12 h-12 rounded-xl bg-linear-to-r from-special-3 to-special-2 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-3/5 text-center lg:text-left lg:pt-4">
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                              Accompagnement à la Digitalisation d'Entreprise : 
                            </h3>
                            <p className="text-gray-600 text-base mb-4 leading-relaxed">
                              Transition vers des outils numériques (e-commerce, CRM) pour booster l'efficacité.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section Notre Processus */}
            <section className="pt-0 pb-5 bg-linear-to-br from-white to-gray-50/30">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mt-10"
                    >
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                            <span className="text-special-1">Bénéfices :</span>
                        </h2>
                        <p className="text-base text-gray-600 max-w-2xl mx-auto">
                          Les risques d'échec reduits de de 40% grâce à un mentoring personnalisé.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section CTA Finale */}
            <section className="py-5 bg-linear-to-br from-gray-50 to-white">
                <div className="container mx-auto px-4">
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
                                      Prêt à <span className="text-special-1">transformer</span> votre présence digitale ?
                                    </h3>
                                    
                                    <p className="text-base lg:text-lg xl:text-xl text-gray-600 mb-6 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
                                      Contactez-nous dès aujourd'hui pour un audit gratuit et découvrez comment
                                      nos solutions digitales peuvent propulser votre entreprise vers de nouveaux sommets.
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
            </section>
        </div>
    );
};

export default Entreprise;