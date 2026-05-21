import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../content";

export function About() {
  const { language } = useLanguage();

  return (
    <section id="about" className="relative pt-16 pb-20 md:py-32">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <div className="flex items-center gap-6 mb-16">
            <h3 className="text-[10px] tracking-[0.4em] text-ayame-gray uppercase font-sans">
              01 / {content.about.title[language]}
            </h3>
            <div className="h-px flex-1 bg-ayame-border max-w-[50px]"></div>
          </div>

          <div className="flex flex-col gap-6 md:gap-10 text-sm md:text-base lg:text-lg text-ayame-gray leading-[2.2] md:leading-loose font-sans font-light w-full md:tracking-wide mb-12 md:mb-16 break-words">
            {content.about.paragraphs.map((p, idx) => (
              <p key={idx}>{p[language]}</p>
            ))}
          </div>

          <div className="border-l-2 border-ayame-accent pl-4 md:pl-6 py-1 md:py-2 pb-4 md:pb-6 w-full">
            <p className="text-base md:text-lg lg:text-xl font-display leading-[2] md:leading-[1.8] md:tracking-widest text-[#e8e8e8] break-words text-balance">
              {content.about.motto[language]}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
