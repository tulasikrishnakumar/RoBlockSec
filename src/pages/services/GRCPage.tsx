import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../../components/ui/PageHero';
import { ALL_SERVICES, FAQ_DATA, COMPLIANCE_LOGOS } from '../../constants';
import Button from '../../components/ui/Button';
import { Helmet } from 'react-helmet-async';
import FAQ from '../../components/shared/FAQ';

const GRCPage: React.FC = () => {
  const service = ALL_SERVICES.find(s => s.slug === 'grc-services');
  if (!service) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <Helmet>
        <title>GRC (Governance, Risk, Compliance) Services | Roblocksec</title>
        <meta name="description" content="Align your security with business goals through Roblocksec's GRC services. We provide expert guidance on governance frameworks, risk management, and compliance." />
      </Helmet>
      <PageHero title={service.title} subtitle={service.description} />
      <div className="py-20 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold text-white light:text-light-text mb-4">Our GRC Pillars</h2>
            <p className="text-gray-300 light:text-gray-600 text-lg">We help you build a strategic, defensible, and compliant security program that enables business growth while managing cyber risk effectively.</p>
        </div>
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {service.subServices?.map((sub) => (
            <motion.div
              key={sub.slug}
              variants={itemVariants}
              className="h-full"
            >
              <div className="card-bg p-8 rounded-lg glowing-border h-full flex flex-col text-center items-center">
                <sub.icon className="w-16 h-16 text-brand-cyan light:text-brand-blue mb-4" />
                <h3 className="text-xl font-bold font-display text-white light:text-light-text mb-2">{sub.name}</h3>
                <div className="flex-grow"></div>
                <Button href={`/services/${service.slug}/${sub.slug}`} variant="outline" className="mt-6">
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Compliance Standards Highlights */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Compliance Frameworks We Support</h2>
            <p className="text-gray-400">Expert guidance and auditing for global regulatory standards.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {COMPLIANCE_LOGOS.map((logo) => (
              <motion.div
                key={logo.name}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-4 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center group hover:border-brand-cyan/50 transition-all"
              >
                <div className="text-brand-cyan font-display font-bold text-sm mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
                  {logo.name}
                </div>
                <img 
                  src={logo.image} 
                  alt={logo.name} 
                  className="h-10 w-auto filter grayscale group-hover:grayscale-0 transition-all"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <FAQ items={FAQ_DATA['grc-services']} />
    </div>
  );
};

export default GRCPage;
