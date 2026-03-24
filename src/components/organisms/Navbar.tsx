"use client";

import { useState, useEffect } from "react";
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
import Typography from "@mui/material/Typography";
import { NAV_ITEMS } from "@/constants";
import { useTranslation } from "@/lib/LocaleContext";
import { LOCALES } from "@/lib/i18n";
import CTAButton from "@/components/atoms/CTAButton";
import LanguageSwitcher from "@/components/atoms/LanguageSwitcher";

const NAV_KEYS = [
  "nav.home",
  "nav.loiNgo",
  "nav.story",
  "nav.templates",
  "nav.whyChoose",
  "nav.pricing",
  "nav.contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { t, locale, setLocale } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setDrawerOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          background: scrolled ? "rgba(255, 253, 247, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar className="max-w-7xl w-full mx-auto px-4 md:px-8">
          <div
            className="flex items-center gap-2 cursor-pointer flex-shrink-0"
            onClick={() => handleNavClick("#hero")}
          >
            <FavoriteIcon sx={{ color: "#E8636F", fontSize: 28 }} />
            <Typography
              variant="h6"
              className="font-heading font-bold text-rose-500"
            >
              WeddingCard
            </Typography>
          </div>

          <div className="flex-1" />

          <nav className="hidden lg:flex items-center gap-5">
            {NAV_ITEMS.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-rose-500 bg-transparent border-none cursor-pointer ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {t(NAV_KEYS[index])}
              </button>
            ))}
            <LanguageSwitcher light={!scrolled} />
            <CTAButton size="small" onClick={() => handleNavClick("#contact")}>
              {t("nav.cta")}
            </CTAButton>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher light={!scrolled} />
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ color: scrolled ? "#2D2D2D" : "#FFFFFF" }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

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

        {/* Language selection in drawer */}
        <div className="px-4 py-2">
          <Typography variant="caption" className="text-gray-500 uppercase tracking-wider font-semibold mb-2 block">
            Language
          </Typography>
          <div className="flex gap-2">
            {LOCALES.map((loc) => (
              <button
                key={loc.code}
                onClick={() => {
                  setLocale(loc.code);
                  setDrawerOpen(false);
                }}
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
