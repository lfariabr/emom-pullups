import { EmomApp } from '@/components/EmomApp';

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 p-4 md:p-6">
      <EmomApp />
      <footer className="mt-10 border-t pt-4 text-xs text-muted-foreground">
        Open source on{' '}
        <a className="underline underline-offset-2 hover:text-foreground" href="https://github.com/lfariabr/emom-pullups">
          GitHub
        </a>
        . Built by{' '}
        <a className="underline underline-offset-2 hover:text-foreground" href="https://luisfaria.dev">
          Luis Faria
        </a>
        . Everything you log stays in this browser.
      </footer>
    </main>
  );
}
