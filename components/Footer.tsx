'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'Contact Us', href: '#' },
      { name: 'About Us', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Use', href: '#' }
    ]
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/tech-my-team',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/techmyteam',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/techmyteam',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Flowing Gradient Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-transparent to-slate-900/50" />
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-white via-slate-300 to-slate-500 bg-clip-text text-transparent">TMT</span>
            </div>
            <p className="text-slate-400">
              Centre de production digitale et mobile, composé de ressources expertes pour vos projets.
            </p>
            <div className="space-y-2">
              <p className="flex items-center text-slate-400">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Centre d'affaires TALEB, Boulevard Mohamed 5, 40000 MARRAKECH
              </p>
              <p className="flex items-center text-slate-400">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +33 (0)972 462 369
              </p>
              <p className="flex items-center text-slate-400">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@techmyteam.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-4">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-slate-400 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Legal</h3>
              <ul className="space-y-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-slate-400 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social & Newsletter */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Newsletter</h3>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-slate-500 text-white placeholder-slate-500"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white rounded-lg hover:from-slate-700 hover:via-slate-600 hover:to-slate-700 transition-all duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 relative">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {currentYear} TECH MY TEAM. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Image
                src="/images/morocco-flag.png"
                alt="Maroc"
                width={24}
                height={16}
                className="rounded"
              />
              <span className="text-slate-400 text-sm">Made in Morocco</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 