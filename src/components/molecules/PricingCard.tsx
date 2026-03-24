"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import CTAButton from "@/components/atoms/CTAButton";
import Badge from "@/components/atoms/Badge";

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export default function PricingCard({
  name,
  price,
  features,
  highlighted,
  cta,
}: PricingCardProps) {
  return (
    <motion.div variants={fadeInUp} className="h-full">
      <Card
        className={`h-full relative overflow-visible ${
          highlighted
            ? "border-2 border-rose-400 shadow-xl scale-105 dark:bg-[#2A2520]"
            : "border border-gray-200 dark:border-white/10 dark:bg-[#2A2520]"
        }`}
        elevation={highlighted ? 8 : 0}
      >
        {highlighted && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <Badge variant="gold">Phổ biến nhất</Badge>
          </div>
        )}
        <CardContent className="p-8 flex flex-col h-full">
          <div className="text-center mb-6">
            <Typography variant="h5" className="font-bold text-gray-900 dark:text-[#F5EDE5] mb-2">
              {name}
            </Typography>
            <div className="flex items-baseline justify-center gap-1">
              <Typography variant="h3" className="font-bold text-rose-500">
                {price}
              </Typography>
              <Typography variant="body2" className="text-gray-500 dark:text-[#C4AFA8]">
                VNĐ
              </Typography>
            </div>
          </div>
          <div className="flex-1 mb-8">
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckIcon sx={{ fontSize: 20, color: "#4CAF50" }} />
                  <Typography variant="body2" className="text-gray-700 dark:text-[#C4AFA8]">
                    {feature}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <CTAButton
              variant={highlighted ? "contained" : "outlined"}
              fullWidth
            >
              {cta}
            </CTAButton>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
