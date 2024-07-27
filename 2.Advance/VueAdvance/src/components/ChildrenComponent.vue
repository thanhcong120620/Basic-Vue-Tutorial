<template>
  <p>{{ JSON.stringify(props) }}</p>
</template>

<script setup>
const props = defineProps({
  propA: Number,
  propB: [String, Number],
  propC: {
    type: String,
    required: true
  },
  propD1: {
    type: Number,
    default: 100
  },
  propD2: {
    type: Number,
    default: 200
  },
  propE: {
    type: Object
  },
  propF: {
    type: String,
    validator(value) {
      return ['success', 'error', 'warning'].includes(value)
    }
  },
  propG: {
    type: Function
  },
  disable: Boolean
})

props.propG()
</script>
