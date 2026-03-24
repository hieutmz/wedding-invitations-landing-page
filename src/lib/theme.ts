"use client";

import { createTheme } from "@mui/material/styles";

const sharedTypography = {
  fontFamily: '"Be Vietnam Pro", system-ui, sans-serif',
  h1: { fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 700 },
  h2: { fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 700 },
  h3: { fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 600 },
  h4: { fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 600 },
  button: { textTransform: "none" as const, fontWeight: 600 },
};

const sharedComponents = {
  MuiButton: {
    styleOverrides: {
      root: { borderRadius: 50, padding: "12px 32px", fontSize: "1rem" },
      containedPrimary: {
        background: "linear-gradient(135deg, #B86848 0%, #9A5030 100%)",
        boxShadow: "0 4px 15px rgba(184, 104, 72, 0.3)",
        "&:hover": {
          background: "linear-gradient(135deg, #9A5030 0%, #7A3C20 100%)",
          boxShadow: "0 6px 20px rgba(184, 104, 72, 0.4)",
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: { borderRadius: 16, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)" },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: { "& .MuiOutlinedInput-root": { borderRadius: 12 } },
    },
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#B86848", light: "#D08C6A", dark: "#9A5030", contrastText: "#FFFFFF" },
    secondary: { main: "#B88018", light: "#CFA040", dark: "#966408", contrastText: "#FFFFFF" },
    background: { default: "#FAFAF8", paper: "#FFFFFF" },
    text: { primary: "#2D2D2D", secondary: "#6B6B6B" },
  },
  typography: sharedTypography,
  shape: { borderRadius: 12 },
  components: sharedComponents,
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#D08C6A", light: "#E0AE94", dark: "#B86848", contrastText: "#FFFFFF" },
    secondary: { main: "#CFA040", light: "#E0C07A", dark: "#B88018", contrastText: "#FFFFFF" },
    background: { default: "#1C1917", paper: "#26211E" },
    text: { primary: "#F5EDE5", secondary: "#C4AFA8" },
    divider: "rgba(255,255,255,0.08)",
  },
  typography: sharedTypography,
  shape: { borderRadius: 12 },
  components: {
    ...sharedComponents,
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          backgroundImage: "none",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { backgroundImage: "none" },
      },
    },
  },
});

export default lightTheme;
