'use client';

import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '@/lib/utils';

export const AnimatedText = ({
  text,
  className,
  once = true,
}: {
  text: string;
  className?: string;
  once?: boolean;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
        y: 0,
      },
      {
        duration: 0.5,
        delay: stagger(0.05),
      }
    );
  }, [animate]);

  const words = text.split(' ');

  return (
    <motion.div ref={scope} className={cn('text-center', className)}>
      {words.map((word, idx) => (
        <span
          key={`${word}-${idx}`}
          className="inline-block opacity-0 translate-y-[10px]"
        >
          {word}
          {idx !== words.length - 1 && ' '}
        </span>
      ))}
    </motion.div>
  );
};
