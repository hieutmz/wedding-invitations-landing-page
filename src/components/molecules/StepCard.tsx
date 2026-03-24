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
    <motion.div variants={fadeInUp} className="text-center flex flex-col items-center">
      {/* Icon + number badge wrapper */}
      <div className="relative w-20 h-20 mb-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center shadow-lg shadow-rose-300/30">
          <IconComponent sx={{ fontSize: 36, color: "#FFFFFF" }} />
        </div>
        <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gold-300 flex items-center justify-center text-xs font-bold text-white shadow-md ring-2 ring-white">
          {number}
        </div>
      </div>

      <Typography variant="h6" className="font-bold mb-2 text-gray-900">
        {title}
      </Typography>
      <Typography variant="body2" className="text-gray-600 max-w-[220px]">
        {description}
      </Typography>
    </motion.div>
  );
}
