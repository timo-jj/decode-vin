import { shallowMount } from '@vue/test-utils'

import Button from '@/components/Button.vue'

const wrapper = shallowMount(Button, {
  emits: ['click'],
  propsData: {
    disabled: false,
  },
} as any)

describe('Button', () => {
  describe('when rendering', () => {
    it('it renders correctly', () => {
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('on click', () => {
    it('should emit click event', async () => {
      await wrapper.trigger('click')

      expect(wrapper.emitted('click')).toBeTruthy()
    })
  })

  describe('when button disabled', () => {
    beforeEach(() => {
      wrapper.setProps({
        disabled: true,
      })
    })

    it('disbaled class should be active', async () => {
      expect(wrapper.classes()).toContain('button--disabled')
    })
  })
})
