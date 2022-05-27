import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from '.'

type ComponentType = typeof Button

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
    },
    variant: {
      control: { type: 'inline-radio' },
    },
  },
} as ComponentMeta<ComponentType>

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<ComponentType> = args => <Button {...args} />

// Reuse that template for creating different stories
export const Primary = Template.bind({})
Primary.args = { children: 'Primary 😃', variant: 'primary', size: 'large' }

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  variant: 'secondary',
  children: 'Secondary 😇',
}
