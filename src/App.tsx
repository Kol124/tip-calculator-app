import React from "react";
import { CalculatorLayout } from "./layouts";
// form
// import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
// mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
// sections
import { BillingInputs, Result } from "./sections";
// assets
import { LogoIcon } from "./assets";

const Container = styled("form")(({ theme }) => ({
  maxWidth: "900px",
  height: "450px",
  width: "100%",
  display: "flex",
  gap: "16px",
  padding: "24px",
  borderRadius: "20px",
  alignItems: "center",
  justifyContent: "center",
  background: theme.palette.common.white,
}));

type IFormInputs = {
  bill: string;
  tip: string;
  numberOfPeople: string;
};

function App() {
  const theme = useTheme();

  const defaultValues = {
    bill: "",
    tip: "",
    numberOfPeople: "",
  };

  const methods = useForm<IFormInputs>({
    defaultValues,
  });

  const { watch, reset } = methods;
  const values = watch();

  React.useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <CalculatorLayout>
      <LogoIcon />

      <FormProvider {...methods}>
        <Container>
          <BillingInputs />
          <Result />
        </Container>
      </FormProvider>
    </CalculatorLayout>
  );
}

export default App;
