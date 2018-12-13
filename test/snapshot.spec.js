import { mount } from '@vue/test-utils'
import App from '../src/App.vue'

describe('App', () => {
  test('是一个 Vue 实例', () => {
    const wrapper = mount(App)
    expect(wrapper).toMatchSnapshot()
  })
})