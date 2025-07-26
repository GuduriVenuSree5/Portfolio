import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-[#1FB8CD]/30 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#1FB8CD] to-[#1FB8CD] bg-clip-text text-transparent">Guduri VenuSree</h3>
            <p className="text-[#1FB8CD] mb-6 leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions and building scalable applications. 
              Always eager to learn new technologies and take on challenging projects.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://github.com/GuduriVenuSree5" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-[#1FB8CD]/20 transition-all duration-300">
                <Github className="w-5 h-5 text-[#1FB8CD]" />
              </a>
              <a href="https://linkedin.com/in/venusree" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-[#1FB8CD]/20 transition-all duration-300">
                <Linkedin className="w-5 h-5 text-[#1FB8CD]" />
              </a>
              <a href="mailto:2200031051cseh@gmail.com" className="p-2 bg-white/10 rounded-lg hover:bg-[#1FB8CD]/20 transition-all duration-300">
                <Mail className="w-5 h-5 text-[#1FB8CD]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-[#1FB8CD]">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-[#1FB8CD] hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-[#1FB8CD] hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="text-[#1FB8CD] hover:text-white transition-colors">Skills</a></li>
              <li><a href="#experience" className="text-[#1FB8CD] hover:text-white transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-[#1FB8CD] hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-[#1FB8CD] hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 text-[#1FB8CD]">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-[#1FB8CD]" />
                <a href="mailto:2200031051cseh@gmail.com" className="text-[#1FB8CD] hover:text-white transition-colors">2200031051cseh@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="w-4 h-4 text-[#1FB8CD]" />
                <span className="text-[#1FB8CD]">8121913956</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <MapPin className="w-4 h-4 text-[#1FB8CD]" />
                <span className="text-[#1FB8CD]">Tiruvuru, Andhra Pradesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#1FB8CD]/20 mt-12 pt-8 text-center">
          <p className="text-[#1FB8CD] flex items-center justify-center gap-2 mb-2">
            Made with <Heart className="w-4 h-4 text-red-400" fill="currentColor" /> by Guduri VenuSree
          </p>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} All rights reserved. | Full Stack Developer | B.Tech, KL University
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;