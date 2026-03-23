"use client";

import Button from "@mui/material/Button";
import { motion } from "framer-motion";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "contained" | "outlined";
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  href?: string;
  fullWidth?: boolean;
}

export default function CTAButton({
  children,
  variant = "contained",
  color = "primary",
  size = "large",
  onClick,
  href,
  fullWidth = false,
}: CTAButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Button
        variant={variant}
        color={color}
        size={size}
        onClick={onClick}
        href={href}
        fullWidth={fullWidth}
        className={`${
          variant === "contained"
            ? "shadow-lg hover:shadow-xl"
            : "border-2"
        } transition-all duration-300`}
      >
        {children}
      </Button>
    </motion.div>
  );
}
