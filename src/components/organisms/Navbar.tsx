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
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import { NAV_ITEMS } from "@/constants";
import CTAButton from "@/components/atoms/CTAButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

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

          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-rose-500 bg-transparent border-none cursor-pointer ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <CTAButton size="small" onClick={() => handleNavClick("#contact")}>
              Tạo thiệp ngay
            </CTAButton>
          </nav>

          <IconButton
            className="md:hidden"
            onClick={() => setDrawerOpen(true)}
            sx={{ color: scrolled ? "#2D2D2D" : "#FFFFFF" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 280 } }}
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
          {NAV_ITEMS.map((item) => (
            <ListItem key={item.href} disablePadding>
              <ListItemButton onClick={() => handleNavClick(item.href)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <div className="p-4">
          <CTAButton fullWidth onClick={() => handleNavClick("#contact")}>
            Tạo thiệp ngay
          </CTAButton>
        </div>
      </Drawer>
    </>
  );
}
