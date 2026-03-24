"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "@/lib/LocaleContext";
import SectionHeading from "@/components/atoms/SectionHeading";

export default function LoiNgoSection() {
  const { t } = useTranslation();
  const paragraphs = [t("loiNgo.p1"), t("loiNgo.p2"), t("loiNgo.p3")];

  return (
    <section id="loi-ngo" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-rose-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cream-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-50" />

      <Container maxWidth="md" className="relative z-10">
        <SectionHeading title={t("loiNgo.title")} subtitle={t("loiNgo.subtitle")} />

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.div variants={fadeInUp} className="text-center mb-3">
            <span className="text-6xl md:text-8xl font-heading text-rose-200 leading-none select-none">&ldquo;</span>
          </motion.div>
          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Typography variant="body1" className="text-gray-700 text-lg leading-relaxed text-center font-light">
                  {paragraph}
                </Typography>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeInUp} className="flex justify-center my-10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-400" />
              <div className="w-3 h-3 rounded-full bg-gold-400 rotate-45" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-400" />
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center">
            <Typography variant="h6" className="font-heading text-rose-500 italic">
              — {t("loiNgo.signature")}
            </Typography>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
