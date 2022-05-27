import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Input from '.'

type ComponentType = typeof Input

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
    },
  },
} as ComponentMeta<ComponentType>

// Create a master template for mapping args to render the Input component
const Template: ComponentStory<ComponentType> = args => (
  <Input {...args} style={{ maxWidth: 200 }} />
)

// Reuse that template for creating different stories
export const Standard = Template.bind({})
Standard.args = { placeholder: 'Standard', variant: 'standard' }

export const Filled = Template.bind({})
Filled.args = { placeholder: 'Filled', variant: 'filled' }

export const Outlined = Template.bind({})
Outlined.args = { placeholder: 'Outlined', variant: 'outlined' }
