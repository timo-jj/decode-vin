<template>
  <section class="field">
    <label v-if="label">{{ label }}</label>

    <input id="val" v-if="isVal" :value="inputValue" :placeholder="placeholder" type="text" class="field__input" />

    <input id="model" v-else v-model="input.model" :placeholder="placeholder" type="text" @input="onInput" class="field__input" />
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Input',

  props: {
    label: {
      type: String as PropType<string>,
      default: '',
    },
    placeholder: {
      type: String as PropType<string>,
      default: '',
    },
    inputValue: {
      type: String as PropType<string | null>,
      default: null,
    },
    isVal: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },

  emits: ['change'],

  data() {
    return {
      input: {
        model: '' as string,
      },
    }
  },

  methods: {
    onInput(): void {
      this.$emit('change', this.input.model)
    },
  },
})
</script>

<!-- script setup syntax
<script setup lang="ts">
import { defineEmits, defineProps, PropType, reactive } from 'vue'

defineProps({
  label: {
    type: String as PropType<string>,
    default: '',
  },
  placeholder: {
    type: String as PropType<string>,
    default: '',
  },
  inputValue: {
    type: String as PropType<string | null>,
    default: null,
  },
  isVal: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})

const emit = defineEmits<{
  (eventName: 'change', model: string): void
}>()

const input = reactive({
  model: '' as string,
})

const onInput = (): void => {
  emit('change', input.model)
}
</script>
-->

<style lang="scss" scoped>
.field {
  label {
    display: block;
    font-size: 12px;
    color: #a4a4a4;
    font-weight: 700;
  }

  &__input {
    border: 0;
    outline: 0;
    border-bottom: 1px solid #a4a4a4;
    padding: 5px 0 10px;
    font-size: 18px;
    background: transparent;
  }
}
</style>
