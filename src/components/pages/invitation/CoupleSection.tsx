"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionDivider from "./SectionDivider";

interface PersonProps {
  name: string;
  fullName: string;
  description: string;
  image: string;
  delay?: number;
}

function PersonCard({ name, fullName, description, image, delay = 0 }: PersonProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
    >
      {/* Photo with decorative border */}
      <div className="relative mb-3">
        <motion.div
          className="relative h-28 w-28 overflow-hidden rounded-full sm:h-36 sm:w-36"
          style={{
            border: "3px solid rgba(107, 158, 133, 0.3)",
            boxShadow: "0 8px 32px rgba(107, 158, 133, 0.15)",
          }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <Image src={image} alt={name} fill className="object-cover" sizes="256px" />
        </motion.div>
        {/* Decorative ring */}
        <div
          className="absolute -inset-3 rounded-full"
          style={{ border: "1px solid rgba(107, 158, 133, 0.15)" }}
        />
      </div>

      <p className="mb-1 text-xs tracking-[0.25em] uppercase" style={{ color: "#5A8A73" }}>
        {name}
      </p>
      <h3 className="font-script text-lg sm:text-xl" style={{ color: "#2C3E36" }}>
        {fullName}
      </h3>
      <p className="mt-2 max-w-[180px] text-xs leading-relaxed sm:text-sm" style={{ color: "#567064" }}>
        {description}
      </p>
    </motion.div>
  );
}

export default function CoupleSection() {
  return (
    <section className="invitation-section px-2 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-xs tracking-[0.3em] uppercase" style={{ color: "#5A8A73" }}>
            The Bride & Groom
          </p>
          <h2 className="font-display text-3xl sm:text-4xl" style={{ color: "#2C3E36" }}>
            Cô Dâu & Chú Rể
          </h2>
          <SectionDivider variant="heart" />
        </motion.div>

        <div className="flex items-start justify-center gap-4 sm:gap-8">
          <PersonCard
            name="Chú Rể"
            fullName="Trần Minh Hiếu"
            description="Con trai ông Trần Văn Bình và bà Nguyễn Thị Lan. Một chàng trai hướng nội, yêu thích sự giản dị."
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
            delay={0}
          />

          {/* Heart divider between couple */}
          <motion.div
            className="mt-12 flex shrink-0 items-center sm:mt-16"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
          >
            <svg width="24" height="22" viewBox="0 0 40 36" fill="none" className="animate-heartbeat">
              <path
                d="M20 36L17.1 33.36C6.8 24 0 17.84 0 10.2C0 4.04 4.84 0 10.6 0C13.88 0 17.02 1.56 20 4.36C22.98 1.56 26.12 0 29.4 0C35.16 0 40 4.04 40 10.2C40 17.84 33.2 24 22.9 33.36L20 36Z"
                fill="#C9A96E"
                fillOpacity="0.6"
              />
            </svg>
          </motion.div>

          <PersonCard
            name="Cô Dâu"
            fullName="Nguyễn Thùy Hiền"
            description="Con gái ông Nguyễn Văn Đức và bà Phạm Thị Hương. Cô gái dịu dàng với nụ cười tỏa nắng."
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}
