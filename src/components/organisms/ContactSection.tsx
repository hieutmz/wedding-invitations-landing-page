"use client";

import { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";
import { CONTACT } from "@/constants";
import SectionHeading from "@/components/atoms/SectionHeading";
import CTAButton from "@/components/atoms/CTAButton";

interface FormData {
  name: string;
  weddingDate: string;
  phone: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    weddingDate: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 bg-cream-50 dark:bg-[#1C1917]">
      <Container maxWidth="lg">
        <SectionHeading title={CONTACT.title} subtitle={CONTACT.subtitle} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto"
        >
          {/* Contact form */}
          <motion.div variants={fadeInLeft}>
            <Card elevation={0} className="border border-gray-100 dark:border-white/10 dark:bg-[#2A2520]">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <TextField
                    label="Họ và tên"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    required
                    variant="outlined"
                  />
                  <TextField
                    label="Ngày cưới"
                    name="weddingDate"
                    value={formData.weddingDate}
                    onChange={handleChange}
                    fullWidth
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                  />
                  <TextField
                    label="Số điện thoại"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    fullWidth
                    required
                    variant="outlined"
                  />
                  <CTAButton fullWidth>
                    {CONTACT.submitButton}
                  </CTAButton>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact info */}
          <motion.div variants={fadeInRight} className="flex flex-col justify-center">
            <div className="space-y-8">
              {[
                {
                  icon: PhoneIcon,
                  title: "Điện thoại",
                  detail: "0123 456 789",
                },
                {
                  icon: EmailIcon,
                  title: "Email",
                  detail: "hello@weddingcard.vn",
                },
                {
                  icon: LocationOnIcon,
                  title: "Địa chỉ",
                  detail: "TP. Hồ Chí Minh, Việt Nam",
                },
              ].map(({ icon: Icon, title, detail }) => (
                <div key={title} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0">
                    <Icon sx={{ color: "#E8636F" }} />
                  </div>
                  <div>
                    <Typography variant="subtitle2" className="font-semibold text-gray-900 dark:text-[#F5EDE5]">
                      {title}
                    </Typography>
                    <Typography variant="body2" className="text-gray-600 dark:text-[#C4AFA8]">
                      {detail}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
