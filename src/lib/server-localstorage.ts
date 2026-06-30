// Server-side polyfill for localStorage to avoid SSR crashes
if (typeof window === 'undefined') {
  try {
    // Only define if missing or malformed
    const hasLocalStorage = typeof (globalThis as any).localStorage !== 'undefined';
    if (!hasLocalStorage || typeof (globalThis as any).localStorage.getItem !== 'function') {
      (globalThis as any).localStorage = {
        getItem: (_key: string) => null,
        setItem: (_key: string, _value: string) => {},
        removeItem: (_key: string) => {},
        clear: () => {},
      };
    }
  } catch (e) {
    // ignore
  }
}
