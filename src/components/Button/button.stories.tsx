import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from '.'

type ComponentType = typeof Button

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<ComponentType>

// Create a master template for mapping args to render the Button component
const Template: ComponentStory<ComponentType> = args => <Button {...args} />

// Reuse that template for creating different stories
export const Primary = Template.bind({})
Primary.args = { children: 'Primary 😃', size: 'large' }

export const Secondary = Template.bind({})
Secondary.args = { ...Primary.args, primary: false, children: 'Secondary 😇' }
