'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from 'next/image';

const Services = () => {
  const services = [
    {
      title: "Solutions mobiles",
      description: "Nos équipes conçoivent des applications mobiles natives iOS et Androïd ou hybrides en s'appuyant sur des outils tels que Phonegap ou Titanium. Dans le cadre de ces applications nous utilisons les services, NFC, 3D, réalité augmentée, beacon…, en interopérabilité avec les systèmes de nos clients.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon: "📱"
    },
    {
      title: "Intégration",
      description: "Notre équipe d'intégrateurs est totalement rompue aux exigences et standards HTML 5 et CSS3. Maîtrisant parfaitement les contraintes du Responsive Design, ils répondront à toutes vos demandes d'intégration e-mailings pages sites web responsive intégration CMS",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon: "💻"
    },
    {
      title: "CMS & E-commerce",
      description: "Nous utilisons les technologies open source les plus répandues sur le marché, notamment : les gestionnaires de contenus, CMS Drupal et Wordpress, les solutions e-commerce Magento et Prestashop",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon: "🛍️"
    },
    {
      title: "Frameworks évolués",
      description: "Nous développons avec les frameworks les plus performants du marché : Symfony 4, J2EE, pour créer des applications web robustes et évolutives",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Nos domaines d'expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nous utilisons les technologies open source les plus répandues sur le marché, 
            notamment : les gestionnaires de contenus, CMS Drupal et Wordpress, 
            les solutions e-commerce Magento et Prestashop, les frameworks évolués 
            Symfony 4, J2EE, les solutions mobiles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left side - Accordion */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <Accordion type="single" collapsible className="w-full">
              {services.map((service, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-gray-200 last:border-0"
                >
                  <AccordionTrigger className="text-xl font-semibold text-gray-900 hover:text-blue-600 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{service.icon}</span>
                      {service.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {service.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right side - Images Grid */}
          <div className="grid grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="relative h-[300px] rounded-2xl overflow-hidden group"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 