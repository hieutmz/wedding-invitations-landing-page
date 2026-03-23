"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SpeedIcon from "@mui/icons-material/Speed";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MapIcon from "@mui/icons-material/Map";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  Speed: SpeedIcon,
  MusicNote: MusicNoteIcon,
  Map: MapIcon,
  CheckCircle: CheckCircleIcon,
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const IconComponent = iconMap[icon] || CheckCircleIcon;

  return (
    <motion.div variants={fadeInUp}>
      <Card
        className="h-full text-center p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
        elevation={0}
      >
        <CardContent>
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-rose-50 to-blush-50 flex items-center justify-center">
            <IconComponent sx={{ fontSize: 32, color: "#E8636F" }} />
          </div>
          <Typography variant="h6" className="font-bold mb-2 text-gray-900">
            {title}
          </Typography>
          <Typography variant="body2" className="text-gray-600">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}
