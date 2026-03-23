"use client";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer } from "@/lib/animations";
import { HERO } from "@/constants";
import CTAButton from "@/components/atoms/CTAButton";

export default function HeroSection() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-600 via-rose-500 to-blush-400" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold-300/20 blur-3xl" />
      </div>

      {/* Floating decorations */}
      <div className="absolute top-1/4 left-[10%] w-4 h-4 rounded-full bg-white/30 animate-float" />
      <div className="absolute top-1/3 right-[15%] w-3 h-3 rounded-full bg-gold-300/40 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/3 left-[20%] w-5 h-5 rounded-full bg-white/20 animate-float" style={{ animationDelay: "4s" }} />

      <Container maxWidth="lg" className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center text-white py-20"
        >
          <motion.div variants={fadeInUp}>
            <Typography
              variant="h1"
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            >
              {HERO.title}
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography
              variant="h5"
              className="text-lg md:text-xl lg:text-2xl mb-10 text-white/90 max-w-2xl mx-auto font-light"
            >
              {HERO.subtitle}
            </Typography>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <CTAButton onClick={() => handleScroll("#contact")}>
              {HERO.primaryCTA}
            </CTAButton>
            <CTAButton
              variant="outlined"
              onClick={() => handleScroll("#templates")}
            >
              <span className="text-white border-white">{HERO.secondaryCTA}</span>
            </CTAButton>
          </motion.div>

          {/* Mockup card preview */}
          <motion.div variants={fadeIn} className="mt-16">
            <div className="max-w-sm mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
              <div className="bg-white/20 rounded-xl p-4 mb-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-white/30 mb-3 flex items-center justify-center">
                  <span className="text-2xl">💍</span>
                </div>
                <Typography variant="h6" className="text-white font-heading">
                  Minh & Hạnh
                </Typography>
                <Typography variant="body2" className="text-white/80">
                  20.12.2025
                </Typography>
              </div>
              <div className="flex gap-2 text-xs text-white/70">
                <span className="bg-white/20 px-3 py-1 rounded-full">🎵 Nhạc nền</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">📍 Bản đồ</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">✅ RSVP</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
