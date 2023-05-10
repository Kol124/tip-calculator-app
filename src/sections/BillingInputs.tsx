// import React from 'react';
// mui
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import { useTheme } from "@mui/material/styles";
// components
import { TipButton } from "../components/TipButton";
import { RHFInput } from "../components/Input";
// assets
import { DollarIcon, PeopleIcon } from "../assets";

function Billing() {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        padding: 3,
        width: "100%",
        height: "100%",
        minHeight: 450,
        justifyContent: "space-between",

        [theme.breakpoints.down("sm")]: {
          padding: theme.spacing(3, 1, 2),
        },
      }}
    >
      <RHFInput
        name='bill'
        label='Bill'
        fullWidth
        type='number'
        placeholder='0'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start' sx={{ mr: "0 !important" }}>
              <DollarIcon />
            </InputAdornment>
          ),
        }}
      />

      <Grid container spacing={1.5}>
        <Grid item xs={12}>
          <Typography fontWeight={700} color={theme.palette.grey[600]}>
            Select Tip %
          </Typography>
        </Grid>
        <Grid item xs={6} md={4}>
          <TipButton value='5' />
        </Grid>
        <Grid item xs={6} md={4}>
          <TipButton value='10' />
        </Grid>
        <Grid item xs={6} md={4}>
          <TipButton value='15' />
        </Grid>
        <Grid item xs={6} md={4}>
          <TipButton value='25' />
        </Grid>
        <Grid item xs={6} md={4}>
          <TipButton value='50' />
        </Grid>
        <Grid item xs={6} md={4}>
          <RHFInput
            name='customTip'
            fullWidth
            type='number'
            custom
            placeholder='Custom'
          />
        </Grid>
      </Grid>

      <RHFInput
        name='numberOfPeople'
        label='Number of People'
        fullWidth
        type='number'
        placeholder='0'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <PeopleIcon />
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
}

export default Billing;
