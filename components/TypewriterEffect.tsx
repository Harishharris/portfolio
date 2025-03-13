'use client';

import { useEffect, useState } from 'react';

export function TypewriterEffect({ words }: { words: string[] }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const wordPause = 2000;

    const type = () => {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), wordPause);
        }
      }
    };

    const typingTimer = setTimeout(
      type,
      isDeleting ? deletingSpeed : typingSpeed
    );

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      clearTimeout(typingTimer);
      clearInterval(cursorTimer);
    };
  }, [currentText, currentWordIndex, isDeleting, words]);

  return (
    <span className="inline-flex">
      {currentText}
      <span
        className={`ml-1 inline-block w-[2px] h-6 bg-purple-400 translate-y-1 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </span>
  );
}
