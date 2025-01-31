import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

export const ActionsData = {
  onClick: fn(),
};

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'default',
    children: 'Click me',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    children: 'Click me',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
    children: 'Click me',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    children: 'Click me',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'default',
    children: 'Click me',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'default',
    children: 'Click me',
  },
};
