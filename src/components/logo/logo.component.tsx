import { Work } from "@mui/icons-material";
import { Avatar, Box, BoxProps, Typography } from "@mui/material";

type LogoProps = {
  withName?: boolean;
} & BoxProps;

export const Logo = ({ withName = false, ...rest }: LogoProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      data-testid="Logo.Container"
      {...rest}
    >
      <Avatar sx={{ bgcolor: "primary.main" }} variant="square">
        <Work sx={{ color: "common.white" }} />
      </Avatar>
      {!!withName && (
        <Typography
          variant="h6"
          ml={1}
          sx={{
            textTransform: "uppercase",
            color: "primary.main",
          }}
        >
          Talento
        </Typography>
      )}
    </Box>
  );
};
