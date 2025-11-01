// src/pages/Contact.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';

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

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Couleurs de la palette pour le formulaire
  const colors = {
    primary: '#2987A6',
    secondary: '#A65329', 
    accent1: '#005F7F',
    accent2: '#00804B',
  };

  return (
    <motion.div 
      className="flex justify-center items-center min-h-screen p-5 relative"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
      style={{
        backgroundImage: "url('/src/assets/background.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      {/* Box principal avec les nouvelles couleurs */}
      <motion.div 
        className={`relative rounded-3xl flex justify-center items-center transition-all duration-700 overflow-hidden cursor-pointer group
          ${isHovered ? 'w-[450px] h-[520px]' : 'w-[400px] h-[200px]'}
          bg-linear-to-br from-blue-700 to-green-500 border-2 border-blue-900 shadow-2xl z-10`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
            ${isHovered ? 'inset-4' : 'inset-8'}`}
          variants={fadeInUp}
        >
          
          <div className="relative flex flex-col items-center justify-start w-full h-full gap-3 p-2">
            
            {/* Titre avec les nouvelles couleurs */}
            <motion.h2 
              className={`absolute text-center whitespace-nowrap transition-all duration-700 font-light tracking-widest
                ${isHovered 
                  ? 'top-3 left-1/2 transform -translate-x-1/2 text-base z-30' 
                  : 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl'
                }`}
              variants={fadeInUp}
            >
              <span 
                className={`transition-all duration-700 inline-block font-light
                  ${isHovered ? 'font-medium' : ''}
                `}
                style={isHovered ? {
                  background: 'linear-gradient(to right, #2987A6, #00804B)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                } : { color: '#374151' }}
              >
                <i className="fa-solid fa-comment-dots mr-3" style={{ color: colors.primary }} />
                CONTACT
                <i className="fa-solid fa-bolt ml-3" style={{ color: colors.secondary }} />
              </span>
            </motion.h2>

            {/* Champs de formulaire avec animation stagger */}
            <motion.div 
              className={`w-full flex flex-col gap-4 transition-all duration-700 max-h-96 overflow-y-auto p-3 custom-scrollbar
                ${isHovered 
                  ? 'opacity-100 visible translate-y-0 mt-12' 
                  : 'opacity-0 invisible translate-y-8'
                }`}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <input 
                  type="text" 
                  placeholder="Nom complet" 
                  required 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 transition-all duration-300 focus:border-[#2987A6] focus:ring-2 focus:ring-[#2987A6]/20"
                />
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <input 
                  type="email" 
                  placeholder="Adresse email" 
                  required 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 transition-all duration-300 focus:border-[#A65329] focus:ring-2 focus:ring-[#A65329]/20"
                />
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <input 
                  type="tel" 
                  placeholder="Numéro de téléphone" 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 transition-all duration-300 focus:border-[#005F7F] focus:ring-2 focus:ring-[#005F7F]/20"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <select 
                  required 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 appearance-none transition-all duration-300 focus:border-[#00804B] focus:ring-2 focus:ring-[#00804B]/20"
                >
                  <option value="">-- Type de demande --</option>
                  <option value="support">Support</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="autre">Autre</option>
                </select>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <input 
                  type="text" 
                  placeholder="Objet / Sujet du message" 
                  required 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 transition-all duration-300 focus:border-[#2987A6] focus:ring-2 focus:ring-[#2987A6]/20"
                />
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <textarea 
                  placeholder="Votre message" 
                  required 
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-500 resize-vertical min-h-24 transition-all duration-300 focus:border-[#A65329] focus:ring-2 focus:ring-[#A65329]/20"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <button 
                  type="submit"
                  className="w-full px-4 py-4 text-white font-semibold rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] active:scale-95"
                  style={{
                    background: 'linear-gradient(to right, #2987A6, #00804B)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, #005F7F, #A65329)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(to right, #2987A6, #00804B)';
                  }}
                >
                  <i className="fa-solid fa-paper-plane mr-2" />
                  Envoyer le message
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Styles pour la scrollbar avec les nouvelles couleurs */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(200, 200, 200, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #2987A6, #00804B);
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #005F7F, #A65329);
        }
      `}</style>
    </motion.div>
  );
};

export default Contact;