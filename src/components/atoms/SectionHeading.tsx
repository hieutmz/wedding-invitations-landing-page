"use client";

import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`mb-12 ${align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left"}`}
    >
      <Typography
        variant="h2"
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? "text-white" : "text-gray-900"}`}
      >
        {title}
      </Typography>
      <div className="flex justify-center mb-4">
        <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-gold-400 rounded-full" />
      </div>
      {subtitle && (
        <Typography
          variant="body1"
          className={`text-lg max-w-2xl mx-auto ${light ? "text-white/80" : "text-gray-600"}`}
        >
          {subtitle}
        </Typography>
      )}
    </motion.div>
  );
}
