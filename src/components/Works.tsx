import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../content";

export function Works() {
  const { language } = useLanguage();

  return (
    <section className="relative py-20 md:py-32">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-6 mb-16">
            <h3 className="text-[10px] tracking-[0.4em] text-ayame-gray uppercase font-sans">
              02 / {content.works.title[language]}
            </h3>
            <div className="h-px flex-1 bg-ayame-border max-w-[50px]"></div>
          </div>

          <ul className="space-y-6">
            {content.works.items.map((item, index) => (
              <li key={index} className="flex flex-col group">
                <div className="flex items-start gap-3 md:gap-4 pb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-ayame-accent/50 block mt-2 md:mt-2.5 flex-shrink-0"></span>
                  <span className="text-sm md:text-lg font-display md:tracking-wider leading-relaxed text-ayame-gray break-words">
                    {item[language]}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
