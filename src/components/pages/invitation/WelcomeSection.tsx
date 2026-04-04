"use client";

import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";

interface WelcomeSectionProps {
  guestName?: string;
}

export default function WelcomeSection({ guestName }: WelcomeSectionProps) {
  const displayName = guestName || "Bạn";

  return (
    <section className="invitation-section px-2 py-16 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <motion.p
          className="mb-2 text-xs tracking-[0.3em] uppercase"
          style={{ color: "#5A8A73" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trân trọng kính mời
        </motion.p>

        <SectionDivider variant="line" />

        <motion.h2
          className="font-script text-3xl sm:text-4xl md:text-5xl"
          style={{ color: "#6B9E85" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Thân gửi {displayName}
        </motion.h2>

        <motion.div
          className="mt-8 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-body text-base leading-relaxed sm:text-lg" style={{ color: "#465B52" }}>
            Với tất cả sự trân trọng và yêu thương, chúng mình xin được gửi đến {displayName} tấm thiệp mời này
            như một lời mời chân thành nhất.
          </p>
          <p className="font-body text-base leading-relaxed sm:text-lg" style={{ color: "#465B52" }}>
            Sẽ thật ý nghĩa và trọn vẹn nếu {displayName} có thể đến chung vui cùng chúng mình
            trong ngày trọng đại này.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-10 h-[1px] w-24"
          style={{ background: "linear-gradient(90deg, transparent, #6B9E8560, transparent)" }}
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 96, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        <motion.p
          className="font-script mt-6 text-lg"
          style={{ color: "#5A8A73" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          — Hiếu & Hiền —
        </motion.p>
      </div>
    </section>
  );
}
