// src/components/layout/Header.tsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-background border-b">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Ikolo-Vina
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-primary transition-colors">
            Accueil
          </Link>
          <Link to="/ikolo" className="hover:text-primary transition-colors">
            Ikolo
          </Link>
          <Link to="/vina" className="hover:text-primary transition-colors">
            Vina Consulting
          </Link>
          <Link to="/wellness" className="hover:text-primary transition-colors">
            Nature Wellness
          </Link>
          <Link to="/blog" className="hover:text-primary transition-colors">
            Actualités
          </Link>
          <Link to="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;