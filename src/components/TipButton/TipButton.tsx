// mui
import { useTheme } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
// form
import { useFormContext } from "react-hook-form";

type TipButtonType = {
  name?: string;
  value: string;
  sx?: BoxProps["sx"];
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const TipButton = ({ sx, name, value }: TipButtonType) => {
  const theme = useTheme();
  const { register } = useFormContext();

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
          background: theme.palette.primary.light,
        },

        "input:checked + .MuiBox-root": {
          color: theme.palette.primary.dark,
          background: theme.palette.primary.main,
        },
      }}
    >
      <input type='radio' value={value} {...register(name || "tip")} />
      <Box
        sx={{
          fontSize: 20,
          width: "100%",
          fontWeight: 700,
          padding: "6px 8px",
          textAlign: "center",
          borderRadius: "6px",
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
