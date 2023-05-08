import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Container = styled(Box)(({ theme }) => ({
  gap: "70px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  background: theme.palette.grey[200],
  height: "100vh",

  [theme.breakpoints.down(375)]: {
    gap: 7,
  },
}));

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}
