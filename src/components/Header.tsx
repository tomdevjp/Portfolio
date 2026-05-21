import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../content";
import { Link } from "react-router-dom";

export function Header() {
  const { language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-ayame-bg/90 backdrop-blur-md py-4 border-b border-ayame-border"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center space-x-6 hover:opacity-70 transition-opacity"
        >
          <div className="text-2xl font-display font-medium tracking-[0.2em] text-white">
            .Ayame
          </div>
        </Link>

        <div className="flex items-center gap-12">
          <nav className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.3em] font-sans">
            <Link
              to="/#about"
              className="text-ayame-gray hover:text-white transition-colors"
            >
              {content.header.about[language]}
            </Link>
            <Link
              to="/#skills"
              className="text-ayame-gray hover:text-white transition-colors"
            >
              {content.header.skills[language]}
            </Link>
            <Link
              to="/#contact"
              className="text-ayame-gray hover:text-white transition-colors"
            >
              {content.header.contact[language]}
            </Link>
          </nav>

          <div className="flex items-center gap-4 border border-ayame-border px-3 py-1.5 rounded-full font-sans">
            <button
              onClick={() => setLanguage("jp")}
              className={`text-[10px] tracking-[0.2em] transition-all ${
                language === "jp"
                  ? "text-ayame-accent"
                  : "text-ayame-gray hover:text-white"
              }`}
            >
              JP
            </button>
            <span className="text-ayame-border w-px h-3 bg-ayame-border"></span>
            <button
              onClick={() => setLanguage("en")}
              className={`text-[10px] tracking-[0.2em] transition-all ${
                language === "en"
                  ? "text-ayame-accent"
                  : "text-ayame-gray hover:text-white"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
