"use client";

import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { BENEFITS } from "@/constants";
import SectionHeading from "@/components/atoms/SectionHeading";
import FeatureCard from "@/components/molecules/FeatureCard";

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <Container maxWidth="lg">
        <SectionHeading
          title="Tại sao chọn chúng tôi?"
          subtitle="Thiệp cưới online với đầy đủ tính năng hiện đại"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {BENEFITS.map((benefit) => (
            <FeatureCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
