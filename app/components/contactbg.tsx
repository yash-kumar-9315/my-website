"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ContactBg() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const contactImage =
    resolvedTheme === "dark" ? "/contact-dark.jpg" : "/contact-light3.jpg";

  if (!mounted) return null;

  return (
    <Image
      src={contactImage}
      alt=""
      fill
      priority
      sizes="100vw"
      className="object-cover"
    />
  );
}