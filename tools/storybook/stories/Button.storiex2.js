import { Button } from './Button';

import CustomMDXDocumentation from './Custom-MDX-Documentation.mdx';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    docs: {
      page: CustomMDXDocumentation,
    },
  },
};

const Template = (args) => ({
  //👇 Your template goes here
});

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  backgroundColor: 'secondary',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};