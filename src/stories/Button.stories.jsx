import { Button } from '../components/Button.jsx';

/** @type {import('@storybook/react').Meta} */
const meta = {
  title: '示例/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

/** @type {import('@storybook/react').StoryObj} */
export const Default = {
  args: {
    label: 'Storybook 最小按钮',
  },
};

/** @type {import('@storybook/react').StoryObj} */
export const Disabled = {
  args: {
    label: '不可用状态',
    disabled: true,
  },
};
