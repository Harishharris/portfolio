'use client';

import { TypingEffect } from '../ui/typing-effect';

export const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-4xl -mt-12">
        <p className="mb-6 text-base sm:text-lg md:text-xl bg-gradient-to-r from-blue-200/90 via-purple-200/90 to-pink-200/90 bg-clip-text text-transparent font-medium tracking-wider">
          Bringing Ideas to Life, One Line of Code at a Time
        </p>
        <h1 className="text-xl sm:text-4xl md:text-6xl whitespace-nowrap font-bold py-2">
          <TypingEffect text="Hi, I'm Harish, Software Engineer" speed={75} />
        </h1>
      </div>
    </section>
  );
};
