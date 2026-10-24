'use client';

import dynamic from 'next/dynamic';

// The tracker reads its plan, log and live session from localStorage on first render, so it only runs in the browser.
export const EmomApp = dynamic(() => import('./emom/EmomTracker').then((m) => m.EmomTracker), { ssr: false });
