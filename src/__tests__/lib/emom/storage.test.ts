import { DEFAULT_CONFIG } from '@/lib/emom/plan';
import { loadConfig, saveConfig } from '@/lib/emom/storage';

beforeEach(() => window.localStorage.clear());

it('defaults a new visitor to the simple row', () => {
  expect(loadConfig().logFormat).toBe('simple');
});
it('preserves the previous format for plans saved before the setting existed', () => {
  window.localStorage.setItem('emom:config', JSON.stringify({ rates: [4], workMin: 10 }));
  expect(loadConfig().logFormat).toBe('legacy');
});
it('saves and reloads the chosen format', () => {
  saveConfig({ ...DEFAULT_CONFIG, logFormat: 'text' });
  expect(loadConfig().logFormat).toBe('text');
});
it('falls back to simple for an invalid stored format', () => {
  window.localStorage.setItem('emom:config', JSON.stringify({ ...DEFAULT_CONFIG, logFormat: 'bad' }));
  expect(loadConfig().logFormat).toBe('simple');
});
