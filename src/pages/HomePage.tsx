import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Lock, Zap, Server } from 'lucide-react';
import Button from '../components/ui/Button';
import { STATS } from '../constants';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import { Helmet } from 'react-helmet-async';

const HomePage: React.FC = () => {

  return (
    <div className="overflow-hidden relative bg-brand-dark min-h-screen">
      <Helmet>
        <title>Roblocksec | Future Cybersecurity</title>
        <meta name="description" content="Roblocksec: Leading cybersecurity firm specializing in Red Teaming, Blue Teaming, GRC, and Cybersecurity Product Development. Defend. Detect. Secure." />
      </Helmet>

      {/* Minimal grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(232,80,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(232,80,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* 10-Years Ahead Spatial Hero Section */}
      <section className="relative min-h-[100vh] flex items-center px-4 md:px-12 lg:px-24 pt-32">
        <div className="w-full grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
              <span className="text-xs font-mono text-brand-cyan/70 tracking-widest uppercase">Est. 2024 · Hyderabad, India</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black leading-[0.88] tracking-tight">
              <span className="text-white">Nexalith</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-orange-400 to-brand-purple">
                Prime.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base text-gray-500 font-body leading-relaxed">
              The unbreakable foundation of next-gen cyber — GRC, IoT, OT, OffSec, DevSec, forensics &amp; beyond. first. strongest. unmatched.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button href="/contact" variant="primary" className="text-lg py-4 px-8 rounded-full shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] transition-all">
                Initiate Protocol
              </Button>
              <Button href="/services" variant="outline" className="text-lg py-4 px-8 rounded-full border-none hover:bg-white/5">
                Explore Grid <ArrowRight className="ml-2 inline-block" />
              </Button>
            </div>
          </motion.div>

          {/* Animated Cards — Services / Products / Courses */}
          <div className="lg:col-span-5 hidden lg:flex flex-col gap-4 justify-center pt-20">

            {/* Services Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="glass-card rounded-2xl border border-brand-cyan/20 p-5 hover:border-brand-cyan/50 transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center">
                  <Shield className="text-brand-cyan" size={16} />
                </div>
                <span className="text-xs font-mono text-brand-cyan/60 uppercase tracking-widest">Services</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Red Teaming', 'Blue Teaming', 'GRC', 'IoT Security', 'OT Security', 'DevSecOps', 'Digital Forensics', 'Threat Intel'].map((s) => (
                  <span key={s} className="text-xs px-2 py-1 rounded-full border border-white/10 text-gray-400 group-hover:border-brand-cyan/30 transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Products Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="glass-card rounded-2xl border border-brand-purple/20 p-5 hover:border-brand-purple/50 transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-brand-purple/10 flex items-center justify-center">
                  <Zap className="text-brand-purple" size={16} />
                </div>
                <span className="text-xs font-mono text-brand-purple/60 uppercase tracking-widest">Products</span>
              </div>
              <div className="space-y-2">
                {[
                  { name: 'Data Rakshak', tag: 'Data Privacy Platform' },
                  { name: 'BreachSimu', tag: 'Attack Simulation' },
                  { name: 'CTF Platform', tag: 'Bug Bounty · 2026' },
                ].map((p) => (
                  <div key={p.name} className="flex items-center justify-between">
                    <span className="text-sm text-white font-medium">{p.name}</span>
                    <span className="text-xs text-gray-500">{p.tag}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Courses Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="glass-card rounded-2xl border border-orange-500/20 p-5 hover:border-orange-500/40 transition-all group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <Lock className="text-orange-400" size={16} />
                </div>
                <span className="text-xs font-mono text-orange-400/60 uppercase tracking-widest">Courses</span>
                <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400">Live</span>
              </div>
              <div className="space-y-2">
                {[
                  'Offensive Security Specialist',
                  'Certified SOC Analyst',
                  'Cyber Crime Investigation & DF',
                  'Cyber Product Development',
                ].map((c) => (
                  <div key={c} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-orange-400/60" />
                    <span className="text-xs text-gray-400">{c}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Asymmetric Bento Box Services */}
      <section className="py-32 relative z-10 px-4 md:px-12 lg:px-24">
         <div className="mb-20">
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-display font-black text-white opacity-5 uppercase tracking-widest absolute -top-10 lg:-top-20 left-4 lg:left-10 select-none pointer-events-none">
              Capabilities
            </h2>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white relative z-10 border-l-4 border-brand-cyan pl-6">Strategic Verticals</h2>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[320px]">
            {/* Bento Item 1: Large Span */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-2 row-span-2 glass-card rounded-[3rem] p-12 flex flex-col justify-end relative overflow-hidden group hover:border-brand-cyan/50 transition-all duration-500"
            >
               <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
                 <Shield size={240} />
               </div>
               <div className="relative z-10">
                 <div className="w-16 h-16 rounded-full bg-brand-cyan/20 flex items-center justify-center mb-8">
                   <Shield className="text-brand-cyan" size={32}/>
                 </div>
                 <h3 className="text-4xl font-display font-bold text-white mb-6">Offensive Security Operations</h3>
                 <p className="text-gray-400 text-xl max-w-md leading-relaxed">Military-grade red teaming and simulated adversarial engagements to expose critical vulnerabilities before they are exploited.</p>
                 <Button href="/services/red-teaming" variant="outline" className="mt-8 rounded-full px-8">Explore Protocol</Button>
               </div>
            </motion.div>

            {/* Bento Item 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card rounded-[3rem] p-10 flex flex-col justify-between group hover:border-brand-purple/50 transition-all duration-500"
            >
               <Lock className="text-brand-purple w-12 h-12" />
               <div>
                 <h3 className="text-2xl font-display font-bold text-white mb-3">Zero Trust Architecture</h3>
                 <p className="text-gray-400 text-base">Assume breach. Authenticate everything continuously.</p>
               </div>
            </motion.div>

            {/* Bento Item 3 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card rounded-[3rem] p-10 flex flex-col justify-between group hover:border-brand-cyan/50 transition-all duration-500"
            >
               <Zap className="text-brand-cyan w-12 h-12" />
               <div>
                 <h3 className="text-2xl font-display font-bold text-white mb-3">Incident Response</h3>
                 <p className="text-gray-400 text-base">Sub-second threat neutralization & deep forensics.</p>
               </div>
            </motion.div>
            
            {/* Bento Item 4: Wide Span */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-2 glass-card rounded-[3rem] p-10 flex items-center justify-between group overflow-hidden relative border-brand-purple/30 hover:border-brand-purple/60 transition-all duration-500"
            >
               <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-transparent"></div>
               <div className="relative z-10 max-w-sm">
                 <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center mb-6">
                   <Server className="text-brand-purple" size={24}/>
                 </div>
                 <h3 className="text-3xl font-display font-bold text-white mb-3">Cyber Product Dev</h3>
                 <p className="text-gray-400 text-lg">Secure by design engineering protocols for next-gen products.</p>
               </div>
               <Server className="text-white/5 w-40 h-40 relative z-10 group-hover:scale-110 transition-transform duration-700" />
            </motion.div>
         </div>
      </section>

      {/* Abstract Stats Section */}
      <section className="py-32 relative z-10 overflow-hidden bg-black/40 backdrop-blur-md border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-l-2 border-brand-cyan/20 pl-8 py-4 relative group"
              >
                <div className="absolute left-[-2px] top-0 h-0 w-[2px] bg-brand-cyan group-hover:h-full transition-all duration-500"></div>
                <h3 className="text-5xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4">
                  <AnimatedCounter to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </h3>
                <p className="text-brand-purple font-mono uppercase tracking-[0.25em] text-sm font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
