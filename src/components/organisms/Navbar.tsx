"use client";

import { useState, useEffect, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";
import { NAV_ITEMS, TEMPLATES } from "@/constants";
import { useTranslation } from "@/lib/LocaleContext";
import { LOCALES } from "@/lib/i18n";
import CTAButton from "@/components/atoms/CTAButton";
import LanguageSwitcher from "@/components/atoms/LanguageSwitcher";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import { useThemeMode } from "@/lib/ThemeContext";

const NAV_KEYS = [
  "nav.home",
  "nav.templates",
  "nav.pricing",
  "nav.contact",
];

interface SearchResult {
  label: string;
  href: string;
  type: "section" | "template";
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const { t, locale, setLocale } = useTranslation();
  const { resolvedMode } = useThemeMode();
  const isDark = resolvedMode === "dark";
  const navBgScrolled = isDark ? "rgba(28, 25, 23, 0.97)" : "rgba(253, 252, 250, 0.95)";
  const navBgDefault = isDark ? "rgba(38, 33, 30, 0.75)" : "rgba(236, 232, 223, 0.7)";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) setTimeout(() => inputRef.current?.focus(), 50);
    else { setQuery(""); setResults([]); }
  }, [searchOpen]);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) { setResults([]); return; }
    const secs: SearchResult[] = NAV_ITEMS.map((item, i) => ({
      label: t(NAV_KEYS[i]), href: item.href, type: "section" as const,
    })).filter((r) => r.label.toLowerCase().includes(q));
    const tmpls: SearchResult[] = TEMPLATES.filter(
      (tmpl) => tmpl.title.toLowerCase().includes(q) || tmpl.category.toLowerCase().includes(q)
    ).map((tmpl) => ({ label: tmpl.title, href: "#templates", type: "template" as const }));
    setResults([...secs, ...tmpls].slice(0, 6));
  }, [query, t]);

  const handleNavClick = (href: string) => {
    setDrawerOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSelect = (href: string) => {
    setSearchOpen(false);
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          background: scrolled ? navBgScrolled : navBgDefault,
          backdropFilter: "blur(10px)",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar className="max-w-7xl w-full mx-auto px-4 md:px-8">

          {/* ── Search mode (full-width, replaces nav) ── */}
          {searchOpen ? (
            <>
              <div className="relative flex-1 mx-2">
                <TextField
                  inputRef={inputRef}
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setSearchOpen(false);
                    if (e.key === "Enter" && results[0]) handleSelect(results[0].href);
                  }}
                  placeholder="Tìm kiếm trang, mẫu thiệp..."
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: "#B86848", fontSize: 18 }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      backgroundColor: "rgba(255,255,255,0.7)",
                      "& fieldset": { borderColor: "#E0D8CC" },
                      "&:hover fieldset": { borderColor: "#B86848" },
                      "&.Mui-focused fieldset": { borderColor: "#B86848", borderWidth: 1.5 },
                    },
                    "& input": { fontSize: 14, color: "#1a1a1a" },
                  }}
                />
                {/* Dropdown results */}
                {results.length > 0 && (
                  <div className="absolute top-full left-0 mt-3 w-full min-w-[280px] bg-white rounded-xl shadow-xl border border-[#E0D8CC] overflow-hidden z-50">
                    {results.map((r) => (
                      <button
                        key={`${r.type}-${r.href}-${r.label}`}
                        onClick={() => handleSelect(r.href)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-[#F7F2EC] transition-colors cursor-pointer bg-transparent border-none text-left"
                      >
                        <span className={`text-xs px-2 py-0.5 rounded-md font-semibold ${r.type === "section" ? "bg-[#F2EDE5] text-[#B86848]" : "bg-[#FBF7EE] text-[#CFA040]"}`}>
                          {r.type === "section" ? "Mục" : "Mẫu"}
                        </span>
                        <span className="text-gray-700 font-medium">{r.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <IconButton onClick={() => setSearchOpen(false)} sx={{ color: "#6B6B6B" }} size="small">
                <CloseIcon fontSize="small" />
              </IconButton>
            </>
          ) : (
            <>
              {/* Logo */}
              <button
                className="flex items-center gap-2 cursor-pointer flex-shrink-0 bg-transparent border-none"
                onClick={() => handleNavClick("#hero")}
              >
                <FavoriteIcon sx={{ color: "#B86848", fontSize: 28 }} />
                <Typography variant="h6" className="font-heading font-bold text-rose-500">
                  WeddingCard
                </Typography>
              </button>

              <div className="flex-1" />

              {/* Desktop nav */}
              <nav className="hidden lg:flex items-center gap-5">
                <IconButton onClick={() => setSearchOpen(true)} sx={{ color: "#6B6B6B" }} size="small" title="Tìm kiếm">
                  <SearchIcon />
                </IconButton>
                {NAV_ITEMS.map((item, index) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm font-medium transition-colors duration-200 hover:text-rose-500 bg-transparent border-none cursor-pointer text-gray-700"
                  >
                    {t(NAV_KEYS[index])}
                  </button>
                ))}
                <ThemeToggle />
                <LanguageSwitcher />
                <CTAButton size="small" onClick={() => handleNavClick("#contact")}>
                  {t("nav.cta")}
                </CTAButton>
              </nav>

              {/* Mobile row */}
              <div className="flex items-center justify-between gap-1 lg:hidden">
                <IconButton onClick={() => setSearchOpen(true)} sx={{ color: "#6B6B6B" }} size="small">
                  <SearchIcon />
                </IconButton>
                <ThemeToggle />
                <LanguageSwitcher />
                <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: isDark ? "#F5EDE5" : "#2D2D2D" }}>
                  <MenuIcon />
                </IconButton>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 300 } }}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <Typography variant="h6" className="font-heading font-bold text-rose-500">
            WeddingCard
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </div>
        <List>
          {NAV_ITEMS.map((item, index) => (
            <ListItem key={item.href} disablePadding>
              <ListItemButton onClick={() => handleNavClick(item.href)}>
                <ListItemText primary={t(NAV_KEYS[index])} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ my: 1 }} />

        <div className="px-4 py-2">
          <Typography variant="caption" className="text-gray-500 uppercase tracking-wider font-semibold mb-2 block">
            Giao diện
          </Typography>
          <ThemeToggle />
        </div>

        <Divider sx={{ my: 1 }} />

        <div className="px-4 py-2">
          <Typography variant="caption" className="text-gray-500 uppercase tracking-wider font-semibold mb-2 block">
            Ngôn ngữ
          </Typography>
          <div className="flex gap-2">
            {LOCALES.map((loc) => (
              <button
                key={loc.code}
                onClick={() => { setLocale(loc.code); setDrawerOpen(false); }}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border text-sm font-medium transition-all cursor-pointer ${
                  locale === loc.code
                    ? "border-rose-400 bg-rose-50 text-rose-600"
                    : "border-gray-200 bg-white text-gray-600 hover:border-rose-300"
                }`}
              >
                <span>{loc.flag}</span>
                <span>{loc.code.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 mt-auto">
          <CTAButton fullWidth onClick={() => handleNavClick("#contact")}>
            {t("nav.cta")}
          </CTAButton>
        </div>
      </Drawer>
    </>
  );
}
