import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  const categories = ["All", "Web Apps", "E-commerce", "Corporate"];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-16 md:py-24 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-dark">
            A showcase of my recent work across various domains and technologies.
          </p>
        </motion.div>
        
        {/* Project Filter Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((category, index) => (
            <motion.button 
              key={index}
              className={`px-4 py-2 bg-white text-primary font-medium rounded-md shadow-sm hover:bg-secondary hover:text-white transition-colors focus:outline-none ${activeCategory === category ? 'bg-secondary text-white' : ''}`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="project-card bg-white rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                layout
              >
                <img 
                  src={project.image}
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-heading font-semibold text-xl">{project.title}</h3>
                    <span className="text-xs font-medium text-white bg-secondary px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-neutral-dark mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 text-xs font-medium bg-neutral-light text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-primary transition-colors font-medium flex items-center"
                    >
                      <span>View Details</span>
                      <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-dark hover:text-primary transition-colors"
                    >
                      <i className="fab fa-github text-xl"></i>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href="https://github.com/johndoe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-white text-primary font-medium rounded-md shadow-md hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
