import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const fullName = 'Guduri VenuSree';
  const [typedName, setTypedName] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedName(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-32">
      {/* Enhanced Background with Professional Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: 'url(/venusree3.jpg)',
          objectPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1FB8CD]/85 via-slate-800/75 to-[#1FB8CD]/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1FB8CD]/20 via-transparent to-[#1FB8CD]/20"></div>
      </div>
      
      {/* Professional Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-[#1FB8CD]/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#1FB8CD]/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#1FB8CD]/6 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center w-full"
      >
        {/* Professional Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-white/15 backdrop-blur-md border border-white/25 text-[#1FB8CD] shadow-lg">
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full mr-3 animate-pulse"></span>
            Available for opportunities
          </span>
        </motion.div>

        {/* Main Heading with Enhanced Typography */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-8 leading-tight tracking-tight"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1FB8CD] via-[#1FB8CD] to-[#1FB8CD] animate-pulse">{typedName}</span>
        </motion.h1>

        {/* Professional Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl mb-10 text-gray-100 leading-relaxed max-w-4xl font-medium"
        >
          Full Stack Developer | B.Tech in Computer Science
        </motion.p>

        {/* Enhanced Description */}
        {/* <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Skilled in scalable web application development and DevOps practices. 
          Strong background in Data Structures & Algorithms with a focus on problem-solving and innovation.
        </motion.p> */}

        {/* Professional Contact Badge */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl mb-12 text-gray-200 max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md px-6 py-3 rounded-full border border-white/25 shadow-lg">
            <span className="w-2.5 h-2.5 bg-[#1FB8CD] rounded-full"></span>
            Tiruvuru, Andhra Pradesh | 8121913956
          </span>
        </motion.p>

        {/* Enhanced Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a 
            href="https://github.com/GuduriVenuSree5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-white hover:bg-[#1FB8CD]/25 hover:border-[#1FB8CD]/40 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform text-[#1FB8CD]" />
            <span className="font-medium">GitHub</span>
          </a>
          
          <a 
            href="https://linkedin.com/in/venusree" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-white hover:bg-[#1FB8CD]/25 hover:border-[#1FB8CD]/40 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform text-[#1FB8CD]" />
            <span className="font-medium">LinkedIn</span>
          </a>
          
          <a 
            href="mailto:2200031051cseh@gmail.com"
            className="group flex items-center gap-3 px-6 py-3 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-white hover:bg-[#1FB8CD]/25 hover:border-[#1FB8CD]/40 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform text-[#1FB8CD]" />
            <span className="font-medium">Email</span>
          </a>
        </motion.div>

        {/* Professional CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <a 
            href="#about"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1FB8CD] to-[#1FB8CD] hover:from-[#1FB8CD]/90 hover:to-[#1FB8CD]/90 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform text-white" />
          </a>
        </motion.div>

        {/* Professional Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          {/* <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-300 font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-300 rounded-full mt-2"
              />
            </div>
          </div> */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;