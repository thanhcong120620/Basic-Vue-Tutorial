<script setup>
import { defineAsyncComponent, inject, ref, watchEffect } from 'vue'
import LocaleComponent from './LocaleComponent.vue'
import LoadingComponent from './LoadingComponent.vue'
import ErrorComponent from './ErrorComponent.vue'

// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })
const props = defineProps({
  greetingMessage: [String, Number],
  count: Number
})
// console.log('Lesson 41: ' + props.greetingMessage)
console.log('Lesson 41: ' + props)

const email = ref('')
const userName = ref('')

watchEffect(() => {
  console.log(email.value)
})

const setEmailDefaultFromParent = () => {
  email.value = 'Email Change by Parent'
}
const setUserNameDefaultFromParent = () => {
  userName.value = 'Use Name is changed by Parent'
}

const messageHelloWorld = inject('messageHelloFromJsApp')

//Bài 52
const ComponentVModel = defineAsyncComponent({
  loader: () => import('./ComponentVModel.vue'),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ greetingMessage }}</h1>
    <h3>
      <p>{{ messageHelloWorld }}</p>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
  <div class="greetings">
    <h1 class="black">{{ count }}</h1>
    <LocaleComponent />
  </div>

  <div class="greetings">
    <ComponentA />

    <!-- Bài 47 -->
    <ComponentVModel v-model:vEmail="email" v-model:VUserName.capitalize="userName" />
    <button @click="setEmailDefaultFromParent">Change Email From Parent</button>
    <button @click="setUserNameDefaultFromParent">Change User Name From Parent</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
