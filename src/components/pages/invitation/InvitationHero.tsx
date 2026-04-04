"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface InvitationHeroProps {
  onOpen: () => void;
}

export default function InvitationHero({ onOpen }: InvitationHeroProps) {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
          alt="Wedding background"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0.6) 100%)",
          }}
        />
      </div>

      {/* Floating decorative elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 6 + i * 4,
            height: 6 + i * 4,
            background: `radial-gradient(circle, rgba(107,158,133,${0.15 + i * 0.05}), transparent)`,
            left: `${10 + i * 18}%`,
            top: `${15 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -30 - i * 5, 0],
            x: [0, 10 - i * 4, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Save the date label */}
        <motion.p
          className="mb-4 text-xs tracking-[0.35em] uppercase sm:text-sm"
          style={{ color: "#5A8A73" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Save the date
        </motion.p>

        {/* Decorative line */}
        <motion.div
          className="mb-6 h-[1px] w-20"
          style={{ background: "linear-gradient(90deg, transparent, #6B9E85, transparent)" }}
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        {/* Couple names */}
        <motion.h1
          className="font-script leading-tight"
          style={{ color: "#2C3E36", fontSize: "clamp(3rem, 10vw, 6rem)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Minh Hiếu
        </motion.h1>

        <motion.div
          className="my-2 flex items-center gap-3"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="h-[1px] w-8" style={{ background: "#6B9E8580" }} />
          <span className="font-script text-2xl" style={{ color: "#6B9E85" }}>
            &
          </span>
          <div className="h-[1px] w-8" style={{ background: "#6B9E8580" }} />
        </motion.div>

        <motion.h1
          className="font-script leading-tight"
          style={{ color: "#2C3E36", fontSize: "clamp(3rem, 10vw, 6rem)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Thùy Hiền
        </motion.h1>

        {/* Wedding date */}
        <motion.div
          className="mt-6 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="h-[1px] w-10" style={{ background: "#6B9E8560" }} />
          <p className="font-display text-base tracking-[0.2em] sm:text-lg" style={{ color: "#698177" }}>
            15 . 06 . 2026
          </p>
          <div className="h-[1px] w-10" style={{ background: "#6B9E8560" }} />
        </motion.div>

        {/* Open invitation button */}
        <motion.button
          className="group mt-10 flex flex-col items-center gap-2"
          onClick={onOpen}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span
            className="rounded-full px-8 py-3 text-sm font-medium tracking-wider text-white shadow-lg transition-all duration-300 group-hover:shadow-xl sm:px-10 sm:py-3.5 sm:text-base"
            style={{
              background: "linear-gradient(135deg, #6B9E85, #5A8A73)",
              boxShadow: "0 4px 24px rgba(107, 158, 133, 0.35)",
            }}
          >
            Mở Thiệp
          </span>
          <motion.svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path d="M8 2L8 14M8 14L2 8M8 14L14 8" stroke="#6B9E85" strokeWidth="1.5" strokeLinecap="round" />
          </motion.svg>
        </motion.button>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{ background: "linear-gradient(to top, #ffffff, transparent)" }}
      />
    </section>
  );
}
