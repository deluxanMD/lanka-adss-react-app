import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./logo.component";
import { withReduxProvider } from "test-utils/storybook/with-redux-provider";

const meta: Meta<typeof Logo> = {
  component: Logo,
  decorators: [withReduxProvider],
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const WithName: Story = {
  args: {
    withName: true,
  },
};

export const WithoutName: Story = {
  args: {
    withName: false,
  },
};
