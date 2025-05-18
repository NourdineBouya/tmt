'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const technologies = [
  {
    name: 'HTML5',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    category: 'Frontend'
  },
  {
    name: 'CSS3',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    category: 'Frontend'
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    category: 'Frontend'
  },
  {
    name: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    category: 'Frontend'
  },
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    category: 'Frontend'
  },
  {
    name: 'Next.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    category: 'Frontend'
  },
  {
    name: 'Vue.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    category: 'Frontend'
  },
  {
    name: 'Angular',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    category: 'Frontend'
  },
  {
    name: 'PHP',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    category: 'Backend'
  },
  {
    name: 'Laravel',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
    category: 'Backend'
  },
  {
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    category: 'Backend'
  },
  {
    name: 'Django',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    category: 'Backend'
  },
  {
    name: 'Flask',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    category: 'Backend'
  },
  {
    name: 'Ruby',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',
    category: 'Backend'
  },
  {
    name: 'Rails',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original.svg',
    category: 'Backend'
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    category: 'Backend'
  },
  {
    name: 'WordPress',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
    category: 'CMS'
  },
  {
    name: 'Drupal',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg',
    category: 'CMS'
  },
  {
    name: 'Magento',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg',
    category: 'E-commerce'
  },
  {
    name: 'PrestaShop',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prestashop/prestashop-original.svg',
    category: 'E-commerce'
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    category: 'Database'
  },
  {
    name: 'MySQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    category: 'Database'
  },
  {
    name: 'PostgreSQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    category: 'Database'
  },
  {
    name: 'Docker',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    category: 'DevOps'
  },
  {
    name: 'AWS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    category: 'Cloud'
  },
  {
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    category: 'DevOps'
  }
];

const TechStack = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let scrollAmount = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      if (scrollContainerRef.current && !isHovered) {
        scrollAmount += scrollSpeed;
        
        // Reset scroll position when reaching the end
        if (scrollAmount >= scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth) {
          scrollAmount = 0;
        }
        
        scrollContainerRef.current.scrollLeft = scrollAmount;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Notre Stack Technologique
        </h2>
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Array.from(new Set(technologies.map(tech => tech.category))).map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tech Stack Scroll */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
          >
            <div className="flex gap-8 min-w-max px-4">
              {/* First set of technologies */}
              {technologies.map((tech, index) => (
                <div
                  key={`first-${index}`}
                  className="flex flex-col items-center group"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 relative mb-3 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
                    {tech.name}
                  </span>
                </div>
              ))}
              
              {/* Duplicate set for seamless scrolling */}
              {technologies.map((tech, index) => (
                <div
                  key={`second-${index}`}
                  className="flex flex-col items-center group"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 relative mb-3 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={tech.logo}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #D1D5DB;
          border-radius: 20px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background-color: #9CA3AF;
        }
      `}</style>
    </section>
  );
};

export default TechStack; 