"use client";

import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { PRICING_PLANS } from "@/constants";
import { useTranslation } from "@/lib/LocaleContext";
import SectionHeading from "@/components/atoms/SectionHeading";
import PricingCard from "@/components/molecules/PricingCard";

const featureKeys: Record<string, string[]> = {
  Basic: ["pricing.basic.f1", "pricing.basic.f2", "pricing.basic.f3", "pricing.basic.f4"],
  Standard: ["pricing.standard.f1", "pricing.standard.f2", "pricing.standard.f3", "pricing.standard.f4", "pricing.standard.f5", "pricing.standard.f6"],
  Premium: ["pricing.premium.f1", "pricing.premium.f2", "pricing.premium.f3", "pricing.premium.f4", "pricing.premium.f5", "pricing.premium.f6", "pricing.premium.f7", "pricing.premium.f8"],
};

const ctaKeys: Record<string, string> = {
  Basic: "pricing.basic.cta",
  Standard: "pricing.standard.cta",
  Premium: "pricing.premium.cta",
};

export default function PricingSection() {
  const { t } = useTranslation();

  return (
    <section id="pricing" className="py-20 bg-cream-50">
      <Container maxWidth="lg">
        <SectionHeading title={t("pricing.title")} subtitle={t("pricing.subtitle")} />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              price={plan.price}
              features={featureKeys[plan.name].map((k) => t(k))}
              highlighted={plan.highlighted}
              cta={t(ctaKeys[plan.name])}
              popularLabel={t("pricing.popular")}
              currency={t("pricing.currency")}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
