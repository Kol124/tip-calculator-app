import * as React from "react";
import {
  TextFieldProps,
  TextField,
  Box,
  useTheme,
  Typography,
} from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

export type InputProps = TextFieldProps & {
  label?: React.ReactNode;
  size?: "small" | "medium";
  color?: string;
};

export const Input: React.FC<InputProps> = ({
  label,
  size = "medium",
  color,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <Box>
      {typeof label === "string" ? (
        <Typography
          fontWeight={700}
          sx={{ pb: size === "small" ? 0.5 : 1 }}
          color={theme.palette.grey[600]}
        >
          {label}
        </Typography>
      ) : (
        <>{label}</>
      )}
      <TextField size={size} {...rest} />
    </Box>
  );
};

export const RHFInput: React.FC<
  InputProps & {
    name: string;
    helper?: string | JSX.Element | any;
  }
> = ({ name, helper, ...props }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, value, ...rest }, fieldState: { error } }) => (
        <Input
          inputRef={ref}
          {...rest}
          error={!!error}
          value={value ?? ""}
          helperText={helper || error?.message}
          {...props}
        />
      )}
    />
  );
};
