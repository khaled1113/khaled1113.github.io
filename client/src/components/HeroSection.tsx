import { motion } from "framer-motion";
import { personalInfo } from "@/data/personalInfo";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hi, I'm <span className="text-secondary">{personalInfo.name}</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-dark mb-8">
              Professional <span className="font-medium text-primary">{personalInfo.title}</span> with a passion for creating elegant user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#projects" 
                className="px-6 py-3 bg-secondary text-white font-medium rounded-md hover:bg-opacity-90 transition-all transform hover:-translate-y-1 shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
              </motion.a>
              <motion.a 
                href="#contact" 
                className="px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
          <motion.div 
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src={personalInfo.profileImage}
              alt={`${personalInfo.name} Portrait`} 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-neutral-medium shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-neutral-light rounded-full opacity-50 z-0"></div>
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-neutral-light rounded-full opacity-40 z-0"></div>
    </section>
  );
}
