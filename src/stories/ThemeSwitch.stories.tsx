import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeSwitch } from './uikit/ThemeSwitch'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/LightDarkMode',
  component: ThemeSwitch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    activeValue: { control: true },
  },
} as ComponentMeta<typeof ThemeSwitch>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThemeSwitch> = (args) => (
  <ThemeSwitch {...args} />
)

export const LightMode = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LightMode.args = {
  activeValue: true,
}

export const DarkMode = Template.bind({})
DarkMode.args = {
  activeValue: false,
}
