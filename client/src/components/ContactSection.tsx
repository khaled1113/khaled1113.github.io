import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/personalInfo";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is a static website, so we'll just show a success message
    // In a real application, you would send this data to a server
    toast({
      title: "Message Sent",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  
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
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-dark">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="font-heading text-2xl font-semibold mb-6"
              variants={itemVariants}
            >
              Contact Information
            </motion.h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start"
                variants={itemVariants}
              >
                <div className="mr-4 text-secondary bg-neutral-light p-3 rounded-full">
                  <i className="fas fa-envelope text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-neutral-dark">{personalInfo.email}</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                variants={itemVariants}
              >
                <div className="mr-4 text-secondary bg-neutral-light p-3 rounded-full">
                  <i className="fas fa-phone text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-neutral-dark">{personalInfo.phone}</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                variants={itemVariants}
              >
                <div className="mr-4 text-secondary bg-neutral-light p-3 rounded-full">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-neutral-dark">{personalInfo.location}</p>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-8"
              variants={itemVariants}
            >
              <h3 className="font-heading text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {personalInfo.socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-neutral-light text-primary hover:text-secondary p-3 rounded-full transition-colors"
                  >
                    <i className={`${link.icon} text-xl`}></i>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-heading text-2xl font-semibold mb-6">Send Me a Message</h3>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-dark mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-neutral-medium rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors" 
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-neutral-medium rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors" 
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-dark mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-neutral-medium rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors" 
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-neutral-medium rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors" 
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              <motion.button 
                type="submit" 
                className="w-full px-6 py-3 bg-secondary text-white font-medium rounded-md hover:bg-opacity-90 transition-all transform hover:-translate-y-1 shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
