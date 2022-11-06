<template>
  <article class="vin-details">
    <h3>Active vehicules<span v-if="vinCheck">:&nbsp;1</span></h3>

    <section
      id="info"
      :class="[
        'vin-details__info',
        {
          'vin-details__info--open': vin.infoIsOpen && vinCheck,
        },
      ]"
    >
      <div class="vin-details__head">
        <span class="vin">1.&nbsp;{{ vinCheck ? vin.number : '1' }}</span>

        <div class="vin-details__controls">
          <button>Delete</button>
          <span
            id="caret"
            :class="[
              'caret',
              {
                'caret--open': vin.infoIsOpen && vinCheck,
              },
            ]"
            @click="setInfoState"
            >&#10095;</span
          >
        </div>
      </div>

      <div class="vin-details__content">
        <div class="vin-details__fields">
          <Input id="number" is-val label="VIN#" placeholder="Enter VIN" v-model:inputValue="vin.number" />
          <Input is-val label="Year" placeholder="VIN year" v-model:inputValue="vin.year" />
          <Input is-val label="Make" placeholder="VIN maker" v-model:inputValue="vin.make" />
          <Input is-val label="Model" placeholder="VIN model" v-model:inputValue="vin.model" />
        </div>

        <div class="vin-details__btns">
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import Input from './Input.vue'

import { VINDetails } from '@/@types/api'
import { Vin } from '@/@types/ux'

export default defineComponent({
  name: 'VinDetails',

  components: {
    Input,
  },

  props: {
    vinDetails: {
      type: Object as PropType<VINDetails>,
      default: null,
    },
  },

  computed: {
    vinCheck(): boolean {
      return this.vin.year !== '' && this.vin.year !== 'no info'
    },
  },

  data() {
    return {
      vin: {
        number: '' as string,
        year: '' as string,
        make: '' as string,
        model: '' as string,
        infoIsOpen: false as boolean,
      } as Vin,
    }
  },

  watch: {
    vinDetails: {
      handler(val) {
        this.vin.number = val.vin
        this.vin.year = val.modelYear
        this.vin.make = val.make
        this.vin.model = val.model

        if (this.vinCheck) {
          this.vin.infoIsOpen = true
        }
      },
      deep: true,
    },
  },

  methods: {
    setInfoState(): void {
      this.vin.infoIsOpen = !this.vin.infoIsOpen
    },
  },
})
</script>

<!-- script setup syntax
<script setup lang="ts">
import { defineAsyncComponent, defineProps, PropType, watch, reactive, computed } from 'vue'

import { VINDetails } from '@/@types/api'

const Input = defineAsyncComponent(() => import('./Input.vue'))

const props = defineProps({
  vinDetails: {
    type: Object as PropType<VINDetails>,
    default: null,
  },
})

const vinCheck = computed<boolean>(() => vin.year !== 'no info')

const vin = reactive({
  number: '' as string,
  year: '' as string,
  make: '' as string,
  model: '' as string,
  infoIsOpen: false as boolean,
})

const setInfoState = (): void => {
  vin.infoIsOpen = !vin.infoIsOpen
}

watch(
  () => props.vinDetails,
  () => {
    vin.number = props.vinDetails.vin
    vin.year = props.vinDetails.modelYear
    vin.make = props.vinDetails.make
    vin.model = props.vinDetails.model

    if (vinCheck.value) {
      vin.infoIsOpen = true
    }
  },
  {
    deep: true,
  }
)
</script>
-->

<style lang="scss" scoped>
.vin-details {
  h3 {
    font-size: 20px;
    color: #c68881;
    text-transform: uppercase;
  }

  &__info {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 4px;
    overflow: hidden;
    height: 80px;
    transition: 0.2s ease-in-out;

    &--open {
      height: 338px;
    }
  }

  &__head {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    border-bottom: 1px solid #a3a3a3;
  }

  &__content {
    padding: 20px 30px 40px 30px;
    background: #f3f7fb;
  }

  &__fields {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    &:deep(.field) {
      input {
        width: 100%;
      }
    }
  }

  .vin {
    font-size: 18px;
  }

  &__controls {
    display: flex;
    align-items: center;

    button {
      border: 0;
      outline: 0;
      background: transparent;
      font-size: 16px;
      color: #1876d2;
      font-weight: 700;
      text-transform: uppercase;
      margin-right: 30px;
      cursor: pointer;
    }

    .caret {
      display: inline-block;
      color: #1876d2;
      transform: rotateZ(90deg);
      cursor: pointer;
      transition: 0.2s ease-in-out;

      &--open {
        transform: rotateZ(-90deg);
      }
    }
  }

  &__btns {
    margin-top: 40px;
    display: flex;
    justify-content: right;

    button {
      display: block;
      border: 0;
      outline: 0;
      background: transparent;
      font-size: 16px;
      color: #1876d2;
      font-weight: 700;
      text-transform: uppercase;
      cursor: pointer;

      &:first-child {
        margin-right: 40px;
        color: #a4a8ba;
      }
    }
  }
}
</style>
