"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "@/lib/animations";
import CTAButton from "@/components/atoms/CTAButton";

export default function DemoSection() {
  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-cream-50 to-blush-50">
      <Container maxWidth="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography variant="h2" className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Trải nghiệm thiệp cưới online
            </Typography>
            <Typography variant="body1" className="text-gray-600 mb-6 text-lg leading-relaxed">
              Xem trước thiệp cưới với đầy đủ hiệu ứng, nhạc nền, bản đồ và
              tính năng RSVP. Mọi thứ hoạt động mượt mà trên mọi thiết bị.
            </Typography>
            <ul className="space-y-3 mb-8">
              {[
                "Hiệu ứng chuyển cảnh mượt mà",
                "Nhạc nền lãng mạn",
                "Tích hợp Google Maps",
                "Form xác nhận tham dự RSVP",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-rose-400 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <CTAButton>Xem demo thiệp mẫu</CTAButton>
          </motion.div>

          {/* Video/preview mockup */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-rose-100 to-blush-100 aspect-[4/3] shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-rose-200/50 to-cream-200/50">
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="cursor-pointer"
                  >
                    <PlayCircleOutlineIcon
                      sx={{ fontSize: 80, color: "#E8636F", opacity: 0.9 }}
                    />
                  </motion.div>
                  <Typography variant="body1" className="text-gray-600 mt-3 font-medium">
                    Nhấn để xem demo
                  </Typography>
                </div>
              </div>

              {/* Phone mockup frame */}
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                <div className="w-32 h-48 rounded-lg bg-gradient-to-b from-cream-100 to-blush-50 flex flex-col items-center justify-center p-2">
                  <div className="w-8 h-8 rounded-full bg-rose-200 mb-2" />
                  <div className="w-full h-2 bg-rose-100 rounded mb-1" />
                  <div className="w-3/4 h-2 bg-rose-100 rounded mb-1" />
                  <div className="w-1/2 h-2 bg-rose-100 rounded" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
