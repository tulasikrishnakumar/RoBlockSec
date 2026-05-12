import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import { ALL_SERVICES } from '../constants';
import Button from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-20 pointer-events-none z-0"></div>
      
      <PageHero 
        title="Tactical Services"
        subtitle="Next-generation cybersecurity matrices engineered for total digital dominance and defense."
      />

      <div className="py-32 relative z-10 px-4 md:px-12 lg:px-24">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[400px]">
          {ALL_SERVICES.map((service, index) => {
            const isLarge = index === 0 || index === 3;
            return (
              <motion.div 
                key={service.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                className={`glass-card rounded-[3rem] p-10 flex flex-col justify-between group hover:border-brand-cyan/50 transition-all duration-700 relative overflow-hidden ${isLarge ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-20 group-hover:scale-125 transition-all duration-1000 rotate-12">
                  <service.icon size={isLarge ? 300 : 200} />
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 backdrop-blur-md border border-white/10 group-hover:bg-brand-cyan/20 transition-all duration-500">
                    <service.icon className="w-8 h-8 text-brand-cyan" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-lg">{service.description}</p>
                </div>

                <div className="relative z-10 mt-8">
                  <Button href={`/services/${service.slug}`} variant="outline" className="rounded-full px-8 py-3 border-white/10 hover:border-brand-cyan group-hover:bg-brand-cyan/10">
                    Initialize <ArrowRight className="inline ml-2" size={18} />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
