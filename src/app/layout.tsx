import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Beast EMOM · Pull-ups on the minute',
  description:
    'A free EMOM timer for pull-ups: plan blocks and breaks, get a flash and a beep every minute, and log your month. No account, nothing leaves your browser.',
  metadataBase: new URL('https://emom-pullups.vercel.app'),
  openGraph: {
    title: 'Beast EMOM · Pull-ups on the minute',
    description: 'A free, open-source EMOM timer for pull-ups. No account, nothing leaves your browser.',
    url: 'https://emom-pullups.vercel.app',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
