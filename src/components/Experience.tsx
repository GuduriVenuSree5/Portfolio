import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Star, Check, Award, GraduationCap, Cloud, Code, Database, Server, Brain, Zap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Cloud Virtual Internship",
      company: "AICTE-AWS Academy",
      location: "Vaddeswaram",
      period: "01/2024 – 03/2024",
      description: "Participated in a virtual internship focused on cloud technologies, gaining hands-on experience with AWS services.",
      technologies: ["AWS", "Cloud Infrastructure", "EC2", "VPC", "S3", "IAM", "CloudFormation"],
      achievements: [
        "Acquired practical knowledge in areas such as cloud infrastructure, computing, storage, and networking within the AWS ecosystem.",
        "Applied theoretical concepts to real-world scenarios, enhancing problem-solving skills in a cloud environment."
      ]
    },
    {
      title: "Bachelor of Technology in Computer Science",
      company: "KL University",
      location: "Guntur, Andhra Pradesh",
      period: "2020 – 2024",
      description: "Completed B.Tech in Computer Science with a strong focus on Data Structures, Algorithms, and Full-stack Development.",
      technologies: ["Data Structures", "Algorithms", "Java", "Web Development", "Database Management"],
      achievements: [
        "Achieved CGPA: 9.67",
        "Relevant Coursework: Data Structures, Object-Oriented Programming, Algorithms, Database Management Systems.",
        "Participated in 5+ hackathons, implemented projects focused on Full-stack web development."
      ]
    }
  ];

  const expIcons = [
    <Cloud className="w-8 h-8 text-blue-600" />,
    <GraduationCap className="w-8 h-8 text-indigo-600" />
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      period: "08/2024 – 12/2024",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Red Hat Certified Enterprise Application Developer",
      issuer: "Red Hat",
      period: "12/2023 – 04/2024",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      period: "12/2023 – 04/2024",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Cambridge LinguaSkill English",
      issuer: "Cambridge English",
      period: "Cambridge English",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey through various roles and educational achievements, 
            building expertise in full-stack development and cloud technologies.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-1">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Experience Header */}
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl">
                  {expIcons[index % expIcons.length]}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <p className="text-lg text-blue-600 font-semibold mb-2">@ {exp.company}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} /> 
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={16} /> 
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed text-lg">{exp.description}</p>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Technologies & Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AWS</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900">AWS Certified Cloud Practitioner</h4>
                  <p className="text-gray-600 text-sm">08/2024 – 12/2024</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">RH</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900">Red Hat Certified Enterprise Application Developer</h4>
                  <p className="text-gray-600 text-sm">12/2023 – 04/2024</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MS</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900">Microsoft Certified: Azure AI Fundamentals</h4>
                  <p className="text-gray-600 text-sm">12/2023 – 04/2024</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">CE</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-900">Cambridge LinguaSkill English</h4>
                  <p className="text-gray-600 text-sm">Cambridge English</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;