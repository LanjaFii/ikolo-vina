// src/components/layout/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-muted-foreground">
          © {new Date().getFullYear()} Ikolo-Vina. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;