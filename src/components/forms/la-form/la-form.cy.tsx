import { useForm } from "react-hook-form";
import LaForm from "./la-form.component";

const Testcomponent = ({ devTool = false }: { devTool?: boolean }) => {
  const form = useForm();

  return (
    <LaForm formMethods={form} devTool={devTool}>
      <input />
    </LaForm>
  );
};

describe("<TLForm />", () => {
  it("should load the form", () => {
    cy.mount(<Testcomponent />);
    cy.findByTestId("LaForm").should("exist");
  });

  it("should load dev tools", () => {
    cy.mount(<Testcomponent devTool={true} />);
    cy.get('button[title="Show dev panel"]').should("exist");
  });
});
