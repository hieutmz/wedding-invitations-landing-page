"use client";

import { motion } from "framer-motion";

export default function EndingSection() {
  return (
    <section className="invitation-section relative overflow-hidden px-2 py-20 sm:px-6 sm:py-32">
      {/* Floating decorative elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${5 + i * 12}%`,
            top: `${10 + (i % 4) * 22}%`,
            width: 3 + (i % 3) * 2,
            height: 3 + (i % 3) * 2,
            borderRadius: "50%",
            background: `rgba(107, 158, 133, ${0.1 + (i % 3) * 0.1})`,
          }}
          animate={{
            y: [0, -15 - i * 3, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        {/* Heart */}
        <motion.div
          className="mb-6"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <svg
            width="48"
            height="44"
            viewBox="0 0 48 44"
            fill="none"
            className="mx-auto animate-heartbeat"
          >
            <path
              d="M24 44L20.52 40.83C8.16 29.4 0 21.78 0 12.45C0 4.83 5.808 0 12.72 0C16.656 0 20.424 1.87 24 5.23C27.576 1.87 31.344 0 35.28 0C42.192 0 48 4.83 48 12.45C48 21.78 39.84 29.4 27.48 40.83L24 44Z"
              fill="#C9A96E"
              fillOpacity="0.5"
            />
          </svg>
        </motion.div>

        <motion.h2
          className="font-script text-3xl sm:text-4xl md:text-5xl"
          style={{ color: "#6B9E85" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Cảm ơn bạn!
        </motion.h2>

        <motion.div
          className="mx-auto my-6 h-[1px] w-20"
          style={{ background: "linear-gradient(90deg, transparent, #6B9E85, transparent)" }}
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />

        <motion.p
          className="mx-auto max-w-md text-base leading-relaxed sm:text-lg"
          style={{ color: "#465B52" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Sự hiện diện của bạn là món quà lớn nhất dành cho chúng mình.
          Xin chân thành cảm ơn và hẹn gặp bạn trong ngày vui!
        </motion.p>

        <motion.p
          className="font-script mt-8 text-2xl sm:text-3xl"
          style={{ color: "#5A8A73" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          With love,
        </motion.p>

        <motion.p
          className="font-script mt-2 text-3xl sm:text-4xl"
          style={{ color: "#2C3E36" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Hiếu & Hiền
        </motion.p>

        {/* Footer line */}
        <motion.div
          className="mt-16 text-xs tracking-wider"
          style={{ color: "#A3B5AE" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p>#HieuHienWedding</p>
          <p className="mt-1">15.06.2026</p>
        </motion.div>
      </div>
    </section>
  );
}
