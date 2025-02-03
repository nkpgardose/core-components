import type { Preview } from "@storybook/react";
import "../src/components/Globals/variables.css";
import "../src/components/Globals/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
