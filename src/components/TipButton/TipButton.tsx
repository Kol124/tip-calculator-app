import { useTheme } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";

type TipButtonType = {
  value: number;
  sx: BoxProps["sx"];
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const TipButton = ({ sx, value, onClick }: TipButtonType) => {
  const theme = useTheme();
  const activeValue = 25;

  return (
    <Box
      sx={{
        height: 36,
        fontSize: 18,
        width: "100%",
        // fontWeight: 500,
        textAlign: "center",
        padding: "4px 8px",
        cursor: "pointer",
        borderRadius: "4px",
        textTransform: "capitalize",
        color: theme.palette.common.white,
        background: theme.palette.primary.dark,
        borderLeft: "1px solid rgba(221, 220, 229, 0.5)",

        "&:first-of-type": {
          borderRadius: "5px 0 0 5px",
        },

        ...(value === activeValue && {
          color: theme.palette.secondary.main,
          background: theme.palette.grey[500],
        }),
        ...sx,
      }}
      onClick={onClick}
    >
      {value}%
    </Box>
  );
};

export default TipButton;
