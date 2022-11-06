import { shallowMount } from '@vue/test-utils'

import Input from '@/components/Input.vue'

const wrapper = shallowMount(Input, {
  emits: ['change'],
  propsData: {
    isVal: false,
  },
} as any)

describe('Input', () => {
  describe('when rendering', () => {
    it('it renders correctly', () => {
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('on input', () => {
    it('should emit input event', async () => {
      const input = wrapper.find('#model')
      await input.trigger('input')

      expect(wrapper.emitted('change')).toBeTruthy()
    })
  })

  describe('when isVal prop is true', () => {
    beforeEach(async () => {
      await wrapper.setProps({ isVal: true })
    })

    it('should display value input and hide model input', async () => {
      const valInput = wrapper.find('#val')
      const modelInput = wrapper.find('#model')

      expect(valInput.exists()).toBe(true)
      expect(modelInput.exists()).toBe(false)
    })
  })
})
