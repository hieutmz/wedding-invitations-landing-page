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
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { Dayjs } from "dayjs";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";
import { useTranslation } from "@/lib/LocaleContext";
import SectionHeading from "@/components/atoms/SectionHeading";
import CTAButton from "@/components/atoms/CTAButton";

export default function ContactSection() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [weddingDate, setWeddingDate] = useState<Dayjs | null>(null);
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { name, weddingDate: weddingDate?.format("DD/MM/YYYY"), phone });
  };

  return (
    <section id="contact" className="py-20 bg-cream-50">
      <Container maxWidth="lg">
        <SectionHeading title={t("contact.title")} subtitle={t("contact.subtitle")} />
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div variants={fadeInLeft}>
            <Card elevation={0} className="border border-gray-100">
              <CardContent className="p-8">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <TextField label={t("contact.name")} value={name} onChange={(e) => setName(e.target.value)} fullWidth required variant="outlined" />
                    <DatePicker
                      label={t("contact.weddingDate")}
                      value={weddingDate}
                      onChange={(val) => setWeddingDate(val)}
                      format="DD/MM/YYYY"
                      disablePast
                      slotProps={{
                        textField: { fullWidth: true, variant: "outlined" },
                        day: { sx: { "&.Mui-selected": { backgroundColor: "#E8636F", "&:hover": { backgroundColor: "#D94F5C" } } } },
                        layout: { sx: { borderRadius: 4, "& .MuiPickersCalendarHeader-label": { fontWeight: 600 } } },
                      }}
                    />
                    <TextField label={t("contact.phone")} value={phone} onChange={(e) => setPhone(e.target.value)} fullWidth required variant="outlined" />
                    <CTAButton fullWidth>{t("contact.submit")}</CTAButton>
                  </form>
                </LocalizationProvider>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={fadeInRight} className="flex flex-col justify-center">
            <div className="space-y-8">
              {[
                { icon: PhoneIcon, title: t("contact.phoneLabel"), detail: "0123 456 789" },
                { icon: EmailIcon, title: t("contact.emailLabel"), detail: "hello@weddingcard.vn" },
                { icon: LocationOnIcon, title: t("contact.addressLabel"), detail: t("contact.address") },
              ].map(({ icon: Icon, title, detail }) => (
                <div key={title} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0"><Icon sx={{ color: "#E8636F" }} /></div>
                  <div>
                    <Typography variant="subtitle2" className="font-semibold text-gray-900">{title}</Typography>
                    <Typography variant="body2" className="text-gray-600">{detail}</Typography>
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
