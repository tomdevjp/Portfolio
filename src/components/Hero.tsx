import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../content";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const { language } = useLanguage();

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center min-h-[75vh] pb-0 md:pb-10"
    >
      <div className="absolute top-0 right-0 h-full w-1/3 bg-ayame-surface border-l border-ayame-border opacity-20 hidden md:block"></div>

      <div className="z-10 w-full pt-10 relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-6 opacity-60">
            <span className="w-12 h-px bg-ayame-accent"></span>
            <span className="text-ayame-accent font-sans tracking-[0.4em] text-xs uppercase">
              optimization.
            </span>
          </div>

          <h1 className="text-[11vw] sm:text-5xl md:text-7xl lg:text-[85px] w-full font-display font-light text-white mb-10 leading-[1.3] md:leading-[1.1] whitespace-pre-line tracking-wide">
            {content.hero.headline[language]}
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-16 md:gap-8 mt-12 md:mt-24">
            <p className="text-base md:text-xl text-ayame-gray max-w-xl font-light whitespace-pre-line leading-loose font-display md:tracking-widest md:text-justify text-left break-words">
              {content.hero.subheadline[language]}
            </p>

            <motion.a
              href="#contact"
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="flex flex-col gap-4 group w-max mx-auto md:mx-0 cursor-pointer pt-6"
            >
              <span className="text-[10px] tracking-[0.3em] font-sans text-ayame-gray uppercase group-hover:text-white transition-colors duration-300">
                Scroll to contact
              </span>
              <motion.div
                variants={{
                  rest: { y: 0 },
                  hover: { y: 5 },
                }}
                className="inline-flex flex-col items-center gap-2 text-ayame-gray group-hover:text-white transition-colors w-max mx-auto md:mx-0"
              >
                <div className="flex flex-col items-center justify-center h-4">
                  <ArrowDown
                    className="w-5 h-5 text-ayame-gray group-hover:text-ayame-accent transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
              </motion.div>
            </motion.a>
          </div>
        </motion.div>

        <div className="absolute top-0 right-4 writing-vertical font-display text-[8rem] leading-none tracking-widest text-ayame-border opacity-30 select-none pointer-events-none hidden lg:block">
          AYAME
        </div>
      </div>
    </section>
  );
}
