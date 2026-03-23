"use client";

import Typography from "@mui/material/Typography";
import StyleIcon from "@mui/icons-material/Style";
import SendIcon from "@mui/icons-material/Send";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  Style: StyleIcon,
  Send: SendIcon,
  Celebration: CelebrationIcon,
};

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export default function StepCard({ number, title, description, icon }: StepCardProps) {
  const IconComponent = iconMap[icon] || StyleIcon;

  return (
    <motion.div variants={fadeInUp} className="text-center">
      <div className="relative mb-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center shadow-lg">
          <IconComponent sx={{ fontSize: 36, color: "#FFFFFF" }} />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold-300 flex items-center justify-center text-sm font-bold text-white shadow-md">
          {number}
        </div>
      </div>
      <Typography variant="h6" className="font-bold mb-2 text-gray-900">
        {title}
      </Typography>
      <Typography variant="body2" className="text-gray-600 max-w-xs mx-auto">
        {description}
      </Typography>
    </motion.div>
  );
}
