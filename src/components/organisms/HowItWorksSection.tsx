"use client";

import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { STEPS } from "@/constants";
import SectionHeading from "@/components/atoms/SectionHeading";
import StepCard from "@/components/molecules/StepCard";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <Container maxWidth="lg">
        <SectionHeading
          title="Quy trình đơn giản"
          subtitle="Chỉ 3 bước để có thiệp cưới online đẹp lung linh"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-rose-200 via-rose-400 to-rose-200" />

          {STEPS.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
