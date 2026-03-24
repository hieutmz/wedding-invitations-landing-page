"use client";

import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { TESTIMONIALS } from "@/constants";
import SectionHeading from "@/components/atoms/SectionHeading";
import TestimonialCard from "@/components/molecules/TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-[#26211E]">
      <Container maxWidth="lg">
        <SectionHeading
          title="Khách hàng nói gì?"
          subtitle="Hơn 1,000+ cặp đôi đã tin tưởng sử dụng dịch vụ của chúng tôi"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              avatar={testimonial.avatar}
              text={testimonial.text}
              date={testimonial.date}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
