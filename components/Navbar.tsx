'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Compétences', id: 'services' },
    { name: 'Avantages', id: 'avantages' },
    { name: 'Nos clients', id: 'clients' },
    { name: 'Pourquoi choisir TMT', id: 'compare' },
    { name: 'Contact', id: 'contact' },
    { name: 'Recrutement', id: 'contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-md shadow-lg' 
        : 'bg-gradient-to-b from-black to-black/95'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              TMT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <Link
              href="#contact"
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-500/20"
            >
              Démarrer votre projet
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-20 left-0 right-0 bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-md shadow-lg"
            >
              <div className="px-4 py-3 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-all duration-200"
                  >
                    {item.name}
                  </button>
                ))}
                <Link
                  href="#contact"
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-center px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-md hover:from-orange-600 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-500/20"
                >
                  Démarrer votre projet
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar; 