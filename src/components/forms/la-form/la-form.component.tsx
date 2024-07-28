import { DevTool } from "@hookform/devtools";
import { Box, BoxProps } from "@mui/material";
import React from "react";
import { FormProvider } from "react-hook-form";

type LaFormProps = {
  children: React.ReactNode;
  formMethods: any;
  "data-testid"?: string;
  devTool?: boolean;
} & BoxProps &
  React.HTMLProps<HTMLFormElement>;

const LaForm = ({
  children,
  formMethods,
  "data-testid": dataTestId = "LaForm",
  devTool,
  ...rest
}: LaFormProps) => {
  return (
    <FormProvider {...formMethods}>
      <Box component="form" data-testid={dataTestId} {...rest}>
        {devTool && <DevTool control={formMethods.control} />}
        {children}
      </Box>
    </FormProvider>
  );
};

export default LaForm;
