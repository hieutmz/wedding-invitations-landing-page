"use client";

import { motion } from "framer-motion";
import SectionDivider from "./SectionDivider";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "Tháng 9, 2020",
    title: "Lần đầu gặp gỡ",
    description:
      "Một buổi chiều thu nắng nhẹ, chúng mình tình cờ gặp nhau tại quán cà phê nhỏ trên phố. Một ánh nhìn, một nụ cười – và câu chuyện của chúng mình bắt đầu từ đó.",
    icon: "☕",
  },
  {
    date: "Tháng 2, 2021",
    title: "Chính thức yêu nhau",
    description:
      "Sau những ngày tháng tìm hiểu, anh đã nói lời yêu dưới ánh đèn lung linh của con phố cổ Hội An. Và em đã gật đầu với đôi mắt ngấn lệ hạnh phúc.",
    icon: "💕",
  },
  {
    date: "Tháng 12, 2024",
    title: "Lời cầu hôn",
    description:
      "Giữa không gian lãng mạn bên bờ biển Đà Nẵng, anh đã quỳ gối và trao chiếc nhẫn. \"Em đồng ý\" – hai chữ ngọt ngào nhất mà anh từng được nghe.",
    icon: "💍",
  },
  {
    date: "15 Tháng 6, 2026",
    title: "Ngày trọng đại",
    description:
      "Và hôm nay, chúng mình sẽ chính thức trở thành gia đình – bên nhau trọn đời. Cảm ơn bạn đã đến chứng kiến khoảnh khắc thiêng liêng này.",
    icon: "👰",
  },
];

export default function StorySection() {
  return (
    <section className="invitation-section px-2 py-16 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl">
        {/* Section heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-xs tracking-[0.3em] uppercase" style={{ color: "#5A8A73" }}>
            Our love story
          </p>
          <h2 className="font-display text-3xl sm:text-4xl" style={{ color: "#2C3E36" }}>
            Chuyện Tình Yêu
          </h2>
          <SectionDivider variant="heart" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div
            className="absolute left-2 top-0 bottom-0 w-[1px] sm:left-1/2 sm:-translate-x-1/2"
            style={{ background: "linear-gradient(to bottom, transparent, #6B9E8540, #6B9E8540, transparent)" }}
          />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`relative mb-10 pl-12 sm:mb-16 sm:w-1/2 sm:pl-0 ${
                index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:ml-auto sm:pl-12 sm:text-left"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-0 top-2 flex h-5 w-5 items-center justify-center rounded-full sm:top-1 ${
                  index % 2 === 0 ? "sm:left-auto sm:-right-2.5" : "sm:-left-2.5"
                }`}
                style={{ background: "linear-gradient(135deg, #6B9E85, #8BB8A4)" }}
              >
                <div className="h-2 w-2 rounded-full bg-white" />
              </div>

              {/* Event card */}
              <div
                className="rounded-xl p-4 sm:rounded-2xl sm:p-8"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.92), rgba(255,255,255,0.95))",
                  border: "1px solid rgba(107, 158, 133, 0.15)",
                  boxShadow: "0 4px 24px rgba(107, 158, 133, 0.08)",
                }}
              >
                <span className="mb-2 block text-2xl">{event.icon}</span>
                <p className="mb-1 text-xs font-medium tracking-wider uppercase" style={{ color: "#6B9E85" }}>
                  {event.date}
                </p>
                <h3 className="font-display mb-2 text-xl sm:text-2xl" style={{ color: "#2C3E36" }}>
                  {event.title}
                </h3>
                <p className="text-sm leading-relaxed sm:text-base" style={{ color: "#567064" }}>
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
