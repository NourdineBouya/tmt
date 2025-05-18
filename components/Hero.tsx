'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Centre de production digitale et mobile",
      description: "Composé de ressources expertes : intégrateurs, développeurs, ingénieurs informatiques, et dirigé par un board français, TECH MY TEAM, centre de production digitale et mobile, intervient pour le compte de clients européens, en garantissant une qualité de production et des coûts de développements ultra-compétitifs",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      cta: "Démarrer votre projet"
    },
    {
      title: "Talents offshore 100% dédiés",
      description: "Une équipe dédiée dans l'un de nos centres de production, mise à disposition suivant les modalités du contrat défini, recrutée par nos soins, suivant vos besoins.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      cta: "Voir nos réalisations"
    },
    {
      title: "Ressources en mode forfait",
      description: "Des développeurs, intégrateurs, à votre service suivant vos besoins et les compétences requises pour le projet confié.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      cta: "En savoir plus"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          currentSlide === index && (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <div className="container mx-auto px-4 h-screen flex items-center">
                <div className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content */}
                  <motion.div
                    initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex-1 text-center lg:text-left"
                  >
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                      {slide.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {slide.cta}
                      <svg 
                        className="w-5 h-5 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M14 5l7 7m0 0l-7 7m7-7H3" 
                        />
                      </svg>
                    </motion.button>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="flex-1 relative h-[300px] md:h-[400px] lg:h-[500px] w-full"
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover rounded-2xl shadow-2xl"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-2xl" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-orange-500 w-8' 
                : 'bg-gray-300 hover:bg-orange-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero; 