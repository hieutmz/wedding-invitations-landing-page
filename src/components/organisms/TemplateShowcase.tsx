"use client";

import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { TEMPLATES } from "@/constants";
import SectionHeading from "@/components/atoms/SectionHeading";
import TemplateCard from "@/components/molecules/TemplateCard";

export default function TemplateShowcase() {
  return (
    <section id="templates" className="py-20 bg-cream-50">
      <Container maxWidth="lg">
        <SectionHeading
          title="Bộ sưu tập mẫu thiệp"
          subtitle="Hàng trăm mẫu thiệp được thiết kế bởi đội ngũ chuyên nghiệp"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TEMPLATES.map((template) => (
            <TemplateCard
              key={template.id}
              title={template.title}
              image={template.image}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
