// src/components/LanguageToggle.jsx
import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "../i18n";

export function LanguageToggle() {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleLanguage}
        className="tech-border bg-card/30 backdrop-blur-sm hover:tech-glow transition-all duration-300 gap-2"
      >
        <Languages className="w-4 h-4" />
        <motion.span
          key={language}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-sm font-medium"
        >
          {language === 'es' ? 'ES' : 'EN'}
        </motion.span>
      </Button>
    </motion.div>
  );
}