'use client';

import { MapPin, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-neutral-950 min-h-screen text-sm text-white flex pt-10 flex-col">
      <div className="flex items-start justify-start flex-col max-w-[600px] mx-auto">
        <div className="font-semibold text-lg cursor-pointer mb-4">
          <div className="flex gap-4 items-center justify-center">
            <div>
              <Image
                className="rounded-full ring-4 ring-purple-500"
                src={'/Photo.jpg'}
                height={42}
                width={42}
                alt="person"
              />
            </div>
            <div className="text-2xl">harish</div>
          </div>
        </div>
        <div className="flex gap-2">
          <MapPin />
          <p>Guntur, India</p>
        </div>
        <div className="leading-8 mt-4">
          I&apos;m a 20 y/o and I&apos;m a CS final year undergraduate student.
          I like shuffling cards and building things. I enjoy web development
          and solving algoritmic puzzles and I live on the web.
        </div>

        <div className="mt-8">
          <h2 className="font-bold text-lg mb-8">projects</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <Link
                target="_blank"
                href={'https://testimonials-steel.vercel.app'}
                className="underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
              >
                testimonials
              </Link>
              <p className="mt-2 text-md text-neutral-100">
                collect testimonials for your customers with ease
              </p>
            </div>

            <div className="space-y-2">
              <Link
                target="_blank"
                href={'https://github.com/Harishharris/course-platform'}
                className="underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
              >
                course-platform
              </Link>
              <p className="mt-2 text-md text-neutral-100">
                teach your students about various technologies
              </p>
            </div>

            <div className="space-y-2">
              <Link
                target="_blank"
                href={'https://github.com/Harishharris/Hackathon'}
                className="underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
              >
                code-craftor
              </Link>
              <p className="mt-2 text-md text-neutral-100">
                generate code using openAI
              </p>
            </div>

            <div className="space-y-2">
              <Link
                target="_blank"
                href={
                  'https://blog-with-redux-284aj302e-harishharris.vercel.app'
                }
                className="underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
              >
                blog
              </Link>
              <p className="mt-2 text-md text-neutral-100">
                teach your students about various technologies
              </p>
            </div>
          </div>
        </div>

        <h2 className="font-bold text-lg my-8">links</h2>

        <div className="flex gap-3">
          <Link
            href={'mailto:harish.16634@gmail.com'}
            className="flex gap-1"
            target="_blank"
          >
            email
            <ArrowUpRight size={20} />
          </Link>

          <Link
            href={'https://www.github.com/Harishharris'}
            className="flex gap-1"
            target="_blank"
          >
            github
            <ArrowUpRight size={20} />
          </Link>

          <Link
            href={'https://x.com/Harishdoge'}
            className="flex gap-1"
            target="_blank"
          >
            x.com
            <ArrowUpRight size={20} />
          </Link>

          <Link
            href={'https://www.linkedin.com/in/harish-dhunaka-a1a37024b/'}
            className="flex gap-1"
            target="_blank"
          >
            linkedin
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </main>
  );
}
