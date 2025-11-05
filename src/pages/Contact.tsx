// src/pages/Contact.tsx
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

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

// Configuration des réseaux sociaux (non modifiée)
const socialLinks = [
  {
    label: 'Facebook',
    url: 'https://facebook.com',
    icon: <Facebook className="w-5 h-5" />,
    color: 'bg-blue-600',
    hoverColor: 'bg-blue-700',
    textColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    label: 'Instagram',
    url: 'https://instagram.com',
    icon: <Instagram className="w-5 h-5" />,
    color: 'bg-gradient-to-r from-purple-500 to-pink-500',
    hoverColor: 'bg-gradient-to-r from-purple-600 to-pink-600',
    textColor: 'text-purple-600',
    bgColor: 'bg-gradient-to-r from-purple-50 to-pink-50',
    borderColor: 'border-purple-200'
  },
  {
    label: 'TikTok',
    url: 'https://tiktok.com',
    icon: <MessageCircle className="w-5 h-5" />,
    color: 'bg-black',
    hoverColor: 'bg-gray-800',
    textColor: 'text-gray-800',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200'
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: <Linkedin className="w-5 h-5" />,
    color: 'bg-blue-700',
    hoverColor: 'bg-blue-800',
    textColor: 'text-blue-700',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  }
];

