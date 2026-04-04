"use client";

import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapsUrl: string;
  delay?: number;
}

function EventCard({ title, date, time, venue, address, mapsUrl, delay = 0 }: EventCardProps) {
  return (
    <motion.div
      className="flex-1 rounded-2xl p-5 text-center sm:p-8 md:p-10"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.97))",
        border: "1px solid rgba(107, 158, 133, 0.2)",
        boxShadow: "0 8px 32px rgba(107, 158, 133, 0.1)",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(107, 158, 133, 0.15)" }}
    >
      {/* Icon */}
      <div
        className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full sm:mb-5 sm:h-16 sm:w-16"
        style={{ background: "linear-gradient(135deg, rgba(107,158,133,0.15), rgba(107,158,133,0.05))" }}
      >
        <span className="text-2xl">{title === "Lễ Cưới" ? "💒" : "🥂"}</span>
      </div>

      <h3 className="font-display mb-4 text-xl sm:text-2xl" style={{ color: "#2C3E36" }}>
        {title}
      </h3>

      <div className="mb-4 space-y-2">
        <div className="flex items-center justify-center gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="#6B9E85">
            <path d="M12.667 2.667H3.333C2.597 2.667 2 3.264 2 4v8c0 .736.597 1.333 1.333 1.333h9.334C13.403 13.333 14 12.736 14 12V4c0-.736-.597-1.333-1.333-1.333zM12.667 12H3.333V6h9.334v6zM12.667 4.667H3.333V4h9.334v.667z" />
          </svg>
          <span className="text-sm sm:text-base" style={{ color: "#465B52" }}>
            {date}
          </span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="#6B9E85">
            <path d="M8 1.333A6.674 6.674 0 001.333 8 6.674 6.674 0 008 14.667 6.674 6.674 0 0014.667 8 6.674 6.674 0 008 1.333zM8 13.333A5.34 5.34 0 012.667 8 5.34 5.34 0 018 2.667 5.34 5.34 0 0113.333 8 5.34 5.34 0 018 13.333zm.333-8.666H7.333v4l3.5 2.1.5-.82-3-1.78V4.667z" />
          </svg>
          <span className="text-sm sm:text-base" style={{ color: "#465B52" }}>
            {time}
          </span>
        </div>
      </div>

      <div className="mb-6">
        <p className="font-display text-base sm:text-lg" style={{ color: "#2C3E36" }}>
          {venue}
        </p>
        <p className="mt-1 text-xs sm:text-sm" style={{ color: "#7D918A" }}>
          {address}
        </p>
      </div>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:shadow-lg"
        style={{
          background: "linear-gradient(135deg, #6B9E85, #5A8A73)",
          boxShadow: "0 2px 12px rgba(107, 158, 133, 0.25)",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 1.333C5.42 1.333 3.333 3.42 3.333 6c0 3.5 4.667 8.667 4.667 8.667s4.667-5.167 4.667-8.667c0-2.58-2.087-4.667-4.667-4.667zm0 6.334A1.667 1.667 0 118 4a1.667 1.667 0 010 3.667z" />
        </svg>
        Xem bản đồ
      </a>
    </motion.div>
  );
}

export default function EventSection() {
  return (
    <section className="invitation-section px-2 py-16 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-xs tracking-[0.3em] uppercase" style={{ color: "#5A8A73" }}>
            Wedding ceremony
          </p>
          <h2 className="font-display text-3xl sm:text-4xl" style={{ color: "#2C3E36" }}>
            Thông Tin Hôn Lễ
          </h2>
          <SectionDivider variant="ornament" />
        </motion.div>

        <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
          <EventCard
            title="Lễ Cưới"
            date="Chủ Nhật, 15 Tháng 6, 2026"
            time="10:00 – 11:30 Sáng"
            venue="Nhà thờ Đức Bà"
            address="01 Công xã Paris, Bến Nghé, Quận 1, TP.HCM"
            mapsUrl="https://maps.google.com/?q=Nhà+thờ+Đức+Bà+Sài+Gòn"
            delay={0}
          />
          <EventCard
            title="Tiệc Cưới"
            date="Chủ Nhật, 15 Tháng 6, 2026"
            time="17:30 – 21:00 Tối"
            venue="Capella Parkview"
            address="3 Công trường Mê Linh, Bến Nghé, Quận 1, TP.HCM"
            mapsUrl="https://maps.google.com/?q=Capella+Parkview"
            delay={0.15}
          />
        </div>
      </div>
    </section>
  );
}
