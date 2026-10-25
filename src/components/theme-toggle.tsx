'use client';

import { useSyncExternalStore } from 'react';
import { ChevronDown, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const subscribe = () => () => {};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // Keep the server and initial client render identical when a preference is saved.
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);

  return (
    <div className="relative flex h-11 shrink-0 items-center rounded-md border bg-background shadow-xs focus-within:ring-[3px] focus-within:ring-ring/50">
      <span aria-hidden="true" className="pointer-events-none absolute left-3 size-4">
        <Sun className="absolute size-4 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute size-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
      </span>
      <select
        aria-label="Theme"
        value={mounted ? theme ?? 'system' : 'system'}
        onChange={(event) => setTheme(event.target.value)}
        className="h-full cursor-pointer appearance-none rounded-md bg-transparent pl-9 pr-8 text-sm text-foreground outline-none"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
      <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-2.5 size-4 text-muted-foreground" />
    </div>
  );
}
