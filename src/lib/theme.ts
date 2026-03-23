"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E8636F",
      light: "#FF8A8A",
      dark: "#C43B49",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#C5A000",
      light: "#FFD700",
      dark: "#8B6914",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFDF7",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2D2D2D",
      secondary: "#6B6B6B",
    },
  },
  typography: {
    fontFamily: '"Be Vietnam Pro", system-ui, sans-serif',
    h1: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 600,
    },
    button: {
      textTransform: "none" as const,
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: "12px 32px",
          fontSize: "1rem",
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #E8636F 0%, #D94F5C 100%)",
          boxShadow: "0 4px 15px rgba(232, 99, 111, 0.3)",
          "&:hover": {
            background: "linear-gradient(135deg, #D94F5C 0%, #C43B49 100%)",
            boxShadow: "0 6px 20px rgba(232, 99, 111, 0.4)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 12,
          },
        },
      },
    },
  },
});

export default theme;
