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
      color: "blue"
    },
    {
      title: "Web Development",
      icon: <Palette className="w-8 h-8" />,
      skills: "React.js, Spring Boot, Node.js, Express.js, HTML, CSS",
      color: "purple"
    },
    {
      title: "Database Management",
      icon: <Database className="w-8 h-8" />,
      skills: "PostgreSQL, MySQL, MongoDB",
      color: "green"
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud className="w-8 h-8" />,
      skills: "AWS (EC2, VPC, S3, IAM and CloudFormation), Microsoft Azure",
      color: "blue"
    },
    {
      title: "DevOps & Infrastructure",
      icon: <Settings className="w-8 h-8" />,
      skills: "Docker, Terraform, CI/CD (Jenkins, GitHub Actions), Git, Postman",
      color: "gray"
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-8 h-8" />,
      skills: "Strategic Thinking, Collaborative, Versatility, Effective Planning",
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-700",
      purple: "bg-purple-50 border-purple-200 text-purple-700",
      green: "bg-green-50 border-green-200 text-green-700",
      gray: "bg-gray-50 border-gray-200 text-gray-700",
      pink: "bg-pink-50 border-pink-200 text-pink-700"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-600",
      purple: "text-purple-600",
      green: "text-green-600",
      gray: "text-gray-600",
      pink: "text-pink-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
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
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
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
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-8 text-center">
              What Can I Do?
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Monitor className="w-8 h-8 text-blue-200 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Web Development</h4>
                  <p className="text-blue-100">Create responsive, user-friendly web interfaces with modern frameworks and best practices.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <TrendingUp className="w-8 h-8 text-blue-200 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Performance Optimization</h4>
                  <p className="text-blue-100">Optimize applications for speed, scalability, and user experience.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Rocket className="w-8 h-8 text-blue-200 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">DevOps & Cloud</h4>
                  <p className="text-blue-100">Deploy and manage applications using modern cloud platforms and CI/CD pipelines.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Lightbulb className="w-8 h-8 text-blue-200 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Problem Solving</h4>
                  <p className="text-blue-100">Design efficient algorithms and innovative solutions for complex technical challenges.</p>
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