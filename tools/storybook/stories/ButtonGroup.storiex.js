import { Button } from "@cor-web/components/button/template.js";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ButtonGroup',
  component: ButtonGroup,
  subcomponents: { Button },
};

export const Test = () => `<cor-button class="border">Test</cor-button><cor-button class="border">Test</cor-button><cor-button class="border">Test</cor-button>`;