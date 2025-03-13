'use client';

import { HeroSection } from '@/components/sections/hero';
import { ProjectsSection } from '@/components/sections/projects';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] overflow-x-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(63,13,128,0.15),rgba(0,0,0,0)_50%)]" />
        <div className="absolute top-0 h-[500px] w-full bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-transparent opacity-50 blur-3xl" />
      </div>
      <div className="relative">
        <div className="h-screen flex flex-col justify-between pb-16">
          <HeroSection />
          <div className="px-6 sm:px-8 md:px-12 lg:px-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
        </div>
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
