import Image from 'next/image';
import { ThemeToggle } from '@/components/theme-toggle';

export function EmomHeader() {
  return (
    <header className="flex items-center justify-between gap-3 border-b pb-5 sm:gap-6">
      <div className="flex min-w-0 items-center gap-3 sm:gap-3.5">
        <Image
          src="/icon.svg"
          alt=""
          width={48}
          height={48}
          unoptimized
          className="size-10 shrink-0 rounded-xl shadow-sm ring-1 ring-black/5 sm:size-12 dark:ring-white/10"
        />
        <div className="min-w-0">
          <h1 className="text-xl font-black uppercase leading-none tracking-tight sm:text-2xl">
            Beast <span className="font-medium text-green-700 dark:text-green-400">EMOM</span>
          </h1>
          <p className="mt-1.5 truncate text-xs text-muted-foreground sm:text-sm">Pull-ups on the minute</p>
        </div>
      </div>
      <ThemeToggle />
    </header>
  );
}
