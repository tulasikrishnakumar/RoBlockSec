import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHero from '../ui/PageHero';
import FAQ from '../shared/FAQ';

import Button from '../ui/Button';

interface SectionProps {
  title: string;
  content: React.ReactNode;
  icon: React.ElementType;
}

interface ServiceSubPageLayoutProps {
  pageTitle: string;
  pageDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  sections: SectionProps[];
  faqData: { q: string; a: string; }[];
  ctaText: string;
  serviceName: string;
}

const ServiceSubPageLayout: React.FC<ServiceSubPageLayoutProps> = ({
  pageTitle,
  pageDescription,
  heroTitle,
  heroSubtitle,
  sections,
  faqData,
  ctaText,
  serviceName
}) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "provider": {
      "@type": "Organization",
      "name": "Roblocksec"
    },
    "description": pageDescription
  };

  return (
    <div>
      <Helmet>
        <title>{`${pageTitle} | Roblocksec`}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={`${pageTitle} | Roblocksec`} />
        <meta property="og:description" content={pageDescription} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      
      <PageHero title={heroTitle} subtitle={heroSubtitle} />

      <div className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-bg p-8 rounded-lg glowing-border"
            >
              <div className="flex items-center gap-4 mb-4">
                <section.icon className="w-10 h-10 text-brand-cyan light:text-brand-blue flex-shrink-0" />
                <h2 className="text-2xl font-bold font-display text-white light:text-light-text">{section.title}</h2>
              </div>
              <div className="text-gray-300 light:text-gray-600 space-y-3">{section.content}</div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button href="/contact" variant="primary">{ctaText}</Button>
        </div>
      </div>

      {faqData && faqData.length > 0 && <FAQ items={faqData} />}
    </div>
  );
};

export default ServiceSubPageLayout;
