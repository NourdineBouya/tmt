'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Clients = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Nos clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Nous nous adressons à toutes les entreprises souhaitant optimiser leur production digitale et mobile, 
            en mettant à disposition des ressources confirmées et expertes, avec une politique tarifaire très compétitive
          </motion.p>
        </div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
            {/* Client Info */}
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                GO
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">GOALEO</h3>
                <p className="text-gray-300">Plateforme communautaire</p>
              </div>
            </div>

            {/* Quote Icon */}
            <div className="text-orange-500 mb-6">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Testimonial Text */}
            <div className="space-y-6 text-gray-200">
              <p className="text-lg leading-relaxed">
                En créant notre start-up et plateforme communautaire GOALEO, nous avions besoin de nous appuyer sur un expert technique capable de nous accompagner sur le développement de ce projet ambitieux, mené à l'échelle internationale.
              </p>
              <p className="text-lg leading-relaxed">
                Les équipes TECH MY TEAM parfaitement encadrées, maîtrisent le framework SYMFONY mais surtout proposent une méthodologie et une conduite de projet parfaitement adaptées à notre organisation.
              </p>
              <p className="text-lg leading-relaxed">
                Les compétences techniques sont parfaitement au rendez-vous tant au niveau de l'intégration, des développements spécifiques et de la gestion de projet.
              </p>
              <p className="text-lg leading-relaxed">
                La disponibilité des équipes est totale, et autre avantage majeur, le coût des prestations est très inférieur au standard du marché européen. Autant d'arguments qui confortent notre décision managériale, et la conduite de notre business plan.
              </p>
            </div>

            {/* Author */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white">Jean Marc Gillet</h4>
                  <p className="text-gray-300">PDG de GOALEO</p>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-6 h-6 text-orange-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients; 