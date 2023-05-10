import * as React from "react";
// @mui
import { CssBaseline } from "@mui/material";
import ComponentOverrides from "./overrides";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";

const FONT_PRIMARY = "Space Mono, monospace";

const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(172, 67%, 45%)",
      dark: "hsl(183, 100%, 15%)", // Very Dark cyan
      light: "hsl(172, 67%, 65%)",
    },
    grey: {
      100: "hsl(189, 41%, 97%)", // Very light grayish cyan
      200: "hsl(185, 41%, 84%)", // Light grayish cyan
      500: "hsl(184, 14%, 56%)", // Grayish cyan
      600: "hsl(186, 14%, 43%)", // Dark grayish cyan
    },
    common: {
      white: "hsl(0, 0%, 100%)",
    },
  },
  typography: {
    fontFamily: FONT_PRIMARY,
  },
});

theme.components = ComponentOverrides(theme);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
