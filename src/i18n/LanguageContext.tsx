import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

export type Lang = 'ja' | 'en';

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function detectInitialLang(): Lang {
  if (typeof window === 'undefined') return 'ja';
  const saved = window.localStorage.getItem('nido-lang');
  if (saved === 'ja' || saved === 'en') return saved;
  return navigator.language?.toLowerCase().startsWith('ja') ? 'ja' : 'ja';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);

  const setLang = (next: Lang) => {
    setLangState(next);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('nido-lang', next);
    }
  };

  const toggleLang = () => setLang(lang === 'ja' ? 'en' : 'ja');

  const value = useMemo(() => ({ lang, toggleLang, setLang }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
