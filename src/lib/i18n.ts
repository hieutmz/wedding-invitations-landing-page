export type Locale = "vi" | "en" | "zh";

export interface LocaleInfo {
  code: Locale;
  label: string;
  flag: string;
  countryCode: string;
}

export const LOCALES: LocaleInfo[] = [
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳", countryCode: "vn" },
  { code: "en", label: "English", flag: "🇬🇧", countryCode: "gb" },
  { code: "zh", label: "简体中文", flag: "🇨🇳", countryCode: "cn" },
];

export const DEFAULT_LOCALE: Locale = "vi";
