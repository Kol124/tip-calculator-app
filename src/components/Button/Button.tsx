import {
  styled,
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

const Button = styled((props: MuiButtonProps) => <MuiButton {...props} />)(
  ({ theme }) => ({
    fontSize: 20,
    fontWeight: 700,
    borderRadius: "6px",
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.primary.main,

    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },

    "&.Mui-disabled": {
      opacity: 0.5,
      backgroundColor: "hsla(172, 37%, 75%, 0.5)",
    },
  })
);

export default Button;
