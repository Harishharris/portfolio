'use client';

import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { Github, View, X, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-[#1F1F1F] min-h-screen text-sm text-white flex pt-10 flex-col">
      <div className="flex items-start justify-start flex-col max-w-[600px] mx-auto">
        <div className="font-bold text-lg underline underline-offset-[8px] cursor-pointer text-sky-500">
          {'HARISH' + '  '}
        </div>
        <div className="leading-8 mt-4">
          Hi there, I am{' '}
          <span className="hover:cursor-pointer font-bold underline underline-offset-[4px]">
            HARISH DHUNAKA
          </span>
          . I&apos;m 20 y/o and I&apos;m a CS undergraduate student. I like
          shuffling cards and building things. I enjoy web development and
          solving algoritmic puzzles and I live on the web.
        </div>

        <Separator orientation="horizontal" className="my-4" />

        <div>
          <h2 className="font-bold text-lg mb-4 underline decoration-sky-500 underline-offset-[8px] text-sky-500">
            Projects
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-64 w-72 border rounded-lg">
              <Image
                src="/course-platform.jpg"
                alt="project"
                height={1000}
                width={300}
                className="rounded-md border-b h-[50%] object-cover"
              />
              <div className="flex flex-col p-2 gap-2">
                <h2 className="font-bold text-lg text-sky-500">
                  Course Platform
                </h2>
                <div>Next.js, React, TypeScript, Prisma</div>
                <div className="flex items-center gap-6 my-2">
                  <div className="flex gap-1 items-center">
                    <Github className="h-6 w-6" />
                    <div className="font-bold text-lg hover:text-sky-500 cursor-pointer">
                      Github
                    </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <View />
                    <div className="font-bold text-lg hover:text-sky-500 cursor-pointer">
                      Live Preview
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64 w-72 border rounded-lg">
              <Image
                src="/image-generator.webp"
                alt="project"
                height={1000}
                width={300}
                className="rounded-md border-b h-[50%] object-cover"
              />
              <div className="flex flex-col p-2 gap-2">
                <h2 className="font-bold text-lg text-sky-500">
                  Image Generator
                </h2>
                <div>Next.js, React, TypeScript</div>
                <div className="flex items-center gap-6 my-2">
                  <div className="flex gap-1 items-center">
                    <Github className="h-6 w-6" />
                    <div className="font-bold text-lg hover:text-sky-500 cursor-pointer">
                      Github
                    </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <View />
                    <div className="font-bold text-lg hover:text-sky-500 cursor-pointer">
                      Live Preview
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64 w-72 border rounded-lg">
              <Image
                src="/notify.jpg"
                alt="project"
                height={1000}
                width={300}
                className="rounded-md border-b h-[50%] object-cover"
              />
              <div className="flex flex-col p-2 gap-2">
                <h2 className="font-bold text-lg text-sky-500">Notify</h2>
                <div>React, JavaScript, MongoDB, REAT API</div>
                <div className="flex items-center gap-6 my-2">
                  <div className="flex gap-1 items-center">
                    <Github className="h-6 w-6" />
                    <div className="font-bold text-lg hover:text-sky-500 cursor-pointer">
                      Github
                    </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <View />
                    <div className="font-bold text-lg hover:text-sky-500 cursor-pointer">
                      Live Preview
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-64 w-72 border rounded-lg">
              <Image
                src="/messaging.webp"
                alt="project"
                height={1000}
                width={300}
                className="rounded-md border-b h-[50%] object-cover"
              />
              <div className="flex flex-col p-2 gap-2">
                <h2 className="font-bold text-lg text-sky-500">
                  Real Time Messaging
                </h2>
                <div>Next.js, Pusher.js, TypeScript, Prisma</div>
                <div className="flex items-center gap-6 my-2">
                  <div className="flex gap-1 items-center">
                    <Github className="h-6 w-6" />
                    <div className="font-bold text-lg hover:text-sky-500 cursor-pointer">
                      Github
                    </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <View />
                    <div className="font-bold text-lg hover:text-sky-500 cursor-pointer">
                      Live Preview
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mt-16" />
        <div className="flex items-center justify-between w-full mb-10 mt-4">
          <div>Harish Dhunaka</div>
          <div className="flex gap-3">
            <a href="https://twitter.com/Harishdoge" target="_blank">
              <X className="cursor-pointer" />
            </a>
            <a href="https://github.com/Harishharris" target="_blank">
              <Github className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/harish-dhunaka-a1a37024b/"
              target="_blank"
            >
              <Linkedin className="cursor-pointer" />
            </a>
          </div>
        </div>
        <div>Thank You</div>
      </div>
    </main>
  );
}
