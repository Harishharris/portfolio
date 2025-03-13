'use client';

import Link from 'next/link';
import Image from 'next/image';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/harishharris',
    icon: '/icons/github.svg',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/harishharris',
    icon: '/icons/linkedin.svg',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/harishharris',
    icon: '/icons/twitter.svg',
  },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 p-4 sm:p-6 z-50">
      <div className="flex items-center space-x-6 sm:space-x-8 bg-[#0A0A0B]/30 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/5">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 relative transition-transform duration-300 group-hover:scale-110">
              <Image
                src={link.icon}
                alt={link.name}
                fill
                className="object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 [filter:drop-shadow(0_0_0.5rem_rgba(96,165,250,0))_drop-shadow(0_0_0.25rem_rgba(168,85,247,0))] group-hover:[filter:drop-shadow(0_0_0.75rem_theme(colors.blue.400/30))_drop-shadow(0_0_0.5rem_theme(colors.purple.400/30))]"
              />
            </div>
            <span className="sr-only bg-gradient-to-r from-blue-200/90 via-purple-200/90 to-pink-200/90 bg-clip-text text-transparent">{link.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export { Navbar };
