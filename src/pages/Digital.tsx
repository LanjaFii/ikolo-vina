// src/pages/CommunicationDigitale.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
    Search,
    Globe,
    Smartphone,
    TrendingUp,
    GraduationCap,
    CheckCircle,
    ArrowRight,
    BarChart3,
    Target,
    Users
} from "lucide-react";

// Animations cohérentes avec Home
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

const Digital = () => {
    const services = [
        {
            icon: <Search className="w-8 h-8" />,
            title: "Audit & Stratégie Digitale",
            description: "Analyse complète de votre présence en ligne et élaboration d'une stratégie sur mesure pour atteindre vos objectifs.",
            features: ["Audit de présence en ligne", "Analyse concurrentielle", "Stratégie digitale personnalisée", "Plan d'action détaillé"],
            color: "from-special-1 to-special-4"
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Création de Sites Web",
            description: "Sites web modernes, responsives et optimisés pour convertir vos visiteurs en clients.",
            features: ["Sites vitrines responsives", "E-commerce", "Sites institutionnels", "Refonte de sites"],
            color: "from-special-2 to-special-1"
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Gestion des Réseaux Sociaux",
            description: "Développez votre communauté et engagez votre audience sur les plateformes sociales.",
            features: ["Création de pages professionnelles", "Stratégie de contenu", "Community management", "Campagnes publicitaires"],
            color: "from-special-3 to-special-2"
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Marketing Digital",
            description: "Augmentez votre visibilité et générez plus de leads avec nos stratégies marketing.",
            features: ["Référencement naturel (SEO)", "Campagnes SEA", "Email marketing", "Analytics & reporting"],
            color: "from-special-4 to-special-3"
        },
        {
            icon: <GraduationCap className="w-8 h-8" />,
            title: "Formation Digitale",
            description: "Autonomisez vos équipes avec nos formations aux outils et stratégies digitales.",
            features: ["Formation aux outils digitaux", "Autonomisation des équipes", "Ateliers pratiques", "Support continu"],
            color: "from-special-1 to-special-5"
        }
    ];

    const stats = [
        { number: "30-50%", label: "Augmentation de visibilité en 6 mois" },
        { number: "24h", label: "Réponse garantie" },
        { number: "100%", label: "Satisfaction client" },
        { number: "15+", label: "Projets réalisés" }
    ];

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
        <div className="min-h-screen bg-gradient-to-br from-white to-gray-50/30">
            {/* Hero Section - Style cohérent avec Home */}
            <section className="relative bg-gradient-to-r from-special-1 via-special-4 to-special-2 text-white py-20 lg:py-28">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img
                    src="/src/assets/communication-digitale/hero-digital.png"
                    alt="Interface digitale moderne avec éléments naturels malgaches en arrière-plan"
                    className="w-full h-full object-cover absolute inset-0 blur-[1px]"
                />
                <div className="container mx-auto px-4 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <Badge variant="secondary" className="mb-6 bg-special-1/80 backdrop-blur-sm text-white border-none">
                            Communication Digitale
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Boostez Votre Présence en Ligne
                        </h1>
                        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-100 leading-relaxed">
                            Stratégies digitales sur mesure pour valoriser votre entreprise malgache
                            et atteindre de nouveaux marchés
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
                            >
                                Audit Gratuit
                                <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                            </Button>

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
                                Voir nos réalisations
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section Chiffres Clés */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="space-y-2"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-special-1">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium text-sm">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Section Nos Services Digitaux */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
                            Nos <span className="text-special-1">Services</span> Digitaux
                        </h2>
                        <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Une gamme complète de services pour couvrir tous vos besoins en communication digitale
                        </p>
                    </motion.div>

                    <div className="max-w-6xl mx-auto">
                        {/* Service 1 - Audit & Stratégie */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col lg:flex-row items-start gap-12 mb-24"
                        >
                            {/* Visual Side avec Image */}
                            <div className="lg:w-2/5">
                                <div className="relative group lg:ml-8">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                                        <img
                                            src="/src/assets/communication-digitale/service-1.jpg"
                                            alt="Tableau de bord d'analyse digitale montrant des graphiques de performance et métriques SEO"
                                            className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute top-4 right-4 w-14 h-14 rounded-2xl bg-gradient-to-r from-special-1 to-special-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                            <Search className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute -z-10 -bottom-4 -left-4 w-32 h-32 rounded-3xl bg-special-1/10 group-hover:bg-special-1/20 transition-colors duration-500" />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="lg:w-3/5 text-center lg:text-left lg:pt-8">
                                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    Audit & Stratégie Digitale
                                </h3>
                                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                    Analyse complète de votre présence en ligne et élaboration d'une stratégie sur mesure pour atteindre vos objectifs.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                        <CheckCircle className="w-5 h-5 text-special-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm leading-relaxed">Audit de présence en ligne</span>
                                    </div>
                                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                        <CheckCircle className="w-5 h-5 text-special-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm leading-relaxed">Analyse concurrentielle</span>
                                    </div>
                                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                        <CheckCircle className="w-5 h-5 text-special-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm leading-relaxed">Stratégie digitale personnalisée</span>
                                    </div>
                                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                        <CheckCircle className="w-5 h-5 text-special-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm leading-relaxed">Plan d'action détaillé</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Service 2 - Création de Sites Web */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col lg:flex-row-reverse items-start gap-12 mb-24"
                        >
                            <div className="lg:w-2/5">
                                <div className="relative group lg:mr-8">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                                        <img
                                            src="/src/assets/communication-digitale/service-2.jpg"
                                            alt="Mockup de site web moderne sur ordinateur et mobile avec design responsive"
                                            className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute top-4 right-4 w-14 h-14 rounded-2xl bg-gradient-to-r from-special-2 to-special-1 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                            <Globe className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 rounded-3xl bg-special-1/10 group-hover:bg-special-1/20 transition-colors duration-500" />
                                </div>
                            </div>

                            <div className="lg:w-3/5 text-center lg:text-left lg:pt-8">
                                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    Création de Sites Web
                                </h3>
                                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                    Sites web modernes, responsives et optimisés pour convertir vos visiteurs en clients.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                        <CheckCircle className="w-5 h-5 text-special-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm leading-relaxed">Sites vitrines responsives</span>
                                    </div>
                                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                        <CheckCircle className="w-5 h-5 text-special-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm leading-relaxed">E-commerce</span>
                                    </div>
                                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                        <CheckCircle className="w-5 h-5 text-special-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm leading-relaxed">Sites institutionnels</span>
                                    </div>
                                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                        <CheckCircle className="w-5 h-5 text-special-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm leading-relaxed">Refonte de sites</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Service 3 - Gestion des Réseaux Sociaux */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col lg:flex-row items-start gap-12 mb-24"
                        >
                            <div className="lg:w-2/5">
                                <div className="relative group lg:ml-8">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                                        <img
                                            src="/src/assets/communication-digitale/service-3.jpg"
                                            alt="Dashboard de gestion des réseaux sociaux avec statistiques d'engagement et planning de contenu"
                                            className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute top-4 right-4 w-14 h-14 rounded-2xl bg-gradient-to-r from-special-3 to-special-2 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                            <Smartphone className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute -z-10 -bottom-4 -left-4 w-32 h-32 rounded-3xl bg-special-1/10 group-hover:bg-special-1/20 transition-colors duration-500" />
                                </div>
                            </div>

                            <div className="lg:w-3/5 text-center lg:text-left lg:pt-8">
                                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    Gestion des Réseaux Sociaux
                                </h3>
                                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                    Développez votre communauté et engagez votre audience sur les plateformes sociales.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                        <CheckCircle className="w-5 h-5 text-special-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm leading-relaxed">Création de pages professionnelles</span>
                                    </div>
                                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                        <CheckCircle className="w-5 h-5 text-special-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm leading-relaxed">Stratégie de contenu</span>
                                    </div>
                                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                        <CheckCircle className="w-5 h-5 text-special-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm leading-relaxed">Community management</span>
                                    </div>
                                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                        <CheckCircle className="w-5 h-5 text-special-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm leading-relaxed">Campagnes publicitaires</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Service 4 - Marketing Digital */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col lg:flex-row-reverse items-start gap-12 mb-24"
                        >
                            <div className="lg:w-2/5">
                                <div className="relative group lg:mr-8">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                                        <img
                                            src="/src/assets/communication-digitale/service-4.jpg"
                                            alt="Graphiques analytics montrant la croissance du trafic et performances marketing digital"
                                            className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute top-4 right-4 w-14 h-14 rounded-2xl bg-gradient-to-r from-special-4 to-special-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                            <TrendingUp className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 rounded-3xl bg-special-1/10 group-hover:bg-special-1/20 transition-colors duration-500" />
                                </div>
                            </div>

                            <div className="lg:w-3/5 text-center lg:text-left lg:pt-8">
                                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    Marketing Digital
                                </h3>
                                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                    Augmentez votre visibilité et générez plus de leads avec nos stratégies marketing.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                        <CheckCircle className="w-5 h-5 text-special-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm leading-relaxed">Référencement naturel (SEO)</span>
                                    </div>
                                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                        <CheckCircle className="w-5 h-5 text-special-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm leading-relaxed">Campagnes SEA</span>
                                    </div>
                                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                        <CheckCircle className="w-5 h-5 text-special-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm leading-relaxed">Email marketing</span>
                                    </div>
                                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                        <CheckCircle className="w-5 h-5 text-special-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm leading-relaxed">Analytics & reporting</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Service 5 - Formation Digitale */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col lg:flex-row items-start gap-12"
                        >
                            <div className="lg:w-2/5">
                                <div className="relative group lg:ml-8">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                                        <img
                                            src="/src/assets/communication-digitale/service-5.jpg"
                                            alt="Atelier de formation digitale avec participants malgaches utilisant des outils numériques"
                                            className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute top-4 right-4 w-14 h-14 rounded-2xl bg-gradient-to-r from-special-1 to-special-5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                            <GraduationCap className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute -z-10 -bottom-4 -left-4 w-32 h-32 rounded-3xl bg-special-1/10 group-hover:bg-special-1/20 transition-colors duration-500" />
                                </div>
                            </div>

                            <div className="lg:w-3/5 text-center lg:text-left lg:pt-8">
                                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    Formation Digitale
                                </h3>
                                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                    Autonomisez vos équipes avec nos formations aux outils et stratégies digitales.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                        <CheckCircle className="w-5 h-5 text-special-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm leading-relaxed">Formation aux outils digitaux</span>
                                    </div>
                                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                        <CheckCircle className="w-5 h-5 text-special-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm leading-relaxed">Autonomisation des équipes</span>
                                    </div>
                                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                        <CheckCircle className="w-5 h-5 text-special-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm leading-relaxed">Ateliers pratiques</span>
                                    </div>
                                    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                        <CheckCircle className="w-5 h-5 text-special-2 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm leading-relaxed">Support continu</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section Notre Processus */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Notre <span className="text-special-1">Processus</span> en 5 Étapes
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Une méthodologie éprouvée pour garantir le succès de votre transformation digitale
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={step.step}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="text-center group"
                                >
                                    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r from-special-1 to-special-2 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <span className="text-white font-bold text-sm lg:text-base">{step.step}</span>
                                    </div>

                                    <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Image Processus */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-16 text-center"
                    >
                        <img
                            src="/src/assets/communication-digitale/processus-digital.png"
                            alt="Processus visuel en 5 étapes : audit, stratégie, mise en œuvre, formation, suivi"
                            className="max-w-4xl mx-auto rounded-2xl shadow-lg"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Section Pourquoi Nous Choisir */}
            <section className="py-20 bg-gradient-to-br from-special-1/10 to-special-2/10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                Pourquoi Choisir <span className="text-special-1">IKOLO-VINA</span> ?
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <Users className="w-6 h-6 text-special-2 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">Expertise Locale</h4>
                                        <p className="text-gray-600">
                                            Une connaissance approfondie du marché malgache et des spécificités culturelles
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Target className="w-6 h-6 text-special-2 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">Approche Durable</h4>
                                        <p className="text-gray-600">
                                            Des stratégies digitales responsables qui s'inscrivent dans une vision long terme
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <BarChart3 className="w-6 h-6 text-special-2 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">Résultats Mesurables</h4>
                                        <p className="text-gray-600">
                                            Suivi précis des performances et ajustements continus pour maximiser votre ROI
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <img
                                src="/src/assets/communication-digitale/equipe-digital.png"
                                alt="Équipe IKOLO-VINA travaillant sur un projet digital dans un bureau moderne"
                                className="rounded-2xl shadow-xl max-w-md mx-auto"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section CTA Finale */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className="bg-gradient-to-r from-special-1/20 via-special-2/15 to-special-4/20 rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto relative overflow-hidden border border-special-1/10">
                            <div className="relative z-10">
                                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                                    Prêt à <span className="text-special-1">transformer</span> votre présence digitale ?
                                </h3>

                                <p className="text-base lg:text-lg xl:text-xl text-gray-700 mb-6 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
                                    Contactez-nous dès aujourd'hui pour un audit gratuit et découvrez comment
                                    nos solutions digitales peuvent propulser votre entreprise vers de nouveaux sommets.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-special-1 to-special-2 hover:from-special-2 hover:to-special-3 text-white px-8 py-3 lg:px-10 lg:py-4 text-base lg:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                    >
                                        Demander un Audit Gratuit
                                        <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                                    </Button>

                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-2 border-special-1 text-special-1 hover:bg-special-1 hover:text-white px-8 py-3 lg:px-10 lg:py-4 text-base lg:text-lg font-semibold rounded-lg transition-all duration-300"
                                    >
                                        Voir nos réalisations
                                    </Button>
                                </div>

                                <p className="text-gray-600 text-xs lg:text-sm mt-4 lg:mt-6">
                                    Réponse sous 24h • Audit personnalisé • Devis transparent
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