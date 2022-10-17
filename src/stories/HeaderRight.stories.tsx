import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { HeaderRight } from './uikit/HeaderRight'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/HeaderRight',
  component: HeaderRight,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    themeMode: { control: true },
  },
} as ComponentMeta<typeof HeaderRight>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeaderRight> = (args) => (
  <HeaderRight {...args} />
)

export const LightMode = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LightMode.args = {
  themeMode: true,
}

export const DarkMode = Template.bind({})
DarkMode.args = {
  themeMode: false,
}
