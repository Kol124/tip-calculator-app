// import React from 'react';
import numeral from "numeral";
import { useFormContext } from "react-hook-form";
// mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
// components
import { Button } from "../components/Button";
// redux
import { useAppSelector } from "../app/hooks";
import { selectTipCalculator } from "../app/slices/tipCalculatorSlice";

function Result() {
  const theme = useTheme();
  const { reset } = useFormContext();
  const { result } = useAppSelector(selectTipCalculator);

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        padding: "32px 40px",
        borderRadius: "12px",
        justifyContent: "space-between",
        bgcolor: theme.palette.primary.dark,

        [theme.breakpoints.down("sm")]: {
          padding: "32px 24px",
        },
      }}
    >
      <Box mb={3}>
        <Stack
          flexWrap='wrap'
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Box>
            <Typography color={theme.palette.common.white}>
              Tip Amount
            </Typography>
            <Typography
              variant='body2'
              fontWeight={700}
              color={theme.palette.grey[500]}
            >
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
          flexWrap='wrap'
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Box>
            <Typography color={theme.palette.common.white}>Total</Typography>
            <Typography
              variant='body2'
              fontWeight={700}
              color={theme.palette.grey[500]}
            >
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

      <Button
        onClick={() => reset()}
        disabled={result.total === 0 && result.amount === 0}
      >
        Reset
      </Button>
    </Stack>
  );
}

export default Result;
