import { motion } from "framer-motion";
import { personalInfo } from "@/data/personalInfo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <motion.div 
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#hero" className="text-2xl font-heading font-bold tracking-tight flex items-center space-x-2">
              <span>Portfolio</span>
              <span className="text-secondary">.</span>
            </a>
          </motion.div>
          
          <motion.div 
            className="flex space-x-6 mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="#about" className="hover:text-secondary transition-colors">About</a>
            <a href="#experience" className="hover:text-secondary transition-colors">Experience</a>
            <a href="#certificates" className="hover:text-secondary transition-colors">Certificates</a>
            <a href="#projects" className="hover:text-secondary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
          </motion.div>
          
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {personalInfo.socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors"
              >
                <i className={`${link.icon} text-xl`}></i>
              </a>
            ))}
          </motion.div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-sm text-gray-400 text-center">
          <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
