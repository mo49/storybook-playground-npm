export default {
  title: 'Button'
}

const Template = (_, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<Button v-bind="$props" />'
})

export const Normal = Template.bind({})
Normal.args = {
  className: 'normal',
  text: 'PUSH',
  disabled: false
}

export const Active = Template.bind({})
Active.args = {
  className: 'active',
  text: 'PUSH',
  disabled: false
}
