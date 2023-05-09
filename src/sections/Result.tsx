// import React from 'react';
import numeral from "numeral";
// mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
// redux
import { useAppSelector } from "../app/hooks";
import { selectTipCalculator } from "../app/slices/tipCalculatorSlice";

function Result() {
  const theme = useTheme();
  const { result } = useAppSelector(selectTipCalculator);

  return (
    <Stack
      sx={{
        padding: 3,
        width: "100%",
        height: "100%",
        borderRadius: "12px",
        justifyContent: "space-between",
        bgcolor: theme.palette.primary.dark,
      }}
    >
      <Box>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Box>
            <Typography color={theme.palette.common.white}>
              Tip Amount
            </Typography>
            <Typography variant='body2' color={theme.palette.grey[600]}>
              / person
            </Typography>
          </Box>

          <Typography
            fontSize={50}
            fontWeight={700}
            color={theme.palette.primary.main}
          >
            ${numeral(result.total).format("0.00")}
          </Typography>
        </Stack>

        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Box>
            <Typography color={theme.palette.common.white}>Total</Typography>
            <Typography variant='body2' color={theme.palette.grey[600]}>
              / person
            </Typography>
          </Box>

          <Typography
            fontSize={50}
            fontWeight={700}
            color={theme.palette.primary.main}
          >
            ${numeral(result.amount).format("0.00")}
          </Typography>
        </Stack>
      </Box>

      <Button>Reset</Button>
    </Stack>
  );
}

export default Result;
