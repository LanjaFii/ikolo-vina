// src/pages/Privacy.tsx
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-linear-to-br from-white to-gray-50/30">
      {/* Hero Section */}
      <section className="relative text-white py-10 lg:py-10">
        <div className="container mx-auto px-4 relative z-20">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex justify-center items-center gap-6 mb-6">
              <img src="/assets/logos/ikolo.png" alt="Ikolo" className="h-10 lg:h-14 w-auto opacity-90" />
              <img src="/assets/logos/ikolo-vina.png" alt="Ikolo Vina" className="h-12 lg:h-16 w-auto" />
              <img src="/assets/logos/vina.png" alt="Vina Consulting" className="h-10 lg:h-14 w-auto opacity-90" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">{t('privacy.hero.title')}</h1>
            <p className="text-lg lg:text-xl text-gray-900">{t('privacy.hero.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-5 lg:py-2">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-linear-to-br from-special-1 to-special-2 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Eye className="h-6 w-6 text-black" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{t('privacy.cards.dataCollection.title')}</h3>
              <p className="text-gray-600 text-sm">{t('privacy.cards.dataCollection.content')}</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-linear-to-br from-special-3 to-special-4 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Lock className="h-6 w-6 text-black" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{t('privacy.cards.protection.title')}</h3>
              <p className="text-gray-600 text-sm">{t('privacy.cards.protection.content')}</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-linear-to-br from-special-2 to-special-3 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Shield className="h-6 w-6 text-black" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{t('privacy.cards.rights.title')}</h3>
              <p className="text-gray-600 text-sm">{t('privacy.cards.rights.content')}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="prose prose-gray max-w-none">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('privacy.information.commitment.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('privacy.information.commitment.content')}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">{t('privacy.information.dataUsage.title')}</h4>
                  <p className="text-gray-600 text-sm">{t('privacy.information.dataUsage.content')}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">{t('privacy.information.dataSharing.title')}</h4>
                  <p className="text-gray-600 text-sm">{t('privacy.information.dataSharing.content')}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">{t('privacy.information.gdprRights.title')}</h4>
                  <p className="text-gray-600 text-sm">{t('privacy.information.gdprRights.content')}</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-special-1/10 rounded-lg">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-special-1" />
                  <div>
                    <p className="font-semibold text-gray-900">{t('privacy.information.contact.title')}</p>
                    <p className="text-gray-600 text-sm">{t('privacy.information.contact.email')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              {t('privacy.lastUpdate')}: {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;