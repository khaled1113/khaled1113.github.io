import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed w-full bg-white bg-opacity-95 shadow-sm z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.a 
            href="#hero" 
            className="text-2xl font-heading font-bold tracking-tight text-primary flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span>Portfolio</span>
            <span className="text-secondary">.</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <motion.a 
              href="#about" 
              className="nav-link font-medium text-primary hover:text-secondary transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              About
            </motion.a>
            <motion.a 
              href="#experience" 
              className="nav-link font-medium text-primary hover:text-secondary transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Experience
            </motion.a>
            <motion.a 
              href="#certificates" 
              className="nav-link font-medium text-primary hover:text-secondary transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              Certificates
            </motion.a>
            <motion.a 
              href="#projects" 
              className="nav-link font-medium text-primary hover:text-secondary transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              Projects
            </motion.a>
            <motion.a 
              href="#contact" 
              className="nav-link font-medium text-primary hover:text-secondary transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              Contact
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button 
            id="mobile-menu-button" 
            className="md:hidden text-primary focus:outline-none"
            onClick={toggleMobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-menu"
            className="md:hidden bg-white py-4 px-4 shadow-inner"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="font-medium text-primary hover:text-secondary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#experience" 
                className="font-medium text-primary hover:text-secondary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
              <a 
                href="#certificates" 
                className="font-medium text-primary hover:text-secondary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Certificates
              </a>
              <a 
                href="#projects" 
                className="font-medium text-primary hover:text-secondary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="font-medium text-primary hover:text-secondary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
