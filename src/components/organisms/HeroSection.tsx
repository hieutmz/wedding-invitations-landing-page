"use client";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer } from "@/lib/animations";
import { useTranslation } from "@/lib/LocaleContext";
import CTAButton from "@/components/atoms/CTAButton";

export default function HeroSection() {
  const { t } = useTranslation();

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/session-1-bg.png')" }} />
      {/* Overlay — lighter in light mode, darker in dark mode */}
      <div className="absolute inset-0 bg-white/30 dark:bg-black/60" />

      {/* Floating dots */}
      <div className="absolute top-1/4 left-[10%] w-4 h-4 rounded-full bg-[#B86848]/30 dark:bg-[#D08C6A]/40 animate-float" />
      <div className="absolute top-1/3 right-[15%] w-3 h-3 rounded-full bg-[#CFA040]/40 dark:bg-[#CFA040]/50 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/3 left-[20%] w-5 h-5 rounded-full bg-[#D08C6A]/25 dark:bg-[#D08C6A]/35 animate-float" style={{ animationDelay: "4s" }} />

      <Container maxWidth="lg" className="relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="text-center py-20">

          <motion.div variants={fadeInUp}>
            <Typography variant="h1" className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-gray-800 dark:text-[#F5EDE5]">
              {t("hero.title")}
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Typography variant="h5" className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-600 dark:text-[#C4AFA8] max-w-2xl mx-auto font-light">
              {t("hero.subtitle")}
            </Typography>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton onClick={() => handleScroll("#contact")}>{t("hero.primaryCTA")}</CTAButton>
            <CTAButton variant="outlined" onClick={() => handleScroll("#templates")}>
              {t("hero.secondaryCTA")}
            </CTAButton>
          </motion.div>

          {/* Mockup card */}
          <motion.div variants={fadeIn} className="mt-16">
            <div className="max-w-sm mx-auto bg-white/60 dark:bg-[#2A2520]/80 backdrop-blur-md rounded-2xl p-6 border border-[#E0D8CC]/60 dark:border-white/10 shadow-xl shadow-[#B86848]/10">
              <div className="bg-[#F2EDE5]/80 dark:bg-[#26211E]/80 rounded-xl p-4 mb-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#ECE8DF]/80 dark:bg-[#1C1917]/80 mb-3 flex items-center justify-center">
                  <span className="text-2xl">💍</span>
                </div>
                <Typography variant="h6" className="text-gray-800 dark:text-[#F5EDE5] font-heading">{t("hero.mockup.name")}</Typography>
                <Typography variant="body2" className="text-gray-500 dark:text-[#C4AFA8]">{t("hero.mockup.date")}</Typography>
              </div>
              <div className="flex gap-2 text-xs text-gray-600 dark:text-[#C4AFA8]">
                <span className="bg-[#F2EDE5]/90 dark:bg-[#26211E]/90 px-3 py-1 rounded-full border border-[#CFC4B5]/60 dark:border-white/10">{t("hero.mockup.music")}</span>
                <span className="bg-[#F2EDE5]/90 dark:bg-[#26211E]/90 px-3 py-1 rounded-full border border-[#CFC4B5]/60 dark:border-white/10">{t("hero.mockup.map")}</span>
                <span className="bg-[#F2EDE5]/90 dark:bg-[#26211E]/90 px-3 py-1 rounded-full border border-[#CFC4B5]/60 dark:border-white/10">{t("hero.mockup.rsvp")}</span>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </Container>
    </section>
  );
}
