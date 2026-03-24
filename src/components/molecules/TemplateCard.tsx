"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface TemplateCardProps {
  title: string;
  image: string;
  viewDemoLabel?: string;
  selectLabel?: string;
  onViewDemo?: () => void;
  onSelect?: () => void;
}

export default function TemplateCard({
  title,
  image,
  viewDemoLabel = "Xem demo",
  selectLabel = "Chọn mẫu này",
  onViewDemo,
  onSelect,
}: TemplateCardProps) {
  return (
    <motion.div variants={fadeInUp}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100" elevation={0}>
        <div className="relative overflow-hidden aspect-[3/4] bg-gradient-to-br from-cream-100 to-blush-50">
          <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: `url(${image})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardContent className="p-4">
          <Typography variant="h6" className="font-semibold text-gray-900 mb-3 text-center">{title}</Typography>
          <div className="flex gap-2">
            <Button variant="outlined" color="primary" size="small" fullWidth onClick={onViewDemo} className="text-sm">{viewDemoLabel}</Button>
            <Button variant="contained" color="primary" size="small" fullWidth onClick={onSelect} className="text-sm">{selectLabel}</Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
