"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionDivider from "./SectionDivider";

export default function RSVPSection() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<"yes" | "no" | "">("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !attending) return;
    // In a real app, this would send to an API
    setSubmitted(true);
  };

  return (
    <section className="invitation-section px-2 py-16 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-lg">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-xs tracking-[0.3em] uppercase" style={{ color: "#5A8A73" }}>
            RSVP
          </p>
          <h2 className="font-display text-3xl sm:text-4xl" style={{ color: "#2C3E36" }}>
            Xác Nhận Tham Dự
          </h2>
          <SectionDivider variant="line" />
          <p className="text-sm sm:text-base" style={{ color: "#567064" }}>
            Xin vui lòng xác nhận sự tham dự của bạn trước ngày 01/06/2026
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              className="rounded-2xl p-8 sm:p-10"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.97))",
                border: "1px solid rgba(107, 158, 133, 0.2)",
                boxShadow: "0 8px 32px rgba(107, 158, 133, 0.1)",
              }}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Name field */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-medium" style={{ color: "#465B52" }}>
                  Họ và tên
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nhập họ và tên..."
                  required
                  className="w-full rounded-xl border bg-white/60 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:ring-2"
                  style={{
                    borderColor: "rgba(107, 158, 133, 0.2)",
                    color: "#2C3E36",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#6B9E85")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(107, 158, 133, 0.2)")}
                />
              </div>

              {/* Attendance */}
              <div className="mb-6">
                <label className="mb-3 block text-sm font-medium" style={{ color: "#465B52" }}>
                  Bạn có tham dự được không?
                </label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setAttending("yes")}
                    className="flex-1 rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-300"
                    style={{
                      borderColor: attending === "yes" ? "#6B9E85" : "rgba(107, 158, 133, 0.2)",
                      background: attending === "yes" ? "linear-gradient(135deg, #6B9E85, #5A8A73)" : "white",
                      color: attending === "yes" ? "white" : "#465B52",
                      boxShadow: attending === "yes" ? "0 2px 12px rgba(107, 158, 133, 0.3)" : "none",
                    }}
                  >
                    Sẽ tham dự
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttending("no")}
                    className="flex-1 rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-300"
                    style={{
                      borderColor: attending === "no" ? "#7D918A" : "rgba(107, 158, 133, 0.2)",
                      background: attending === "no" ? "#7D918A" : "white",
                      color: attending === "no" ? "white" : "#465B52",
                    }}
                  >
                    Không tham dự
                  </button>
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="mb-2 block text-sm font-medium" style={{ color: "#465B52" }}>
                  Lời nhắn <span style={{ color: "#5A8A73" }}>(không bắt buộc)</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Gửi lời chúc đến cô dâu chú rể..."
                  rows={3}
                  className="w-full resize-none rounded-xl border bg-white/60 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-gray-400"
                  style={{
                    borderColor: "rgba(107, 158, 133, 0.2)",
                    color: "#2C3E36",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#6B9E85")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(107, 158, 133, 0.2)")}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                className="w-full rounded-xl py-3.5 text-sm font-medium tracking-wider text-white transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #6B9E85, #5A8A73)",
                  boxShadow: "0 4px 20px rgba(107, 158, 133, 0.3)",
                }}
                whileHover={{ scale: 1.02, boxShadow: "0 6px 24px rgba(107, 158, 133, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                Gửi xác nhận
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              className="rounded-2xl p-10 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.97))",
                border: "1px solid rgba(107, 158, 133, 0.2)",
                boxShadow: "0 8px 32px rgba(107, 158, 133, 0.1)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <motion.div
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                style={{ background: "linear-gradient(135deg, #6B9E8520, #6B9E8510)" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="#6B9E85">
                  <path d="M16 2.667C8.636 2.667 2.667 8.636 2.667 16S8.636 29.333 16 29.333 29.333 23.364 29.333 16 23.364 2.667 16 2.667zm-2.667 20L8 17.333l1.88-1.88 3.453 3.44 7.787-7.786 1.88 1.893-9.667 9.667z" />
                </svg>
              </motion.div>
              <h3 className="font-display mb-2 text-xl" style={{ color: "#2C3E36" }}>
                Cảm ơn bạn!
              </h3>
              <p className="text-sm" style={{ color: "#567064" }}>
                {attending === "yes"
                  ? "Chúng mình rất vui khi biết bạn sẽ đến. Hẹn gặp bạn vào ngày 15/06/2026!"
                  : "Cảm ơn bạn đã phản hồi. Chúng mình rất tiếc khi bạn không thể đến."}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