// Clé reCAPTCHA de test (fonctionne en localhost) - À remplacer par le clé de production
const RECAPTCHA_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"; // Clé de test Google

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // Couleurs de la palette pour le formulaire
  const colors = {
    primary: '#2987A6',
    secondary: '#A65329', 
    accent1: '#005F7F',
    accent2: '#00804B',
  };

  // Détection mobile (non modifiée)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Gestion du reCAPTCHA (non modifiée)
  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
    setIsCaptchaValid(!!value);
  };

  const handleRecaptchaExpired = () => {
    setRecaptchaValue(null);
    setIsCaptchaValid(false);
  };

  // Fonction pour gérer la soumission du formulaire (non modifiée)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Vérifier le reCAPTCHA avant de soumettre
    if (!recaptchaValue) {
      alert('Veuillez compléter la vérification de sécurité');
      setIsSubmitting(false);
      return;
    }

    // Récupérer les données du formulaire
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data = {
      nom: formData.get('nom') as string,
      email: formData.get('email') as string,
      telephone: formData.get('telephone') as string,
      type: formData.get('type') as string,
      objet: formData.get('objet') as string,
      message: formData.get('message') as string,
      recaptcha: recaptchaValue
    };

    try {
      // Simulation d'envoi - À adapter selon vos besoins
      console.log('Données du formulaire:', data);
      
      // Pour l'instant, on simule juste un envoi réussi
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulation délai
      
      alert('Message envoyé avec succès ! Nous vous recontacterons rapidement.');
      
      // Réinitialiser le formulaire
      (e.target as HTMLFormElement).reset();
      recaptchaRef.current?.reset();
      setRecaptchaValue(null);
      setIsCaptchaValid(false);
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Gestion du survol adapté au mobile (non modifiée)
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };

  // Sur mobile, le formulaire est toujours ouvert (non modifiée)
  useEffect(() => {
    if (isMobile) {
      setIsHovered(true);
    }
  }, [isMobile]);

  /**
   * NOUVELLE LOGIQUE POUR RESPECTER LA CONTRAINTE
   * Dimensions communes pour les trois blocs, basées sur l'état "survolé" (ouvert) du formulaire.
   */
  const fixedDimensions = {
    // Desktop: w-[450px] (taille survolée), Mobile: w-full max-w-md
    width: isMobile ? 'w-full max-w-md' : 'w-[450px]',
    // Desktop: h-[500px] (taille survolée/ouverte), Mobile: h-[500px]
    height: 'h-[500px]' 
  };
  
  // Le formulaire change désormais de taille au survol pour créer l'effet d'expansion
  const formDimensions = {
    // Desktop: w-450px (hover) ou w-400px (initial), Mobile: w-full max-w-md
    width: isMobile ? 'w-full max-w-md' : (isHovered ? 'w-[450px]' : 'w-[400px]'),
    // Desktop: h-500px (hover) ou h-200px (initial), Mobile: h-500px
    height: isMobile ? 'h-[500px]' : (isHovered ? 'h-[500px]' : 'h-[200px]')
  };
  
  // Pour le formulaire, nous devons utiliser les dimensions qui changent (formDimensions)
  // Pour les autres, nous utilisons fixedDimensions pour qu'ils soient grands et fixes.
  
  return (
    <motion.div 
      className="flex justify-center items-center min-h-screen p-4 md:p-5 relative overflow-x-hidden"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      style={{
        backgroundImage: "url('/assets/background.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      {/* Layout principal responsive */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 z-20">
        
        {/* Section réseaux sociaux - UTILISE fixedDimensions (grande taille) */}
        <motion.div 
          // Utilise fixedDimensions pour avoir une taille fixe et grande (450x500 sur desktop)
          className={`${fixedDimensions.width} ${fixedDimensions.height} order-2 lg:order-1`}
          variants={fadeInScale}
        >
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-2xl border border-gray-200 w-full h-full flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 mr-2" style={{ color: colors.primary }} />
              Suivez-nous
            </h3>
            
            <div className="flex flex-col gap-3 md:gap-4 flex-1">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-3 p-3 ${social.bgColor} ${social.textColor} rounded-xl hover:${social.bgColor.replace('50', '100')} transition-all duration-300 transform border ${social.borderColor} flex-1`}
                >
                  <div className={`w-8 h-8 ${social.color} rounded-full flex items-center justify-center text-white shrink-0`}>
                    {social.icon}
                  </div>
                  <span className="font-medium">{social.label}</span>
                </motion.a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Rejoignez notre communauté
              </p>
            </div>
          </div>
        </motion.div>

        {/* Box principal du formulaire - CENTRE - UTILISE formDimensions (taille variable) */}
        <motion.div 
          className={`relative rounded-3xl flex justify-center items-center transition-all duration-700 overflow-hidden cursor-pointer group
            ${formDimensions.width} ${formDimensions.height} // Utilise la taille qui varie
            bg-linear-to-br from-blue-700 to-green-500 border-2 border-blue-900 shadow-2xl z-10 order-1 lg:order-2`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          variants={fadeInScale}
        >
          
          {/* Effet de bordure colorée au survol */}
          <motion.div 
            className={`absolute inset-0 rounded-3xl transition-all duration-1000
              ${isHovered ? 'opacity-20 blur-sm' : 'opacity-0'}`}
            style={{
              background: 'linear-gradient(135deg, #2987A6, #005F7F)'
            }}
          />
          
          {/* Fond intérieur */}
          <div className="absolute inset-0.5 bg-white rounded-2xl z-10" />
          
          {/* Contenu avec bordure et effet glass */}
          <motion.div 
            className={`absolute transition-all duration-700 rounded-2xl bg-linear-to-br from-gray-300 to-gray-400 text-gray-800 z-20 overflow-visible backdrop-blur-sm border border-gray-200
              ${isMobile 
                ? 'inset-4' 
                : isHovered 
                  ? 'inset-4' 
                  : 'inset-8'
              }`}
            variants={fadeInUp}
          >
            
            <div className="relative flex flex-col items-center justify-start w-full h-full gap-3 p-2">
              
              {/* Titre avec les nouvelles couleurs */}
              <motion.h2 
                className={`absolute text-center whitespace-nowrap transition-all duration-700 font-light tracking-widest
                  ${isMobile || isHovered 
                    ? 'top-3 left-1/2 transform -translate-x-1/2 text-base z-30' 
                    : 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl'
                  }`}
                variants={fadeInUp}
              >
                <span 
                  className={`transition-all duration-700 inline-block font-light
                    ${isHovered || isMobile ? 'font-medium' : ''}
                  `}
                  style={isHovered || isMobile ? {
                    background: 'linear-gradient(to right, #2987A6, #00804B)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  } : { color: '#374151' }}
                >
                  <MessageCircle className="w-4 h-4 inline mr-3" style={{ color: colors.primary }} />
                  CONTACT
                  <i className="fa-solid fa-bolt ml-3" style={{ color: colors.secondary }} />
                </span>
              </motion.h2>

              {/* Champs de formulaire avec animation stagger */}
              <motion.form 
                onSubmit={handleSubmit}
                className={`w-full flex flex-col gap-3 transition-all duration-700 overflow-y-auto p-3 custom-scrollbar
                  ${isMobile 
                    ? 'opacity-100 visible translate-y-0 mt-12 max-h-[380px]' 
                    : isHovered 
                      ? 'opacity-100 visible translate-y-0 mt-12 max-h-[380px]' 
                      : 'opacity-0 invisible translate-y-8 max-h-96'
                  }`}
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp}>
                  <input 
                    type="text" 
                    name="nom"
                    placeholder="Nom complet" 
                    required 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 transition-all duration-300 focus:border-[#2987A6] focus:ring-2 focus:ring-[#2987A6]/20 text-sm md:text-base"
                  />
                </motion.div>
                
                <motion.div variants={fadeInUp}>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Adresse email" 
                    required 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 transition-all duration-300 focus:border-[#A65329] focus:ring-2 focus:ring-[#A65329]/20 text-sm md:text-base"
                  />
                </motion.div>
                
                <motion.div variants={fadeInUp}>
                  <textarea 
                    name="message"
                    placeholder="Votre message" 
                    required 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 resize-vertical min-h-20 transition-all duration-300 focus:border-[#A65329] focus:ring-2 focus:ring-[#A65329]/20 text-sm md:text-base"
                  />
                </motion.div>

                {/* Section reCAPTCHA améliorée et responsive */}
                <motion.div variants={fadeInUp} className="bg-gray-100 p-3 rounded-xl border border-gray-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700">Vérification de sécurité</span>
                    <i className="fa-solid fa-shield-alt" style={{ color: colors.primary }}></i>
                  </div>
                  
                  {/* reCAPTCHA Google avec container responsive */}
                  <div className="flex justify-center overflow-hidden">
                    <div className="transform scale-90 md:scale-100 origin-center">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={RECAPTCHA_SITE_KEY}
                        onChange={handleRecaptchaChange}
                        onExpired={handleRecaptchaExpired}
                        size={isMobile ? "compact" : "normal"}
                      />
                    </div>
                  </div>
                  
                  {!isCaptchaValid && (
                    <p className="text-red-500 text-xs mt-2 flex items-center justify-center text-center">
                      <i className="fa-solid fa-exclamation-triangle mr-1" />
                      Veuillez compléter la vérification de sécurité
                    </p>
                  )}
                </motion.div>

                <motion.div variants={fadeInUp} className="mt-2">
                  <button 
                    type="submit"
                    disabled={!isCaptchaValid || isSubmitting}
                    className={`w-full px-4 py-3 text-white font-semibold rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] active:scale-95 text-sm md:text-base ${
                      !isCaptchaValid || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    style={{
                      background: 'linear-gradient(to right, #2987A6, #00804B)'
                    }}
                    onMouseEnter={(e) => {
                      if (isCaptchaValid && !isSubmitting) {
                        e.currentTarget.style.background = 'linear-gradient(to right, #005F7F, #A65329)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (isCaptchaValid && !isSubmitting) {
                        e.currentTarget.style.background = 'linear-gradient(to right, #2987A6, #00804B)';
                      }
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin mr-2" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-paper-plane mr-2" />
                        {isCaptchaValid ? 'Envoyer le message' : 'Complétez la sécurité'}
                      </>
                    )}
                  </button>
                </motion.div>
              </motion.form>
            </div>
          </motion.div>
        </motion.div>

        {/* Carte Google Maps - UTILISE fixedDimensions (grande taille) */}
        <motion.div 
          // Utilise fixedDimensions pour avoir une taille fixe et grande (450x500 sur desktop)
          className={`${fixedDimensions.width} ${fixedDimensions.height} order-3`}
          variants={fadeInScale}
        >
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-2xl border border-gray-200 w-full h-full flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center justify-center">
              <i className="fa-solid fa-location-dot mr-2" style={{ color: colors.primary }}></i>
              Notre siège
            </h3>
            <div className="w-full h-48 rounded-xl overflow-hidden border-2 border-gray-300 mb-4 shrink-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.256635416602!2d47.51714927599731!3d-18.90686108233018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07e00f0b7f79d%3A0x6e63e5a492a9c857!2s5%20Rue%20Pasteur%2C%20Antananarivo%2C%20Madagascar!5e0!3m2!1sen!2sfr!4v1690000000000!5m2!1sen!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Siège de l'entreprise - 5 Rue Pasteur, Douanes Magasins Généraux, Antananarivo, Madagascar"
              ></iframe>
            </div>
            <div className="text-sm text-gray-600 space-y-2 flex-1 flex flex-col justify-center">
              <p className="font-medium text-center text-base" style={{ color: colors.primary }}>
                5 Rue Pasteur
              </p>
              <p className="text-center">Douanes Magasins Généraux</p>
              <p className="text-center">Antananarivo, Madagascar</p>
              <div className="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-gray-200">
                <i className="fa-solid fa-clock" style={{ color: colors.secondary }}></i>
                <span className="text-xs text-gray-500">Lun-Ven: 8h-18h</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;