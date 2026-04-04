"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "ornament" | "line" | "heart";
  className?: string;
}

export default function SectionDivider({ variant = "ornament", className = "" }: SectionDividerProps) {
  if (variant === "line") {
    return (
      <div className={`flex items-center justify-center py-8 ${className}`}>
        <motion.div
          className="h-[1px] w-24"
          style={{ background: "linear-gradient(90deg, transparent, #6B9E85, transparent)" }}
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 96, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </div>
    );
  }

  if (variant === "heart") {
    return (
      <div className={`flex items-center justify-center gap-4 py-8 ${className}`}>
        <div className="h-[1px] w-16" style={{ background: "linear-gradient(90deg, transparent, #6B9E8580)" }} />
        <motion.svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <path
            d="M10 18L8.55 16.68C3.4 12 0 8.92 0 5.1C0 2.02 2.42 0 5.3 0C6.94 0 8.51 0.78 10 2.18C11.49 0.78 13.06 0 14.7 0C17.58 0 20 2.02 20 5.1C20 8.92 16.6 12 11.45 16.68L10 18Z"
            fill="#C9A96E"
            fillOpacity="0.5"
          />
        </motion.svg>
        <div className="h-[1px] w-16" style={{ background: "linear-gradient(90deg, #6B9E8580, transparent)" }} />
      </div>
    );
  }

  // ornament variant
  return (
    <div className={`flex items-center justify-center gap-3 py-10 ${className}`}>
      <div className="h-[1px] w-12" style={{ background: "linear-gradient(90deg, transparent, #6B9E8560)" }} />
      <motion.svg
        width="32"
        height="16"
        viewBox="0 0 32 16"
        fill="none"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <path
          d="M16 0C12 0 8 4 8 8C8 4 4 0 0 0C4 4 0 12 0 16C4 16 12 12 16 8C20 12 28 16 32 16C32 12 28 4 32 0C28 0 24 4 24 8C24 4 20 0 16 0Z"
          fill="#6B9E85"
          fillOpacity="0.35"
        />
      </motion.svg>
      <div className="h-[1px] w-12" style={{ background: "linear-gradient(90deg, #6B9E8560, transparent)" }} />
    </div>
  );
}
