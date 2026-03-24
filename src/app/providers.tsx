"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import theme from "@/lib/theme";
import { LocaleProvider } from "@/lib/LocaleContext";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocaleProvider>{children}</LocaleProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
