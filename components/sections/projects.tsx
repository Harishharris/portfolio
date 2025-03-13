'use client';

import { Card } from '../ui/card';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'Testimonials',
    description: 'Collect testimonials for your customers with ease',
    link: 'https://testimonials-steel.vercel.app',
  },
  {
    title: 'Course Platform',
    description: 'Teach your students about various technologies',
    link: 'https://github.com/Harishharris/course-platform',
  },
  {
    title: 'Code Craftor',
    description: 'Generate code using OpenAI',
    link: 'https://github.com/Harishharris/Hackathon',
  },
];

export const ProjectsSection = () => {
  return (
    <section className="px-6 sm:px-8 md:px-12 lg:px-16 pt-8 pb-24">
      <div className="relative p-[1px] rounded-xl overflow-hidden bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 shadow-[0_0_15px_rgba(96,165,250,0.3)]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 animate-pulse [animation-duration:4s]" />
        <div className="relative bg-[#0A0A0B]/95 rounded-xl backdrop-blur-[1px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="h-full p-4 sm:p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_10px_rgba(96,165,250,0.2)]">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-200/90 via-purple-200/90 to-pink-200/90 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:via-purple-200 group-hover:to-pink-200 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                        {project.description}
                      </p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-white/50 transition-all duration-300 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
