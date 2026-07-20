// components/CommandPalette.tsx
'use client';
import { Command } from 'cmdk';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <Command.Dialog open={open} onOpenChange={setOpen}>
      <Command.Input placeholder="Jump to..." />
      <Command.List>
        <Command.Item onSelect={() => { router.push('/'); setOpen(false); }}>Home</Command.Item>
        <Command.Item onSelect={() => { router.push('/work'); setOpen(false); }}>Work</Command.Item>
        <Command.Item onSelect={() => { router.push('/blog'); setOpen(false); }}>Blog</Command.Item>
      </Command.List>
    </Command.Dialog>
  );
}