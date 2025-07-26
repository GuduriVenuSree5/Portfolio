import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-[#1FB8CD]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-[#1FB8CD] to-[#1FB8CD] bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-[#1FB8CD] max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-[#1FB8CD]" />
                Get In Touch
              </h3>
              <p className="text-[#1FB8CD] mb-8 leading-relaxed">
                Ready to start a conversation? Whether you have a project in mind, 
                want to discuss opportunities, or just want to say hello, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="p-3 bg-[#1FB8CD]/20 rounded-xl">
                  <MapPin className="w-6 h-6 text-[#1FB8CD]" />
                </div>
                <div>
                  <div className="font-semibold text-white">Location</div>
                  <div className="text-[#1FB8CD]">Tiruvuru, Andhra Pradesh</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="p-3 bg-[#1FB8CD]/20 rounded-xl">
                  <Mail className="w-6 h-6 text-[#1FB8CD]" />
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <a href="mailto:2200031051cseh@gmail.com" className="text-[#1FB8CD] hover:text-white transition-colors">2200031051cseh@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="p-3 bg-[#1FB8CD]/20 rounded-xl">
                  <Phone className="w-6 h-6 text-[#1FB8CD]" />
                </div>
                <div>
                  <div className="font-semibold text-white">Phone</div>
                  <div className="text-[#1FB8CD]">8121913956</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="p-3 bg-[#1FB8CD]/20 rounded-xl">
                  <Linkedin className="w-6 h-6 text-[#1FB8CD]" />
                </div>
                <div>
                  <div className="font-semibold text-white">LinkedIn</div>
                  <a href="https://linkedin.com/in/venusree" target="_blank" rel="noopener noreferrer" className="text-[#1FB8CD] hover:text-white transition-colors">linkedin.com/in/venusree</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="p-3 bg-[#1FB8CD]/20 rounded-xl">
                  <Github className="w-6 h-6 text-[#1FB8CD]" />
                </div>
                <div>
                  <div className="font-semibold text-white">GitHub</div>
                  <a href="https://github.com/GuduriVenuSree5" target="_blank" rel="noopener noreferrer" className="text-[#1FB8CD] hover:text-white transition-colors">github.com/GuduriVenuSree5</a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/GuduriVenuSree5" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40" aria-label="GitHub">
                <Github className="w-6 h-6 text-white" />
              </a>
              <a href="https://linkedin.com/in/venusree" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a href="mailto:2200031051cseh@gmail.com" className="p-3 bg-gradient-to-r from-[#1FB8CD] to-[#1FB8CD] rounded-xl hover:from-[#1FB8CD]/90 hover:to-[#1FB8CD]/90 transition-all duration-300 shadow-lg hover:shadow-xl" aria-label="Email">
                <Mail className="w-6 h-6 text-white" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#1FB8CD] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-[#1FB8CD] focus:border-transparent transition-all duration-200 text-white placeholder-[#1FB8CD]/70"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1FB8CD] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-[#1FB8CD] focus:border-transparent transition-all duration-200 text-white placeholder-[#1FB8CD]/70"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#1FB8CD] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-[#1FB8CD] focus:border-transparent transition-all duration-200 text-white placeholder-[#1FB8CD]/70"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1FB8CD] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-[#1FB8CD] focus:border-transparent transition-all duration-200 resize-none text-white placeholder-[#1FB8CD]/70"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#1FB8CD] to-[#1FB8CD] text-white py-4 px-6 rounded-xl font-semibold hover:from-[#1FB8CD]/90 hover:to-[#1FB8CD]/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
              {success === true && <p className="mt-4 text-green-400 font-semibold">Your message has been sent!</p>}
              {success === false && <p className="mt-4 text-red-400 font-semibold">Failed to send message. Please try again.</p>}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
