// import React from 'react';
import { CalculatorLayout } from "./layouts";
// mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
// assets
import { LogoIcon } from "./assets";

const Container = styled(Box)(({ theme }) => ({
  maxWidth: "900px",
  height: "450px",
  width: "100%",
  display: "flex",
  padding: "24px",
  borderRadius: "20px",
  alignItems: "center",
  justifyContent: "center",
  background: theme.palette.common.white,
}));

function App() {
  const theme = useTheme();
  return (
    <CalculatorLayout>
      <LogoIcon />
      <Container>
        <Stack height='100%' width='100%' p={3} border={1}>
          Bill
        </Stack>
        <Stack
          sx={{
            padding: 3,
            width: "100%",
            height: "100%",
            borderRadius: "12px",
            bgcolor: theme.palette.primary.dark,
          }}
        >
          Bill
        </Stack>
      </Container>
    </CalculatorLayout>
  );
}

export default App;
