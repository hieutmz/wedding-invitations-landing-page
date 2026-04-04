"use client";

import { motion } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";

const WEDDING_DATE = "2026-06-15T10:00:00+07:00";

interface TimeBoxProps {
  value: number;
  label: string;
  delay?: number;
}

function TimeBox({ value, label, delay = 0 }: TimeBoxProps) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-xl sm:h-20 sm:w-20 md:h-24 md:w-24"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.97))",
          border: "1px solid rgba(107, 158, 133, 0.2)",
          boxShadow: "0 4px 20px rgba(107, 158, 133, 0.1)",
        }}
      >
        <span
          className="font-display text-2xl tabular-nums sm:text-3xl md:text-4xl"
          style={{ color: "#6B9E85" }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-2 text-xs tracking-wider uppercase sm:text-sm" style={{ color: "#7D918A" }}>
        {label}
      </span>
    </motion.div>
  );
}

export default function CountdownSection() {
  const timeLeft = useCountdown(WEDDING_DATE);

  return (
    <section className="invitation-section px-2 py-16 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-xs tracking-[0.3em] uppercase" style={{ color: "#5A8A73" }}>
            Đếm ngược
          </p>
          <h2 className="font-display text-3xl sm:text-4xl" style={{ color: "#2C3E36" }}>
            Đến Ngày Trọng Đại
          </h2>
        </motion.div>

        <motion.div
          className="mx-auto my-8 h-[1px] w-16"
          style={{ background: "linear-gradient(90deg, transparent, #6B9E85, transparent)" }}
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8">
          <TimeBox value={timeLeft.days} label="Ngày" delay={0.1} />
          <motion.span
            className="font-script mt-[-12px] text-lg sm:mt-[-16px] sm:text-xl md:mt-[-20px] md:text-2xl"
            style={{ color: "#6B9E85" }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            :
          </motion.span>
          <TimeBox value={timeLeft.hours} label="Giờ" delay={0.2} />
          <motion.span
            className="font-script mt-[-12px] text-lg sm:mt-[-16px] sm:text-xl md:mt-[-20px] md:text-2xl"
            style={{ color: "#6B9E85" }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
          >
            :
          </motion.span>
          <TimeBox value={timeLeft.minutes} label="Phút" delay={0.3} />
          <motion.span
            className="font-script mt-[-12px] text-lg sm:mt-[-16px] sm:text-xl md:mt-[-20px] md:text-2xl"
            style={{ color: "#6B9E85" }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
          >
            :
          </motion.span>
          <TimeBox value={timeLeft.seconds} label="Giây" delay={0.4} />
        </div>

        <motion.p
          className="mt-8 text-sm sm:text-base"
          style={{ color: "#7D918A" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          15 Tháng 6, 2026 — Chủ Nhật
        </motion.p>
      </div>
    </section>
  );
}
