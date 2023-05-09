// mui
import { useTheme } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
// form
import { useFormContext, Controller } from "react-hook-form";
// redux
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  setTip,
  selectTipCalculator,
} from "../../app/slices/tipCalculatorSlice";

type TipButtonType = {
  sx?: BoxProps["sx"];
  name?: string;
  value: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const TipButton = ({ sx, name, value }: TipButtonType) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { control, register } = useFormContext();
  const { tip } = useAppSelector(selectTipCalculator);

  // const handleClick = () => {
  //   dispatch(setTip(value));
  // };

  return (
    <Box
      sx={{
        position: "relative",

        input: {
          opacity: 0,
          position: "absolute",
          cursor: "pointer",
          inset: 0,
        },

        "input:hover + .MuiBox-root": {
          color: theme.palette.primary.dark,
          background: theme.palette.grey[500],
        },

        "input:checked + .MuiBox-root": {
          color: theme.palette.primary.dark,
          background: theme.palette.grey[500],
        },
      }}
      // onClick={handleClick}
    >
      <input type='radio' value={value} {...register(name || "tip")} />
      <Box
        sx={{
          fontSize: 18,
          width: "100%",
          padding: "8px 8px",
          textAlign: "center",
          borderRadius: "4px",
          color: theme.palette.common.white,
          background: theme.palette.primary.dark,
          ...sx,
        }}
      >
        {`${value}%`}
      </Box>
    </Box>
  );
};

export default TipButton;
