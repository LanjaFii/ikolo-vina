// src/pages/CommunicationDigitale.tsx
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
    Search,
    Globe,
    Smartphone,
    TrendingUp,
    GraduationCap,
    CheckCircle,
    BarChart3,
    Target,
    Users
} from "lucide-react";
import { Link } from "react-router-dom";

const Digital = () => {

    const processSteps = [
        {
            step: "01",
            title: "Audit Complet",
            description: "Analyse approfondie de votre situation digitale"
        },
        {
            step: "02",
            title: "Stratégie Sur Mesure",
            description: "Élaboration d'un plan d'action personnalisé"
        },
        {
            step: "03",
            title: "Mise en Œuvre",
            description: "Déploiement des solutions digitales"
        },
        {
            step: "04",
            title: "Formation",
            description: "Autonomisation de vos équipes"
        },
        {
            step: "05",
            title: "Suivi & Optimisation",
            description: "Amélioration continue des performances"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-linear-to-r from-special-1 via-special-4 to-special-2 text-white py-16 lg:py-20">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img
                    src="/src/assets/offers/online.png"
                    alt="Communication digitale"
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
                            Communication Digitale
                        </Badge>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                            Boostez Votre Présence en Ligne
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl mb-6 text-gray-100 leading-relaxed">
                            Stratégies digitales sur mesure pour valoriser votre entreprise à Madagascar
                            et atteindre de nouveaux marchés
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
                            Nos <span className="text-special-1">Services</span> Digitaux
                        </h2>
                        <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Une gamme complète de services pour couvrir tous vos besoins en communication digitale
                        </p>
                    </motion.div>

                    <div className="max-w-6xl mx-auto space-y-16">
                        {/* Service 1 - Audit & Stratégie */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col lg:flex-row items-start gap-8"
                        >
                            <div className="lg:w-2/5">
                                <div className="relative group">
                                    <div className="relative rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                                        <img
                                            src="/src/assets/digital/strategy.png"
                                            alt="Audit et stratégie digitale"
                                            className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute top-3 right-3 w-12 h-12 rounded-xl bg-linear-to-r from-special-1 to-special-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                            <Search className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-3/5 text-center lg:text-left lg:pt-4">
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                                    Audit & Stratégie Digitale
                                </h3>
                                <p className="text-gray-600 text-base mb-4 leading-relaxed">
                                    Analyse complète de votre présence en ligne et élaboration d'une stratégie sur mesure pour atteindre vos objectifs.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {[
                                        "Audit de présence en ligne",
                                        "Analyse concurrentielle",
                                        "Stratégie digitale personnalisée",
                                        "Plan d'action détaillé"
                                    ].map((item) => (
                                        <div key={item} className="flex items-start space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                            <CheckCircle className="w-4 h-4 text-special-2 mt-0.5 shrink-0" />
                                            <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Service 2 - Création de Sites Web */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col lg:flex-row-reverse items-start gap-8"
                        >
                            <div className="lg:w-2/5">
                                <div className="relative group">
                                    <div className="relative rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                                        <img
                                            src="/src/assets/digital/dev.png"
                                            alt="Création de sites web"
                                            className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute top-3 right-3 w-12 h-12 rounded-xl bg-linear-to-r from-special-2 to-special-1 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                            <Globe className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-3/5 text-center lg:text-left lg:pt-4">
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                                    Création de Sites Web
                                </h3>
                                <p className="text-gray-600 text-base mb-4 leading-relaxed">
                                    Sites web modernes, responsives et optimisés pour convertir vos visiteurs en clients.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {[
                                        "Sites vitrines responsives",
                                        "E-commerce",
                                        "Sites institutionnels",
                                        "Refonte de sites"
                                    ].map((item) => (
                                        <div key={item} className="flex items-start space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                            <CheckCircle className="w-4 h-4 text-special-2 mt-0.5 shrink-0" />
                                            <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Service 3 - Gestion des Réseaux Sociaux */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col lg:flex-row items-start gap-8"
                        >
                            <div className="lg:w-2/5">
                                <div className="relative group">
                                    <div className="relative rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                                        <img
                                            src="/src/assets/digital/socialMedia.png"
                                            alt="Gestion des réseaux sociaux"
                                            className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute top-3 right-3 w-12 h-12 rounded-xl bg-linear-to-r from-special-3 to-special-2 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                            <Smartphone className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-3/5 text-center lg:text-left lg:pt-4">
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                                    Gestion des Réseaux Sociaux
                                </h3>
                                <p className="text-gray-600 text-base mb-4 leading-relaxed">
                                    Développez votre communauté et engagez votre audience sur les plateformes sociales.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {[
                                        "Création de pages professionnelles",
                                        "Stratégie de contenu",
                                        "Community management",
                                        "Campagnes publicitaires"
                                    ].map((item) => (
                                        <div key={item} className="flex items-start space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                            <CheckCircle className="w-4 h-4 text-special-2 mt-0.5 shrink-0" />
                                            <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Service 4 - Marketing Digital */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col lg:flex-row-reverse items-start gap-8"
                        >
                            <div className="lg:w-2/5">
                                <div className="relative group">
                                    <div className="relative rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                                        <img
                                            src="/src/assets/digital/marketing.png"
                                            alt="Marketing digital"
                                            className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute top-3 right-3 w-12 h-12 rounded-xl bg-linear-to-r from-special-4 to-special-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                            <TrendingUp className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-3/5 text-center lg:text-left lg:pt-4">
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                                    Marketing Digital
                                </h3>
                                <p className="text-gray-600 text-base mb-4 leading-relaxed">
                                    Augmentez votre visibilité et générez plus de leads avec nos stratégies marketing.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {[
                                        "Référencement naturel (SEO)",
                                        "Campagnes SEA",
                                        "Email marketing",
                                        "Analytics & reporting"
                                    ].map((item) => (
                                        <div key={item} className="flex items-start space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                            <CheckCircle className="w-4 h-4 text-special-2 mt-0.5 shrink-0" />
                                            <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Service 5 - Formation Digitale */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col lg:flex-row items-start gap-8"
                        >
                            <div className="lg:w-2/5">
                                <div className="relative group">
                                    <div className="relative rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                                        <img
                                            src="/src/assets/digital/formation.png"
                                            alt="Formation digitale"
                                            className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute top-3 right-3 w-12 h-12 rounded-xl bg-linear-to-r from-special-1 to-special-5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                            <GraduationCap className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-3/5 text-center lg:text-left lg:pt-4">
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                                    Formation Digitale
                                </h3>
                                <p className="text-gray-600 text-base mb-4 leading-relaxed">
                                    Autonomisez vos équipes avec nos formations aux outils et stratégies digitales.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {[
                                        "Formation aux outils digitaux",
                                        "Autonomisation des équipes",
                                        "Ateliers pratiques",
                                        "Support continu"
                                    ].map((item) => (
                                        <div key={item} className="flex items-start space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                            <CheckCircle className="w-4 h-4 text-special-2 mt-0.5 shrink-0" />
                                            <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
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
                            Notre <span className="text-special-1">Processus</span> en 5 Étapes
                        </h2>
                        <p className="text-base text-gray-600 max-w-2xl mx-auto">
                            Une méthodologie éprouvée pour garantir le succès de votre transformation digitale
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3">
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={step.step}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="text-center group"
                                >
                                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-linear-to-r from-special-1 to-special-2 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-xs lg:text-sm">{step.step}</span>
                                    </div>
                                    <h3 className="text-sm lg:text-base font-bold text-gray-900 mb-1">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 text-xs leading-relaxed">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Pourquoi Nous Choisir */}
            <section className="pt-16 pb-2 bg-linear-to-br from-special-1/10 to-special-2/10">
                <div className="container mx-auto px-8 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center lg:text-left"
                        >
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                Pourquoi Choisir <span className="text-special-1">IKOLO-VINA</span> ?
                            </h2>
                            <div className="space-y-4">
                                {[
                                    {
                                        icon: Users,
                                        title: "Expertise Locale",
                                        description: "Une connaissance approfondie du marché malgache et des spécificités culturelles"
                                    },
                                    {
                                        icon: Target,
                                        title: "Approche Durable",
                                        description: "Des stratégies digitales responsables qui s'inscrivent dans une vision long terme"
                                    },
                                    {
                                        icon: BarChart3,
                                        title: "Résultats Mesurables",
                                        description: "Suivi précis des performances et ajustements continus pour maximiser votre ROI"
                                    }
                                ].map((item) => (
                                    <div key={item.title} className="flex items-start space-x-3">
                                        <item.icon className="w-5 h-5 text-special-2 mt-0.5 shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                                            <p className="text-gray-600 text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <img
                                src="/src/assets/offers/online.png"
                                alt="Équipe IKOLO-VINA"
                                className="rounded-xl shadow-lg max-w-md mx-auto"
                            />
                        </motion.div>
                    </div>
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

export default Digital;