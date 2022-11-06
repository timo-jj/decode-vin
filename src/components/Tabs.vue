<template>
  <article class="tabs">
    <section class="tabs__controls">
      <button
        v-for="tab in state.tabs"
        :key="tab.id"
        :class="[
          'button',
          {
            'button--active': state.activeTab === tab.id,
          },
        ]"
        @click="setActiveTab(tab.id)"
      >
        {{ tab.title }}
      </button>
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Tabs } from '@/@types/ux'

export default defineComponent({
  name: 'Tabs',

  emits: ['select-active-tab'],

  data() {
    return {
      state: {
        tabs: [
          {
            id: 0,
            title: 'Single Vin',
            flag: 'single-vin',
          },
          {
            id: 1,
            title: 'Bulk Vin',
            flag: 'bulk-vin',
          },
          {
            id: 2,
            title: 'Manual Entry',
            flag: 'manual-entry',
          },
        ] as Tabs[],
        activeTab: 0 as number,
      },
    }
  },

  methods: {
    setActiveTab(tabID: number): void {
      this.state.activeTab = tabID
      this.$emit('select-active-tab', this.state.activeTab)
    },
  },
})
</script>

<!-- script setup syntax
<script setup lang="ts">
import { defineEmits, reactive, defineExpose } from 'vue'

import { Tabs } from '@/@types/ux'

const emit = defineEmits<{
  (eventName: 'select-active-tab', activeTab: number): void
}>()

const state = reactive({
  tabs: [
    {
      id: 0,
      title: 'Single Vin',
      flag: 'single-vin',
    },
    {
      id: 1,
      title: 'Bulk Vin',
      flag: 'bulk-vin',
    },
    {
      id: 2,
      title: 'Manual Entry',
      flag: 'manual-entry',
    },
  ] as Tabs[],
  activeTab: 0 as number,
})

const setActiveTab = (tabID: number): void => {
  state.activeTab = tabID
  emit('select-active-tab', state.activeTab)
}
</script>
-->

<style lang="scss" scoped>
.tabs {
  &__controls {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 80px;
    background: #ffffff;
    border-bottom: 1px solid #a3a3a3;

    .button {
      border: 0;
      outline: 0;
      text-transform: uppercase;
      background: #ffffff;
      transition: all 0.2s ease-in-out;
      font-size: 16px;
      color: #a3a3a3;
      height: 100%;
      padding: 0;

      &--active {
        box-shadow: inset 0px -10px 0px -3px #1876d2;
        color: #1876d2;
      }
    }
  }
}
</style>
