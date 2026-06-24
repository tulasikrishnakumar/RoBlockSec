import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Linkedin, Twitter, Github } from 'lucide-react';
import { NAV_LINKS } from '../../constants';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Github, href: '#' },
  ];

  return (
    <footer className="bg-brand-navy/50 border-t border-brand-cyan/20 z-10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/RoBlockSec-01.png" alt="RoBlockSec Logo" className="h-8 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 text-sm">Advanced Cybersecurity for the Modern World.</p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-gray-400 hover:text-brand-cyan transition-colors">
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="font-bold font-display text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.key}>
                  <Link to={link.href} className="text-gray-400 hover:text-brand-cyan transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-bold font-display text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-brand-cyan transition-colors">Privacy Policy</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-brand-cyan transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="font-bold font-display text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4 text-sm">Stay ahead of cyber threats with our latest insights.</p>
            <form className="flex">
              <input type="email" placeholder="your@email.com" className="w-full bg-gray-800/50 border border-gray-600 rounded-l-md px-3 py-2 focus:outline-none focus:border-brand-cyan transition-colors" />
              <button className="bg-brand-cyan text-brand-dark font-bold px-4 rounded-r-md hover:bg-white transition-colors">&rarr;</button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Roblocksec. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
