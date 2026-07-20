// components/AnimatedCounter.tsx
'use client';
import { useEffect, useState } from 'react';

export default function AnimatedCounter({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(value / 30);
    const t = setInterval(() => {
      start += step;
      if (start >= value) { setDisplay(value); clearInterval(t); }
      else setDisplay(start);
    }, 20);
    return () => clearInterval(t);
  }, [value]);
  return <span>{display}</span>;
}