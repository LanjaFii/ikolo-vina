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
import { useTranslation } from "react-i18next";

const Digital = () => {
    const { t } = useTranslation();

    const processSteps = [
        {
            step: "01",
            title: t('digital.process.steps.0.title'),
            description: t('digital.process.steps.0.description')
        },
        {
            step: "02",
            title: t('digital.process.steps.1.title'),
            description: t('digital.process.steps.1.description')
        },
        {
            step: "03",
            title: t('digital.process.steps.2.title'),
            description: t('digital.process.steps.2.description')
        },
        {
            step: "04",
            title: t('digital.process.steps.3.title'),
            description: t('digital.process.steps.3.description')
        },
        {
            step: "05",
            title: t('digital.process.steps.4.title'),
            description: t('digital.process.steps.4.description')
        }
    ];

    const services = [
        {
            id: 1,
            title: t('digital.services.0.title'),
            description: t('digital.services.0.description'),
            image: "/assets/digital/strategy.png",
            icon: Search,
            features: [
                t('digital.services.0.features.0'),
                t('digital.services.0.features.1'),
                t('digital.services.0.features.2'),
                t('digital.services.0.features.3')
            ]
        },
        {
            id: 2,
            title: t('digital.services.1.title'),
            description: t('digital.services.1.description'),
            image: "/assets/digital/dev.png",
            icon: Globe,
            features: [
                t('digital.services.1.features.0'),
                t('digital.services.1.features.1'),
                t('digital.services.1.features.2'),
                t('digital.services.1.features.3')
            ]
        },
        {
            id: 3,
            title: t('digital.services.2.title'),
            description: t('digital.services.2.description'),
            image: "/assets/digital/socialMedia.png",
            icon: Smartphone,
            features: [
                t('digital.services.2.features.0'),
                t('digital.services.2.features.1'),
                t('digital.services.2.features.2'),
                t('digital.services.2.features.3')
            ]
        },
        {
            id: 4,
            title: t('digital.services.3.title'),
            description: t('digital.services.3.description'),
            image: "/assets/digital/marketing.png",
            icon: TrendingUp,
            features: [
                t('digital.services.3.features.0'),
                t('digital.services.3.features.1'),
                t('digital.services.3.features.2'),
                t('digital.services.3.features.3')
            ]
        },
        {
            id: 5,
            title: t('digital.services.4.title'),
            description: t('digital.services.4.description'),
            image: "/assets/digital/formation.png",
            icon: GraduationCap,
            features: [
                t('digital.services.4.features.0'),
                t('digital.services.4.features.1'),
                t('digital.services.4.features.2'),
                t('digital.services.4.features.3')
            ]
        }
    ];

    const whyChooseUs = [
        {
            icon: Users,
            title: t('digital.whyChooseUs.items.0.title'),
            description: t('digital.whyChooseUs.items.0.description')
        },
        {
            icon: Target,
            title: t('digital.whyChooseUs.items.1.title'),
            description: t('digital.whyChooseUs.items.1.description')
        },
        {
            icon: BarChart3,
            title: t('digital.whyChooseUs.items.2.title'),
            description: t('digital.whyChooseUs.items.2.description')
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-linear-to-r from-special-1 via-special-4 to-special-2 text-white py-16 lg:py-20">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img
                    src="/assets/offers/online.png"
                    alt={t('digital.hero.imageAlt')}
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
                            {t('digital.hero.badge')}
                        </Badge>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                            {t('digital.hero.title')}
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl mb-6 text-gray-100 leading-relaxed">
                            {t('digital.hero.subtitle')}
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
                            {t('digital.services.title')}
                        </h2>
                        <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            {t('digital.services.subtitle')}
                        </p>
                    </motion.div>

                    <div className="max-w-6xl mx-auto space-y-16">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className={`flex flex-col lg:flex-row items-start gap-8 ${
                                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                            >
                                <div className="lg:w-2/5">
                                    <div className="relative group">
                                        <div className="relative rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="absolute top-3 right-3 w-12 h-12 rounded-xl bg-linear-to-r from-special-1 to-special-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                                                <service.icon className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:w-3/5 text-center lg:text-left lg:pt-4">
                                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-base mb-4 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {service.features.map((item, itemIndex) => (
                                            <div key={itemIndex} className="flex items-start space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                                                <CheckCircle className="w-4 h-4 text-special-2 mt-0.5 shrink-0" />
                                                <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
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
                            {t('digital.process.title')}
                        </h2>
                        <p className="text-base text-gray-600 max-w-2xl mx-auto">
                            {t('digital.process.subtitle')}
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
            <section className="pt-16 pb-2 bg-linear-to-br from-white to-gray-50/30">
                <div className="container mx-auto px-8 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center lg:text-left"
                        >
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                {t('digital.whyChooseUs.title')}
                            </h2>
                            <div className="space-y-4">
                                {whyChooseUs.map((item) => (
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
                                src="/assets/digital/ikoloVinaDigital.png"
                                alt={t('digital.whyChooseUs.imageAlt')}
                                className="rounded-xl shadow-lg max-w-md mx-auto"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section CTA Finale */}
            <section className="py-5 bg-linear-to-br from-white to-gray-50/30">
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
                            {t('digital.cta.title')}
                        </h3>

                        <p className="text-base lg:text-lg xl:text-xl text-gray-600 mb-6 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
                            {t('digital.cta.description')}
                        </p>

                        {/* Phrase clignotante */}
                        <motion.p
                            className="text-special-3 font-bold text-lg lg:text-xl mb-6"
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.2, repeat: Infinity, repeatType: "loop" }}
                        >
                            {t('digital.cta.offer')}
                        </motion.p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                            to="/contact"
                            className="bg-linear-to-r from-special-1 to-special-2 hover:from-special-2 hover:to-special-3 text-black px-8 py-3 lg:px-10 lg:py-4 text-base lg:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center border border-black"
                            >
                            {t('digital.cta.button')}
                            </Link>
                        </div>

                        <p className="text-gray-500 text-xs lg:text-sm mt-4 lg:mt-6">
                            {t('digital.cta.footer')}
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