<template>
  <h1>Hello Button count component</h1>
  <!-- <button @click="count++">{{ count }}</button>
  <p>{{ countPlus }}</p> -->

  <!--Lesson 44--------------------------------------------------->
  <!-- Cách 1  Nên dùng vì ngắn -->
  <!-- <button @click="$emit('increaseLesson44')">Increase +1</button>
  <button @click="$emit('increaseByTwoTimesLesson44')">Increase +2</button>
   -->
  <!--Cách 2-->
  <button @click="CallFunctionIncreaseLesson44">
    <slot name="Increase+1">Button content</slot>
  </button>
  <button @click="CallFunctionIncreaseByTwoTimesLesson44">
    <slot name="IncreaseX2">Button content</slot>
  </button>
  <button @click="CallFunctionIncreaseByLesson44">
    <slot name="IncreaseBy">Button content</slot>
  </button>
</template>

<script setup>
// import { computed, ref } from 'vue'
// const props = defineProps({
//   init: Number
// })
// const count = ref(props.init)
// const countPlus = computed(() => props.init + 1)

//Lesson 44-----------------------------------------------------
// Cách 1: Nên dùng vì ngắn
// defineEmits(['increaseLesson44', 'increaseByTwoTimesLesson44']) // Có cũng đc, ko có cũng ko sao

//Cách 2
const emitLesson44 = defineEmits([
  'increaseByLesson44',
  'increaseLesson44',
  'increaseByTwoTimesLesson44'
])
const CallFunctionIncreaseLesson44 = () => {
  emitLesson44('increaseLesson44')
}
const CallFunctionIncreaseByTwoTimesLesson44 = () => {
  emitLesson44('increaseByTwoTimesLesson44')
}
const CallFunctionIncreaseByLesson44 = () => {
  emitLesson44('increaseByLesson44', 5, 10)
}
</script>
