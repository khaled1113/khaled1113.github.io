import { motion } from "framer-motion";
import { personalInfo } from "@/data/personalInfo";

export default function AboutSection() {
  const { skills, education, socialLinks, bio } = personalInfo;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-neutral-light relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={personalInfo.aboutImage}
              alt={`${personalInfo.name} Professional Photo`} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="font-heading text-2xl font-semibold mb-4"
              variants={itemVariants}
            >
              Professional Summary
            </motion.h3>
            <motion.p 
              className="text-neutral-dark mb-6 leading-relaxed"
              variants={itemVariants}
            >
              {bio.paragraph1}
            </motion.p>
            <motion.p 
              className="text-neutral-dark mb-8 leading-relaxed"
              variants={itemVariants}
            >
              {bio.paragraph2}
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-6 mb-8"
              variants={itemVariants}
            >
              <div>
                <h4 className="font-medium text-lg mb-3">Skills</h4>
                <ul className="space-y-2">
                  {skills.map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-secondary mr-2"><i className="fas fa-check-circle"></i></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-lg mb-3">Education</h4>
                <ul className="space-y-2">
                  {education.map((edu, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-secondary mr-2"><i className="fas fa-graduation-cap"></i></span>
                      {edu.degree}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex space-x-4"
              variants={itemVariants}
            >
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-dark hover:text-primary transition-colors"
                >
                  <i className={`${link.icon} text-2xl`}></i>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
