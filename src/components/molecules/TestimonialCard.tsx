"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface TestimonialCardProps {
  name: string;
  avatar: string;
  text: string;
  date: string;
}

export default function TestimonialCard({
  name,
  avatar,
  text,
  date,
}: TestimonialCardProps) {
  return (
    <motion.div variants={fadeInUp} className="h-full">
      <Card className="h-full border border-gray-100 hover:shadow-lg transition-shadow duration-300" elevation={0}>
        <CardContent className="p-6">
          <FormatQuoteIcon sx={{ fontSize: 32, color: "#E8636F", opacity: 0.3 }} />
          <Typography variant="body1" className="text-gray-700 mb-4 italic leading-relaxed">
            &ldquo;{text}&rdquo;
          </Typography>
          <div className="flex mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon key={star} sx={{ fontSize: 18, color: "#FFD700" }} />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Avatar
              src={avatar}
              alt={name}
              sx={{ width: 44, height: 44, bgcolor: "#E8636F" }}
            >
              {name.charAt(0)}
            </Avatar>
            <div>
              <Typography variant="subtitle2" className="font-semibold text-gray-900">
                {name}
              </Typography>
              <Typography variant="caption" className="text-gray-500">
                {date}
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
