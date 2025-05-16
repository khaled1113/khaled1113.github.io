import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div 
              key={index}
              className={`relative ${index !== experiences.length - 1 ? 'pb-12' : ''} section-transition`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 ml-4 md:ml-6 h-full w-0.5 bg-neutral-medium"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-secondary flex items-center justify-center shadow-md">
                <i className="fas fa-briefcase text-white"></i>
              </div>
              
              {/* Content */}
              <div className="ml-12 md:ml-16">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <h3 className="text-xl font-heading font-semibold">{experience.position}</h3>
                    <div className="text-sm font-medium text-neutral-dark px-3 py-1 bg-neutral-light rounded-full mt-1">
                      {experience.period}
                    </div>
                  </div>
                  <h4 className="text-lg font-medium text-secondary mb-3">{experience.company}</h4>
                  <p className="text-neutral-dark mb-4 leading-relaxed">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 text-xs font-medium bg-neutral-light text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
