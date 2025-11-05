// src/components/layout/Header.tsx
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Box, Leaf, Newspaper, Phone, CalendarDays, Briefcase, Globe2 } from 'lucide-react'; // icônes
import '@/index.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const lastScrollY = useRef(0);
  const scrollThreshold = 10; // Seuil de détection du scroll

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Vérifier si on a dépassé le seuil pour considérer qu'on a scrollé
      setIsScrolled(currentScrollY > 20);
      
      // Détection de la direction du scroll
      if (Math.abs(currentScrollY - lastScrollY.current) > scrollThreshold) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          // Scroll vers le bas - cacher le header
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current) {
          // Scroll vers le haut - montrer le header
          setIsVisible(true);
        }
        
        lastScrollY.current = currentScrollY;
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Réinitialiser quand on change de page
    return () => {
      window.removeEventListener('scroll', onScroll);
      lastScrollY.current = 0;
      setIsVisible(true);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Accueil', icon: <Home size={18} /> },
    { path: '/wellness', label: 'Nature Wellness', icon: <Leaf size={18} /> },
    { path: '/digital', label: 'Communication Digitale', icon: <Box size={18} /> },
    { path: '/events', label: 'Événementiel', icon: <CalendarDays size={18} /> },
    { path: '/enterprise', label: "Appui à l'Entrepreneuriat", icon: <Briefcase size={18} /> },
    { path: '/rse', label: 'Accompagnement RSE', icon: <Globe2 size={18} /> },
    { path: '/blog', label: 'Actualités', icon: <Newspaper size={18} /> },
    { path: '/contact', label: 'Contact', icon: <Phone size={18} /> },
  ];

  const isActiveLink = (path: string) => location.pathname === path;

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        transition: { duration: 0.3, ease: "easeInOut" }
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-2xl py-2 border-b border-gray-100/50' 
          : 'py-4'
      }`}
      style={{
        backgroundImage: !isScrolled ? "url('/assets/fondHeader.png')" : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <nav className="w-full flex justify-between items-center px-2 sm:px-4 md:px-6">
        {/* Logo avec animation améliorée */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link to="/" className="flex items-center">
            <img 
              src="/assets/logos/ikolo-vina.png" 
              alt="Ikolo-Vina" 
              className={`transition-all duration-500 ${
                isScrolled ? 'h-10 md:h-12' : 'h-14 md:h-16'
              }`}
            />
          </Link>
        </motion.div>

        {/* Navigation Desktop */}
        <div className="desktop-nav flex gap-0 items-center">
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.path);
            return (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  to={link.path}
                  className={`
                    relative font-semibold transition-all duration-300 
                    px-3 py-2 rounded-lg
                    ${isScrolled 
                      ? `text-gray-800 ${isActive ? 'text-special-1' : 'hover:text-pink-700'}`
                      : `text-white ${isActive ? 'text-white' : 'hover:text-pink-300'}`
                    }
                  `}
                >
                  <span className="relative z-10 text-xs">
                    {link.label}
                  </span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-current"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Menu Mobile */}
        <div className="mobile-nav">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <motion.span
                animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 6 : 0 }}
                className={`block h-0.5 w-full ${isScrolled ? 'bg-gray-800' : 'bg-white'}`}
              />
              <motion.span
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                className={`block h-0.5 w-full ${isScrolled ? 'bg-gray-800' : 'bg-white'}`}
              />
              <motion.span
                animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -6 : 0 }}
                className={`block h-0.5 w-full ${isScrolled ? 'bg-gray-800' : 'bg-white'}`}
              />
            </div>
          </motion.button>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.2 }}
                className={`absolute top-full left-0 right-0 mt-2 rounded-2xl shadow-2xl border backdrop-blur-xl overflow-hidden
                  ${isScrolled ? 'bg-gray-800 border-gray-200' : 'bg-gray-900/95 border-gray-700'}
                `}
              >
                <div className="py-4 flex flex-col gap-2">
                  {navLinks.map((link, index) => {
                    const isActive = isActiveLink(link.path);
                    return (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Link
                          to={link.path}
                          className={`flex items-center gap-2 px-6 py-3 font-medium rounded-r-lg border-l-4 mx-4
                            transition-all duration-300
                            ${isActive
                              ? 'border-special-1 bg-special-1/10 text-special-1'
                              : 'border-transparent text-gray-100 hover:bg-gray-100/10 hover:text-white'
                            }
                          `}
                        >
                          {link.icon}
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;