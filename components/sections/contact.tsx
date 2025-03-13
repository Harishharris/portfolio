'use client';

import { Card } from '../ui/card';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:harish.16634@gmail.com',
    color: 'from-pink-500 to-rose-500',
  },
  {
    name: 'GitHub',
    href: 'https://www.github.com/Harishharris',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    name: 'X',
    href: 'https://x.com/Harishdoge',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/harish-dhunaka-a1a37024b/',
    color: 'from-green-500 to-emerald-500',
  },
];

export const ContactSection = () => {
  return (
    <section className="px-6 sm:px-8 md:px-12 lg:px-16 py-16">
      <h2 className="mb-12 text-3xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        Get in Touch
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Card className="h-full p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className={`text-lg font-semibold bg-gradient-to-r ${link.color} bg-clip-text text-transparent group-hover:opacity-100 transition-opacity duration-300`}>
                    {link.name}
                  </h3>
                  <p className="mt-2 text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    Connect with me
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-white/50 transition-all duration-300 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
