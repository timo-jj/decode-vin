import { shallowMount } from '@vue/test-utils'

import Tabs from '@/components/Tabs.vue'

const wrapper = shallowMount(Tabs, {
  emits: ['select-active-tab'],
} as any)

describe('Tabs', () => {
  describe('when rendering', () => {
    it('it renders correctly', () => {
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('on tab click', () => {
    it('should emit the event', async () => {
      await wrapper.find('button').trigger('click')

      expect(wrapper.emitted('select-active-tab')).toBeTruthy()
    })
  })
})
