"use client";

import { useState, useRef, useEffect } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { useThemeMode, type ThemeMode } from "@/lib/ThemeContext";

const OPTIONS: { value: ThemeMode; label: string; Icon: React.ElementType }[] = [
  { value: "light", label: "Sáng", Icon: LightModeIcon },
  { value: "dark", label: "Tối", Icon: DarkModeIcon },
  { value: "system", label: "Hệ thống", Icon: SettingsBrightnessIcon },
];

export default function ThemeToggle() {
  const { mode, setMode, resolvedMode } = useThemeMode();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const ActiveIcon =
    mode === "light" ? LightModeIcon : mode === "dark" ? DarkModeIcon : SettingsBrightnessIcon;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-8 h-8 rounded-full flex items-center justify-center border-none cursor-pointer transition-colors duration-200"
        style={{
          background: resolvedMode === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)",
          color: resolvedMode === "dark" ? "#F5EDE5" : "#6B6B6B",
        }}
        aria-label="Chuyển theme"
        title="Chuyển theme"
      >
        <ActiveIcon sx={{ fontSize: 18 }} />
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-36 rounded-xl overflow-hidden z-50"
          style={{
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            background: resolvedMode === "dark" ? "#2E2824" : "#FFFFFF",
            border: `1px solid ${resolvedMode === "dark" ? "rgba(255,255,255,0.08)" : "#E0D8CC"}`,
          }}
        >
          {OPTIONS.map(({ value, label, Icon }) => {
            const active = mode === value;
            return (
              <button
                key={value}
                onClick={() => { setMode(value); setOpen(false); }}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm cursor-pointer border-none transition-colors duration-150"
                style={{
                  background: active
                    ? resolvedMode === "dark" ? "rgba(208,140,106,0.15)" : "#F7F2EC"
                    : "transparent",
                  color: active
                    ? "#B86848"
                    : resolvedMode === "dark" ? "#C4AFA8" : "#4B4B4B",
                  fontWeight: active ? 600 : 400,
                }}
              >
                <Icon sx={{ fontSize: 16 }} />
                {label}
                {active && (
                  <span className="ml-auto text-xs" style={{ color: "#B86848" }}>✓</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
