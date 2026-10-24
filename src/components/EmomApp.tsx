'use client';

import dynamic from 'next/dynamic';

/** Holds the tracker's place while its script loads, so the page does not jump when it arrives. */
export function EmomLoading() {
  return (
    <div className="flex flex-col gap-5" aria-busy="true" aria-label="Loading the timer">
      <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h1 className="text-2xl font-extrabold uppercase tracking-wide">Beast EMOM</h1>
        <p className="text-sm text-muted-foreground">Pull-ups on the minute</p>
      </header>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="h-[70vh] rounded-xl border bg-card motion-safe:animate-pulse" />
        <div className="hidden h-80 rounded-xl border bg-card motion-safe:animate-pulse lg:block" />
      </div>
    </div>
  );
}

// The tracker reads its plan, log and live session from localStorage on first render, so it only runs in the browser.
export const EmomApp = dynamic(() => import('./emom/EmomTracker').then((m) => m.EmomTracker), {
  ssr: false,
  loading: EmomLoading,
});
