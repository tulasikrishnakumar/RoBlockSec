import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';


const ContactForm: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Inquiry from ${formData.name} - ${formData.organization}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AOrganization: ${formData.organization}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:info@roblocksec.com?subject=${subject}&body=${body}`;
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const inputClasses = "w-full form-input border rounded-md px-4 py-3 focus:outline-none focus:ring-2 transition-all bg-brand-navy/50 text-white border-gray-600 focus:ring-brand-cyan";

  return (
    <motion.form
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <motion.div variants={itemVariants}>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 light:text-gray-700 mb-2">Full Name</label>
        <input 
          type="text" 
          id="name" 
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className={inputClasses} 
          placeholder="John Doe" 
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 light:text-gray-700 mb-2">Email Address</label>
        <input 
          type="email" 
          id="email" 
          required
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className={inputClasses} 
          placeholder="you@company.com" 
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <label htmlFor="organization" className="block text-sm font-medium text-gray-300 light:text-gray-700 mb-2">Organization</label>
        <input 
          type="text" 
          id="organization" 
          value={formData.organization}
          onChange={(e) => setFormData({...formData, organization: e.target.value})}
          className={inputClasses} 
          placeholder="Your Company, Inc." 
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 light:text-gray-700 mb-2">Message</label>
        <textarea 
          id="message" 
          rows={5} 
          required
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className={inputClasses} 
          placeholder="How can we help secure your organization?"
        ></textarea>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Button type="submit" variant="primary" className="w-full text-lg">Send Message</Button>
      </motion.div>
    </motion.form>
  );
};

export default ContactForm;
