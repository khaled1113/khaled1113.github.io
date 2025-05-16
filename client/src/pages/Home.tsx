import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  // Handle active navigation based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');
      
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id') || '';
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href.substring(1) === current) {
          link.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Header scroll effect
    const header = document.querySelector('header');
    const handleHeaderScroll = () => {
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add('shadow-md');
          header.classList.add('py-2');
          header.classList.remove('py-4');
        } else {
          header.classList.remove('shadow-md');
          header.classList.remove('py-2');
          header.classList.add('py-4');
        }
      }
    };
    
    window.addEventListener('scroll', handleHeaderScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleHeaderScroll);
    };
  }, []);

  return (
    <div className="font-body text-primary bg-white smooth-scroll">
      <Header />
      
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}
