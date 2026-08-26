import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { translations, type LanguageCode, type Translation } from '@/i18n/translations';

interface LanguageContextValue {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LanguageCode>('hi');

  const setLang = useCallback((newLang: LanguageCode) => {
    setLangState(newLang);
  }, []);

  const value: LanguageContextValue = {
    lang,
    setLang,
    t: translations[lang],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
