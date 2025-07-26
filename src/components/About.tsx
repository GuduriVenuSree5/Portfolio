import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users, Settings, Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Languages",
      description: "C, Java, JavaScript"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Web Development",
      description: "React.js, Spring Boot, Node.js, Express.js, HTML, CSS"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Database Management",
      description: "PostgreSQL, MySQL, MongoDB"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Cloud Platforms",
      description: "AWS (EC2, VPC, S3, IAM, CloudFormation), Microsoft Azure"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "DevOps & Infrastructure",
      description: "Docker, Terraform, CI/CD (Jenkins, GitHub Actions), Git, Postman"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Soft Skills",
      description: "Strategic Thinking, Collaborative, Versatility, Effective Planning"
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-gray-50 via-white to-[#1FB8CD]/10">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 flex flex-col items-center w-full max-w-6xl border border-[#1FB8CD]/30"
        >
          {/* Profile Section */}
          <div className="text-center mb-16 w-full max-w-4xl">
            <div className="relative mb-8 flex justify-center">
              <div className="relative">
                <img src="/venusree2.jpg" alt="Profile" className="w-55 h-60 md:w-50 md:h-50 object-cover rounded-full border-4 border-[#1FB8CD] shadow-xl" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-[#1FB8CD] to-[#1FB8CD] bg-clip-text text-transparent">About Me</h2>
            <div className="text-lg md:text-xl font-semibold text-[#1FB8CD] mb-8">Full Stack Developer | B.Tech in Computer Science, KL University</div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Full Stack Developer skilled in scalable web application development and DevOps practices. Strong background in Data Structures & Algorithms (DSA) and Java, with a focus on problem-solving, software optimization, and team collaboration. Proficient in designing efficient algorithms, writing clean code, and innovating high-performance solutions.
            </p>
          </div>

          {/* Contact Information */}
          <div className="w-full max-w-4xl mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center bg-gradient-to-r from-[#1FB8CD] to-[#1FB8CD] bg-clip-text text-transparent">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-[#1FB8CD]/10 to-[#1FB8CD]/5 rounded-xl hover:shadow-lg transition-all duration-300 border border-[#1FB8CD]/20">
                <div className="p-3 bg-[#1FB8CD]/10 rounded-xl">
                  <Mail className="w-6 h-6 text-[#1FB8CD]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Email</div>
                  <a href="mailto:2200031051cseh@gmail.com" className="text-[#1FB8CD] hover:underline text-sm">2200031051cseh@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-[#1FB8CD]/10 to-[#1FB8CD]/5 rounded-xl hover:shadow-lg transition-all duration-300 border border-[#1FB8CD]/20">
                <div className="p-3 bg-[#1FB8CD]/10 rounded-xl">
                  <Phone className="w-6 h-6 text-[#1FB8CD]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Phone</div>
                  <div className="text-gray-700 text-sm">8121913956</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-[#1FB8CD]/10 to-[#1FB8CD]/5 rounded-xl hover:shadow-lg transition-all duration-300 border border-[#1FB8CD]/20">
                <div className="p-3 bg-[#1FB8CD]/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-[#1FB8CD]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Location</div>
                  <div className="text-gray-700 text-sm">Tiruvuru, Andhra Pradesh</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-[#1FB8CD]/10 to-[#1FB8CD]/5 rounded-xl hover:shadow-lg transition-all duration-300 border border-[#1FB8CD]/20">
                <div className="p-3 bg-[#1FB8CD]/10 rounded-xl">
                  <Linkedin className="w-6 h-6 text-[#1FB8CD]" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">LinkedIn</div>
                  <a href="https://linkedin.com/in/venusree" target="_blank" rel="noopener noreferrer" className="text-[#1FB8CD] hover:underline text-sm">linkedin.com/in/venusree</a>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="w-full max-w-4xl mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center bg-gradient-to-r from-[#1FB8CD] to-[#1FB8CD] bg-clip-text text-transparent">Education</h3>
            <div className="bg-gradient-to-r from-[#1FB8CD]/10 via-white to-[#1FB8CD]/10 rounded-2xl p-8 md:p-10 border border-[#1FB8CD]/20 shadow-lg">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">KL University</h4>
                <p className="text-lg text-gray-700 mb-6">Bachelor of Technology in Computer Science — CGPA: 9.67</p>
                <div className="text-gray-600 space-y-4 max-w-2xl mx-auto">
                  <p><strong>Relevant Coursework:</strong> Data Structures, Object-Oriented Programming, Algorithms, Database Management Systems.</p>
                  <p><strong>Hackathons:</strong> Participated in 5+ hackathons, implemented projects focused on Full-stack web development.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="w-full max-w-5xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center bg-gradient-to-r from-[#1FB8CD] to-[#1FB8CD] bg-clip-text text-transparent">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm border border-[#1FB8CD]/20 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
                >
                  <div className="flex flex-col items-center gap-4 mb-4">
                    <div className="p-3 bg-[#1FB8CD]/10 rounded-xl text-[#1FB8CD] group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{skill.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;