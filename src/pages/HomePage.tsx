import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Shield, Lock, Zap, Server } from 'lucide-react';
import Button from '../components/ui/Button';
import { useTypewriter } from '../hooks/useTypewriter';
import { ALL_SERVICES, STATS } from '../constants';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import { Helmet } from 'react-helmet-async';

const HomePage: React.FC = () => {
  const typedTagline = useTypewriter("Defend. Detect. Secure.", 80);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <div className="overflow-hidden relative bg-brand-dark min-h-screen">
      <Helmet>
        <title>Roblocksec | Future Cybersecurity</title>
        <meta name="description" content="Roblocksec: Leading cybersecurity firm specializing in Red Teaming, Blue Teaming, GRC, and Cybersecurity Product Development. Defend. Detect. Secure." />
      </Helmet>

      {/* Abstract Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-brand-cyan/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 bg-brand-purple/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

      {/* 10-Years Ahead Spatial Hero Section */}
      <section className="relative min-h-[100vh] flex items-center px-4 md:px-12 lg:px-24 pt-32">
        <div className="w-full grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 z-10"
          >
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-display font-black text-white leading-[0.85] tracking-tighter mix-blend-difference">
              CYBER
              <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-cyan to-brand-blue">
                DEFENSE
              </span>
            </h1>
            <div className="mt-8 ml-2 flex items-center gap-6">
               <div className="w-24 h-1 bg-brand-cyan rounded-full animate-pulse-fast"></div>
               <p className="text-2xl md:text-3xl font-body font-light text-brand-purple tracking-wide">
                 {typedTagline}<span className="animate-pulse">_</span>
               </p>
            </div>
            
            <p className="mt-8 max-w-xl text-lg text-gray-400 font-body font-light leading-relaxed">
              We engineer impenetrable digital fortresses. Next-generation adaptive security architecture deployed for visionary enterprises.
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

          {/* Floating Spatial UI Elements */}
          <div className="lg:col-span-5 relative h-full min-h-[500px] hidden lg:block">
             <motion.div style={{ y: y1 }} className="absolute top-10 right-0 w-64 h-64 glass-card rounded-[2.5rem] border border-brand-cyan/30 p-8 shadow-2xl backdrop-blur-2xl group hover:border-brand-cyan transition-all">
                <div className="w-14 h-14 rounded-full bg-brand-cyan/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="text-brand-cyan" size={28}/>
                </div>
                <h3 className="text-white font-display text-xl font-bold">Adaptive Shield</h3>
                <p className="text-gray-400 text-sm mt-2">Real-time threat mitigation network active.</p>
             </motion.div>
             
             <motion.div style={{ y: y2 }} className="absolute top-64 left-10 w-72 glass-card rounded-[2.5rem] border border-brand-purple/30 p-8 shadow-2xl backdrop-blur-3xl z-20 group hover:border-brand-purple transition-all">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-white font-display text-xl font-bold">System Status</h3>
                  <div className="w-3 h-3 rounded-full bg-brand-cyan animate-ping"></div>
                </div>
                <div className="space-y-4">
                   <div className="h-3 w-full bg-black/50 rounded-full overflow-hidden shadow-inner">
                     <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: "92%" }}
                       transition={{ duration: 1.5, delay: 0.5 }}
                       className="h-full bg-brand-cyan relative"
                     ></motion.div>
                   </div>
                   <div className="h-3 w-full bg-black/50 rounded-full overflow-hidden shadow-inner">
                     <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: "85%" }}
                       transition={{ duration: 1.5, delay: 0.7 }}
                       className="h-full bg-brand-purple relative"
                     ></motion.div>
                   </div>
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
