import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Text } from './Text'

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    text: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const HelloText = Template.bind({})
HelloText.args = {
  text: 'hello!',
}
