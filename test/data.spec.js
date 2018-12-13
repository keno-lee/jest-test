import { shallowMount } from '@vue/test-utils'
import data from '../src/components/data.vue'

describe('data', () => {
  test('是一个 data 组件', () => {
    const wrapper = shallowMount(data)
    expect(wrapper).toMatchSnapshot()
  })
})