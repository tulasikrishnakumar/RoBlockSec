import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden bg-brand-dark min-h-[60vh] flex items-center border-b border-white/5">
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-cyan/5 to-transparent pointer-events-none" />
      <motion.div style={{ y: y1 }} className="absolute -top-40 -right-40 w-96 h-96 bg-brand-cyan/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-purple/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col xl:flex-row xl:items-end justify-between gap-12">
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[8rem] font-display font-black text-white uppercase tracking-tighter leading-[0.85] mix-blend-difference"
          >
            {title.split(' ').map((word, i) => (
              <React.Fragment key={i}>
                <span className={i % 2 !== 0 ? "text-transparent bg-clip-text bg-gradient-to-br from-brand-cyan to-brand-blue" : ""}>
                  {word}
                </span>{' '}
              </React.Fragment>
            ))}
          </motion.h1>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl border-l-4 border-brand-purple pl-8 py-2"
        >
          <p className="text-xl md:text-2xl text-gray-400 font-body font-light leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
