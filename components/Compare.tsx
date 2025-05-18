'use client';

import { motion } from 'framer-motion';

const Compare = () => {
  const comparisonData = [
    {
      role: '2 développeurs',
      morocco: {
        price: '6000€',
        details: 'Moyenne de 3000€/mois homme (coût des salaires + nos frais de services inclus)'
      },
      france: {
        price: '12 000€',
        details: 'Tarif minimal de 300€/jour homme x2 x20'
      }
    },
    {
      role: '1 intégrateur',
      morocco: {
        price: '1800€',
        details: 'Moyenne de 1800€/mois homme (coût des salaires + nos frais de services inclus)'
      },
      france: {
        price: '2800€',
        details: 'Moyenne de 140€/jour homme x1 x20'
      }
    },
    {
      role: '1 chef de projet 100% dédié',
      morocco: {
        price: '2300€',
        details: 'Un chef de projet 100% dédié au bon déroulement de votre demande'
      },
      france: {
        price: '4000€',
        details: 'Un chef de projet souvent amené à gérer plusieurs projets en même temps'
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comparez vous-même
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une équipe dédiée pour le développement d'une plateforme dans notre centre de production à Marrakech
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="col-span-1"></div>
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-orange-500 text-white rounded-xl p-4 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">Au Maroc</h3>
                <p className="text-sm opacity-90">Centre de production à Marrakech</p>
              </motion.div>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 text-white rounded-xl p-4 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">En France</h3>
                <p className="text-sm opacity-90">Tarifs standards du marché</p>
              </motion.div>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-4">
            {comparisonData.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-4"
              >
                <div className="bg-gray-50 rounded-xl p-6 flex items-center">
                  <h4 className="text-lg font-semibold text-gray-900">{item.role}</h4>
                </div>
                <div className="bg-orange-50 rounded-xl p-6 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="text-2xl font-bold text-orange-600 mb-2">{item.morocco.price}</div>
                    <p className="text-sm text-gray-600">{item.morocco.details}</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-xl p-6 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800/5 to-gray-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="text-2xl font-bold text-gray-800 mb-2">{item.france.price}</div>
                    <p className="text-sm text-gray-600">{item.france.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Total Savings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-center text-white shadow-xl"
          >
            <div className="text-4xl font-bold mb-2">47% d'économie réalisée</div>
            <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto mt-6">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl font-bold mb-1">10 100€</div>
                <p className="text-sm opacity-90">Coût total au Maroc</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl font-bold mb-1">18 800€</div>
                <p className="text-sm opacity-90">Coût total en France</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Compare; 