import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import crm from "../../assets/images/consortium.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Gère le changement d'état au scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ferme le menu mobile quand on scroll
  useEffect(() => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }, [isScrolled]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-xl shadow-2xl py-2 border-b border-gray-200" 
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        {/* --- LOGO --- */}
        <Link 
          to="/" 
          className="flex items-center space-x-3 transition-all duration-500"
          onClick={() => setMenuOpen(false)}
        >
          <img 
            src={crm} 
            alt="Ikolo-Vina logo" 
            className={`transition-all duration-500 ${
              isScrolled ? "h-12" : "h-16"
            } w-auto`} 
          />
        </Link>

        {/* --- MENU BURGER MOBILE --- */}
        <button
          className="md:hidden flex flex-col space-y-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* --- LIENS DE NAVIGATION --- */}
        <div
          className={`${
            menuOpen
              ? "block opacity-100 translate-y-0"
              : "hidden opacity-0 -translate-y-4"
          } md:flex md:items-center md:space-x-8 font-medium text-lg absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-2xl md:shadow-none transition-all duration-500 md:opacity-100 md:translate-y-0`}
        >
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 py-6 md:py-0 px-6 md:px-0">
            <Link
              to="/"
              className={`py-2 px-4 rounded-lg transition-all duration-300 font-semibold ${
                isScrolled
                  ? "text-special-1 hover:bg-special-1 hover:text-white"
                  : "text-white hover:bg-white/20 md:text-gray-800 md:hover:bg-special-1 md:hover:text-white"
              } ${menuOpen ? "text-gray-800 hover:bg-special-1 hover:text-white" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              Accueil
            </Link>
            
            <Link
              to="/ikolo"
              className={`py-2 px-4 rounded-lg transition-all duration-300 font-semibold ${
                isScrolled
                  ? "text-special-1 hover:bg-special-1 hover:text-white"
                  : "text-white hover:bg-white/20 md:text-gray-800 md:hover:bg-special-1 md:hover:text-white"
              } ${menuOpen ? "text-gray-800 hover:bg-special-1 hover:text-white" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              Ikolo
            </Link>
            
            <Link
              to="/vina"
              className={`py-2 px-4 rounded-lg transition-all duration-300 font-semibold ${
                isScrolled
                  ? "text-special-1 hover:bg-special-1 hover:text-white"
                  : "text-white hover:bg-white/20 md:text-gray-800 md:hover:bg-special-1 md:hover:text-white"
              } ${menuOpen ? "text-gray-800 hover:bg-special-1 hover:text-white" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              Vina Consulting
            </Link>
            
            <Link
              to="/wellness"
              className={`py-2 px-4 rounded-lg transition-all duration-300 font-semibold ${
                isScrolled
                  ? "text-special-1 hover:bg-special-1 hover:text-white"
                  : "text-white hover:bg-white/20 md:text-gray-800 md:hover:bg-special-1 md:hover:text-white"
              } ${menuOpen ? "text-gray-800 hover:bg-special-1 hover:text-white" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              Nature Wellness
            </Link>
            
            <Link
              to="/blog"
              className={`py-2 px-4 rounded-lg transition-all duration-300 font-semibold ${
                isScrolled
                  ? "text-special-1 hover:bg-special-1 hover:text-white"
                  : "text-white hover:bg-white/20 md:text-gray-800 md:hover:bg-special-1 md:hover:text-white"
              } ${menuOpen ? "text-gray-800 hover:bg-special-1 hover:text-white" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              Actualités
            </Link>
            
            <Link
              to="/contact"
              className={`py-2 px-4 rounded-lg transition-all duration-300 font-semibold ${
                isScrolled
                  ? "text-special-1 hover:bg-special-1 hover:text-white"
                  : "text-white hover:bg-white/20 md:text-gray-800 md:hover:bg-special-1 md:hover:text-white"
              } ${menuOpen ? "text-gray-800 hover:bg-special-1 hover:text-white" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;