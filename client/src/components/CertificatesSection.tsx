import { motion } from "framer-motion";
import { personalInfo } from "@/data/personalInfo";

export default function CertificatesSection() {
  // Using TypeScript assertion to access certificates
  const { certificates } = personalInfo as typeof personalInfo & { certificates: { name: string; issuer: string; year: string }[] };
  
  return (
    <section id="certificates" className="py-16 md:py-24 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-neutral-dark">
            Professional certifications and specialized training in embedded systems, PCB design, and 3D modeling.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-primary bg-secondary bg-opacity-20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <i className="fas fa-certificate text-xl"></i>
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{cert.name}</h3>
              <div className="flex justify-between items-center text-sm text-neutral-dark">
                <span>{cert.issuer}</span>
                <span className="font-medium">{cert.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}