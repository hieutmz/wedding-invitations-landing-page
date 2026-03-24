"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "@/lib/LocaleContext";
import CTAButton from "@/components/atoms/CTAButton";

export default function FinalCTASection() {
  const { t } = useTranslation();

  const handleScroll = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-rose-500 via-rose-600 to-blush-500 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-[10%] w-32 h-32 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute bottom-10 right-[10%] w-48 h-48 rounded-full bg-gold-300/10 blur-2xl" />
      </div>
      <Container maxWidth="md" className="relative z-10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center text-white">
          <motion.div variants={fadeInUp}>
            <Typography variant="h2" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t("finalCTA.title")}</Typography>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Typography variant="h6" className="text-white/90 mb-8 font-light">{t("finalCTA.subtitle")}</Typography>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <CTAButton variant="contained" color="secondary" onClick={handleScroll}>{t("finalCTA.cta")}</CTAButton>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
