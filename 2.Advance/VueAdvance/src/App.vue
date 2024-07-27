<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import ButtonCount from './components/ButtonCount.vue'
import ChildrenComponent from './components/ChildrenComponent.vue'
import { provide, ref } from 'vue'
import LocaleComponent from './components/LocaleComponent.vue'
import { useCounter } from './composables/useCounter.js'
import { useMouse } from './composables/userMouse.js'

const message = ref('Nguyễn Thành Công')
const SayHi = () => {
  console.log('Say hi !')
}
const count = ref(0)
const increaseBy = (number1, number2) => {
  count.value = count.value + number1 + number2
}

const currentLocale = ref('Đà Nẵng')
const updateCurrentLocale = () => {
  currentLocale.value = 'Đà Nẵng, Việt Nam'
  console.log(currentLocale)
}
provide('localeFromApp', {
  locale: currentLocale,
  updateLocaleFunction: updateCurrentLocale
})

const changeLocale = () => {
  currentLocale.value = 'Việt Nam'
}

//Bài 53
const { count53, increment53, decrement53 } = useCounter()
const { x, y } = useMouse()
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <!-- Lesson53 -->
      <div>
        <h1>Composable</h1>
        <p>Count: {{ count53 }}</p>
        <button @click="increment53">Increment</button>
        <button @click="decrement53">Decrement</button>

        <p>X: {{ x }}, Y: {{ y }}</p>
      </div>
      <LocaleComponent />
      <HelloWorld :greeting-message="message + '- IVC Group'" :count="count" />

      <!-- <button-count :init="126" /> -->
      <button-count
        @increaseLesson44="count++"
        @increaseByTwoTimesLesson44="count = count * 2"
        @increaseByLesson44="increaseBy"
        ><template #Increase+1><span>Increase +1</span></template
        ><template #IncreaseX2><span>Increase x2</span></template
        ><template #IncreaseBy><span>Increase By</span></template></button-count
      >
      <children-component
        :propA="12"
        propB="0620"
        propC="hello"
        :propD1="300"
        :prop-e="{ message: 'PropE', id: 123 }"
        prop-f="success"
        :prop-g="SayHi"
        :disable="true"
      />
      <button @click="changeLocale">Change locale</button>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
