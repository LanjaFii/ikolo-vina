// src/pages/Legal.tsx
import { motion } from "framer-motion";
import { Scale, Building, Users, FileText } from "lucide-react";

const Legal = () => {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">Mentions Légales</h1>
            <p className="text-lg lg:text-xl text-gray-900">Informations légales du consortium</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-5 lg:py-2">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-linear-to-br from-special-1 to-special-2 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Building className="h-6 w-6 text-black" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Éditeur</h3>
              <p className="text-gray-600 text-sm">Consortium Ikolo-Vina</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-linear-to-br from-special-3 to-special-4 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Users className="h-6 w-6 text-black" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Publication</h3>
              <p className="text-gray-600 text-sm">Felana Anna RAMAHANDRISON<br />Holiniaina Norohariliva RAKOTOMALALA</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-linear-to-br from-special-1 to-special-2 rounded-2xl flex items-center justify-center">
                <Scale className="h-6 w-6 text-black" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Informations Légales</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Consortium Ikolo-Vina</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <p className="font-medium">Ikolo</p>
                    <p>Holiniaina Norohariliva RAKOTOMALALA<br/>Expertise cosmétique naturelle</p>
                  </div>
                  <div>
                    <p className="font-medium">Vina Consulting</p>
                    <p>Felana Anna RAMAHANDRISON<br/>Stratégie & Communication</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Propriété Intellectuelle</h3>
                <p className="text-gray-600 text-sm">
                  Tous les éléments du site (textes, images, logos) sont la propriété exclusive du consortium Ikolo-Vina.
                  Toute reproduction nécessite une autorisation préalable.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">Hébergement</h3>
                <p className="text-gray-600 text-sm">
                  Site hébergé par [Nom de l'hébergeur] - [Adresse]<br/>
                  Conforme aux standards de sécurité en vigueur.
                </p>
              </div>

              <div className="p-4 bg-special-1/10 rounded-lg mt-4">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-special-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Contact Légal</p>
                    <p className="text-gray-600 text-sm">ikolovinaconsortium@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legal;