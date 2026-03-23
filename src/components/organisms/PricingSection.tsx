"use client";

import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { PRICING_PLANS } from "@/constants";
import SectionHeading from "@/components/atoms/SectionHeading";
import PricingCard from "@/components/molecules/PricingCard";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-cream-50">
      <Container maxWidth="lg">
        <SectionHeading
          title="Bảng giá dịch vụ"
          subtitle="Chọn gói phù hợp với nhu cầu của bạn"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto"
        >
          {PRICING_PLANS.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              features={plan.features}
              highlighted={plan.highlighted}
              cta={plan.cta}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
