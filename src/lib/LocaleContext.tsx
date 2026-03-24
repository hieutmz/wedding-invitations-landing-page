"use client";

import { createContext, useContext, useState, useCallback } from "react";
import type { Locale } from "./i18n";
import { DEFAULT_LOCALE } from "./i18n";
import translations from "./translations";

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: (key: string) => key,
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  const t = useCallback(
    (key: string): string => {
      return translations[locale]?.[key] ?? translations[DEFAULT_LOCALE]?.[key] ?? key;
    },
    [locale]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LocaleContext);
}
