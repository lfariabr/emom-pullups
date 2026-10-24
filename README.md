# Beast EMOM · pull-ups on the minute

A free EMOM (every minute on the minute) timer for pull-ups. It runs at **[emom-pullups.vercel.app](https://emom-pullups.vercel.app)**.

Set your reps per minute, blocks and service stops. At the top of each minute the screen flashes and beeps. Log a short minute when you miss reps, and see your month add up.

- **No account and no backend.** Your plan, training log and any unfinished session are saved in your browser's `localStorage`. Nothing is sent anywhere.
- **Survives a refresh.** If the tab reloads mid-session, you can resume where you left off, paused.
- **Made for the bar.** It has a full-screen flash, a big clock, a wake lock so the phone screen stays on, and a light or dark theme that follows your system.
- **Goal-aware.** Set a session goal and the timer adds extra minutes at your last pace until you reach it. Set a monthly goal and the log tracks it.

## Why "Beast"

I built this for my own training toward *The Beast*: 2,000 pull-ups in a single day, run as eight 50-minute EMOM blocks with 10-minute service stops. The presets (Beast prep, Half-Beast, The Beast · 8h, Weekday grease) are the sessions I actually run. The default plan for a first visit is gentler: two 20-minute blocks at 3 a minute.

It started as a page inside my portfolio, [luisfaria.dev](https://luisfaria.dev), and was extracted into this repo so anyone can use it.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm test           # Jest + React Testing Library
npm run lint
npm run build      # fully static output
```

## Stack

Next.js (App Router), React, TypeScript, Tailwind CSS 4, shadcn/ui and lucide icons, deployed on Vercel. The timing logic lives in pure functions in `src/lib/emom/plan.ts` and is unit-tested separately from the UI.

```
src/
  app/                 page and layout
  components/emom/     setup, live run, summary, training log
  lib/emom/            plan math, localStorage, session hook
  __tests__/           plan unit tests and tracker component tests
```

## Contributing

Issues and PRs are welcome. Please keep it backend-free: a feature that needs a server probably belongs in a fork.

## License

[MIT](LICENSE) © Luis Faria
