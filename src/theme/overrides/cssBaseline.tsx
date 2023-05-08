import { Theme } from "@mui/material/styles";

export default function cssBaseline(theme: Theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          scrollbarWidth: "thin",
          scrollbarColor: "#B7B7B7 transparent",
          "&::-webkit-scrollbar": {
            width: 6,
            height: 6,
            backgroundColor: "transparent",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: theme.palette.grey["200"],
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: 6,
            minHeight: 24,
            minWidth: 24,
            backgroundColor: "#f1f1f1",
          },
          "&::-webkit-scrollbar-thumb:focus": {
            backgroundColor: theme.palette.grey["300"],
          },
          "&::-webkit-scrollbar-thumb:active": {
            backgroundColor: theme.palette.grey["300"],
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: theme.palette.grey["300"],
          },
          "&::-webkit-scrollbar-corner": {
            backgroundColor: "transparent",
          },
        },
      },
    },
  };
}
