import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  boxShadow: `0 24px 32px ${theme.palette.grey[200]}`,
  background: theme.palette.grey[200],
  height: "100vh",
  gap: "70px",

  [theme.breakpoints.down("sm")]: {
    gap: "32px",
    height: "auto",
    padding: theme.spacing(5, 0, 0),
  },
}));

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}
