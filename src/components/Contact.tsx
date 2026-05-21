import React, { useState } from "react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../content";

const GithubIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const DiscordIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 127.14 96.36"
    fill="currentColor"
    {...props}
  >
    <g id="2b621e28-ca3d-4c38-8c1d-1ba5cebc8cc2" data-name="Layer 1">
      <g
        id="14316dcd-14a0-4ff6-ad3f-2ae5fce0b093"
        data-name="discord-logo-color"
      >
        <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1,105.25,105.25,0,0,0,32.19-16.14h0C129.56,53.48,122.84,29.35,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.09,53,91.08,65.69,84.69,65.69Z" />
      </g>
    </g>
  </svg>
);

const TwitterIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Contact() {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyDiscord = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("ayame_397");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-32 md:py-48 relative border-b border-ayame-border"
    >
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10 block">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center justify-center gap-6 mb-16">
            <span className="text-[10px] tracking-[0.5em] text-ayame-accent font-sans uppercase">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-white tracking-widest leading-tight">
              {content.contact.title[language]}
            </h2>
          </div>

          <p className="text-ayame-gray text-lg font-light mb-20 font-sans tracking-wide leading-loose">
            {content.contact.text[language]}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mb-10">
            <button
              onClick={handleCopyDiscord}
              className="flex flex-col items-center justify-center gap-4 text-ayame-gray hover:text-white transition-all group relative"
            >
              <div className="w-16 h-16 rounded-full border border-ayame-border flex items-center justify-center group-hover:border-ayame-accent transition-colors duration-500 bg-ayame-surface">
                <DiscordIcon className="w-6 h-6 text-ayame-gray group-hover:text-[#5865F2] transition-colors" />
              </div>
              <span className="font-sans tracking-[0.2em] uppercase text-xs transition-all">
                {copied ? "Copied!" : content.contact.discord[language]}
              </span>
              <span className="absolute -bottom-8 opacity-0 group-hover:opacity-50 text-[10px] tracking-widest transition-opacity duration-300">
                Click to copy ID
              </span>
            </button>

            <a
              href="https://x.com/ayame_4507"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-4 text-ayame-gray hover:text-white transition-all group"
            >
              <div className="w-16 h-16 rounded-full border border-ayame-border flex items-center justify-center group-hover:border-ayame-accent transition-colors duration-500 bg-ayame-surface">
                <TwitterIcon className="w-6 h-6 text-ayame-gray group-hover:text-white transition-colors" />
              </div>
              <span className="font-sans tracking-[0.2em] uppercase text-xs transition-all">
                {content.contact.twitter[language]}
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="py-12 flex flex-col items-center justify-center text-center">
      <div className="text-[10px] text-ayame-gray tracking-[0.3em] font-sans uppercase">
        {content.footer.copy[language]}
      </div>
    </footer>
  );
}
