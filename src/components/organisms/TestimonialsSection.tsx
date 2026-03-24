"use client";

import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { TESTIMONIALS } from "@/constants";
import { useTranslation } from "@/lib/LocaleContext";
import SectionHeading from "@/components/atoms/SectionHeading";
import TestimonialCard from "@/components/molecules/TestimonialCard";

export default function TestimonialsSection() {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="py-20 bg-white">
      <Container maxWidth="lg">
        <SectionHeading title={t("testimonials.title")} subtitle={t("testimonials.subtitle")} />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              avatar={testimonial.avatar}
              text={t(`testimonial.${index + 1}.text`)}
              date={t(`testimonial.${index + 1}.date`)}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
