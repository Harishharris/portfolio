'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  className?: string;
}

export const TypingEffect = ({ text, speed = 75, className }: TypingEffectProps) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 600);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [text, speed]);

  return (
    <span className={cn('relative inline-flex items-center', className)}>
      <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-300">
        {displayText}
      </span>
      <span
        className={cn(
          'absolute -right-1 top-0.5 h-[90%] w-[2px] bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 transition-opacity duration-300',
          showCursor ? 'opacity-100' : 'opacity-0'
        )}
        style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
        aria-hidden="true"
      />
    </span>
  );
};
