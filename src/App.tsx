import React from "react";
import { CalculatorLayout } from "./layouts";
// form
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
// mui
import { styled } from "@mui/material/styles";
// sections
import { BillingInputs, Result } from "./sections";
// assets
import { LogoIcon } from "./assets";
// redux
import { useAppDispatch } from "./app/hooks";
import { setResult } from "./app/slices/tipCalculatorSlice";

const Container = styled("form")(({ theme }) => ({
  maxWidth: "900px",
  height: "470px",
  width: "100%",
  display: "flex",
  gap: "16px",
  padding: "24px",
  borderRadius: "20px",
  alignItems: "center",
  justifyContent: "center",
  background: theme.palette.common.white,

  [theme.breakpoints.down("sm")]: {
    height: "auto",
    flexDirection: "column",
    borderRadius: "24px 24px 0 0",
  },
}));

type IFormInputs = {
  bill: string;
  tip: string;
  customTip: string;
  numberOfPeople: string;
};

function App() {
  const dispatch = useAppDispatch();

  const schema = Yup.object({
    numberOfPeople: Yup.lazy((value) =>
      value === ""
        ? Yup.string()
        : Yup.number().positive("Can't be zero").max(100, "")
    ),
    customTip: Yup.lazy((value) =>
      value === "" ? Yup.string() : Yup.number().positive("").max(100, "")
    ),
  });

  const defaultValues = {
    bill: "",
    tip: "",
    customTip: "",
    numberOfPeople: "",
  };

  const methods = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues,
  });

  const { watch, setValue } = methods;
  const values = watch();

  React.useEffect(() => {
    if (values.customTip) setValue("tip", "");
  }, [values.customTip, setValue]);

  React.useEffect(() => {
    if (values.tip) setValue("customTip", "");
  }, [values.tip, setValue]);

  React.useEffect(() => {
    const { bill, tip, customTip, numberOfPeople } = values;
    const tipValue = Number(tip || customTip);

    if (Number(bill) > 0 && tipValue > 0 && Number(numberOfPeople) > 0) {
      const total = (Number(bill) * (tipValue / 100)) / Number(numberOfPeople);

      dispatch(
        setResult({
          amount: Number(bill) / Number(numberOfPeople) + total,
          total: total,
        })
      );
    }

    if (!bill && !tipValue && !numberOfPeople) {
      dispatch(
        setResult({
          amount: 0,
          total: 0,
        })
      );
    }
  }, [values, dispatch]);

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
