// src/components/offers/OfferModal.tsx
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, CheckCircle } from "lucide-react";
import type { Offer } from "@/data/offersData";

interface OfferModalProps {
  offer: Offer | null;
  isOpen: boolean;
  onClose: () => void;
}

export const OfferModal = ({ offer, isOpen, onClose }: OfferModalProps) => {
  if (!offer) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] lg:max-w-6xl max-h-[95vh] overflow-y-auto p-0">
        <div className="relative">
          {/* Bouton fermer */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-50 bg-white/90 hover:bg-white shadow-lg"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>

          {/* En-tête avec image de fond */}
          <div className="relative h-64 bg-gradient-to-r from-special-1 to-special-2">
            <div className="absolute inset-0 bg-black/40"></div>
            {offer.image && (
              <img 
                src={offer.image} 
                alt={offer.title}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="text-center text-white max-w-4xl">
                <DialogTitle className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {offer.title}
                </DialogTitle>
                <div className="w-16 h-1 bg-white/60 mx-auto mb-4"></div>
                <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                  {offer.shortDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Contenu du modal */}
          <div className="p-6 lg:p-8">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
              {/* Colonne de gauche - Contenu principal */}
              <div className="space-y-8">
                {/* Description */}
                <div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                    Présentation du service
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {offer.fullDescription}
                  </p>
                </div>

                {/* Prestations */}
                <div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                    Nos prestations
                  </h3>
                  <div className="space-y-3">
                    {offer.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                        <CheckCircle className="h-5 w-5 text-special-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Colonne de droite - Avantages et CTA */}
              <div className="space-y-8">
                {/* Avantages clients */}
                <div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                    Avantages clients
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {offer.benefits.map((benefit, index) => (
                      <div 
                        key={index}
                        className="bg-gradient-to-r from-special-1/5 to-special-2/5 border border-special-1/20 rounded-lg p-4 text-center transition-all hover:shadow-md"
                      >
                        <span className="text-gray-800 font-medium text-sm lg:text-base">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section contact */}
                <div className="bg-gradient-to-br from-special-1/5 to-special-2/5 rounded-xl p-6 border border-special-1/20">
                  <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3">
                    Demande d'information
                  </h4>
                  <p className="text-gray-600 text-sm lg:text-base mb-6">
                    Notre équipe est à votre disposition pour étudier votre projet et vous proposer une solution sur mesure.
                  </p>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <Button 
                        variant="outline"
                        className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 text-sm"
                        onClick={() => window.location.href = "mailto:contact@ikolo-vina.com"}
                      >
                        Email
                      </Button>
                      <Button 
                        variant="outline"
                        className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 text-sm"
                        onClick={() => window.location.href = "tel:+261380000000"}
                      >
                        Téléphone
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};