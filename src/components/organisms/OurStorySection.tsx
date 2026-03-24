"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, fadeIn } from "@/lib/animations";
import { useTranslation } from "@/lib/LocaleContext";
import SectionHeading from "@/components/atoms/SectionHeading";

export default function OurStorySection() {
  const { t } = useTranslation();

  const opening = t("story.p1");
  const question = t("story.p2");
  const turning = t("story.p3");
  const idea = t("story.p4");
  const journey = t("story.p5");
  const motivation = t("story.p6");
  const continuation = t("story.p7");
  const closing = t("story.p8");

  return (
    <section id="our-story" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-white to-cream-50" />
      <div className="absolute top-32 right-[5%] w-72 h-72 bg-blush-50 rounded-full opacity-40 blur-3xl" />
      <div className="absolute bottom-32 left-[5%] w-96 h-96 bg-rose-50 rounded-full opacity-30 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cream-100 rounded-full opacity-20 blur-3xl" />

      <Container maxWidth="lg" className="relative z-10">
        <SectionHeading title={t("story.title")} subtitle={t("story.subtitle")} />

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="max-w-3xl mx-auto mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100/80">
            <Typography variant="body1" className="text-gray-700 text-lg md:text-xl leading-relaxed whitespace-pre-line text-center">
              {opening}
            </Typography>
          </div>
        </motion.div>

        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="max-w-2xl mx-auto mb-16">
          <div className="relative bg-gradient-to-br from-rose-500 to-rose-600 rounded-3xl p-8 md:p-10 shadow-xl shadow-rose-200/40">
            <FormatQuoteIcon sx={{ fontSize: 48, color: "rgba(255,255,255,0.2)" }} className="absolute top-4 left-4" />
            <Typography variant="body1" className="text-white text-lg md:text-xl leading-relaxed whitespace-pre-line text-center relative z-10 font-medium">
              {question}
            </Typography>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto mb-16">
          <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <div className="h-full bg-cream-50 rounded-3xl p-8 border border-cream-200">
              <div className="w-10 h-10 rounded-full bg-gold-300 flex items-center justify-center mb-5"><span className="text-white text-lg">💡</span></div>
              <Typography variant="body1" className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line">{turning}</Typography>
            </div>
          </motion.div>
          <motion.div variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <div className="h-full bg-blush-50 rounded-3xl p-8 border border-blush-100">
              <div className="w-10 h-10 rounded-full bg-rose-400 flex items-center justify-center mb-5"><span className="text-white text-lg">🎯</span></div>
              <Typography variant="body1" className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line">{idea}</Typography>
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="max-w-3xl mx-auto mb-16">
          <div className="flex gap-6">
            <div className="hidden md:flex flex-col items-center pt-2">
              <div className="w-3 h-3 rounded-full bg-rose-300" />
              <div className="w-0.5 flex-1 bg-gradient-to-b from-rose-300 to-gold-300" />
              <div className="w-3 h-3 rounded-full bg-gold-400" />
            </div>
            <div className="space-y-8 flex-1">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100/80">
                <Typography variant="body1" className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line">{journey}</Typography>
              </div>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100/80">
                <Typography variant="body1" className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line">{motivation}</Typography>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="max-w-3xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-cream-50 via-blush-50 to-cream-50 rounded-3xl p-8 md:p-10 border border-rose-100/60">
            <Typography variant="body1" className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line text-center">{continuation}</Typography>
          </div>
        </motion.div>

        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="text-center max-w-xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-300" />
              <div className="w-2 h-2 rounded-full bg-rose-400" />
              <div className="w-2 h-2 rounded-full bg-gold-400" />
              <div className="w-2 h-2 rounded-full bg-rose-400" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-300" />
            </div>
          </div>
          <Typography variant="h5" className="font-heading text-gray-800 leading-relaxed whitespace-pre-line italic">{closing}</Typography>
          <motion.div className="mt-8" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
            <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center shadow-lg shadow-rose-300/40">
              <span className="text-white text-xl">❤️</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
