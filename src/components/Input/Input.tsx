import * as React from "react";
import {
  TextFieldProps,
  TextField,
  Box,
  Stack,
  useTheme,
  Typography,
} from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

export type InputProps = TextFieldProps & {
  label?: React.ReactNode;
  size?: "small" | "medium";
  custom?: boolean;
  color?: string;
};

export const Input: React.FC<InputProps> = ({
  label,
  size = "medium",
  color,
  error,
  custom,
  helperText,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <Box>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        {typeof label === "string" ? (
          <Typography
            fontWeight={700}
            color={theme.palette.grey[600]}
            mb={size === "small" ? 0.5 : 1}
          >
            {label}
          </Typography>
        ) : (
          <>{label}</>
        )}

        {helperText && error && (
          <Typography
            fontWeight={700}
            color={theme.palette.error.main}
            mb={size === "small" ? 0.5 : 1}
          >
            {helperText}
          </Typography>
        )}
      </Stack>

      <TextField
        size={size}
        helperText={!error && helperText}
        error={error}
        {...rest}
        sx={{
          ...(custom && {
            "& .MuiInputBase-root": {
              padding: "0 8px 0 8px",
            },

            "&  input::placeholder": {
              color: theme.palette.primary.dark,
            },
            "& input::-webkit-input-placeholder": {
              opacity: 0.7,
              color: theme.palette.primary.dark,
            },
            "& input:-ms-input-placeholder": {
              color: "theme.palette.primary.dark",
            },
          }),
        }}
      />
    </Box>
  );
};

export const RHFInput: React.FC<
  InputProps & {
    name: string;
  }
> = ({ name, helperText, ...props }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, value, ...rest }, fieldState: { error } }) => (
        <Input
          inputRef={ref}
          {...rest}
          value={value}
          error={!!error}
          helperText={helperText || error?.message}
          {...props}
        />
      )}
    />
  );
};
