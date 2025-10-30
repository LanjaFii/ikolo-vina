// src/components/layout/Footer.tsx (Version sans shadcn)
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, Facebook, Twitter, Instagram, Linkedin, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  const socialLinks = [
    { icon: <Facebook size={16} />, url: '#', label: 'Facebook' },
    { icon: <Twitter size={16} />, url: '#', label: 'Twitter' },
    { icon: <Instagram size={16} />, url: '#', label: 'Instagram' },
    { icon: <Linkedin size={16} />, url: '#', label: 'LinkedIn' },
  ];

  const siteLinks = [
    { label: 'Accueil', url: '/' },
    { label: 'Ikolo', url: '/ikolo' },
    { label: 'Vina Consulting', url: '/vina' },
    { label: 'Nature Wellness', url: '/wellness' },
    { label: 'Actualités', url: '/blog' },
    { label: 'Contact', url: '/contact' },
    { label: 'Mentions légales', url: '/legal' },
    { label: 'Politique de confidentialité', url: '/privacy' },
  ];

  return (
    <footer className="w-full text-white relative">
      {/* Background différent pour mobile et desktop */}
      <div className="lg:hidden absolute inset-0 z-0 bg-gradient-to-b from-[#0086b1] to-[#006a8a]" />
      <div 
        className="hidden lg:block absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/src/assets/fondFooter.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      <div className="relative z-10 w-full mx-auto">
        {/* Version Mobile */}
        <div className="lg:hidden">
          <div className="p-4 space-y-6">
            {/* Logo et informations principales */}
            <div className="flex flex-col items-center space-y-4">
              <img 
                src="/src/assets/logos/ikolo-vina.png" 
                alt="Ikolo-Vina" 
                className="h-16 w-auto"
              />
              
              <div className="space-y-2 text-center">
                <div className="flex items-center justify-center gap-2 text-white/90 text-sm">
                  <Mail size={14} />
                  <span>contact@ikolo-vina.com</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-white/90 text-sm">
                  <Phone size={14} />
                  <span>+261 38 00 000 00</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-white/90 text-sm text-center">
                  <MapPin size={14} />
                  <span>Rue Pasteur Antanimena, Antananarivo 101</span>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-all duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Sites web */}
            <div className="flex flex-col items-center space-y-4">
              <h4 className="text-white font-semibold text-sm">Nos sites</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://ikolo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-all duration-200"
                >
                  <img 
                    src="/src/assets/logos/ikolo.png" 
                    alt="Ikolo" 
                    className="h-8 w-auto"
                  />
                </motion.a>
                <motion.a
                  href="https://vina-consulting.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-all duration-200"
                >
                  <img 
                    src="/src/assets/logos/vina.png" 
                    alt="Vina Consulting" 
                    className="h-8 w-auto"
                  />
                </motion.a>
              </div>
            </div>

            {/* Liens légaux */}
            <div className="flex justify-center space-x-4 text-white/80 text-xs">
              <a href="/legal" className="hover:text-white transition-colors">Mentions légales</a>
              <span>•</span>
              <a href="/privacy" className="hover:text-white transition-colors">Politique de confidentialité</a>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/20 pt-3">
              <p className="text-center text-white/70 text-xs">
                © {new Date().getFullYear()} Ikolo-Vina. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>

        {/* Version Desktop */}
        <div className="hidden lg:block">
          <div className="flex flex-col h-full">
            <div className="flex-grow grid grid-cols-3 gap-8 p-6 lg:p-8">
              {/* Colonne de gauche - avec les liens du site */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-start space-y-6 mt-4"
              >
                <img 
                  src="/src/assets/logos/ikolo-vina.png" 
                  alt="Ikolo-Vina" 
                  className="h-32 w-auto"
                />
                <p className="text-left text-white/90 text-lg leading-relaxed max-w-md">
                  Votre partenaire de confiance pour des solutions innovantes et durables
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/80">
                    <Mail size={18} />
                    <span>contact@ikolo-vina.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <Phone size={18} />
                    <span>+261 38 00 000 00</span>
                  </div>
                  <div className="flex items-start gap-3 text-white/80">
                    <MapPin size={18} className="mt-0.5" />
                    <span>Rue Pasteur<br />Antanimena, Antananarivo 101</span>
                  </div>
                </div>

                {/* Liens du site dans la première colonne */}
                <div className="pt-4">
                  <h4 className="text-xl font-semibold text-white mb-4">Navigation</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {siteLinks.map((link, index) => (
                      <motion.a
                        key={link.label}
                        href={link.url}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        whileHover={{ y: -2 }}
                        className="text-white/80 hover:text-white transition-colors duration-300 font-medium text-base text-left"
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Colonne centrale */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col items-center space-y-7 mt-30"
              >
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Mail size={24} />
                  Restez informé
                </h3>
                <p className="text-white/80 text-center text-lg max-w-md leading-relaxed">
                  Inscrivez-vous pour recevoir nos dernières actualités et offres spéciales
                </p>
                
                <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Votre adresse email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:bg-white/15 focus:border-white/50 text-lg"
                    />
                    <button 
                      type="submit"
                      className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-white/90 hover:text-gray-800 transition-all duration-300 whitespace-nowrap text-lg"
                    >
                      S'inscrire
                    </button>
                  </div>
                </form>

                {/* Réseaux sociaux */}
                <div className="space-y-6 w-full max-w-sm">
                  <h4 className="text-xl font-semibold text-white text-center">Suivez-nous</h4>
                  <div className="flex justify-center gap-5">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ scale: 1.2, y: -2 }}
                        className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Bouton contact */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="w-full max-w-sm pt-4"
                >
                  <button 
                    className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-6 rounded-lg text-lg transition-all duration-300 flex items-center justify-center"
                    onClick={() => window.location.href = '/contact'}
                  >
                    <Mail className="mr-3" size={20} />
                    Nous contacter
                  </button>
                </motion.div>
              </motion.div>

              {/* Colonne de droite */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col items-start space-y-10 mt-30"
              >
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  Nos sites
                  <ExternalLink size={24} />
                </h3>
                <div className="flex flex-col gap-10 w-full">
                  <motion.a
                    href="https://ikolo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex justify-start"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20 shadow-lg w-full flex justify-center items-center">
                      <img 
                        src="/src/assets/logos/ikolo.png" 
                        alt="Ikolo" 
                        className="h-24 w-auto transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </motion.a>
                  <motion.a
                    href="https://vina-consulting.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex justify-start"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 border border-white/20 shadow-lg w-full flex justify-center items-center">
                      <img 
                        src="/src/assets/logos/vina.png" 
                        alt="Vina Consulting" 
                        className="h-24 w-auto transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Copyright desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="border-t border-white/20 mt-auto"
            >
              <div className="p-6 lg:p-3">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center text-white/70 text-lg"
                >
                  © {new Date().getFullYear()} Ikolo-Vina. Tous droits réservés.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;