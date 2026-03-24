"use client";

import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#B86848] text-white flex items-center justify-center shadow-lg hover:bg-[#9A5030] transition-all duration-200 cursor-pointer border-none"
      aria-label="Scroll to top"
    >
      <KeyboardArrowUpIcon />
    </button>
  );
}
