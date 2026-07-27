// components/ScrollProgress.tsx
'use client';
import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const h = document.documentElement;
        setProgress((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
        ticking = false;
      });
      ticking = true;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  return () => window.removeEventListener('scroll', onScroll);
}, []);
  return (
    <div className="fixed top-0 left-0 h-1 bg-black dark:bg-white z-50" style={{ width: `${progress}%` }} />
  );
}