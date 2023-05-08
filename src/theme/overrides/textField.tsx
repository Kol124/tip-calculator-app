import { Theme } from "@mui/material/styles";

export default function textField(theme: Theme) {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            borderRadius: "6px",
            padding: "0 8px 0 16px",
            backgroundColor: "#F6F8FB",
            boxShadow:
              "inset -4px -4px 9px rgba(255, 255, 255, 0.88), inset 0px 2px 14px rgba(193, 208, 238, 0.5)",

            "& .MuiInputAdornment-root": {
              marginRight: "4px",
            },

            "& .MuiInputAdornment-root.MuiInputAdornment-positionEnd": {
              marginRight: "12px",
            },

            "& fieldset": {
              border: "none",
            },

            "& input": {
              padding: "8px 0",
              fontSize: "14px",
              borderRadius: 0,
              ":-webkit-autofill, :-webkit-autofill:focus": {
                transition: "background-color 600000s 0s, color 600000s 0s",
              },
            },

            "& textarea": {
              borderRadius: 0,
              fontSize: "14px",
              padding: "8px 0",
            },

            "&:hover fieldset": {
              borderColor: theme.palette.grey[400],
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.primary.main,
            },
          },

          "& .MuiInputBase-root.Mui-focused": {
            backgroundColor: "#F7FBFF",
            boxShadow:
              "0px 0px 4px rgba(2, 2, 2, 0.25), 0px 0px 0px 3px #E6C1F7",

            "& fieldset": { border: `1px solid ${theme.palette.grey[100]}` },
          },

          "& .MuiInputBase-root.Mui-error": {
            backgroundColor: "#F7FBFF",
            boxShadow:
              "0px 0px 4px rgba(2, 2, 2, 0.5), 0px 0px 0px 3px #FB8989",

            "& fieldset": { border: `1px solid ${theme.palette.grey[100]}` },
          },

          "& .MuiInputBase-root.Mui-disabled": {
            backgroundColor: "#EAEDF2",
            boxShadow: "none",
            "& fieldset": {
              borderColor: "none",
            },
          },

          "& .MuiInputBase-sizeSmall": {
            padding: "0 4px 0 12px",

            "& input": {
              padding: "4px 0",
            },
          },

          "& .MuiFormHelperText-root": {
            margin: 0,
            textTransform: "none",
            fontSize: "12px",
            marginTop: "4px",
            color: theme.palette.grey[500],
          },
          "& .MuiFormHelperText-root.Mui-error": {
            color: theme.palette.error.main,
          },
          "& .MuiFormHelperText-sizeSmall": {
            margin: "2px",
          },
        },
      },
    },
  };
}
