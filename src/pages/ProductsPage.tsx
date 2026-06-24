import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Database } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import { Helmet } from 'react-helmet-async';

const products = [
  {
    title: 'Data Rakshak',
    description: 'A comprehensive data protection and privacy management platform designed to help organizations secure their sensitive information and comply with global data regulations.',
    icon: Database,
    link: 'https://datarakshak.in/',
    features: ['Data Discovery', 'Privacy Compliance', 'Risk Assessment', 'Automated Reporting'],
    color: 'brand-cyan'
  },
  {
    title: 'BreachSimu',
    description: 'Advanced Breach and Attack Simulation (BAS) platform that enables organizations to continuously test their security posture against the latest threat vectors.',
    icon: Zap,
    features: ['Automated Red Teaming', 'Threat Simulation', 'Security Validation', 'Remediation Guidance'],
    color: 'brand-purple'
  }
];

const ProductsPage: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen">
      <Helmet>
        <title>Our Products | Roblocksec</title>
        <meta name="description" content="Explore Roblocksec's cutting-edge cybersecurity products: Data Rakshak and BreachSimu." />
      </Helmet>

      <PageHero 
        title="Our Products" 
        subtitle="Innovation-driven security tools engineered for the modern threat landscape." 
      />

      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-cyan/30 transition-all group"
              >
                <div className={`w-20 h-20 rounded-2xl bg-${product.color}/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <product.icon className={`text-${product.color} w-10 h-10`} />
                </div>
                <h3 className="text-4xl font-display font-bold text-white mb-6">{product.title}</h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  {product.description}
                </p>
                
                <ul className="grid grid-cols-2 gap-4 mb-10">
                  {product.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-gray-300">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${product.color}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  {product.link ? (
                    <Button href={product.link} variant="primary" target="_blank">Visit Website</Button>
                  ) : (
                    <Button href="/contact" variant="primary">Request Demo</Button>
                  )}
                  <Button variant="outline">Learn More</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Vision Section */}
      <section className="py-24 bg-black/30 border-y border-white/5">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">Engineering the Future of Defense</h2>
          <p className="text-gray-400 text-xl leading-relaxed">
            Our product development team is constantly pushing the boundaries of what's possible in cybersecurity. We don't just build tools; we build intelligent ecosystems that adapt and evolve alongside the threats they defend against.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
