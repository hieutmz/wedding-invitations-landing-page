"use client";

import { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import ChatIcon from "@mui/icons-material/Chat";

const CONTACTS = [
  {
    label: "Điện thoại",
    href: "tel:+84900000000",
    icon: <PhoneIcon sx={{ fontSize: 20 }} />,
    bg: "#25D366",
  },
  {
    label: "Zalo",
    href: "https://zalo.me/0900000000",
    icon: (
      <svg viewBox="0 0 48 48" fill="white" width="20" height="20">
        <path d="M24 4C12.95 4 4 12.95 4 24c0 3.6.96 6.98 2.64 9.9L4 44l10.38-2.6A19.9 19.9 0 0 0 24 44c11.05 0 20-8.95 20-20S35.05 4 24 4zm0 36c-3.1 0-6-.8-8.5-2.2l-.6-.36-6.16 1.54 1.56-5.98-.4-.62A15.94 15.94 0 0 1 8 24c0-8.82 7.18-16 16-16s16 7.18 16 16-7.18 16-16 16zm8.8-11.8c-.48-.24-2.84-1.4-3.28-1.56-.44-.16-.76-.24-1.08.24-.32.48-1.24 1.56-1.52 1.88-.28.32-.56.36-1.04.12-.48-.24-2.02-.74-3.86-2.36-1.42-1.26-2.38-2.82-2.66-3.3-.28-.48-.02-.74.22-.98.2-.2.48-.52.72-.78.24-.26.32-.44.48-.74.16-.3.08-.56-.04-.8-.12-.24-1.08-2.6-1.48-3.56-.38-.92-.78-.8-1.08-.82h-.92c-.32 0-.84.12-1.28.56-.44.44-1.68 1.64-1.68 4s1.72 4.64 1.96 4.96c.24.32 3.38 5.16 8.2 7.24 1.14.5 2.04.8 2.74 1.02 1.15.36 2.2.31 3.02.19.92-.14 2.84-1.16 3.24-2.28.4-1.12.4-2.08.28-2.28-.12-.2-.44-.32-.92-.56z" />
      </svg>
    ),
    bg: "#0068FF",
  },
  {
    label: "Messenger",
    href: "https://m.me/yourpage",
    icon: (
      <svg viewBox="0 0 48 48" fill="white" width="20" height="20">
        <path d="M24 4C12.95 4 4 12.4 4 22.8c0 6.04 3.02 11.42 7.74 14.94V44l7.08-3.9c1.88.52 3.88.8 5.98.8 11.05 0 20-8.4 20-18.8S35.05 4 24 4zm2 25.32-5.1-5.44-9.96 5.44 10.96-11.64 5.22 5.44 9.84-5.44L26 29.32z" />
      </svg>
    ),
    bg: "#0099FF",
  },
];

export default function FloatingContact() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed bottom-24 right-6 z-50 flex flex-col-reverse items-center gap-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Sub buttons */}
      {CONTACTS.map((c, i) => (
        <a
          key={c.label}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={c.label}
          title={c.label}
          className="w-11 h-11 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300"
          style={{
            backgroundColor: c.bg,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0) scale(1)" : `translateY(${(i + 1) * 12}px) scale(0.7)`,
            transitionDelay: hovered ? `${i * 60}ms` : "0ms",
            pointerEvents: hovered ? "auto" : "none",
          }}
        >
          {c.icon}
        </a>
      ))}

      {/* Main button */}
      <button
        className="w-13 h-13 rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer border-none transition-transform duration-200 hover:scale-110"
        style={{
          width: 52,
          height: 52,
          background: "linear-gradient(135deg, #B86848 0%, #9A5030 100%)",
          boxShadow: "0 4px 15px rgba(184,104,72,0.4)",
        }}
        aria-label="Liên hệ"
      >
        <ChatIcon sx={{ fontSize: 24 }} />
      </button>
    </div>
  );
}
