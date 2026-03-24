"use client";

import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { STEPS } from "@/constants";
import { useTranslation } from "@/lib/LocaleContext";
import SectionHeading from "@/components/atoms/SectionHeading";
import StepCard from "@/components/molecules/StepCard";

export default function HowItWorksSection() {
  const { t } = useTranslation();

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <Container maxWidth="md">
        <SectionHeading title={t("howItWorks.title")} subtitle={t("howItWorks.subtitle")} />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="relative">
          <div className="hidden md:block absolute top-[40px] left-0 right-0 h-0.5 -translate-y-1/2 z-0">
            <div className="mx-auto max-w-[66%] h-full bg-gradient-to-r from-rose-200 via-rose-400 to-rose-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative z-10">
            {STEPS.map((step) => (
              <StepCard
                key={step.number}
                number={step.number}
                title={t(`step.${step.number}.title`)}
                description={t(`step.${step.number}.desc`)}
                icon={step.icon}
              />
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
