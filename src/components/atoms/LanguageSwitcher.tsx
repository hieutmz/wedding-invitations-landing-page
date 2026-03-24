"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/LocaleContext";
import { LOCALES } from "@/lib/i18n";

interface LanguageSwitcherProps {
  light?: boolean;
}

function FlagIcon({ countryCode, size = 20 }: Readonly<{ countryCode: string; size?: number }>) {
  return (
    <Image
      src={`https://flagcdn.com/w40/${countryCode}.png`}
      alt={countryCode}
      width={size}
      height={Math.round(size * 0.75)}
      className="rounded-sm object-cover"
      unoptimized
    />
  );
}

export default function LanguageSwitcher({ light = false }: LanguageSwitcherProps) {
  const { locale, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLocale = LOCALES.find((l) => l.code === locale);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 h-10 pl-2 pr-2.5 rounded-full border-2 backdrop-blur-sm transition-all duration-200 cursor-pointer text-sm font-semibold shadow-md hover:shadow-lg ${
          light
            ? "border-white/30 text-white bg-white/15 hover:bg-white/25 shadow-black/10"
            : "border-rose-200 text-gray-700 bg-white hover:border-rose-400 shadow-rose-100/50"
        }`}
      >
        {/* Flag image */}
        <div className="w-6 h-6 rounded-full overflow-hidden border border-white/50 shadow-sm flex-shrink-0">
          {currentLocale && (
            <Image
              src={`https://flagcdn.com/w80/${currentLocale.countryCode}.png`}
              alt={currentLocale.label}
              width={24}
              height={24}
              className="w-full h-full object-cover"
              unoptimized
            />
          )}
        </div>
        <span className="text-xs tracking-wide hidden sm:inline">
          {currentLocale?.code.toUpperCase()}
        </span>
        <KeyboardArrowDownIcon
          sx={{ fontSize: 16, transition: "transform 0.2s" }}
          className={open ? "rotate-180" : ""}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 top-full mt-2.5 z-50"
          >
            <div className="bg-white rounded-2xl shadow-[0_8px_32px_rgba(184,104,72,0.15)] border-2 border-rose-100 overflow-hidden w-[200px]">
              <div className="p-1.5">
                {LOCALES.map((loc) => {
                  const isActive = locale === loc.code;

                  return (
                    <button
                      key={loc.code}
                      onClick={() => {
                        setLocale(loc.code);
                        setOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer border-none text-left transition-all duration-150 ${
                        isActive
                          ? "bg-gradient-to-r from-rose-50 to-blush-50 text-rose-600"
                          : "bg-transparent text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {/* Flag */}
                      <div className="w-7 h-5 rounded-[3px] overflow-hidden shadow-sm border border-gray-200/50 flex-shrink-0">
                        <FlagIcon countryCode={loc.countryCode} size={28} />
                      </div>

                      {/* Label */}
                      <span className="flex-1 text-[13px] font-medium">
                        {loc.label}
                      </span>

                      {/* Active dot */}
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-rose-500 shadow-sm shadow-rose-300" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
