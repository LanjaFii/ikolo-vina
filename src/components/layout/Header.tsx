import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import crm from "../../assets/images/consortium.png";

const Header = () => {
  const [navColor, setNavColor] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Gère le changement de couleur en scrollant
  useEffect(() => {
    const handleScroll = () => setNavColor(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        navColor ? "bg-[transparent] backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* --- LOGO --- */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={crm} alt="Ikolo-Vina logo" className="h-14 w-auto" />
        </Link>

        {/* --- LIENS DE NAVIGATION --- */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-8 text-white font-medium text-lg absolute md:static top-full left-0 w-full md:w-auto bg-[#1b1a2ea9] md:bg-transparent text-center md:text-left`}
        >
          <Link
            to="/"
            className="block py-3 md:py-0 text-[#A65329] hover:text-green-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link
            to="/ikolo"
            className="block py-3 md:py-0 text-[#A65329] hover:text-green-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Ikolo
          </Link>
          <Link
            to="/vina"
            className="block py-3 md:py-0 text-[#A65329] hover:text-green-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Vina Consulting
          </Link>
          <Link
            to="/wellness"
            className="block py-3 md:py-0 text-[#A65329] hover:text-green-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Nature Wellness
          </Link>
          <Link
            to="/blog"
            className="block py-3 md:py-0 text-[#A65329] hover:text-green-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Actualités
          </Link>
          <Link
            to="/contact"
            className="block py-3 md:py-0 text-[#A65329] hover:text-green-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
