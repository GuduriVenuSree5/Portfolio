import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Code, Cloud, Database, Brain, HeartHandshake, Server, MessageCircle, Star, Globe, ClipboardList, Check } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Home Stay Recommendation System",
      description: "Developed a Home Stay Recommendation System using Java, Spring Boot, and MySQL, providing personalized accommodation suggestions based on user preferences and location data.",
      features: [
        "Personalized accommodation suggestions",
        "User preference and location-based filtering",
        "Responsive UI with React.js and Bootstrap"
      ],
      techStack: ["Java", "Spring Boot", "MySQL", "React.js", "Bootstrap"],
      impact: [
        "Implemented a recommendation algorithm that analyzes user reviews, ratings, and role-based analytics from past bookings, enhancing suggestion accuracy and increasing user engagement by 20%."
      ]
    },
    {
      title: "Online Donation Management System",
      description: "Enhanced a web application that suggests donations and financial needs based on user preferences, increasing donation accuracy by 35%.",
      features: [
        "Donation and financial need suggestions",
        "User preference analytics",
        "Improved backend response times"
      ],
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      impact: [
        "Utilized Node.js and Express.js for backend development, improving response times by 20%.",
        "Incorporated React.js and analytics to analyze user preferences, enhancing user satisfaction by 25%."
      ]
    }
  ];

  // Helper to pick an icon for each project
  const projectIcons = [
    <Brain className="w-8 h-8 text-purple-600" />, // Home Stay Recommendation
    <HeartHandshake className="w-8 h-8 text-pink-600" />, // Online Donation Management
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my real-world work, demonstrating impact, innovation, and technical skills.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100"
            >
              {/* Project Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    {projectIcons[index % projectIcons.length]}
                  </div>
                  <h3 className="text-2xl font-bold flex-1">{project.title}</h3>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Content */}
              <div className="p-8">
                {project.features && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-600" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.techStack && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Code className="w-5 h-5 text-blue-600" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.impact && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-orange-500" />
                      Impact & Results
                    </h4>
                    <ul className="space-y-2">
                      {project.impact.map((imp, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Project Footer */}
              <div className="bg-gray-50 px-8 py-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Completed</span>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 text-sm font-medium">
                      View Details
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Interested in Working Together?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. Let's create something amazing together!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
              <ExternalLink size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;