import { useState, useRef, useEffect } from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const LanguageFloatingButton = () => {
  const { i18n } = useTranslation();
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [lang, setLang] = useState<string>(i18n.language || "fr");
  const langRef = useRef<HTMLDivElement | null>(null);

  // Fermer le dropdown en cliquant ailleurs
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setShowLangDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLang(lng);
    setShowLangDropdown(false);
  };

  return (
    <div
      ref={langRef}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-[9999] cursor-pointer"
    >
      {/* Bouton principal */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowLangDropdown((prev) => !prev)}
        className="bg-white shadow-md rounded-full p-3 hover:bg-gray-100 transition flex items-center justify-center"
        aria-label="Choisir la langue"
      >
        <AiOutlineGlobal className="h-7 w-7 text-special-1" />
      </motion.button>

      {/* Dropdown */}
      <AnimatePresence>
        {showLangDropdown && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute left-14 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-xl p-2 w-32 cursor-pointer flex flex-col gap-1 border"
          >
            <button
              onClick={() => changeLanguage("fr")}
              className={`px-3 py-1 text-sm text-left rounded-md cursor-pointer ${
                lang === "fr"
                  ? "bg-green-100 text-special-1 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              🇫🇷 Français
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`px-3 py-1 text-sm text-left rounded-md cursor-pointer ${
                lang === "en"
                  ? "bg-green-100 text-special-1 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              🇬🇧 English
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageFloatingButton;
