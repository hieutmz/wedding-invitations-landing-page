"use client";

import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isVisible: boolean;
}

export default function LoadingScreen({ isVisible }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #ffffff 0%, #f2f8f5 100%)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Decorative floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 4 + i * 2,
                height: 4 + i * 2,
                background: "radial-gradient(circle, #6B9E8540, transparent)",
                left: `${15 + i * 14}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}

          <div className="flex flex-col items-center">
            {/* Heart icon */}
            <motion.div
              className="mb-6"
              animate={{ scale: [1, 1.15, 1, 1.15, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg width="40" height="36" viewBox="0 0 40 36" fill="none">
                <path
                  d="M20 36L17.1 33.36C6.8 24 0 17.84 0 10.2C0 4.04 4.84 0 10.6 0C13.88 0 17.02 1.56 20 4.36C22.98 1.56 26.12 0 29.4 0C35.16 0 40 4.04 40 10.2C40 17.84 33.2 24 22.9 33.36L20 36Z"
                  fill="#C9A96E"
                  fillOpacity="0.7"
                />
              </svg>
            </motion.div>

            {/* Couple initials */}
            <motion.div
              className="font-script text-4xl tracking-wide"
              style={{ color: "#6B9E85" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              H & H
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="mt-6 h-[1px] rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, #6B9E85, transparent)" }}
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />

            <motion.p
              className="mt-4 text-xs tracking-[0.25em] uppercase"
              style={{ color: "#5A8A73" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Đang mở thiệp...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
