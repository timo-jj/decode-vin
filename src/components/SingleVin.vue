<template>
  <article class="single-vin">
    <section class="single-vin__head">
      <p>Enter a VIN and we'll use our data partner to search for your vehicle</p>

      <Input @change="getVin($event)" placeholder="Enter VIN" />
    </section>

    <Button @click="findVinDetails" :disabled="!data.vin" />

    <VinDetails :vin-details="vinDetails" />
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useAppStore } from '@/store/app'

import Input from './Input.vue'
import Button from './Button.vue'
import VinDetails from './VinDetails.vue'

import { VINDetails } from '@/@types/api'

const $appStore = useAppStore()

export default defineComponent({
  name: 'SingleVin',

  components: {
    Input,
    Button,
    VinDetails,
  },

  computed: {
    vinDetails(): VINDetails {
      return $appStore.state.vinDetails
    },
  },

  data() {
    return {
      data: {
        vin: '' as string,
      },
    }
  },

  methods: {
    getVin(vin: string): void {
      this.data.vin = vin
      $appStore.setVIN(this.data.vin)
    },

    async findVinDetails(): Promise<void> {
      await $appStore.getVINDetails(this.data.vin)
    },
  },
})
</script>

<!-- script setup syntax
<script setup lang="ts">
import { defineAsyncComponent, reactive, computed } from 'vue'

import { useAppStore } from '@/store/app'

import { VINDetails } from '@/@types/api'

const Input = defineAsyncComponent(() => import('./Input.vue'))
const Button = defineAsyncComponent(() => import('./Button.vue'))
const VinDetails = defineAsyncComponent(() => import('./VinDetails.vue'))

const $appStore = useAppStore()

const vinDetails = computed<VINDetails>(() => $appStore.state.vinDetails)

const data = reactive({
  vin: '' as string,
})

const getVin = (vin: string): void => {
  data.vin = vin
  $appStore.setVIN(data.vin)
}

const findVinDetails = async (): Promise<void> => {
  await $appStore.getVINDetails(data.vin)
}
</script>
-->

<style lang="scss" scoped>
.single-vin {
  p {
    margin: 0 0 20px;
  }

  &__head {
    &:deep(.field) {
      margin-bottom: 40px;

      .field__input {
        width: 50%;
      }
    }
  }

  &:deep(.button) {
    display: block;
    margin-left: auto;
    margin-bottom: 20px;
  }
}
</style>
