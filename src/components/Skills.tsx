import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Palette, 
  Globe, 
  Smartphone, 
  Cloud,
  GitBranch,
  Settings,
  Monitor,
  TrendingUp,
  Rocket,
  Lightbulb,
  Users
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-8 h-8" />,
      skills: "C, Java, JavaScript",
      color: "plex"
    },
    {
      title: "Web Development",
      icon: <Palette className="w-8 h-8" />,
      skills: "React.js, Spring Boot, Node.js, Express.js, HTML, CSS",
      color: "plex"
    },
    {
      title: "Database Management",
      icon: <Database className="w-8 h-8" />,
      skills: "PostgreSQL, MySQL, MongoDB",
      color: "plex"
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-8 h-8" />,
      skills: "AWS (EC2, VPC, S3, IAM and CloudFormation), Microsoft Azure",
      color: "plex"
    },
    {
      title: "DevOps & Infrastructure",
      icon: <Settings className="w-8 h-8" />,
      skills: "Docker, Terraform, CI/CD (Jenkins, GitHub Actions), Git, Postman",
      color: "plex"
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-8 h-8" />,
      skills: "Strategic Thinking, Collaborative, Versatility, Effective Planning",
      color: "plex"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      plex: "bg-[#1FB8CD]/10 border-[#1FB8CD]/20 text-[#1FB8CD]",
      blue: "bg-blue-50 border-blue-200 text-blue-700",
      purple: "bg-purple-50 border-purple-200 text-purple-700",
      green: "bg-green-50 border-green-200 text-green-700",
      gray: "bg-gray-50 border-gray-200 text-gray-700",
      pink: "bg-pink-50 border-pink-200 text-pink-700"
    };
    return colors[color as keyof typeof colors] || colors.plex;
  };

  const getIconColor = (color: string) => {
    const colors = {
      plex: "text-[#1FB8CD]",
      blue: "text-blue-600",
      purple: "text-purple-600",
      green: "text-green-600",
      gray: "text-gray-600",
      pink: "text-pink-600"
    };
    return colors[color as keyof typeof colors] || colors.plex;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white via-gray-50 to-[#1FB8CD]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-[#1FB8CD] to-[#1FB8CD] bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels 
            across various technologies and tools.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
            hidden: {}
          }}
        >
          {skillCategories.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#1FB8CD]/20"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${getColorClasses(skill.color)}`}>
                  <div className={getIconColor(skill.color)}>
                    {skill.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{skill.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{skill.skills}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* What I Can Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-[#1FB8CD] to-[#1FB8CD] rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-8 text-center">
              What Can I Do?
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Monitor className="w-8 h-8 text-white flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Web Development</h4>
                  <p className="text-white/90">Create responsive, user-friendly web interfaces with modern frameworks and best practices.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <TrendingUp className="w-8 h-8 text-white flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Performance Optimization</h4>
                  <p className="text-white/90">Optimize applications for speed, scalability, and user experience.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Rocket className="w-8 h-8 text-white flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">DevOps & Cloud</h4>
                  <p className="text-white/90">Deploy and manage applications using modern cloud platforms and CI/CD pipelines.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Lightbulb className="w-8 h-8 text-white flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Problem Solving</h4>
                  <p className="text-white/90">Design efficient algorithms and innovative solutions for complex technical challenges.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;