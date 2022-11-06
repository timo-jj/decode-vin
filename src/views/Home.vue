<template>
  <main class="home">
    <Tabs @select-active-tab="setActiveTab($event)" />

    <component :is="activeComponent" class="active-comp" />
  </main>
</template>

<script setup lang="ts">
import { defineAsyncComponent, reactive, computed } from 'vue'

const Tabs = defineAsyncComponent(() => import('@/components/Tabs.vue'))
const SingleVin = defineAsyncComponent(() => import('@/components/SingleVin.vue'))
const BulkVin = defineAsyncComponent(() => import('@/components/BulkVin.vue'))
const ManualEntry = defineAsyncComponent(() => import('@/components/ManualEntry.vue'))

const componentList = [
  {
    id: 0,
    component: SingleVin,
  },
  {
    id: 1,
    component: BulkVin,
  },
  {
    id: 2,
    component: ManualEntry,
  },
]

const activeComponent = computed(() => componentList.find((item) => item.id === data.activeTab)?.component)

const data = reactive({ activeTab: 0 as number })

const setActiveTab = (activeTab: number) => (data.activeTab = activeTab)
</script>

<style scoped>
.home {
  max-width: 1200px;
  background: #ffffff;
  margin: 20px auto;
  border-radius: 4px;
  overflow: hidden;
  height: calc(100vh - 40px);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.active-comp {
  padding: 20px 40px;
}
</style>
