import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import ContactForm from '../components/ui/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div>
      <PageHero 
        title="Contact Us"
        subtitle="Let’s Secure Your Organization. Get in Touch Now."
      />
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-display font-bold text-white mb-6">Send Us a Message</h2>
              <ContactForm />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-display font-bold text-white mb-6">Contact Information</h2>
              <div className="flex items-start gap-4">
                <Mail className="w-8 h-8 text-brand-cyan mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">Email</h3>
                  <a href="mailto:contact@roblocksec.dev" className="text-gray-300 hover:text-brand-cyan transition">info@roblocksec.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-8 h-8 text-brand-cyan mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">Phone</h3>
                  <p className="text-gray-300">+91 93470 12418</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 text-brand-cyan mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white font-display">Corporate Office</h3>
                  <p className="text-gray-300">Uppal, Hyderabad, Telangana, India</p>
                </div>
              </div>
              <div className="mt-8 rounded-[2rem] overflow-hidden glowing-border relative h-[320px] w-full bg-brand-navy/30">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15228.487050014022!2d78.54921132646698!3d17.401083995874288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9e9444747aff%3A0xe21f66299b9cf2a7!2sUppal%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1782305000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale invert opacity-75 hover:opacity-100 transition-opacity duration-500 contrast-125"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
