import React from "react";
import TLForm from "../components/forms/la-form/la-form.component";
import { Button } from "@mui/material";

type FormWrapperProps = {
  children: React.ReactNode;
  formMethods: any;
};

export const FormWrapper = ({ children, formMethods }: FormWrapperProps) => {
  return (
    <TLForm
      formMethods={formMethods}
      onSubmit={formMethods.handleSubmit(() => null)}
      data-testid="TestForm"
    >
      {children}
      <Button type="submit" data-testid="TestForm.Button">
        Submit
      </Button>
    </TLForm>
  );
};
