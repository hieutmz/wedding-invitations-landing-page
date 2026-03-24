"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { lightTheme, darkTheme } from "@/lib/theme";
import { LocaleProvider } from "@/lib/LocaleContext";
import { ThemeModeProvider, useThemeMode } from "@/lib/ThemeContext";

function MuiThemeWrapper({ children }: { children: React.ReactNode }) {
  const { resolvedMode } = useThemeMode();
  return (
    <ThemeProvider theme={resolvedMode === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

interface ProvidersProps {
  readonly children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeModeProvider>
        <MuiThemeWrapper>
          <LocaleProvider>{children}</LocaleProvider>
        </MuiThemeWrapper>
      </ThemeModeProvider>
    </AppRouterCacheProvider>
  );
}
