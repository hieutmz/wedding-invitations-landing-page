"use client";

import { useState, useEffect, useRef } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StyleIcon from "@mui/icons-material/Style";
import StarIcon from "@mui/icons-material/Star";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import type { SvgIconProps } from "@mui/material/SvgIcon";
import type { ComponentType } from "react";
import { NAV_ITEMS, TEMPLATES } from "@/constants";
import { useTranslation } from "@/lib/LocaleContext";

const NAV_KEYS = [
  "nav.home",
  "nav.loiNgo",
  "nav.story",
  "nav.templates",
  "nav.whyChoose",
  "nav.pricing",
  "nav.contact",
];

const NAV_ICONS: ComponentType<SvgIconProps>[] = [
  HomeIcon,
  AutoStoriesIcon,
  FavoriteIcon,
  StyleIcon,
  StarIcon,
  AttachMoneyIcon,
  EmailIcon,
];

interface Result {
  label: string;
  href: string;
  type: "section" | "template";
  IconComponent?: ComponentType<SvgIconProps>;
}

export default function QuickAccessDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "q") {
        e.preventDefault();
        setOpen((p) => !p);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const handleOpen = () => setOpen(true);
    globalThis.addEventListener("keydown", handleKey);
    globalThis.addEventListener("open-quick-access", handleOpen);
    return () => {
      globalThis.removeEventListener("keydown", handleKey);
      globalThis.removeEventListener("open-quick-access", handleOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const sections: Result[] = NAV_ITEMS.map((item, i) => ({
    label: t(NAV_KEYS[i]),
    href: item.href,
    type: "section",
    IconComponent: NAV_ICONS[i],
  }));

  const filtered: Result[] = query.trim()
    ? [
        ...sections.filter((r) =>
          r.label.toLowerCase().includes(query.toLowerCase()),
        ),
        ...TEMPLATES.filter(
          (tmpl) =>
            tmpl.title.toLowerCase().includes(query.toLowerCase()) ||
            tmpl.category.toLowerCase().includes(query.toLowerCase()),
        ).map((tmpl) => ({
          label: tmpl.title,
          href: "#templates",
          type: "template" as const,
          IconComponent: StyleIcon,
        })),
      ].slice(0, 8)
    : sections;

  const handleSelect = (href: string) => {
    setOpen(false);
    setTimeout(
      () =>
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }),
      150,
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    }
    if (e.key === "Enter" && filtered[activeIndex])
      handleSelect(filtered[activeIndex].href);
  };

  if (!open) return null;

  return (
    <button
      className="fixed inset-0 z-[9999] flex items-start justify-center pt-[12vh] px-4"
      style={{
        backgroundColor: "rgba(0,0,0,0.45)",
        backdropFilter: "blur(6px)",
        border: "none",
        cursor: "default",
      }}
      onClick={() => setOpen(false)}
      onKeyDown={handleKeyDown}
      aria-label="Đóng"
    >
      <div
        role="dialog"
        aria-modal="true"
        className="w-full max-w-lg bg-white rounded-2xl overflow-hidden shadow-2xl"
        style={{
          boxShadow: "0 32px 80px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.06)",
          animation: "slideDown 0.18s ease-out",
        }}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="px-4 pt-3 pb-1 border-b border-gray-100">
          <TextField
            inputRef={inputRef}
            fullWidth
            variant="outlined"
            size="small"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm trang, mẫu thiệp..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#B86848", fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
                backgroundColor: "#FAFAF8",
                "& fieldset": { borderColor: "#E0D8CC" },
                "&:hover fieldset": { borderColor: "#B86848" },
                "&.Mui-focused fieldset": { borderColor: "#B86848", borderWidth: 1.5 },
              },
              "& input": { fontSize: 14, color: "#1a1a1a" },
            }}
          />
        </div>

        {/* Results */}
        <div className="overflow-y-auto" style={{ maxHeight: 360 }}>
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center py-10 text-gray-400">
              <SearchIcon sx={{ fontSize: 36, mb: 1, opacity: 0.25 }} />
              <p className="text-sm">Không tìm thấy kết quả</p>
            </div>
          ) : (
            <div className="py-1.5">
              {!query && (
                <p className="px-4 pt-1 pb-1.5 text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
                  Điều hướng nhanh
                </p>
              )}
              {filtered.map((r, i) => {
                const Icon = r.IconComponent ?? StyleIcon;
                const isActive = i === activeIndex;
                return (
                  <button
                    key={`${r.type}-${r.href}-${r.label}`}
                    onClick={() => handleSelect(r.href)}
                    onMouseEnter={() => setActiveIndex(i)}
                    style={{
                      display: "flex",
                      width: "100%",
                      alignItems: "center",
                      gap: 12,
                      padding: "10px 16px",
                      cursor: "pointer",
                      border: "none",
                      textAlign: "left",
                      background: isActive ? "#FBF7F4" : "transparent",
                      borderLeft: isActive
                        ? "3px solid #B86848"
                        : "3px solid transparent",
                      transition: "all 0.1s",
                    }}
                  >
                    {/* Icon badge */}
                    <span
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        background:
                          r.type === "section" ? "#F2EDE5" : "#FBF7EE",
                        color: r.type === "section" ? "#B86848" : "#CFA040",
                      }}
                    >
                      <Icon sx={{ fontSize: 17 }} />
                    </span>

                    {/* Label */}
                    <span style={{ flex: 1, minWidth: 0 }}>
                      <span
                        style={{
                          display: "block",
                          fontSize: 14,
                          fontWeight: 600,
                          color: "#1a1a1a",
                        }}
                      >
                        {r.label}
                      </span>
                      <span
                        style={{
                          display: "block",
                          fontSize: 12,
                          color: "#9ca3af",
                          marginTop: 1,
                        }}
                      >
                        {r.type === "section" ? "Mục trang" : "Mẫu thiệp"}
                      </span>
                    </span>

                    {/* Enter hint */}
                    {isActive && (
                      <kbd
                        style={{
                          fontSize: 11,
                          color: "#b0b0b0",
                          border: "1px solid #e5e7eb",
                          borderRadius: 6,
                          padding: "2px 6px",
                          fontFamily: "monospace",
                          background: "#f9fafb",
                          flexShrink: 0,
                        }}
                      >
                        ↵
                      </kbd>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "10px 16px",
            borderTop: "1px solid #f3f4f6",
            background: "#fafafa",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <FavoriteIcon sx={{ fontSize: 10, color: "#B86848" }} />
            <span style={{ fontSize: 11, color: "#b0b0b0" }}>
              WeddingCard · Ctrl+Q
            </span>
          </div>
          <div
            style={{ display: "flex", gap: 10, fontSize: 11, color: "#c0c0c0" }}
          >
            {(["↑↓:chọn", "↵:mở", "ESC:đóng"] as const).map((hint) => {
              const [key, label] = hint.split(":");
              return (
                <span key={key}>
                  <kbd
                    style={{
                      border: "1px solid #e5e7eb",
                      borderRadius: 4,
                      padding: "1px 5px",
                      fontFamily: "monospace",
                      background: "#fff",
                      color: "#888",
                      marginRight: 3,
                    }}
                  >
                    {key}
                  </kbd>
                  {label}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`@keyframes slideDown { from { opacity:0; transform:translateY(-12px) } to { opacity:1; transform:translateY(0) } }`}</style>
    </button>
  );
}
