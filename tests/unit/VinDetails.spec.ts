import { shallowMount } from '@vue/test-utils'

import VinDetails from '@/components/VinDetails.vue'

const wrapper = shallowMount(VinDetails, {
  propsData: {
    vinDetails: {
      vin: '',
      name: '',
      make: '',
      manufacturerName: '',
      model: '',
      modelYear: '',
    },
  },
} as any)

describe('Input', () => {
  describe('when rendering', () => {
    it('it renders correctly', () => {
      expect(wrapper.element).toMatchSnapshot()
    })
  })

  describe('on caret click', () => {
    beforeEach(async () => {
      await wrapper.setData({
        vin: {
          infoIsOpen: false,
          year: '2019',
        },
      })
    })

    it('it should open vin details', async () => {
      const caret = wrapper.find('#caret')
      const info = wrapper.find('#info')
      await caret.trigger('click')

      expect(info.classes()).toContain('vin-details__info--open')
    })
  })
})
