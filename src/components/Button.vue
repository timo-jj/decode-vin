<template>
  <button
    type="button"
    :class="[
      'button',
      {
        'button--disabled': disabled,
      },
    ]"
    :disabled="disabled"
    @click="onClick"
  >
    Lookup Vehicle
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Button',

  props: {
    disabled: {
      type: Boolean as PropType<boolean>,
      deafult: false,
    },
  },

  emits: ['click'],

  methods: {
    onClick(): void {
      this.$emit('click')
    },
  },
})
</script>

<!-- script setup syntax
<script setup lang="ts">
import { defineEmits, defineProps, PropType } from 'vue'

defineProps({
  disabled: {
    type: Boolean as PropType<boolean>,
    deafult: false,
  },
})

const emit = defineEmits<{
  (eventName: 'click'): void
}>()

const onClick = (): void => {
  emit('click')
}
</script>
-->

<style lang="scss" scoped>
.button {
  border: 0;
  outline: 0;
  padding: 8px 24px;
  background: #1876d2;
  border-radius: 4px;
  color: #ffffff;
  text-transform: uppercase;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &--disabled {
    background: lightgray;
  }
}
</style>
